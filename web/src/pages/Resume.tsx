import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { resumeData } from '../data/resume';
import { projects } from '../data/projects';
import { mainProjects } from '../data/mainProjects';
import type { Project, MainProject } from '../data/types';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import styles from './Resume.module.css';
import { Mail, Phone, Send, X, ExternalLink, RefreshCw, AlertCircle, GraduationCap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import MediaGallery from '../components/MediaGallery';
import { getAssetPath } from '../utils/assetPath';
import { siteConfig } from '../data/siteConfig';
import { getRoleCategory } from '../utils/projectUtils';
import { getLocalizedValue } from '../utils/i18n';
import CertModal from '../components/CertModal';
import ResumeErrorBoundary from '../components/ResumeErrorBoundary';
import { fadeInUp } from '../utils/variants';

// 安全数据访问函数
const safeGetLocalizedValue = <T,>(localizedObj: any, currentLang: string, defaultValue: T): T => {
    if (!localizedObj) return defaultValue;
    try {
        const result = getLocalizedValue(localizedObj, currentLang);
        return (result !== undefined && result !== null) ? (result as unknown as T) : defaultValue;
    } catch (error) {
        console.warn('Error getting localized value:', error);
        return defaultValue;
    }
};

const safeArrayAccess = <T,>(arr: T[] | undefined, index: number, defaultValue: T): T => {
    if (!Array.isArray(arr) || index < 0 || index >= arr.length) {
        return defaultValue;
    }
    return arr[index];
};

const safeFind = <T,>(arr: T[] | undefined, predicate: (item: T) => boolean, defaultValue: T | null = null): T | null => {
    if (!Array.isArray(arr)) return defaultValue;
    const result = arr.find(predicate);
    return result !== undefined ? result : defaultValue;
};

const ResumeContent: React.FC = () => {
    const { language, t } = useLanguage();
    const [filter, setFilter] = useState<'All' | 'Commercial' | 'Personal' | 'Consultant'>('All');
    const [activeGroup, setActiveGroup] = useState<{ main: MainProject, subProjects: Project[] } | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeCert, setActiveCert] = useState<{ url: string, title: string } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);

    // 数据验证
    const validateData = () => {
        if (!resumeData) throw new Error('Resume data is missing');
        if (!projects) throw new Error('Projects data is missing');
        if (!mainProjects) throw new Error('Main projects data is missing');
        if (!siteConfig) throw new Error('Site config is missing');
        return true;
    };

    // 数据验证检查
    useEffect(() => {
        try {
            validateData();
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to validate resume data');
        }
    }, [retryCount]);

    const handleRetry = () => {
        setRetryCount(prev => prev + 1);
    };

    const filteredProjects = useMemo(() => {
        if (!projects || !Array.isArray(projects)) return [];
        return projects.filter(project => {
            if (!project) return false;
            if (filter === 'All') return true;
            if (filter === 'Consultant') {
                return project.role && Array.isArray(project.role) &&
                    project.role.some(r => r && r.toLowerCase().includes('consultant'));
            }
            return project.type === filter;
        });
    }, [filter]);

    const getMostFrequentRole = (subProjects: Project[]) => {
        if (!Array.isArray(subProjects) || subProjects.length === 0) return [];
        const counts = new Map<string, number>();
        subProjects.forEach(p => {
            if (p && p.role && Array.isArray(p.role)) {
                p.role.forEach(r => {
                    if (r) counts.set(r, (counts.get(r) || 0) + 1);
                });
            }
        });
        let maxCount = 0;
        let bestRole = '';
        counts.forEach((count, role) => {
            if (count > maxCount) {
                maxCount = count;
                bestRole = role;
            }
        });
        return bestRole ? [bestRole] : [];
    };

    const getRoleClass = (role: string) => {
        if (!role) return '';
        const category = getRoleCategory(role);
        switch (category) {
            case 'Design': return styles.roleTagDesigner;
            case 'Program': return styles.roleTagProgrammer;
            case 'Creator': return styles.roleTagCreator;
            default: return '';
        }
    };

    const timelineItems = useMemo(() => {
        const groups = new Map<string, Project[]>();
        const standalone: Project[] = [];
        filteredProjects.forEach(p => {
            if (!p) return;
            if (p.mainProjectId) {
                if (!groups.has(p.mainProjectId)) groups.set(p.mainProjectId, []);
                groups.get(p.mainProjectId)!.push(p);
            } else {
                standalone.push(p);
            }
        });

        const items: any[] = [...standalone];
        groups.forEach((groupProjects, mainId) => {
            const main = safeFind(mainProjects, m => m && m.id === mainId);
            if (main) {
                const startDates = groupProjects.map(p => p?.startDate).filter(Boolean).sort() as string[];
                const endDates = groupProjects.map(p => p?.endDate).filter(Boolean).sort((a, b) => {
                    if (a === 'Present') return 1;
                    if (b === 'Present') return -1;
                    return a!.localeCompare(b!);
                }) as string[];
                items.push({
                    mainProject: main,
                    projects: groupProjects,
                    startDate: safeArrayAccess(startDates, 0, ''),
                    endDate: safeArrayAccess(endDates, endDates.length - 1, '')
                });
            } else {
                items.push(...groupProjects);
            }
        });

        return items.sort((a, b) => {
            // Priority 1: "Present" (ongoing) projects go to the top
            const isPresentA = (a.endDate === 'Present');
            const isPresentB = (b.endDate === 'Present');

            if (isPresentA && !isPresentB) return -1;
            if (!isPresentA && isPresentB) return 1;

            // Priority 2: Sort by startDate (newest first)
            const d1 = a.startDate || '';
            const d2 = b.startDate || '';

            if (!d1 && !d2) return 0;
            if (!d1) return 1;
            if (!d2) return -1;

            return d2.localeCompare(d1);
        });
    }, [filteredProjects, mainProjects]);

    const renderDetailPoint = (point: string) => {
        if (!point) return null;
        const match = point.match(/^(.*?)[：:](.*)$/);
        if (match) {
            return (
                <div className={styles.pointContent}>
                    <span className={styles.detailBadge}>{match[1].trim()}</span>
                    <span className={styles.detailText}>{match[2].trim()}</span>
                </div>
            );
        }
        return <div className={styles.pointContent}>{point}</div>;
    };

    const renderProjectRow = (item: any) => {
        const isGroup = 'mainProject' in item;
        const project = isGroup ? item.mainProject : item;
        const startDate = isGroup ? item.startDate : item.startDate;
        const endDate = isGroup ? item.endDate : item.endDate;
        const roles = isGroup ? getMostFrequentRole(item.projects) : item.role;

        const content = (
            <div className={styles.projectRowContent}>
                <div className={styles.projectMainInfo}>
                    <span className={styles.projectDate}>
                        {startDate} {endDate && endDate !== startDate ? `- ${endDate === 'Present' ? t('Present') : endDate}` : ''}
                    </span>
                    <span className={styles.projectTitleTimeline}>
                        {isGroup ? safeGetLocalizedValue(project.titles, language, '') : (safeGetLocalizedValue(project.timelineTitles, language, '') || safeGetLocalizedValue(project.titles, language, ''))}
                    </span>
                    <div className={styles.projectTypeBadges}>
                        {isGroup && <span className={styles.collectionBadge}>{t('Collection')}</span>}
                        <span className={styles.projectTypeTimeline}>{t(isGroup ? 'Commercial' : (project.type || 'Commercial'))}</span>
                    </div>
                </div>
                <div className={styles.projectRolesTimeline}>
                    {Array.isArray(roles) && roles.map((role: string) => <span key={role} className={`${styles.roleTagTimeline} ${getRoleClass(role)}`}>{role}</span>)}
                </div>
            </div>
        );

        return isGroup ? (
            <div key={project.id} className={`${styles.projectRow} ${styles.groupRow}`} onClick={() => setActiveGroup({ main: project, subProjects: item.projects })}>
                {content}
            </div>
        ) : (
            <Link key={project.id} to={`/project/${project.id}`} className={styles.projectRow}>
                {content}
            </Link>
        );
    };

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.errorContent}>
                    <AlertCircle size={48} className={styles.errorIcon} />
                    <h2>{t('Resume Load Failed')}</h2>
                    <p>{error}</p>
                    <button onClick={handleRetry} className={styles.retryButton}><RefreshCw size={16} /> {t('Retry')}</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.resumeContentWrapper}>
            <motion.header className={styles.header} variants={fadeInUp} initial="hidden" animate="visible">
                <h1 className={styles.name}>{safeGetLocalizedValue(siteConfig.pages.resume.titles, language, '')}</h1>
                <p className={styles.subtitle}>{safeGetLocalizedValue(siteConfig.pages.resume.subtitles, language, '')}</p>
                <p className={styles.about}>{safeGetLocalizedValue(resumeData.about, language, '')}</p>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}><Mail size={16} /><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
                    {resumeData.header.phone && <div className={styles.contactItem}><Phone size={16} />{resumeData.header.phone}</div>}
                </div>
            </motion.header>

            <div className={styles.mainGrid}>
                <div className={styles.primaryColumn}>
                    {/* Experience Section */}
                    <motion.section
                        className={styles.section}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className={styles.sectionTitle}>{t('Experience')}</h2>
                        <div className={styles.timeline}>
                            {resumeData.experience.map((job, i) => (
                                <div key={i} className={styles.timelineItem}>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.jobHeader}>
                                        <div className={styles.roleHeader}>
                                            <h3 className={styles.jobRole}>{safeGetLocalizedValue(job.roles, language, '')}</h3>
                                            <span className={styles.period}>{job.period}</span>
                                        </div>
                                        <div className={styles.companyRow}>
                                            <span className={styles.company}>{safeGetLocalizedValue(job.companies, language, '')}</span>
                                            <span className={styles.companySize}>{safeGetLocalizedValue(job.sizes, language, '')}</span>
                                        </div>
                                    </div>
                                    <ul className={styles.details}>
                                        {(safeGetLocalizedValue(job.details, language, []) as string[]).map((p, j) => <li key={j}>{renderDetailPoint(p)}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                <div className={styles.secondaryColumn}>
                    {/* Skills Section */}
                    <motion.section
                        className={styles.section}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className={styles.sectionTitle}>{t('Skills')}</h2>
                        <div className={styles.skillsList}>
                            {resumeData.skills.map((cat, i) => (
                                <div key={i} className={styles.skillCategory}>
                                    <h3 className={styles.categoryTitle}>{safeGetLocalizedValue(cat.categories, language, '')}</h3>
                                    <div className={styles.skillList}>
                                        {cat.items.map(item => <span key={item.name} className={`${styles.skillItem} ${item.highlight ? styles.highlightSkill : ''}`}>{item.name}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Education Section */}
                    <motion.section
                        className={styles.section}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className={styles.sectionTitle}>
                            <GraduationCap size={20} style={{ marginRight: '10px' }} />
                            {t('Education')}
                        </h2>
                        <div className={styles.educationList}>
                            {resumeData.education.map((edu, i) => (
                                <div key={i} className={styles.educationItem}>
                                    <div className={styles.eduHeader}>
                                        <h3 className={styles.schoolName}>{safeGetLocalizedValue(edu.schools, language, '')}</h3>
                                        <span className={styles.period}>{edu.period}</span>
                                    </div>
                                    <p className={styles.degree}>{safeGetLocalizedValue(edu.degrees, language, '')}</p>
                                    <div className={styles.eduMeta}>
                                        {edu.gpa && <span className={styles.gpa}>GPA: {edu.gpa}</span>}
                                    </div>
                                    {edu.awards && edu.awards.length > 0 && (
                                        <div className={styles.awards}>
                                            {edu.awards.map((award, j) => (
                                                <span key={j} className={styles.awardItem}>{award}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>

            {resumeData.cta && (
                <motion.div className={styles.actions} style={{ marginBottom: '4rem' }} variants={fadeInUp} initial="hidden" animate="visible">
                    <Link className={styles.pdfButton} to={resumeData.cta.link}>
                        <Send size={18} />
                        {safeGetLocalizedValue(resumeData.cta.texts, language, '')}
                    </Link>
                </motion.div>
            )}

            <motion.section className={styles.section} variants={fadeInUp} initial="hidden" animate="visible">
                <div className={styles.timelineHeader}>
                    <h2 className={styles.sectionTitle}>{t('Project Timeline')}</h2>
                    <div className={styles.filterGroup}>
                        {['All', 'Commercial', 'Personal', 'Consultant'].map(f => (
                            <button key={f} className={`${styles.filterButton} ${filter === f ? styles.activeFilter : ''}`} onClick={() => setFilter(f as any)}>{t(f)}</button>
                        ))}
                    </div>
                </div>
                <div className={styles.projectTimeline}>
                    {timelineItems.map((item, idx) => (
                        <div key={idx}>
                            {renderProjectRow(item)}
                        </div>
                    ))}
                </div>
            </motion.section>

            <AnimatePresence>
                {activeGroup && (
                    <div className={styles.modalOverlay} onClick={() => setActiveGroup(null)}>
                        <motion.div className={styles.modalContent} onClick={e => e.stopPropagation()} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                            <header className={styles.modalHeader}>
                                <div className={styles.modalTitleArea}>
                                    <h3>{safeGetLocalizedValue(activeGroup.main.titles, language, '')}</h3>
                                    <p className={styles.modalSubtitle}>{safeGetLocalizedValue(activeGroup.main.descriptions, language, '')}</p>
                                </div>
                                <button onClick={() => setActiveGroup(null)} className={styles.closeButton}><X size={20} /></button>
                            </header>
                            <div className={styles.projectGrid}>
                                {activeGroup.subProjects.map(p => (
                                    <div key={p.id} className={styles.modalProjectCard} onClick={() => setSelectedProject(p)}>
                                        <div className={styles.modalThumbnailWrapper}><img src={getAssetPath(p.thumbnail)} alt="" /></div>
                                        <div className={styles.modalProjectInfo}>
                                            <h4>{safeGetLocalizedValue(p.titles, language, '')}</h4>
                                            <p>{safeGetLocalizedValue(p.shortDescriptions, language, '')}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}

                {selectedProject && (
                    <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                        <motion.div className={`${styles.modalContent} ${styles.detailModal}`} onClick={e => e.stopPropagation()} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                            <header className={styles.modalHeader}>
                                <h3>{safeGetLocalizedValue(selectedProject.titles, language, '')}</h3>
                                <div className={styles.modalActions}>
                                    <Link to={`/project/${selectedProject.id}`} className={styles.externalLink} onClick={() => { setSelectedProject(null); setActiveGroup(null); }}><ExternalLink size={18} /></Link>
                                    <button onClick={() => setSelectedProject(null)} className={styles.closeButton}><X size={20} /></button>
                                </div>
                            </header>
                            <div className={styles.detailScrollArea}>
                                <MediaGallery images={selectedProject.images} video={selectedProject.video} />
                                <div className={styles.detailMarkdown}><ReactMarkdown rehypePlugins={[rehypeRaw]}>{safeGetLocalizedValue(selectedProject.descriptions, language, '')}</ReactMarkdown></div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            {activeCert && <CertModal url={activeCert.url} title={activeCert.title} onClose={() => setActiveCert(null)} />}
        </div>
    );
};

const Resume: React.FC = () => {
    return (
        <ResumeErrorBoundary>
            <PageTransition className={styles.container}>
                <ResumeContent />
            </PageTransition>
        </ResumeErrorBoundary>
    );
};

export default Resume;

import React, { useState, useMemo } from 'react';
import { resumeData } from '../data/resume';
import { projects } from '../data/projects';
import { mainProjects } from '../data/mainProjects';
import type { Project, MainProject } from '../data/types';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import styles from './Resume.module.css';
import { Mail, Phone, Github, Linkedin, Send, X, ExternalLink, Award, FileCheck, Link as LinkIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import MediaGallery from '../components/MediaGallery';
import { getAssetPath } from '../utils/assetPath';
import { siteConfig } from '../data/siteConfig';
import { getRoleCategory } from '../utils/projectUtils';
import { getLocalizedValue } from '../utils/i18n';
import CertModal from '../components/CertModal';

const Resume: React.FC = () => {
    const { language, t } = useLanguage();
    const [filter, setFilter] = useState<'All' | 'Commercial' | 'Personal' | 'Consultant'>('All');
    const [activeGroup, setActiveGroup] = useState<{ main: MainProject, subProjects: Project[] } | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeCert, setActiveCert] = useState<{ url: string, title: string } | null>(null);

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            if (filter === 'All') return true;
            if (filter === 'Consultant') return project.role.some(r => r.toLowerCase().includes('consultant'));
            return project.type === filter;
        });
    }, [filter]);

    const getMostFrequentRole = (subProjects: Project[]) => {
        const counts = new Map<string, number>();
        subProjects.forEach(p => {
            p.role.forEach(r => {
                counts.set(r, (counts.get(r) || 0) + 1);
            });
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
        const category = getRoleCategory(role);
        switch (category) {
            case 'Design': return styles.roleTagDesigner;
            case 'Program': return styles.roleTagProgrammer;
            case 'Creator': return styles.roleTagCreator;
            default: return '';
        }
    };

    // Grouping Logic
    const timelineItems = useMemo(() => {
        const groups = new Map<string, Project[]>();
        const standalone: Project[] = [];

        filteredProjects.forEach(p => {
            if (p.mainProjectId) {
                if (!groups.has(p.mainProjectId)) groups.set(p.mainProjectId, []);
                groups.get(p.mainProjectId)!.push(p);
            } else {
                standalone.push(p);
            }
        });

        const items: (Project | { mainProject: MainProject, projects: Project[], startDate: string, endDate: string })[] = [...standalone];

        groups.forEach((groupProjects, mainId) => {
            const main = mainProjects.find(m => m.id === mainId);
            if (main) {
                // Find date range
                const startDates = groupProjects.map(p => p.startDate).filter(Boolean).sort();
                const endDates = groupProjects.map(p => p.endDate).filter(Boolean).sort((a, b) => {
                    if (a === 'Present') return 1;
                    if (b === 'Present') return -1;
                    return a!.localeCompare(b!);
                });

                items.push({
                    mainProject: main,
                    projects: groupProjects,
                    startDate: startDates[0] || '',
                    endDate: endDates[endDates.length - 1] || ''
                });
            } else {
                items.push(...groupProjects);
            }
        });

        // Sorting Logic
        return items.sort((a, b) => {
            const getDates = (item: any) => {
                const isSingle = 'id' in item;
                const start = isSingle ? item.startDate : item.startDate;
                const end = isSingle ? item.endDate : item.endDate;
                return { start: start || '', end: end || '' };
            };

            const datesA = getDates(a);
            const datesB = getDates(b);

            // Unknown dates at the bottom
            if (!datesA.start && datesB.start) return 1;
            if (datesA.start && !datesB.start) return -1;
            if (!datesA.start && !datesB.start) return 0;

            const isAOngoing = datesA.end === 'Present' || datesA.end === '';
            const isBOngoing = datesB.end === 'Present' || datesB.end === '';

            if (isAOngoing && !isBOngoing) return -1;
            if (!isAOngoing && isBOngoing) return 1;

            if (isAOngoing && isBOngoing) {
                return datesA.start.localeCompare(datesB.start);
            }

            if (datesA.end !== datesB.end) return datesB.end.localeCompare(datesA.end);
            return datesB.start.localeCompare(datesA.start);
        });
    }, [filteredProjects]);

    const renderDetailPoint = (point: string) => {
        // Find the first colon (either Chinese ： or English :)
        const match = point.match(/^(.*?)[：:](.*)$/);
        if (match) {
            const badge = match[1].trim();
            const content = match[2].trim();
            return (
                <div className={styles.pointContent}>
                    <span className={styles.detailBadge}>{badge}</span>
                    <span className={styles.detailText}>{content}</span>
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
                        {startDate ? (
                            `${startDate} ${endDate && endDate !== startDate ? `- ${endDate === 'Present' ? (language === 'CN' ? '至今' : 'Present') : endDate}` : ''}`
                        ) : (
                            language === 'CN' ? '时间未知' : 'Date Unknown'
                        )}
                    </span>
                    <span className={styles.projectTitleTimeline}>
                        {isGroup
                            ? getLocalizedValue(project.titles, language)
                            : (getLocalizedValue(project.timelineTitles, language) || getLocalizedValue(project.titles, language))
                        }
                    </span>
                    <div className={styles.projectTypeBadges}>
                        {isGroup && (
                            <span className={styles.collectionBadge}>
                                {language === 'CN' ? '合集' : (language === 'JA' ? 'コレクション' : 'Collection')}
                            </span>
                        )}
                        {project.gameType ? (
                            Array.isArray(project.gameType)
                                ? project.gameType.map((gt: string) => (
                                    <span key={gt} className={styles.projectTypeTimeline}>{t(gt)}</span>
                                ))
                                : <span className={styles.projectTypeTimeline}>{t(project.gameType)}</span>
                        ) : (
                            <span className={styles.projectTypeTimeline}>
                                {(isGroup ? 'Commercial' : project.type) === 'Commercial' ? (getLocalizedValue({ CN: '商业', EN: 'Commercial', JA: '商業' }, language)) : (getLocalizedValue({ CN: '个人', EN: 'Personal', JA: '個人' }, language))}
                            </span>
                        )}
                    </div>
                </div>
                <div className={styles.projectRolesTimeline}>
                    {roles.map((role: string) => (
                        <span key={role} className={`${styles.roleTagTimeline} ${getRoleClass(role)}`}>{role}</span>
                    ))}
                </div>
            </div>
        );

        if (isGroup) {
            return (
                <div
                    key={project.id}
                    className={`${styles.projectRow} ${styles.groupRow}`}
                    onClick={() => setActiveGroup({ main: project, subProjects: item.projects })}
                >
                    {content}
                </div>
            );
        }

        return (
            <Link key={project.id} to={`/project/${project.id}`} className={styles.projectRow}>
                {content}
            </Link>
        );
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.name}>
                    {getLocalizedValue(siteConfig.pages.resume.titles, language)}
                </h1>
                <p className={styles.subtitle}>
                    {getLocalizedValue(siteConfig.pages.resume.subtitles, language)}
                </p>

                {/* About Me Section in Header */}
                <p className={styles.about}>
                    {getLocalizedValue(resumeData.about, language)}
                </p>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <Mail size={16} />
                        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                    </div>
                    {resumeData.header.phone && (
                        <div className={styles.contactItem}>
                            <Phone size={16} />
                            <a href={`tel:${resumeData.header.phone.replace(/\s+/g, '')}`}>{resumeData.header.phone}</a>
                        </div>
                    )}
                    <div className={styles.contactItem}>
                        <Github size={16} />
                        <a href={getLocalizedValue(resumeData.header.links.find(l => l.labels.EN === 'GitHub')?.urls, language)} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className={styles.contactItem}>
                        <Linkedin size={16} />
                        <a href={getLocalizedValue(resumeData.header.links.find(l => l.labels.EN === 'LinkedIn')?.urls, language)} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </header>

            <div className={styles.mainGrid}>
                <div className={styles.primaryColumn}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('Experience')}</h2>
                        <div className={styles.timeline}>
                            {resumeData.experience.map((job, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.jobHeader}>
                                        <div className={styles.roleHeader}>
                                            <h3 className={styles.jobRole}>
                                                {getLocalizedValue(job.roles, language)}
                                            </h3>
                                            <span className={styles.period}>{job.period}</span>
                                        </div>
                                        <div className={styles.companyRow}>
                                            <span className={styles.company}>
                                                {getLocalizedValue(job.companies, language)}
                                            </span>
                                            <span className={styles.companySize}>
                                                {getLocalizedValue(job.sizes, language)}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className={styles.details}>
                                        {(getLocalizedValue(job.details, language) || []).map((point, idx) => (
                                            <li key={idx}>
                                                {renderDetailPoint(point)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className={styles.secondaryColumn}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('Skills')}</h2>
                        <div className={styles.skillsList}>
                            {resumeData.skills.map((category, index) => (
                                <div key={index} className={styles.skillCategory}>
                                    <h3 className={styles.categoryTitle}>
                                        {getLocalizedValue(category.categories, language)}
                                    </h3>
                                    <div className={styles.skillList}>
                                        {category.items.map(item => (
                                            <span
                                                key={item.name}
                                                className={`${styles.skillItem} ${item.highlight ? styles.highlightSkill : ''}`}
                                            >
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('Education')}</h2>
                        <div className={styles.educationList}>
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className={styles.educationItem}>
                                    <h3 className={styles.schoolName}>
                                        {getLocalizedValue(edu.schools, language)}
                                    </h3>
                                    <p className={styles.degree}>
                                        {getLocalizedValue(edu.degrees, language)}
                                    </p>
                                    <div className={styles.eduMeta}>
                                        <span className={styles.period}>{edu.period}</span>
                                        {edu.gpa && <span className={styles.gpa}>GPA: {edu.gpa}</span>}
                                    </div>
                                    {edu.awards && edu.awards.length > 0 && (
                                        <div className={styles.awards}>
                                            {edu.awards.map((award, idx) => (
                                                <div key={idx} className={styles.awardItem}>🏆 {award}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div className={styles.actions} style={{ marginBottom: '4rem' }}>
                <Link
                    className={styles.pdfButton}
                    to={resumeData.cta?.link || "/contact"}
                >
                    <Send size={18} />
                    {getLocalizedValue(resumeData.cta?.texts, language)}
                </Link>
            </div>

            {resumeData.certifications && resumeData.certifications.length > 0 && (
                <section className={styles.section} style={{ marginTop: '2rem' }}>
                    <h2 className={styles.sectionTitle}>{t('Certifications')}</h2>
                    <div className={styles.certificationsListRow}>
                        {resumeData.certifications.map((cert) => (
                            <div key={cert.id} className={`${styles.certRowItem} ${cert.highlight ? styles.certRowHighlighted : ''}`}>
                                <div className={styles.certLeft}>
                                    {cert.icon ? (
                                        (cert.icon.startsWith('http') || cert.icon.startsWith('/') || cert.icon.includes('.')) ? (
                                            <img src={getAssetPath(cert.icon)} className={styles.certIconImg} alt="" />
                                        ) : (
                                            <span className={styles.certIconEmoji}>{cert.icon}</span>
                                        )
                                    ) : (
                                        <Award className={styles.certIconDefault} size={20} />
                                    )}
                                    {cert.abbreviation && (
                                        <span className={styles.certAbbrTag}>{cert.abbreviation}</span>
                                    )}
                                    <span className={styles.certFullTitle}>
                                        {getLocalizedValue(cert.titles, language)}
                                    </span>
                                </div>
                                <div className={styles.certRight}>
                                    {cert.pdfUrl && (
                                        <button
                                            onClick={() => setActiveCert({ url: cert.pdfUrl as string, title: getLocalizedValue(cert.titles, language) || '' })}
                                            className={styles.certLinkBadge}
                                            title="View Certificate"
                                        >
                                            <FileCheck size={14} />
                                            <span>{language === 'CN' ? '查看证书' : (language === 'JA' ? '証書を表示' : 'Certificate')}</span>
                                        </button>
                                    )}
                                    {cert.url && (
                                        <button
                                            onClick={() => setActiveCert({ url: cert.url as string, title: getLocalizedValue(cert.titles, language) || '' })}
                                            className={styles.certLinkBadge}
                                            title="Verify Online"
                                        >
                                            <LinkIcon size={14} />
                                            <span>{language === 'CN' ? '在线验证' : (language === 'JA' ? 'オンライン検証' : 'Verify Online')}</span>
                                        </button>
                                    )}
                                    <span className={styles.certVerifiedOn}>
                                        {language === 'CN' ? '认证于 ' : (language === 'JA' ? '認定日 ' : 'Verified on ')}
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.section} style={{ marginTop: '2rem' }}>
                <div className={styles.timelineHeader}>
                    <h2 className={styles.sectionTitle}>{t('Project Timeline')}</h2>
                    <div className={styles.filterGroup}>
                        {(['All', 'Commercial', 'Personal', 'Consultant'] as const).map(f => (
                            <button
                                key={f}
                                className={`${styles.filterButton} ${filter === f ? styles.activeFilter : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {t(f)}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.projectTimeline}>
                    {timelineItems.map((item, idx) => (
                        <div key={'id' in item ? item.id : item.mainProject.id + idx}>
                            {renderProjectRow(item)}
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal for Group Sub-projects */}
            {activeGroup && (
                <div className={styles.modalOverlay} onClick={() => setActiveGroup(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <header className={styles.modalHeader}>
                            <div className={styles.modalTitleArea}>
                                <h3>{getLocalizedValue(activeGroup.main.titles, language)}</h3>
                                <p className={styles.modalSubtitle}>
                                    {getLocalizedValue(activeGroup.main.descriptions, language)}
                                </p>
                            </div>
                            <button onClick={() => setActiveGroup(null)} className={styles.closeButton}><X size={20} /></button>
                        </header>
                        <div className={styles.projectGrid}>
                            {activeGroup.subProjects.map(p => (
                                <div key={p.id} className={styles.modalProjectCard} onClick={() => setSelectedProject(p)}>
                                    <div className={styles.modalThumbnailWrapper}>
                                        <img src={getAssetPath(p.thumbnail)} alt={getLocalizedValue(p.titles, language)} />
                                    </div>
                                    <div className={styles.modalProjectInfo}>
                                        <h4>{getLocalizedValue(p.titles, language)}</h4>
                                        <p>{getLocalizedValue(p.shortDescriptions, language)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Floating Project Detail */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                    <div className={`${styles.modalContent} ${styles.detailModal}`} onClick={e => e.stopPropagation()}>
                        <header className={styles.modalHeader}>
                            <h3>{getLocalizedValue(selectedProject.titles, language)}</h3>
                            <div className={styles.modalActions}>
                                <Link
                                    to={`/project/${selectedProject.id}`}
                                    className={styles.externalLink}
                                    title="View Full Page"
                                    onClick={() => {
                                        setSelectedProject(null);
                                        setActiveGroup(null);
                                    }}
                                >
                                    <ExternalLink size={18} />
                                </Link>
                                <button onClick={() => setSelectedProject(null)} className={styles.closeButton}><X size={20} /></button>
                            </div>
                        </header>
                        <div className={styles.detailScrollArea}>
                            <MediaGallery images={selectedProject.images} video={selectedProject.video} />
                            <div className={styles.detailMarkdown}>
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {getLocalizedValue(selectedProject.descriptions, language) || ''}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Certificate Modal */}
            {activeCert && (
                <CertModal
                    url={activeCert.url}
                    title={activeCert.title}
                    onClose={() => setActiveCert(null)}
                />
            )}
        </div>
    );
};

export default Resume;

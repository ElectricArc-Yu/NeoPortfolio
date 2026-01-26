import React, { useState, useMemo } from 'react';
import { resumeData } from '../data/resume';
import { projects } from '../data/projects';
import { mainProjects } from '../data/mainProjects';
import type { Project, MainProject } from '../data/types';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import styles from './Resume.module.css';
import { Mail, Phone, Github, Linkedin, Send, X, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import MediaGallery from '../components/MediaGallery';
import { getAssetPath } from '../utils/assetPath';

const Resume: React.FC = () => {
    const { language, t } = useLanguage();
    const [filter, setFilter] = useState<'All' | 'Commercial' | 'Personal' | 'Consultant'>('All');
    const [activeGroup, setActiveGroup] = useState<{ main: MainProject, subProjects: Project[] } | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        const r = role.toLowerCase();
        // Designer category
        if (r.includes('design') || r.includes('creative') || r.includes('writer') || r.includes('策划')) return styles.roleTagDesigner;
        // Programmer category
        if (r.includes('programmer') || r.includes('developer') || r.includes('engineer') || r.includes('程序')) return styles.roleTagProgrammer;
        // Creator/Management category
        if (r.includes('research') || r.includes('creator') || r.includes('management') || r.includes('创造者')) return styles.roleTagCreator;
        return '';
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
                            ? (language === 'CN' ? project.titleCN : project.titleEN)
                            : (language === 'CN' ? (project.timelineTitleCN || project.titleCN) : (project.timelineTitleEN || project.titleEN))
                        }
                    </span>
                    <div className={styles.projectTypeBadges}>
                        {project.gameType ? (
                            Array.isArray(project.gameType)
                                ? project.gameType.map((gt: string) => (
                                    <span key={gt} className={styles.projectTypeTimeline}>{t(gt)}</span>
                                ))
                                : <span className={styles.projectTypeTimeline}>{t(project.gameType)}</span>
                        ) : (
                            <span className={styles.projectTypeTimeline}>
                                {(isGroup ? 'Commercial' : project.type) === 'Commercial' ? (language === 'CN' ? '商业' : 'Commercial') : (language === 'CN' ? '个人' : 'Personal')}
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
                    {language === 'CN' ? resumeData.header.name.cn : resumeData.header.name.en}
                </h1>
                <p className={styles.subtitle}>{resumeData.header.role}</p>

                {/* About Me Section in Header */}
                <p className={styles.about}>
                    {language === 'CN' ? resumeData.about.cn : resumeData.about.en}
                </p>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <Mail size={16} />
                        <a href={`mailto:${resumeData.header.email}`}>{resumeData.header.email}</a>
                    </div>
                    {resumeData.header.phone && (
                        <div className={styles.contactItem}>
                            <Phone size={16} />
                            <a href={`tel:${resumeData.header.phone.replace(/\s+/g, '')}`}>{resumeData.header.phone}</a>
                        </div>
                    )}
                    <div className={styles.contactItem}>
                        <Github size={16} />
                        <a href={resumeData.header.links.find(l => l.label === 'GitHub')?.url} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className={styles.contactItem}>
                        <Linkedin size={16} />
                        <a href={resumeData.header.links.find(l => l.label === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
                                                {language === 'CN' ? job.roleCN : job.roleEN}
                                            </h3>
                                            <span className={styles.period}>{job.period}</span>
                                        </div>
                                        <div className={styles.companyRow}>
                                            <span className={styles.company}>
                                                {language === 'CN' ? job.companyCN : job.companyEN}
                                            </span>
                                            <span className={styles.companySize}>
                                                {language === 'CN' ? job.sizeCN : job.sizeEN}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className={styles.details}>
                                        {(language === 'CN' ? job.detailsCN : job.detailsEN).map((point, idx) => (
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
                                        {language === 'CN' ? category.categoryCN : category.category}
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
                                        {language === 'CN' ? edu.schoolCN : edu.schoolEN}
                                    </h3>
                                    <p className={styles.degree}>
                                        {language === 'CN' ? edu.degreeCN : edu.degreeEN}
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
                    {language === 'CN'
                        ? (resumeData.cta?.textCN || '立即联系我！')
                        : (resumeData.cta?.textEN || 'Contact Me Now!')}
                </Link>
            </div>

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
                                <h3>{language === 'CN' ? activeGroup.main.titleCN : activeGroup.main.titleEN}</h3>
                                <p className={styles.modalSubtitle}>
                                    {language === 'CN' ? activeGroup.main.descriptionCN : activeGroup.main.descriptionEN}
                                </p>
                            </div>
                            <button onClick={() => setActiveGroup(null)} className={styles.closeButton}><X size={20} /></button>
                        </header>
                        <div className={styles.projectGrid}>
                            {activeGroup.subProjects.map(p => (
                                <div key={p.id} className={styles.modalProjectCard} onClick={() => setSelectedProject(p)}>
                                    <div className={styles.modalThumbnailWrapper}>
                                        <img src={getAssetPath(p.thumbnail)} alt={p.title} />
                                    </div>
                                    <div className={styles.modalProjectInfo}>
                                        <h4>{language === 'CN' ? p.titleCN : p.titleEN}</h4>
                                        <p>{language === 'CN' ? p.shortDescriptionCN : p.shortDescriptionEN}</p>
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
                            <h3>{language === 'CN' ? selectedProject.titleCN : selectedProject.titleEN}</h3>
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
                                    {language === 'CN' ? selectedProject.descriptionCN : selectedProject.descriptionEN}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resume;

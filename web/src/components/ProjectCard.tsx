import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Project } from '../data/types';
import { useLanguage } from '../context/LanguageContext';
import styles from './ProjectCard.module.css';
import EngineIcon from './EngineIcon';
import DocumentIcon from './DocumentIcon';
import { getAssetPath } from '../utils/assetPath';
import { getRoleCategory } from '../utils/projectUtils';
import { getLocalizedValue } from '../utils/i18n';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { language, t } = useLanguage();
    const description = getLocalizedValue(project.shortDescriptions, language) || '';
    const isCommercial = project.type === 'Commercial';

    // Check if GDD is available
    const hasGDD = !!project.gddPdfUrl || project.links.some(l => l.type === 'doc');

    return (
        <NavLink to={`/project/${project.id}`} className={styles.card}>
            {project.thumbnail && (
                <div className={styles.thumbnailWrapper}>
                    <div className={styles.thumbnailPlaceholder} style={{ backgroundImage: `url(${getAssetPath(project.thumbnail)})` }} />

                    {/* GDD Available Badge */}
                    {hasGDD && (
                        <div className={styles.gddBadge} title={t('GDD Available')}>
                            <DocumentIcon className={styles.gddIcon} />
                            <span className={styles.gddText}>GDD</span>
                        </div>
                    )}

                    <div className={styles.overlay}>
                        <span>{t('View Details')}</span>
                    </div>
                </div>
            )}

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <EngineIcon engine={project.engine} className={styles.engineIcon} />
                        <h3 className={styles.title}>{getLocalizedValue(project.titles, language)}</h3>
                        {project.status && (
                            <span className={styles.statusLabel}>{getLocalizedValue(project.status, language)}</span>
                        )}
                    </div>
                    {/* Sales/Time metric in the corner */}
                    <span className={styles.topMetric}>
                        {isCommercial ? project.sales : (project.workHours ? `${project.workHours}h` : '')}
                    </span>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.footerTags}>
                    <div className={styles.tagGroup}>
                        {/* 1. Game Type */}
                        {project.gameType && (
                            Array.isArray(project.gameType) ? (
                                project.gameType.map(type => (
                                    <span key={type} className={`${styles.tag} ${styles.gameTypeTag}`} data-type={type}>
                                        {t(type)}
                                    </span>
                                ))
                            ) : (
                                <span className={`${styles.tag} ${styles.gameTypeTag}`} data-type={project.gameType}>
                                    {t(project.gameType)}
                                </span>
                            )
                        )}

                        {/* 2. Roles (Color Coded) */}
                        {project.role.slice(0, 2).map(role => {
                            const roleType = getRoleCategory(role);

                            return (
                                <span key={role} className={`${styles.tag} ${styles.roleTag}`} data-role={roleType}>
                                    {t(role)}
                                </span>
                            );
                        })}

                        {/* 3. Tech Stack */}
                        {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className={styles.tag}>{t(tech)}</span>
                        ))}
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default ProjectCard;

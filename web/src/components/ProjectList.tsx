import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';
import { Briefcase, User, Archive } from 'lucide-react';

const ProjectList: React.FC = () => {
    const { language, t } = useLanguage();

    // No activeFilter state anymore, render all sections directly
    const commercialProjects = projects.filter(p => p.type === 'Commercial');
    const personalProjects = projects.filter(p => p.type === 'Personal');
    const miscellaneousWork = projects.filter(p => p.type === 'Miscellaneous');

    return (
        <div className={styles.container}>
            {/* Filter buttons removed */}

            <div className={styles.sectionsWrapper}>
                {commercialProjects.length > 0 && (
                    <div className={styles.section} id="commercial">
                        <h2 className={styles.sectionTitle}>
                            <Briefcase size={24} />
                            {t('Commercial Projects')}
                        </h2>
                        <div className={styles.grid}>
                            {commercialProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}

                {personalProjects.length > 0 && (
                    <div className={styles.section} id="personal">
                        <h2 className={styles.sectionTitle}>
                            <User size={24} />
                            {t('Personal Projects')}
                        </h2>
                        <div className={styles.grid}>
                            {personalProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}

                {miscellaneousWork.length > 0 && (
                    <div className={styles.section} id="miscellaneous">
                        <h2 className={styles.sectionTitle}>
                            <Archive size={24} />
                            {language === 'CN' ? '杂项 / Miscellaneous' : 'Miscellaneous Work'}
                        </h2>
                        <div className={styles.grid}>
                            {miscellaneousWork.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectList;

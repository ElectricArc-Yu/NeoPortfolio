import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import styles from './Home.module.css';

import { siteConfig } from '../data/siteConfig';
import { getLocalizedValue } from '../utils/i18n';

const Home: React.FC = () => {
    const { language, t } = useLanguage();

    const sortedProjects = [...projects].sort((a, b) => b.showPriority - a.showPriority);

    const commercialProjects = sortedProjects.filter(p => p.type === 'Commercial');
    const personalProjects = sortedProjects.filter(p => p.type === 'Personal');

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>
                    {getLocalizedValue(siteConfig.pages.home.titles, language)}
                </h1>
                <p className={styles.heroSubtitle}>
                    {getLocalizedValue(siteConfig.pages.home.subtitles, language)}
                </p>
            </section>

            <div className={styles.splitLayout}>
                <section className={styles.categoryColumn}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.icon}>💼</span>
                        {t('Commercial Projects')}
                    </h2>
                    <div className={styles.grid}>
                        {commercialProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                <section className={styles.categoryColumn}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.icon}>🚀</span>
                        {t('Personal Projects')}
                    </h2>
                    <div className={styles.grid}>
                        {personalProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;

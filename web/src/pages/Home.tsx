import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const { language, t } = useLanguage();

    const sortedProjects = [...projects].sort((a, b) => b.showPriority - a.showPriority);

    const commercialProjects = sortedProjects.filter(p => p.type === 'Commercial');
    const personalProjects = sortedProjects.filter(p => p.type === 'Personal');

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>{language === 'CN' ? '于陈浩然' : 'Yu Chenhaoran'}</h1>
                <p className={styles.heroSubtitle}>
                    {language === 'CN' ? '游戏设计师 & 游戏开发者' : 'Game Designer & Game Developer'}
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

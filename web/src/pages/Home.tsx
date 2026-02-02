import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import styles from './Home.module.css';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/variants';

import { siteConfig } from '../data/siteConfig';
import { getLocalizedValue } from '../utils/i18n';

const Home: React.FC = () => {
    const { language, t } = useLanguage();

    const sortedProjects = [...projects].sort((a, b) => b.showPriority - a.showPriority);

    const commercialProjects = sortedProjects.filter(p => p.type === 'Commercial');
    const personalProjects = sortedProjects.filter(p => p.type === 'Personal');

    return (
        <PageTransition className={styles.container}>
            <section className={styles.hero}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                        {getLocalizedValue(siteConfig.pages.home.titles, language)}
                    </motion.h1>
                    <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
                        {getLocalizedValue(siteConfig.pages.home.subtitles, language)}
                    </motion.p>
                </motion.div>
            </section>

            <div className={styles.splitLayout}>
                <section className={styles.categoryColumn}>
                    <motion.h2 
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.icon}>💼</span>
                        {t('Commercial Projects')}
                    </motion.h2>
                    <motion.div 
                        className={styles.grid}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {commercialProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>
                </section>

                <section className={styles.categoryColumn}>
                    <motion.h2 
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className={styles.icon}>🚀</span>
                        {t('Personal Projects')}
                    </motion.h2>
                    <motion.div 
                        className={styles.grid}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {personalProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;

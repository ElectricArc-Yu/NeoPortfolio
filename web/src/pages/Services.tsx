import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Services.module.css';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/services';
import { motion } from 'framer-motion';
import { getLocalizedValue } from '../utils/i18n';
import PageTransition from '../components/PageTransition';
import { fadeInUp, staggerContainer } from '../utils/variants';

const Services: React.FC = () => {
    const { language, t } = useLanguage();

    // Convert markdown-style links in CTA text to HTML
    const formatCtaText = (text: string): string => {
        return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    };

    // Convert markdown bold to HTML
    const formatMarkdown = (text: string): string => {
        return text
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br />');
    };

    return (
        <PageTransition className={styles.container}>
            {/* Header */}
            <motion.header
                className={styles.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={styles.title}>
                    {getLocalizedValue(siteConfig.pages.services.titles, language)}
                </h1>
                <p className={styles.subtitle}>
                    {getLocalizedValue(siteConfig.pages.services.subtitles, language)}
                </p>
            </motion.header>

            {/* Intro + About Section */}
            <motion.section
                className={styles.introSection}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.introText}>
                    <p
                        className={styles.introParagraph}
                        dangerouslySetInnerHTML={{
                            __html: getLocalizedValue(servicesData.intro, language) ?? ''
                        }}
                    />
                    <a href="/contact" className={styles.ctaButton}>
                        {t('Contact for Services')}
                    </a>
                </div>
            </motion.section>

            {/* About Me Section */}
            <motion.section
                className={styles.aboutSection}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.sectionTitle}>
                    {getLocalizedValue(servicesData.aboutTitle, language)}
                </h2>
                <div
                    className={styles.aboutContent}
                    dangerouslySetInnerHTML={{
                        __html: formatMarkdown(getLocalizedValue(servicesData.aboutContent, language) ?? '')
                    }}
                />
            </motion.section>

            {/* Services Grid Section */}
            <section className={styles.servicesSection}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {getLocalizedValue(servicesData.sectionTitle, language)}
                </motion.h2>

                <motion.div
                    className={styles.serviceGrid}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {[...servicesData.items]
                        .sort((a, b) => b.showPriority - a.showPriority)
                        .map((service) => (
                            <motion.div variants={fadeInUp} key={service.id} className={styles.serviceCard}>
                                {service.icon && (
                                    <span className={styles.serviceIcon}>{service.icon}</span>
                                )}
                                <h3 className={styles.serviceTitle}>
                                    {getLocalizedValue(service.titles, language)}
                                </h3>
                                <p className={styles.serviceDesc}>
                                    {getLocalizedValue(service.descriptions, language)}
                                </p>
                            </motion.div>
                        ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <motion.section
                className={styles.ctaSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <p
                    className={styles.ctaText}
                    dangerouslySetInnerHTML={{
                        __html: formatCtaText(getLocalizedValue(servicesData.ctaText, language) ?? '')
                    }}
                />
            </motion.section>
        </PageTransition>
    );
};

export default Services;

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Services.module.css';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/services';
import { getLocalizedValue } from '../utils/i18n';

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
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>
                    {getLocalizedValue(siteConfig.pages.services.titles, language)}
                </h1>
                <p className={styles.subtitle}>
                    {getLocalizedValue(siteConfig.pages.services.subtitles, language)}
                </p>
            </header>

            {/* Intro + About Section */}
            <section className={styles.introSection}>
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
            </section>

            {/* About Me Section */}
            <section className={styles.aboutSection}>
                <h2 className={styles.sectionTitle}>
                    {getLocalizedValue(servicesData.aboutTitle, language)}
                </h2>
                <div
                    className={styles.aboutContent}
                    dangerouslySetInnerHTML={{
                        __html: formatMarkdown(getLocalizedValue(servicesData.aboutContent, language) ?? '')
                    }}
                />
            </section>

            {/* Services Grid Section */}
            <section className={styles.servicesSection}>
                <h2 className={styles.sectionTitle}>
                    {getLocalizedValue(servicesData.sectionTitle, language)}
                </h2>

                <div className={styles.serviceGrid}>
                    {[...servicesData.items]
                        .sort((a, b) => b.showPriority - a.showPriority)
                        .map((service) => (
                            <div key={service.id} className={styles.serviceCard}>
                                {service.icon && (
                                    <span className={styles.serviceIcon}>{service.icon}</span>
                                )}
                                <h3 className={styles.serviceTitle}>
                                    {getLocalizedValue(service.titles, language)}
                                </h3>
                                <p className={styles.serviceDesc}>
                                    {getLocalizedValue(service.descriptions, language)}
                                </p>
                            </div>
                        ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <p
                    className={styles.ctaText}
                    dangerouslySetInnerHTML={{
                        __html: formatCtaText(getLocalizedValue(servicesData.ctaText, language) ?? '')
                    }}
                />
            </section>
        </div>
    );
};

export default Services;

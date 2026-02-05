import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Services.module.css';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/services';
import { motion } from 'framer-motion';
import { getLocalizedValue } from '../utils/i18n';
import PageTransition from '../components/PageTransition';
import { fadeInUp } from '../utils/variants';
import { Mail } from 'lucide-react';

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

    const formatServiceStatus = (status: string, lang: string) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const formatDatePart = (p: string, language: string) => {
            const parts = p.trim().split('.');
            const y = parts[0];
            const m = parts[1] ? parseInt(parts[1]) : null;
            const d = parts[2] ? parseInt(parts[2]) : null;

            if (language === 'EN') {
                if (y && m && d) return `${months[m - 1]} ${d}, ${y}`;
                if (y && m) return `${months[m - 1]} ${y}`;
                return p;
            }

            if (y && m && d) return `${y}年${m}月${d}日`;
            if (y && m) return `${y}年${m}月`;
            return p;
        };

        if (status.includes('-')) {
            const [start, end] = status.split('-');
            const sStr = formatDatePart(start, lang);
            const eStr = formatDatePart(end, lang);

            return t('Service Suspend Pattern')
                .replace('{start}', sStr)
                .replace('{end}', eStr);
        } else {
            const dateStr = formatDatePart(status, lang);
            return t('Service Start Pattern').replace('{date}', dateStr);
        }
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

            {servicesData.serviceStatus && (
                <motion.div
                    className={styles.statusBanner}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <span className={styles.statusIcon}>⚠️</span>
                    {formatServiceStatus(servicesData.serviceStatus, language)}
                </motion.div>
            )}

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

                <div className={styles.serviceGrid}>
                    {[...servicesData.items]
                        .sort((a, b) => b.showPriority - a.showPriority)
                        .map((service) => (
                            <div key={service.id} className={styles.serviceCard}>
                                <div className={styles.serviceContent}>
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
                                {servicesData.contact && (() => {
                                    const template = service.emailTemplate;
                                    const defaultSubject = `${getLocalizedValue(servicesData.contact.subjectPrefix, language) || ''} ${getLocalizedValue(service.titles, language)}`;

                                    const subject = template?.subject
                                        ? getLocalizedValue(template.subject, language)
                                        : defaultSubject;

                                    const body = template?.body
                                        ? getLocalizedValue(template.body, language)
                                        : '';

                                    const mailtoUrl = `mailto:${servicesData.contact.email}?subject=${encodeURIComponent(subject || '')}${body ? `&body=${encodeURIComponent(body)}` : ''}`;

                                    return (
                                        <a
                                            href={mailtoUrl}
                                            className={styles.inquiryButton}
                                        >
                                            <Mail size={16} />
                                            {getLocalizedValue(service.ctaTitle, language) || t('Contact for Services')}
                                        </a>
                                    );
                                })()}
                            </div>
                        ))}
                </div>
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

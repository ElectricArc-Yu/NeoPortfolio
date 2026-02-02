import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './Contact.module.css';
import { Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { contactData, getContactIcon } from '../data/contact';
import { getLocalizedValue } from '../utils/i18n';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
    const { language, t } = useLanguage();

    const sections = contactData;
    const email = siteConfig.contact.email;

    const getMailto = (subject: string, body: string) => {
        return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <PageTransition className={styles.container}>
            <motion.header
                className={styles.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={styles.title}>{t('Contact Me')}</h1>
                <p className={styles.subtitle}>
                    {t('Contact Subtitle')}
                </p>
            </motion.header>

            <div className={styles.sectionsGrid}>
                {sections.map((section) => (
                    <div key={section.id} className={styles.sectionCard}>
                        <div className={styles.iconWrapper}>
                            {getContactIcon(section.iconName)}
                        </div>
                        <h2 className={styles.cardTitle}>
                            {getLocalizedValue(section.titles, language)}
                        </h2>
                        <p className={styles.cardDesc}>
                            {getLocalizedValue(section.descriptions, language)}
                        </p>
                        <a
                            href={getMailto(
                                getLocalizedValue(section.subjects, language) || '',
                                getLocalizedValue(section.bodies, language) || ''
                            )}
                            className={styles.contactButton}
                        >
                            <Send size={16} />
                            {t('Contact Immediately')}
                        </a>
                    </div>
                ))}
            </div>
        </PageTransition>
    );
};

export default Contact;

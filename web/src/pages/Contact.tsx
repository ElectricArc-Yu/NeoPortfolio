import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Contact.module.css';
import { Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { contactData, getContactIcon } from '../data/contact';
import { getLocalizedValue } from '../utils/i18n';

const Contact: React.FC = () => {
    const { language, t } = useLanguage();

    const sections = contactData;
    const email = siteConfig.contact.email;

    const getMailto = (subject: string, body: string) => {
        return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('Contact Me')}</h1>
                <p className={styles.subtitle}>
                    {t('Contact Subtitle')}
                </p>
            </header>

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
        </div>
    );
};

export default Contact;

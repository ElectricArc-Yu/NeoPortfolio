import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Contact.module.css';
import { Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { contactData, getContactIcon } from '../data/contact';

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
                    {language === 'CN'
                        ? '随时欢迎通过邮件与我联系。'
                        : 'Feel free to reach out via email.'}
                </p>
            </header>

            <div className={styles.sectionsGrid}>
                {sections.map((section) => (
                    <div key={section.id} className={styles.sectionCard}>
                        <div className={styles.iconWrapper}>
                            {getContactIcon(section.iconName)}
                        </div>
                        <h2 className={styles.cardTitle}>
                            {language === 'CN' ? section.titleCN : section.titleEN}
                        </h2>
                        <p className={styles.cardDesc}>
                            {language === 'CN' ? section.descCN : section.descEN}
                        </p>
                        <a
                            href={getMailto(section.subject, section.body)}
                            className={styles.contactButton}
                        >
                            <Send size={16} />
                            {language === 'CN' ? '立即联系' : 'Contact Immediately'}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;

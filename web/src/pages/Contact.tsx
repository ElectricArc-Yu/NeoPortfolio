import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Contact.module.css';
import { Briefcase, Users, MonitorSmartphone, Handshake, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const { language, t } = useLanguage();

    const sections = [
        {
            icon: <Briefcase size={28} />,
            titleCN: '工作机会',
            titleEN: 'Job Opportunities',
            descCN: '我正在寻找【游戏策划】相关职位，特别是关卡设计、系统设计与战斗设计方向。',
            descEN: 'Targeting Game Design roles: Level Design, System Design, Combat Design.',
            subject: 'Job Opportunity: [Company Name] - [Role]',
            body: `Hi Yu Chenhaoran,

We are interested in your profile for a Game Design position at [Company Name]. 

Would you be available for a discussion?`
        },
        {
            icon: <Users size={28} />,
            titleCN: '项目合作',
            titleEN: 'Project Collaboration',
            descCN: '对跨国合作、独立游戏开发或Game Jam项目感兴趣？我也很乐意参与其中。',
            descEN: 'Open to international collaborations, Indie projects, and Game Jams.',
            subject: 'Collaboration: [Project Name]',
            body: `Hi Yu Chenhaoran,

I'm reaching out regarding a potential collaboration on [Project Name]. We are looking for...`
        },
        {
            icon: <Handshake size={28} />,
            titleCN: '商务合作',
            titleEN: 'Business Cooperation',
            descCN: '关于Prelude Games的商务合作、投资或发行事宜。',
            descEN: 'For business inquiries, investment, or publishing regarding Prelude Games.',
            subject: 'Business Inquiry: [Topic]',
            body: `Hi Prelude Games Team,

We are interested in discussing business opportunities regarding...`
        },
        {
            icon: <MonitorSmartphone size={28} />,
            titleCN: '咨询顾问',
            titleEN: 'Consultant',
            descCN: '提供游戏设计咨询、Unreal/Unity技术支持或经验分享。',
            descEN: 'Providing game design consultancy, Unreal/Unity technical support, or knowledge sharing.',
            subject: 'Consultancy Request: [Topic]',
            body: `Hi Yu Chenhaoran,

We would like to consult with you regarding...`
        }
    ];

    const email = "YuChenhaoran@Preludegames.com";

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
                {/* Email Display Removed as requested */}
            </header>

            <div className={styles.sectionsGrid}>
                {sections.map((section, index) => (
                    <div key={index} className={styles.sectionCard}>
                        <div className={styles.iconWrapper}>
                            {section.icon}
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

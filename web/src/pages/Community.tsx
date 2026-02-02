import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './Community.module.css';
import { siteConfig } from '../data/siteConfig';
import { guildData } from '../data/community';
import PageTransition from '../components/PageTransition';
import { fadeInUp, staggerContainer } from '../utils/variants';
import {
    Shield, Target, Zap, Mail, Users, Contact,
    XCircle, Lock, MessageCircle, HeartHandshake,
    FileCode, Activity, UserMinus, Headphones, Award,
    ArrowRightLeft, Eye, HelpCircle, CheckCircle2, LogOut, Globe, Anchor
} from 'lucide-react';

const getIcon = (iconName: string, size: number = 24) => {
    switch (iconName) {
        case 'Target': return <Target size={size} />;
        case 'Shield': return <Shield size={size} />;
        case 'Zap': return <Zap size={size} />;
        case 'Users': return <Users size={size} />;
        case 'Contact': return <Contact size={size} />;
        case 'XCircle': return <XCircle size={size} />;
        case 'Lock': return <Lock size={size} />;
        case 'MessageCircle': return <MessageCircle size={size} />;
        case 'HeartHandshake': return <HeartHandshake size={size} />;
        case 'FileCode': return <FileCode size={size} />;
        case 'Activity': return <Activity size={size} />;
        case 'UserMinus': return <UserMinus size={size} />;
        case 'Headphones': return <Headphones size={size} />;
        case 'Award': return <Award size={size} />;
        case 'ArrowRightLeft': return <ArrowRightLeft size={size} />;
        case 'Eye': return <Eye size={size} />;
        case 'HelpCircle': return <HelpCircle size={size} />;
        case 'CheckCircle2': return <CheckCircle2 size={size} />;
        case 'LogOut': return <LogOut size={size} />;
        case 'Globe': return <Globe size={size} />;
        case 'Anchor': return <Anchor size={size} />;
        default: return <Target size={size} />;
    }
};

const Community: React.FC = () => {
    const { language } = useLanguage();
    const email = 'waitlist@prelude.games';

    // Helper to get localized string with fallback
    const getL = (obj: any) => obj[language] || obj['EN'] || '';

    const pageTitle = getL(siteConfig.pages.community.titles);

    return (
        <PageTransition className={styles.communityContainer}>
            <motion.header 
                className={styles.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={styles.title}>{pageTitle}</h1>
                <p className={styles.subtitle}>{getL(siteConfig.pages.community.subtitles)}</p>
            </motion.header>

            {/* Part 1: Core Content Tags */}
            <motion.section 
                className={styles.coreValuesRow}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {guildData.coreValues.map((item, index) => (
                    <motion.div variants={fadeInUp} key={index} className={styles.coreValueItem}>
                        <span className={styles.coreValueIcon}>{getIcon(item.iconName, 20)}</span>
                        <span className={styles.coreValueTitle}>{getL(item.title)}</span>
                    </motion.div>
                ))}
            </motion.section>

            {/* Part 2: Detailed Convention */}
            <motion.section 
                className={styles.covenantSection}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.covenantTitle}>{getL(guildData.covenantTitle)}</h2>
                <div className={styles.covenantContent}>
                    {guildData.covenantItems.map((item, index) => (
                        <div key={index}>
                            <h3>
                                <span className={styles.iconWrapper}>
                                    {getIcon(item.iconName, 18)}
                                </span>
                                {getL(item.title)}
                            </h3>
                            <p>{getL(item.text)}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Part 3: Guild Principles / Values */}
            <motion.section 
                className={styles.principlesSection}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className={styles.sectionTitle}>{getL(guildData.principlesTitle)}</h2>
                <div className={styles.covenantContent}>
                    {guildData.principles.map((item, index) => (
                        <div key={index}>
                            <h3>
                                <span className={styles.iconWrapper}>
                                    {getIcon(item.iconName, 18)}
                                </span>
                                {getL(item.title)}
                            </h3>
                            <p>{getL(item.text)}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            <motion.section 
                className={styles.applySection}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className={styles.applyTitle}>{getL(guildData.applyTitle)}</h2>
                <p className={styles.applyDescription}>
                    {getL(guildData.applyDescription)}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <a
                        href={`mailto:${email}?subject=[Guild Application]`}
                        className={styles.applyButton}
                    >
                        <Mail size={20} />
                        {getL(guildData.applyButton)}
                    </a>

                    <span className={styles.email}>
                        {email}
                    </span>

                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '1rem' }}>
                        {getL(guildData.footer)}
                    </p>
                </div>
            </motion.section>
        </PageTransition>
    );
};

export default Community;

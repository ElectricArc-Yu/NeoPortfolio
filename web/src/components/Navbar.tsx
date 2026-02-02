import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, getComputedStatus } from '../data/siteConfig';
import { LayoutGrid, FileText, Library, Play, Mail, Users, Briefcase } from 'lucide-react';

const Navbar: React.FC = () => {
    const { language, t } = useLanguage();
    const currentStatus = getComputedStatus();
    const statusInfo = siteConfig.statusLabels[currentStatus];
    const statusLabel = statusInfo.labels[language] || statusInfo.labels['EN'] || '';

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to="/" className={styles.siteTitle}>{t('Personal Site')}</NavLink>
                <span
                    className={styles.statusBadge}
                    style={{
                        background: statusInfo.color,
                        boxShadow: `0 2px 8px ${statusInfo.color}66`
                    }}
                >
                    {statusLabel}
                </span>
            </div>
            <div className={styles.links}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
                    <LayoutGrid size={18} className={styles.navIcon} />
                    <span className={styles.navText}>{t('Portfolio')}</span>
                </NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ''}>
                    <Briefcase size={18} className={styles.navIcon} />
                    <span className={styles.navText}>{t('Services')}</span>
                </NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive ? styles.active : ''}>
                    <FileText size={18} className={styles.navIcon} />
                    <span className={styles.navText}>{t('Resume')}</span>
                </NavLink>
                <NavLink to="/documents" className={({ isActive }) => isActive ? styles.active : ''}>
                    <Library size={18} className={styles.navIcon} />
                    <span className={styles.navText}>{t('Paper Work')}</span>
                </NavLink>
                <NavLink to="/media" className={({ isActive }) => isActive ? styles.active : ''}>
                    <Play size={18} className={styles.navIcon} />
                    <span className={styles.navText}>{t('Media')}</span>
                </NavLink>
                <NavLink to="/community" className={({ isActive }) => isActive ? styles.active : ''}>
                    <Users size={18} className={styles.navIcon} />
                    <span className={styles.navText}>{t('Community')}</span>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
                    <Mail size={18} className={styles.navIcon} />
                    <span className={styles.navText}>{t('Contact Me')}</span>
                </NavLink>
            </div>
            <div className={styles.controls}>
                <LanguageSwitch />
            </div>
        </nav>
    );
};

export default Navbar;

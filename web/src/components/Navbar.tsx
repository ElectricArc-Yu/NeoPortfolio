import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
    const { language, t } = useLanguage();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to="/">Personal Site</NavLink>
                <span className={styles.wipBadge}>WIP</span>
            </div>
            <div className={styles.links}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>{language === 'CN' ? '作品集' : 'Portfolio'}</NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive ? styles.active : ''}>{t('Resume')}</NavLink>
                <NavLink to="/documents" className={({ isActive }) => isActive ? styles.active : ''}>{language === 'CN' ? '过往文档' : 'Paper Work'}</NavLink>
                <NavLink to="/media" className={({ isActive }) => isActive ? styles.active : ''}>{t('Media')}</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>{t('Contact Me')}</NavLink>
            </div>
            <div className={styles.controls}>
                <LanguageSwitch />
            </div>
        </nav>
    );
};

export default Navbar;

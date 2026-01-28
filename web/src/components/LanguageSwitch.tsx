import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageSwitch.module.css';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
    const { language, setLanguage, supportedLanguages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (supportedLanguages.length <= 1) return null;

    // Sequential toggle for mobile or when only 2 languages
    const handleToggle = () => {
        const currentIndex = supportedLanguages.findIndex(l => l.code === language);
        const nextIndex = (currentIndex + 1) % supportedLanguages.length;
        setLanguage(supportedLanguages[nextIndex].code);
    };

    // 2 Languages: Slider style
    if (supportedLanguages.length === 2) {
        const lang1 = supportedLanguages[0].code;
        const lang2 = supportedLanguages[1].code;
        const isSecond = language === lang2;

        return (
            <button
                className={styles.switch}
                onClick={handleToggle}
                aria-label="Toggle Language"
            >
                <span className={`${styles.option} ${!isSecond ? styles.active : ''}`}>{lang1}</span>
                <span className={`${styles.option} ${isSecond ? styles.active : ''}`}>{lang2}</span>
                <div className={styles.mobileIcon}>
                    <span>{language}</span>
                </div>
                <div className={`${styles.slider} ${isSecond ? styles.right : ''}`} />
            </button>
        );
    }

    // 3+ Languages: Dropdown (Desktop) / Sequential (Mobile via the button itself)
    return (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            {/* Desktop Dropdown Trigger */}
            <button
                className={styles.dropdownTrigger}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Globe size={16} className={styles.globeIcon} />
                <span className={styles.currentLangLabel}>
                    {supportedLanguages.find(l => l.code === language)?.label}
                </span>
                <ChevronDown size={14} className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} />
            </button>

            {/* Mobile Button (Same appearance but sequential toggle) */}
            <button className={styles.mobileToggle} onClick={handleToggle}>
                <Globe size={18} />
                <span>{language}</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {supportedLanguages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`${styles.menuItem} ${language === lang.code ? styles.menuItemActive : ''}`}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsOpen(false);
                            }}
                        >
                            <span className={styles.langLabel}>{lang.label}</span>
                            <span className={styles.langCode}>{lang.code}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitch;

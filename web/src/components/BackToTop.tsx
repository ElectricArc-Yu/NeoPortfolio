import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './BackToTop.module.css';
import { UI_CONSTANTS } from '../data/uiConstants';

const BackToTop: React.FC = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > UI_CONSTANTS.BACK_TO_TOP_THRESHOLD) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span>{t('Back to Top')}</span>
        </button>
    );
};

export default BackToTop;

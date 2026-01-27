import React from 'react';
import styles from './PlaceholderImage.module.css';
import { useLanguage } from '../context/LanguageContext';

const PlaceholderImage: React.FC<{ text?: string }> = ({ text }) => {
    const { t } = useLanguage();
    const displayText = text || t('No Image');

    return (
        <div className={styles.placeholder}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span className={styles.text}>{displayText}</span>
        </div>
    );
};

export default PlaceholderImage;

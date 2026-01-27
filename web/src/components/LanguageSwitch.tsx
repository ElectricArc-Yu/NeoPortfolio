import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageSwitch.module.css';

const LanguageSwitch: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            className={styles.switch}
            onClick={() => setLanguage(language === 'EN' ? 'CN' : 'EN')}
            aria-label="Toggle Language"
        >
            <span className={`${styles.option} ${language === 'CN' ? styles.active : ''}`}>CN</span>
            <span className={`${styles.option} ${language === 'EN' ? styles.active : ''}`}>EN</span>
            <div className={styles.mobileIcon}>
                <span>{language}</span>
            </div>
            <div className={`${styles.slider} ${language === 'EN' ? styles.right : ''}`} />
        </button>
    );
};

export default LanguageSwitch;

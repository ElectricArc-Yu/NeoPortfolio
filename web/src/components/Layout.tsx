import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

const Layout: React.FC = () => {
    const { language } = useLanguage();
    const { footer } = siteConfig;

    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {footer.year} {footer.owner}. {language === 'CN' ? footer.disclaimerCN : footer.disclaimerEN}
                    </p>
                    {(language === 'CN' ? footer.subFooterCN : footer.subFooterEN) && (
                        <p className={styles.disclaimer}>
                            {language === 'CN' ? footer.subFooterCN : footer.subFooterEN}
                        </p>
                    )}
                </div>
            </footer>
        </div>
    );
};

export default Layout;

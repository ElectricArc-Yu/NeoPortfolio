import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';
import { Helmet } from 'react-helmet-async';

import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getFormattedTitle } from '../utils/i18n';

import { projects } from '../data/projects';

const Layout: React.FC = () => {
    const { language } = useLanguage();
    const { footer } = siteConfig;
    const location = useLocation();

    // Helper to get page key from path
    const getPageKey = () => {
        const path = location.pathname.replace(/\/$/, ''); // Remove trailing slash
        if (path === '' || path === '/') return 'home';
        if (path.startsWith('/resume')) return 'resume';
        if (path.startsWith('/media')) return 'media';
        if (path.startsWith('/documents')) return 'documents';
        if (path.startsWith('/contact')) return 'contact';
        return undefined;
    };

    // Special handling for project detail title
    const getProjectTitle = () => {
        if (location.pathname.startsWith('/project/')) {
            // Safer extraction of ID, ignoring trailing slashes
            const parts = location.pathname.split('/').filter(Boolean);
            const id = parts[parts.length - 1];
            const project = projects.find(p => p.id === id);
            return project ? (project.titles[language] || project.titles['EN']) : undefined;
        }
        return undefined;
    };

    const title = getFormattedTitle(getPageKey(), language, getProjectTitle());

    // Force refresh title manually to bypass any react-helmet-async lag
    React.useEffect(() => {
        document.title = title;
    }, [title, location.key]); // location.key changes even when clicking same-page nav links

    return (
        <div className={styles.container}>
            <Helmet key={location.key + language}>
                <title>{title}</title>
                <link rel="icon" type="image/x-icon" href={siteConfig.brand.favicon} />
                <link rel="shortcut icon" href={siteConfig.brand.favicon} />
                <link rel="apple-touch-icon" href={siteConfig.brand.favicon} />
            </Helmet>
            <Navbar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {footer.year} {footer.owner}. {footer.disclaimers[language] || footer.disclaimers['EN']}
                    </p>
                    {footer.subFooters && footer.subFooters[language] && (
                        <p className={styles.disclaimer}>
                            {footer.subFooters[language]}
                        </p>
                    )}
                </div>
            </footer>
        </div>
    );
};

export default Layout;

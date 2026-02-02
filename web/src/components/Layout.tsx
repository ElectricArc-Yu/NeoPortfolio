import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import styles from './Layout.module.css';

import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getFormattedTitle } from '../utils/i18n';

import { projects } from '../data/projects';

/**
 * PageMetadata component handles SEO, Browser Title, and Favicons dynamically.
 * Uses React 19's native support for document metadata via useEffect.
 */
const PageMetadata: React.FC = () => {
    const { language } = useLanguage();
    const location = useLocation();

    // Helper to identify the current page key from URL
    const getPageKey = () => {
        const path = location.pathname.replace(/\/$/, '') || '/';

        if (path === '/' || path === '/NeoPortfolio' || path === '/NeoPortfolio/') return 'home';

        // Exact matches or prefix matches for core pages
        const normalizedPath = path.replace('/NeoPortfolio', '');
        if (normalizedPath === '' || normalizedPath === '/') return 'home';
        if (normalizedPath.startsWith('/services')) return 'services';
        if (normalizedPath.startsWith('/resume')) return 'resume';
        if (normalizedPath.startsWith('/media')) return 'media';
        if (normalizedPath.startsWith('/documents')) return 'documents';
        if (normalizedPath.startsWith('/community')) return 'community';
        if (normalizedPath.startsWith('/contact')) return 'contact';

        return undefined;
    };

    // Special handling for dynamic titles (e.g., Project Detail pages)
    const getCustomTitle = () => {
        const path = location.pathname.replace('/NeoPortfolio', '');
        if (path.startsWith('/project/')) {
            const parts = path.split('/').filter(Boolean);
            const id = parts[parts.length - 1];
            const project = projects.find(p => p.id === id);
            return project ? (project.titles[language] || project.titles['EN']) : undefined;
        }
        return undefined;
    };

    const pageKey = getPageKey();
    const title = getFormattedTitle(pageKey, language, getCustomTitle());

    // Determine the favicon: Page-specific if defined, otherwise global brand favicon
    const pageConfig = pageKey ? siteConfig.pages[pageKey] : undefined;
    const currentFavicon = pageConfig?.favicon || siteConfig.brand.favicon;

    // Direct DOM manipulation for title and favicon (React 19 native approach)
    React.useEffect(() => {
        document.title = title;

        // Update favicon dynamically
        const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
        if (link) {
            link.href = currentFavicon;
        }
    }, [title, currentFavicon]);

    return null; // No render needed, metadata is set via useEffect
};

const Layout: React.FC = () => {
    const { language } = useLanguage();
    const { footer } = siteConfig;

    return (
        <div className={styles.container}>
            <PageMetadata />
            <Navbar />
            <main className={styles.main}>
                <AnimatePresence mode="wait">
                    <div key={location.pathname}>
                        <Outlet />
                    </div>
                </AnimatePresence>
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

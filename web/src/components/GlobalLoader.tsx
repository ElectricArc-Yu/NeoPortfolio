import React, { useEffect, useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { mediaSeries, mediaItems } from '../data/media';
import { siteConfig } from '../data/siteConfig';
import styles from './GlobalLoader.module.css';
import { motion } from 'framer-motion';

interface GlobalLoaderProps {
    onDone: () => void;
}

const GlobalLoader: React.FC<GlobalLoaderProps> = ({ onDone }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Initializing...');
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (msg: string) => {
        setLogs(prev => [msg, ...prev].slice(0, 5));
    };

    const allImages = useMemo(() => {
        const urls = new Set<string>();

        // Projects
        projects.forEach(p => {
            if (p.thumbnail) urls.add(p.thumbnail);
            if (p.images) p.images.forEach(img => urls.add(img));
        });

        // Media
        if (mediaSeries) {
            mediaSeries.forEach(s => {
                if (s.thumbnail) urls.add(s.thumbnail);
            });
        }
        if (mediaItems) {
            mediaItems.forEach(i => {
                if (i.thumbnail) urls.add(i.thumbnail);
            });
        }

        // SiteConfig
        if (siteConfig.brand.favicon) urls.add(siteConfig.brand.favicon);
        if (siteConfig.pages) {
            Object.values(siteConfig.pages).forEach(p => {
                if (p.favicon) urls.add(p.favicon);
            });
        }

        return Array.from(urls).filter(url => url && typeof url === 'string' && !url.endsWith('.mp4'));
    }, []);

    useEffect(() => {
        let loadedCount = 0;
        const total = allImages.length;

        if (total === 0) {
            setProgress(100);
            const timer = setTimeout(onDone, 800);
            return () => clearTimeout(timer);
        }

        addLog(`System identifying ${total} assets...`);

        const preload = async () => {
            // Initial stage
            await new Promise(r => setTimeout(r, 600));
            setStatus('Fetching Assets...');

            const promises = allImages.map(url => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = url;

                    const handleLoad = () => {
                        loadedCount++;
                        const p = Math.floor((loadedCount / total) * 100);
                        setProgress(p);
                        const fileName = url.split('/').pop() || 'asset';
                        setStatus(`Loading: ${fileName}`);
                        addLog(`Success: ${fileName}`);
                        resolve(null);
                    };

                    const handleError = () => {
                        loadedCount++;
                        const p = Math.floor((loadedCount / total) * 100);
                        setProgress(p);
                        const fileName = url.split('/').pop() || 'asset';
                        addLog(`Skipped: ${fileName}`);
                        resolve(null);
                    };

                    img.onload = handleLoad;
                    img.onerror = handleError;
                });
            });

            await Promise.all(promises);

            setStatus('Syncing Data...');
            addLog('Pre-render stabilization...');
            await new Promise(r => setTimeout(r, 600));

            setProgress(100);
            setStatus('Complete');
            addLog(siteConfig.loader.welcomeMessage);

            const timer = setTimeout(onDone, 1000);
            return () => clearTimeout(timer);
        };

        preload();
    }, [allImages, onDone]);

    return (
        <motion.div
            className={styles.overlay}
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
        >
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {siteConfig.loader.displayName}
                </motion.h1>

                <div className={styles.progressContainer}>
                    <motion.div
                        className={styles.progressBar}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>

                <div className={styles.statusRow}>
                    <span>{status}</span>
                    <span className={styles.percentage}>{progress}%</span>
                </div>

                <div className={styles.logArea}>
                    {logs.map((log, i) => (
                        <motion.div
                            key={`${log}-${i}`}
                            className={styles.logLine}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {`> ${log}`}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default GlobalLoader;

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { projects } from '../data/projects';
import { mediaSeries, mediaItems } from '../data/media';
import { siteConfig } from '../data/siteConfig';
import styles from './GlobalLoader.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface GlobalLoaderProps {
    onDone: () => void;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    angle: number;
    distance: number;
}

const GlobalLoader: React.FC<GlobalLoaderProps> = ({ onDone }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Initializing...');
    const [logs, setLogs] = useState<string[]>([]);
    const [isDissolving, setIsDissolving] = useState(false);
    const [scanLineY, setScanLineY] = useState(-10);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [showFlash, setShowFlash] = useState(false);

    const addLog = (msg: string) => {
        setLogs(prev => [msg, ...prev].slice(0, 5));
    };

    // Generate dissolve particles
    const generateParticles = useCallback(() => {
        const particleCount = 150;
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 8 + 2,
                delay: Math.random() * 0.5,
                duration: Math.random() * 1 + 0.8,
                angle: Math.random() * 360,
                distance: Math.random() * 300 + 100
            });
        }
        setParticles(newParticles);
    }, []);

    // Trigger dissolve animation
    const triggerDissolve = useCallback(() => {
        generateParticles();
        setIsDissolving(true);

        // Scan line animation
        const scanDuration = 800;
        const startTime = Date.now();
        const animateScan = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / scanDuration;
            if (progress < 1) {
                setScanLineY(progress * 110 - 5);
                requestAnimationFrame(animateScan);
            }
        };
        requestAnimationFrame(animateScan);

        // Flash effect
        setTimeout(() => setShowFlash(true), 400);
        setTimeout(() => setShowFlash(false), 600);

        // Complete and call onDone
        setTimeout(onDone, 1200);
    }, [generateParticles, onDone]);

    const allImages = useMemo(() => {
        const urls = new Set<string>();

        projects.forEach(p => {
            if (p.thumbnail) urls.add(p.thumbnail);
            if (p.images) p.images.forEach(img => urls.add(img));
        });

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
            const timer = setTimeout(() => triggerDissolve(), 800);
            return () => clearTimeout(timer);
        }

        addLog(`System identifying ${total} assets...`);

        const preload = async () => {
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

            // Trigger dissolve effect after loading complete
            setTimeout(() => triggerDissolve(), 800);
        };

        preload();
    }, [allImages, triggerDissolve]);

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Background grid pattern */}
                <div className={styles.gridPattern} />

                {/* Floating glow orbs */}
                <div className={`${styles.glowOrb} ${styles.glowOrb1}`} />
                <div className={`${styles.glowOrb} ${styles.glowOrb2}`} />
                <div className={`${styles.glowOrb} ${styles.glowOrb3}`} />

                {/* Main content */}
                <motion.div
                    className={styles.content}
                    animate={isDissolving ? {
                        opacity: 0,
                        scale: 1.1,
                        filter: 'blur(10px)'
                    } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.h1
                        className={`${styles.title} ${progress === 100 ? styles.readyGlow : ''}`}
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
                </motion.div>

                {/* Dissolve particles */}
                {isDissolving && (
                    <div className={styles.particlesContainer}>
                        {particles.map(p => (
                            <motion.div
                                key={p.id}
                                className={styles.particle}
                                style={{
                                    left: `${p.x}%`,
                                    top: `${p.y}%`,
                                    width: p.size,
                                    height: p.size,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 1, 1, 0],
                                    scale: [0, 1, 1, 0.5],
                                    x: Math.cos(p.angle * Math.PI / 180) * p.distance,
                                    y: Math.sin(p.angle * Math.PI / 180) * p.distance,
                                }}
                                transition={{
                                    duration: p.duration,
                                    delay: p.delay,
                                    ease: 'easeOut'
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Scan line effect */}
                {isDissolving && scanLineY >= 0 && scanLineY <= 100 && (
                    <motion.div
                        className={styles.scanLine}
                        style={{ top: `${scanLineY}%` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}

                {/* Flash effect */}
                {showFlash && (
                    <motion.div
                        className={styles.flashOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default GlobalLoader;

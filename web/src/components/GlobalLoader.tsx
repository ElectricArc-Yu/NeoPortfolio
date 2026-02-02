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

type LoaderPhase = 'loading' | 'welcome' | 'dissolving';

const GlobalLoader: React.FC<GlobalLoaderProps> = ({ onDone }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Initializing...');
    const [logs, setLogs] = useState<string[]>([]);
    const [phase, setPhase] = useState<LoaderPhase>('loading');
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

        // NOSONAR: Math.random() is used here purely for visual animation effects (particle positions/timing).
        // This is not security-sensitive - no cryptographic or authentication purposes.
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
        setPhase('dissolving');

        // Scan line animation
        const scanDuration = 800;
        const startTime = Date.now();
        const animateScan = () => {
            const elapsed = Date.now() - startTime;
            const scanProgress = elapsed / scanDuration;
            if (scanProgress < 1) {
                setScanLineY(scanProgress * 110 - 5);
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

    // Show welcome message phase
    const showWelcome = useCallback(() => {
        setPhase('welcome');

        // After welcome animation, trigger dissolve
        setTimeout(() => {
            triggerDissolve();
        }, 2000); // Show welcome for 2 seconds
    }, [triggerDissolve]);

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
            Object.values(siteConfig.pages).forEach((p: any) => {
                if (p && 'favicon' in p && p.favicon) urls.add(p.favicon);
            });
        }

        return Array.from(urls).filter(url => url && typeof url === 'string' && !url.endsWith('.mp4'));
    }, []);

    useEffect(() => {
        const startTime = Date.now();
        const MIN_LOADING_TIME = 2000; // Minimum time to show loading (ms)
        const MAX_LOADING_TIME = 8000; // Maximum time before force complete (ms)
        const IMAGE_TIMEOUT = 5000; // Individual image timeout

        let loadedCount = 0;
        const total = allImages.length;
        let isComplete = false;

        const completeLoading = () => {
            if (isComplete) return;
            isComplete = true;

            const elapsed = Date.now() - startTime;
            const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

            // Wait for minimum time before showing welcome
            setTimeout(() => {
                setProgress(100);
                setStatus('Ready');
                addLog('System ready');
                // Show welcome message
                setTimeout(() => showWelcome(), 300);
            }, remainingTime);
        };

        // Safety timeout - force complete after max time
        const safetyTimer = setTimeout(() => {
            if (!isComplete) {
                addLog('Loading timeout - completing...');
                completeLoading();
            }
        }, MAX_LOADING_TIME);

        if (total === 0) {
            completeLoading();
            return () => clearTimeout(safetyTimer);
        }

        addLog(`Identifying ${total} assets...`);
        setStatus('Fetching Assets...');

        // Load a single image and update progress
        const loadImage = (url: string): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                const fileName = url.split('/').pop() || 'asset';

                const onComplete = (success: boolean) => {
                    loadedCount++;
                    setProgress(Math.floor((loadedCount / total) * 100));
                    setStatus(`Loading: ${fileName}`);
                    addLog(success ? `✓ ${fileName}` : `○ ${fileName}`);
                    resolve();
                };

                img.onload = () => onComplete(true);
                img.onerror = () => onComplete(false);

                // Timeout for slow images
                setTimeout(() => onComplete(false), IMAGE_TIMEOUT);
            });
        };

        // Preload all images
        Promise.all(allImages.map(loadImage)).then(() => {
            setStatus('Syncing...');
            addLog('Pre-render stabilization...');
            completeLoading();
        });

        return () => clearTimeout(safetyTimer);
    }, [allImages, showWelcome]);

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

                {/* Main loading content - hide when welcome shows */}
                <AnimatePresence>
                    {phase === 'loading' && (
                        <motion.div
                            className={styles.content}
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
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
                    )}
                </AnimatePresence>

                {/* Welcome message phase */}
                <AnimatePresence>
                    {(phase === 'welcome' || phase === 'dissolving') && (
                        <motion.div
                            className={styles.welcomeContainer}
                            initial={{ opacity: 0 }}
                            animate={phase === 'dissolving' ? {
                                opacity: 0,
                                scale: 1.2,
                                filter: 'blur(20px)'
                            } : { opacity: 1 }}
                            transition={{ duration: phase === 'dissolving' ? 0.8 : 0.5 }}
                        >
                            <motion.h1
                                className={styles.welcomeText}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {siteConfig.loader.welcomeMessage}
                            </motion.h1>

                            {/* Decorative lines */}
                            <motion.div
                                className={styles.welcomeLine}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />

                            {/* Subtitle hint */}
                            <motion.p
                                className={styles.welcomeSubtext}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Press any key or wait...
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Dissolve particles */}
                {phase === 'dissolving' && (
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
                {phase === 'dissolving' && scanLineY >= 0 && scanLineY <= 100 && (
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

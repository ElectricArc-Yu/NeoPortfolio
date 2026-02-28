import React, { useRef, useMemo } from 'react';
import type { PublicDoc, Publisher } from '../data/types';
import styles from './BadgeWall.module.css';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

interface BadgeWallProps {
    docs: PublicDoc[];
    selectedPublisher: Publisher | null;
    onSelectPublisher: (publisher: Publisher | null) => void;
}

const PUBLISHERS_LIST: Publisher[] = [
    'IEEE', 'ACM', 'Springer', 'Elsevier', 'Wiley', 'Nature',
    'Science', 'Taylor & Francis', 'Oxford', 'Cambridge', 'IOP', 'GDC'
];

/**
 * Renders a stylized SVG logo or symbol for a publisher.
 */
const PublisherIcon: React.FC<{ publisher: string; isSelected: boolean }> = ({ publisher, isSelected }) => {
    const logoMap: Record<string, string> = {
        'IEEE': 'I',
        'ACM': 'ACM',
        'Springer': 'S',
        'Elsevier': 'E',
        'Wiley': 'W',
        'Nature': 'N',
        'Science': 'S',
        'Taylor & Francis': 'TF',
        'Oxford': 'O',
        'Cambridge': 'C',
        'IOP': 'IOP',
        'GDC': 'GDC'
    };

    return (
        <div className={`${styles.logoPlaceholder} ${isSelected ? styles.logoSelected : ''}`}>
            {logoMap[publisher] || publisher[0]}
        </div>
    );
};

const BadgeWall: React.FC<BadgeWallProps> = ({ docs, selectedPublisher, onSelectPublisher }) => {
    // Calculate counts
    const counts = useMemo(() => {
        return docs.reduce((acc, doc) => {
            const pub = doc.publisher;
            if (pub && pub !== 'None') {
                acc[pub] = (acc[pub] || 0) + 1;
            }
            return acc;
        }, {} as Record<string, number>);
    }, [docs]);

    // Only display publishers with count > 0
    const activePublishers = useMemo(() => {
        return PUBLISHERS_LIST
            .filter(p => (counts[p] || 0) > 0)
            .sort((a, b) => {
                const countA = counts[a] || 0;
                const countB = counts[b] || 0;
                if (countB !== countA) return countB - countA;
                return a.localeCompare(b);
            });
    }, [counts]);

    const handleToggle = (publisher: Publisher) => {
        if (selectedPublisher === publisher) {
            onSelectPublisher(null);
        } else {
            onSelectPublisher(publisher);
        }
    };

    return (
        <div className={styles.container}>
            <motion.div className={styles.wall} layout>
                <AnimatePresence mode="popLayout">
                    {activePublishers.map((publisher) => {
                        const count = counts[publisher] || 0;
                        return (
                            <BadgeItem
                                key={publisher}
                                publisher={publisher}
                                count={count}
                                isSelected={selectedPublisher === publisher}
                                onClick={() => handleToggle(publisher)}
                            />
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

interface BadgeItemProps {
    publisher: Publisher;
    count: number;
    isSelected: boolean;
    onClick: () => void;
}

const BadgeItem: React.FC<BadgeItemProps> = ({ publisher, count, isSelected, onClick }) => {
    const badgeRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Individual 3D Rotation - only when NOT selected
    const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { damping: 20, stiffness: 300 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { damping: 20, stiffness: 300 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!badgeRef.current) return;
        const rect = badgeRef.current.getBoundingClientRect();

        // Relative position normalized for rotation
        const relativeX = e.clientX - rect.left - rect.width / 2;
        const relativeY = e.clientY - rect.top - rect.height / 2;

        // update motion values only if not selected for tilt
        if (!isSelected) {
            x.set(relativeX);
            y.set(relativeY);
        }

        // Mouse highlight variables (always active)
        const highlightX = ((e.clientX - rect.left) / rect.width) * 100;
        const highlightY = ((e.clientY - rect.top) / rect.height) * 100;
        badgeRef.current.style.setProperty('--mouse-x', `${highlightX}%`);
        badgeRef.current.style.setProperty('--mouse-y', `${highlightY}%`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={badgeRef}
            className={`${styles.badge} ${styles.active} ${isSelected ? styles.selected : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            data-publisher={publisher}
            style={{
                rotateX: isSelected ? 0 : rotateX,
                rotateY: isSelected ? 0 : rotateY
            }}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={isSelected ? { scale: 1.02, y: -5 } : {}}
        >
            <div className={styles.iconWrapper}>
                <PublisherIcon publisher={publisher} isSelected={isSelected} />
            </div>

            <div className={styles.publisherLabel}>
                {publisher}
            </div>

            <div className={`${styles.countRect} ${isSelected ? styles.countSelected : ''}`}>
                {count}
            </div>
        </motion.div>
    );
};

export default BadgeWall;

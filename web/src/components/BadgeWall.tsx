import React, { useMemo } from 'react';
import type { PublicDoc, Publisher } from '../data/types';
import styles from './BadgeWall.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface BadgeWallProps {
    docs: PublicDoc[];
    selectedPublisher: Publisher | null;
    onSelectPublisher: (publisher: Publisher | null) => void;
}

const PUBLISHERS_LIST: Publisher[] = [
    'IEEE', 'ACM', 'Springer', 'Elsevier', 'Wiley', 'Nature',
    'Science', 'Taylor & Francis', 'Oxford', 'Cambridge', 'IOP', 'GDC'
];

/** Short abbreviation for display inside compact square badges */
const PUBLISHER_ABBR: Record<string, string> = {
    'IEEE': 'IEEE',
    'ACM': 'ACM',
    'Springer': 'SPR',
    'Elsevier': 'ELS',
    'Wiley': 'WIL',
    'Nature': 'NAT',
    'Science': 'SCI',
    'Taylor & Francis': 'T&F',
    'Oxford': 'OUP',
    'Cambridge': 'CUP',
    'IOP': 'IOP',
    'GDC': 'GDC'
};

const BadgeWall: React.FC<BadgeWallProps> = ({ docs, selectedPublisher, onSelectPublisher }) => {
    const counts = useMemo(() => {
        return docs.reduce((acc, doc) => {
            const pub = doc.publisher;
            if (pub && pub !== 'None') {
                acc[pub] = (acc[pub] || 0) + 1;
            }
            return acc;
        }, {} as Record<string, number>);
    }, [docs]);

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
        onSelectPublisher(selectedPublisher === publisher ? null : publisher);
    };

    return (
        <div className={styles.row}>
            <AnimatePresence mode="popLayout">
                {activePublishers.map((publisher) => {
                    const count = counts[publisher] || 0;
                    const isSelected = selectedPublisher === publisher;
                    return (
                        <motion.button
                            key={publisher}
                            className={`${styles.chip} ${isSelected ? styles.chipSelected : ''}`}
                            data-publisher={publisher}
                            onClick={() => handleToggle(publisher)}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className={styles.chipAbbr}>
                                {PUBLISHER_ABBR[publisher] || publisher.slice(0, 3).toUpperCase()}
                            </span>
                            <span className={`${styles.chipCount} ${isSelected ? styles.chipCountActive : ''}`}>
                                {count}
                            </span>
                        </motion.button>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default BadgeWall;

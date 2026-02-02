import React, { useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './CodeModal.module.css';
import CodeLoader from './CodeLoader';

interface CodeModalProps {
    url: string;
    title: string;
    onClose: () => void;
}

const CodeModal: React.FC<CodeModalProps> = ({ url, title, onClose }) => {
    // Handle keyboard events
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    useEffect(() => {
        globalThis.addEventListener('keydown', handleKeyDown);
        return () => globalThis.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Handle overlay keyboard interaction
    const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClose();
        }
    };

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
            onKeyDown={handleOverlayKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={0}
        >
            <div className={styles.modal} onClick={e => e.stopPropagation()} role="document">
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                        <X size={24} />
                    </button>
                </div>
                <div className={styles.content}>
                    <CodeLoader src={url} customStyle={{ margin: 0, border: 'none', borderRadius: 0 }} />
                </div>
            </div>
        </div>
    );
};

export default CodeModal;

import React, { useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './PdfModal.module.css';
import { getAssetPath } from '../utils/assetPath';

interface PdfModalProps {
    url: string;
    title: string;
    onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ url, title, onClose }) => {
    const resolvedUrl = getAssetPath(url);

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
                    <iframe src={resolvedUrl} className={styles.iframe} title={title}>
                        <p>Your browser does not support iframes. <a href={resolvedUrl}>Download PDF</a></p>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default PdfModal;

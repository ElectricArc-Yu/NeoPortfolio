import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import styles from './CertModal.module.css';
import { getAssetPath } from '../utils/assetPath';

interface CertModalProps {
    url: string;
    title: string;
    onClose: () => void;
    type?: 'image' | 'pdf' | 'web';
}

const CertModal: React.FC<CertModalProps> = ({ url, title, onClose, type }) => {
    const resolvedUrl = getAssetPath(url);

    // Auto-detect type if not provided
    const getDetectedType = () => {
        if (type) return type;
        const lowerUrl = url.toLowerCase();
        if (lowerUrl.endsWith('.pdf')) return 'pdf';
        if (lowerUrl.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) return 'image';
        return 'web';
    };

    const detectedType = getDetectedType();

    // Handle keyboard events
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    // Close on ESC key
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
            <button className={styles.floatingClose} onClick={onClose} title="Close" aria-label="Close modal">
                <X size={32} />
            </button>
            <div className={styles.modal} onClick={e => e.stopPropagation()} role="document">
                <div className={styles.content}>
                    {detectedType === 'image' ? (
                        <div className={styles.imageContainer}>
                            <img src={resolvedUrl} alt={title} className={styles.image} />
                            <div className={styles.caption}>{title}</div>
                        </div>
                    ) : (
                        <iframe
                            src={resolvedUrl}
                            className={styles.iframe}
                            title={title}
                            allow="autoplay"
                        >
                            <p>Your browser does not support iframes. <a href={resolvedUrl} target="_blank" rel="noreferrer">Open directly</a></p>
                        </iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CertModal;

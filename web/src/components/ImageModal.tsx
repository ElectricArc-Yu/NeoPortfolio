import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import styles from './ImageModal.module.css';
import { getAssetPath } from '../utils/assetPath';

interface ImageModalProps {
    src: string;
    alt?: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    const imageAlt = alt || 'Full View';

    // Handle keyboard events
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    // Prevent background scrolling and add keyboard listener
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        globalThis.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'unset';
            globalThis.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    // Handle overlay keyboard interaction
    const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClose();
        }
    };

    const resolvedSrc = getAssetPath(src);

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
            onKeyDown={handleOverlayKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label={imageAlt}
            tabIndex={0}
        >
            <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                <X size={32} />
            </button>
            <div className={styles.content} onClick={e => e.stopPropagation()} role="document">
                <img src={resolvedSrc} alt={imageAlt} className={styles.fullImage} />
            </div>
        </div>
    );
};

export default ImageModal;

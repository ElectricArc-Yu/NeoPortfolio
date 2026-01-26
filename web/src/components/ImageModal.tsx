import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './ImageModal.module.css';
import { getAssetPath } from '../utils/assetPath';

interface ImageModalProps {
    src: string;
    alt?: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const resolvedSrc = getAssetPath(src);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <button className={styles.closeButton} onClick={onClose}>
                <X size={32} />
            </button>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <img src={resolvedSrc} alt={alt || 'Full View'} className={styles.fullImage} />
            </div>
        </div>
    );
};

export default ImageModal;

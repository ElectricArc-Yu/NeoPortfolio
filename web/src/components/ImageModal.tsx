import React from 'react';
import BaseModal from './BaseModal';
import styles from './ImageModal.module.css';
import { getAssetPath } from '../utils/assetPath';

interface ImageModalProps {
    src: string;
    alt?: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    const imageAlt = alt || 'Full View';
    const resolvedSrc = getAssetPath(src);

    return (
        <BaseModal
            title={imageAlt}
            onClose={onClose}
            noHeader={true}
            floatingCloseButton={true}
            overlayClassName={styles.overlay}
            contentClassName={styles.content}
            className={styles.modal} // Pass transparent background style
        >
            <img src={resolvedSrc} alt={imageAlt} className={styles.fullImage} />
        </BaseModal>
    );
};

export default ImageModal;

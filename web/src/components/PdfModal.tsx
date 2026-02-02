import React from 'react';
import BaseModal from './BaseModal';
import styles from './PdfModal.module.css';
import { getAssetPath } from '../utils/assetPath';

interface PdfModalProps {
    url: string;
    title: string;
    onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ url, title, onClose }) => {
    const resolvedUrl = getAssetPath(url);

    return (
        <BaseModal 
            title={title} 
            onClose={onClose}
            className={styles.modal}
            contentClassName={styles.content}
        >
            <iframe src={resolvedUrl} className={styles.iframe} title={title}>
                <p>Your browser does not support iframes. <a href={resolvedUrl}>Download PDF</a></p>
            </iframe>
        </BaseModal>
    );
};

export default PdfModal;

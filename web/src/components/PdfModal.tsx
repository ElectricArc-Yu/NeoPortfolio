import React from 'react';
import { X } from 'lucide-react';
import styles from './PdfModal.module.css';

interface PdfModalProps {
    url: string;
    title: string;
    onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ url, title, onClose }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <button className={styles.closeButton} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>
                <div className={styles.content}>
                    <iframe src={url} className={styles.iframe} title={title}>
                        <p>Your browser does not support iframes. <a href={url}>Download PDF</a></p>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default PdfModal;

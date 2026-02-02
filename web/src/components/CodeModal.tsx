import React from 'react';
import { X } from 'lucide-react';
import styles from './CodeModal.module.css';
import CodeLoader from './CodeLoader';

interface CodeModalProps {
    url: string;
    title: string;
    onClose: () => void;
}

const CodeModal: React.FC<CodeModalProps> = ({ url, title, onClose }) => {
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
                    <CodeLoader src={url} customStyle={{ margin: 0, border: 'none', borderRadius: 0 }} />
                </div>
            </div>
        </div>
    );
};

export default CodeModal;

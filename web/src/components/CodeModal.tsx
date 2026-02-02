import React from 'react';
import BaseModal from './BaseModal';
import CodeLoader from './CodeLoader';

interface CodeModalProps {
    url: string;
    title: string;
    onClose: () => void;
}

const CodeModal: React.FC<CodeModalProps> = ({ url, title, onClose }) => {
    return (
        <BaseModal title={title} onClose={onClose}>
            <CodeLoader src={url} customStyle={{ margin: 0, border: 'none', borderRadius: 0 }} />
        </BaseModal>
    );
};

export default CodeModal;

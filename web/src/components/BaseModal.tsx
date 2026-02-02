import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import styles from './BaseModal.module.css';
import classNames from 'classnames';

interface BaseModalProps {
    title?: string;
    onClose: () => void;
    children: React.ReactNode;
    showCloseButton?: boolean;
    floatingCloseButton?: boolean;
    headerContent?: React.ReactNode;
    noHeader?: boolean;
    className?: string; // Modal container class override
    overlayClassName?: string; // Overlay class override
    contentClassName?: string; // Content container class override
    lockBodyScroll?: boolean;
}

const BaseModal: React.FC<BaseModalProps> = ({
    title,
    onClose,
    children,
    showCloseButton = true,
    floatingCloseButton = false,
    headerContent,
    noHeader = false,
    className,
    overlayClassName,
    contentClassName,
    lockBodyScroll = true,
}) => {
    // Handle keyboard events
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    // Body scroll lock and event listener
    useEffect(() => {
        if (lockBodyScroll) {
            document.body.style.overflow = 'hidden';
        }
        globalThis.addEventListener('keydown', handleKeyDown);
        
        return () => {
            if (lockBodyScroll) {
                document.body.style.overflow = 'unset';
            }
            globalThis.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, lockBodyScroll]);

    // Handle overlay keyboard interaction
    const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClose();
        }
    };

    return (
        <div
            className={classNames(styles.overlay, overlayClassName)}
            onClick={onClose}
            onKeyDown={handleOverlayKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={0}
        >
            {floatingCloseButton && (
                <button 
                    className={styles.floatingClose} 
                    onClick={onClose} 
                    title="Close" 
                    aria-label="Close modal"
                >
                    <X size={32} />
                </button>
            )}

            <div 
                className={classNames(styles.modal, className)} 
                onClick={e => e.stopPropagation()} 
                role="document"
            >
                {!noHeader && (
                    <div className={styles.header}>
                        {title && <h3 className={styles.title}>{title}</h3>}
                        {headerContent}
                        {showCloseButton && (
                            <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                                <X size={24} />
                            </button>
                        )}
                    </div>
                )}
                
                <div className={classNames(styles.content, contentClassName)}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseModal;

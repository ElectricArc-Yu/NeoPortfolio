import React from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    fullScreen?: boolean;
    text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
    size = 'medium', 
    color = 'var(--accent-color)',
    fullScreen = false,
    text = 'Loading...'
}) => {
    const sizeMap = {
        small: 24,
        medium: 40,
        large: 60
    };

    const spinnerSize = sizeMap[size];

    if (fullScreen) {
        return (
            <motion.div 
                className={styles.fullScreenContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <div className={styles.spinnerWrapper}>
                    <motion.div
                        className={styles.spinner}
                        style={{ 
                            width: spinnerSize, 
                            height: spinnerSize,
                            borderColor: `${color} transparent transparent transparent`
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    {text && <p className={styles.loadingText}>{text}</p>}
                </div>
            </motion.div>
        );
    }

    return (
        <div className={styles.inlineContainer}>
            <motion.div
                className={styles.spinner}
                style={{ 
                    width: spinnerSize, 
                    height: spinnerSize,
                    borderColor: `${color} transparent transparent transparent`
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            {text && <span className={styles.inlineText}>{text}</span>}
        </div>
    );
};

export default LoadingSpinner;
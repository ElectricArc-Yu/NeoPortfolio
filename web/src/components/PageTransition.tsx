import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1] // Premium cubic-bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
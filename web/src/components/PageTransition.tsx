import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
                duration: 0.2, 
                ease: "easeOut",
                delay: 0.1 // 轻微延迟，避免闪烁
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
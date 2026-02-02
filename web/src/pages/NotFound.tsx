import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import { fadeInUp } from '../utils/variants';

const NotFound: React.FC = () => {
    const { t } = useLanguage();
    return (
        <PageTransition>
            <div style={{
                textAlign: 'center',
                padding: '5rem',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <motion.h1 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '1rem' }}
                >
                    404
                </motion.h1>
                <motion.p 
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}
                >
                    {t('Page Not Found')}
                </motion.p>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                    <NavLink
                        to="/"
                        style={{
                            padding: '0.8rem 1.5rem',
                            backgroundColor: 'var(--accent-color)',
                            color: '#000',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            display: 'inline-block'
                        }}
                    >
                        {t('Return Home')}
                    </NavLink>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default NotFound;

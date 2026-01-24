import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NotFound: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div style={{
            textAlign: 'center',
            padding: '5rem',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t('Page Not Found')}
            </p>
            <NavLink
                to="/"
                style={{
                    padding: '0.8rem 1.5rem',
                    backgroundColor: 'var(--accent-color)',
                    color: '#000',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                }}
            >
                {t('Return Home')}
            </NavLink>
        </div>
    );
};

export default NotFound;

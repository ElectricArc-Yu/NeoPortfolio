import React from 'react';

const PlaceholderImage: React.FC<{ text?: string }> = ({ text = 'No Image' }) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1a1c22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4db6ac', // Accent
            flexDirection: 'column',
            gap: '0.5rem',
            border: '1px dashed rgba(255,255,255,0.1)'
        }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{text}</span>
        </div>
    );
};

export default PlaceholderImage;

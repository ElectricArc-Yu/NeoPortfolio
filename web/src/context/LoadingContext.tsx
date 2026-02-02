import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

interface LoadingContextType {
    isLoading: boolean;
    showLoading: (text?: string) => void;
    hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('Loading...');

    const showLoading = useCallback((text: string = 'Loading...') => {
        setLoadingText(text);
        setIsLoading(true);
    }, []);

    const hideLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
            {isLoading && <LoadingSpinner fullScreen text={loadingText} />}
        </LoadingContext.Provider>
    );
};
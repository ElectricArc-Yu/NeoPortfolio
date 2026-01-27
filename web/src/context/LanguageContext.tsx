import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

import { translations } from '../data/translations';
import type { Language } from '../data/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Determine initial language based on browser settings or stored preference
    const getInitialLanguage = (): Language => {
        const stored = localStorage.getItem('pref-lang') as Language;
        if (stored === 'EN' || stored === 'CN') return stored;

        const browserLang = navigator.language.toLowerCase();
        if (browserLang.includes('zh')) return 'CN';
        return 'EN';
    };

    const [language, setLanguageState] = useState<Language>('CN'); // Initial junk value for SSR safety if needed, or just call helper

    useEffect(() => {
        setLanguageState(getInitialLanguage());
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('pref-lang', lang);
    };

    const t = (key: string) => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <div lang={language === 'CN' ? 'zh-CN' : 'en'}>
            <LanguageContext.Provider value={{ language, setLanguage, t }}>
                {children}
            </LanguageContext.Provider>
        </div>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

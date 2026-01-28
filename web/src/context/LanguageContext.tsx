import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

export type Language = string;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    supportedLanguages: { code: string; label: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const supportedLanguages = siteConfig.i18n.languages;

    const getInitialLanguage = (): Language => {
        const stored = localStorage.getItem('pref-lang');
        if (stored && supportedLanguages.some(l => l.code === stored)) {
            return stored;
        }

        const browserLang = navigator.language.toLowerCase();
        const found = supportedLanguages.find(l =>
            browserLang.includes(l.code.toLowerCase()) ||
            (l.code === 'CN' && browserLang.includes('zh'))
        );

        return found ? found.code : siteConfig.i18n.defaultLanguage;
    };

    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const setLanguage = (lang: Language) => {
        if (supportedLanguages.some(l => l.code === lang)) {
            setLanguageState(lang);
            localStorage.setItem('pref-lang', lang);
        }
    };

    const t = (key: string) => {
        const langData = translations[language];
        if (!langData) return key;
        return langData[key] || key;
    };

    return (
        <div lang={language === 'CN' ? 'zh-CN' : (language === 'JA' ? 'ja' : 'en')}>
            <LanguageContext.Provider value={{ language, setLanguage, t, supportedLanguages }}>
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

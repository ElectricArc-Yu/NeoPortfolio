import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LanguageProvider, useLanguage } from '../src/context/LanguageContext';
import React from 'react';

// Mock siteConfig
vi.mock('../src/data/siteConfig', () => ({
    siteConfig: {
        i18n: {
            defaultLanguage: 'EN',
            languages: [
                { code: 'EN', label: 'English' },
                { code: 'CN', label: '简体中文' },
                { code: 'JA', label: '日本語' }
            ]
        }
    }
}));

// Mock translations
vi.mock('../src/data/translations', () => ({
    translations: {
        EN: { 'hello': 'Hello' },
        CN: { 'hello': '你好' },
        JA: { 'hello': 'こんにちは' }
    }
}));

const TestComponent = () => {
    const { language, setLanguage, t } = useLanguage();
    return (
        <div>
            <span data-testid="lang">{language}</span>
            <span data-testid="trans">{t('hello')}</span>
            <button onClick={() => setLanguage('CN')}>Switch to CN</button>
            <button onClick={() => setLanguage('JA')}>Switch to JA</button>
        </div>
    );
};

describe('LanguageContext', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('provides default language if no preference or browser match', () => {
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        );
        expect(screen.getByTestId('lang').textContent).toBe('EN');
        expect(screen.getByTestId('trans').textContent).toBe('Hello');
    });

    it('detects language from localStorage', () => {
        localStorage.setItem('pref-lang', 'CN');
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        );
        expect(screen.getByTestId('lang').textContent).toBe('CN');
        expect(screen.getByTestId('trans').textContent).toBe('你好');
    });

    it('changes language and updates localStorage', () => {
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        );

        act(() => {
            screen.getByText('Switch to CN').click();
        });

        expect(screen.getByTestId('lang').textContent).toBe('CN');
        expect(localStorage.getItem('pref-lang')).toBe('CN');
    });

    it('detects language from browser navigator', () => {
        // Mock navigator.language
        const spy = vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('zh-CN');

        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        );

        expect(screen.getByTestId('lang').textContent).toBe('CN');
        spy.mockRestore();
    });

    it('throws error if used outside provider', () => {
        // Suppress console.error for this test as React will log the error when it catches it
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

        expect(() => render(<TestComponent />)).toThrow('useLanguage must be used within a LanguageProvider');

        consoleSpy.mockRestore();
    });
});

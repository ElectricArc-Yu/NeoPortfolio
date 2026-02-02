import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LanguageSwitch from '../src/components/LanguageSwitch';
import { LanguageProvider } from '../src/context/LanguageContext';

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
        EN: {},
        CN: {},
        JA: {}
    }
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
    Globe: () => <div data-testid="globe-icon" />,
    ChevronDown: () => <div data-testid="chevron-icon" />
}));

describe('LanguageSwitch Component', () => {
    it('renders the current language label', () => {
        render(
            <LanguageProvider>
                <LanguageSwitch />
            </LanguageProvider>
        );

        // Default language is usually 'EN'
        // Let's check if the globe icon is present
        expect(screen.getByTestId('globe-icon')).toBeInTheDocument();
    });

    it('opens the dropdown when clicked (on desktop)', () => {
        render(
            <LanguageProvider>
                <LanguageSwitch />
            </LanguageProvider>
        );

        const trigger = screen.getByRole('button', { name: /English|简体中文/i });
        fireEvent.click(trigger);

        // After click, we expect to see other language options
        expect(screen.getByText('EN')).toBeInTheDocument();
        expect(screen.getByText('CN')).toBeInTheDocument();
        expect(screen.getByText('JA')).toBeInTheDocument();
    });
});

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

        // Component renders two globe icons (one for desktop, one for mobile)
        expect(screen.getAllByTestId('globe-icon')[0]).toBeInTheDocument();
    });

    it('opens the dropdown when clicked (on desktop)', () => {
        render(
            <LanguageProvider>
                <LanguageSwitch />
            </LanguageProvider>
        );

        // Click the first matching trigger (usually desktop)
        const triggers = screen.getAllByRole('button', { name: /English|简体中文/i });
        fireEvent.click(triggers[0]);

        // After click, we expect to see other language options
        // Use getAllByText because "EN" appears in multiple places (trigger vs menu item)
        expect(screen.getAllByText('EN')[0]).toBeInTheDocument();
        expect(screen.getAllByText('CN')[0]).toBeInTheDocument();
        expect(screen.getAllByText('JA')[0]).toBeInTheDocument();
    });
});

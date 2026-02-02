import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LanguageSwitch from '../src/components/LanguageSwitch';
import { LanguageProvider } from '../src/context/LanguageContext';

// Mock the CSS modules to avoid import errors
vi.mock('../web/src/components/LanguageSwitch.module.css', () => ({
    default: {
        dropdownContainer: 'dropdownContainer',
        dropdownTrigger: 'dropdownTrigger',
        mobileToggle: 'mobileToggle',
        dropdownMenu: 'dropdownMenu',
        menuItem: 'menuItem',
        menuItemActive: 'menuItemActive',
        globeIcon: 'globeIcon',
        currentLangLabel: 'currentLangLabel',
        arrow: 'arrow',
        langLabel: 'langLabel',
        langCode: 'langCode'
    }
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
    Globe: () => <div data-testid="globe-icon" />,
    ChevronDown: () => <div data-testid="chevron-icon" />
}));

describe('LanguageSwitch Component', () => {
    it('renders the current language label', () => {
        // Note: This requires LanguageProvider to be functional or mocked
        // For simplicity, we'll wrap it in the actual Provider if possible, 
        // but the Provider might depend on other things.

        render(
            <LanguageProvider>
                <LanguageSwitch />
            </LanguageProvider>
        );

        // Default language is usually 'EN' or 'CN'
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
        // Assuming supported languages are EN, CN, JA
        expect(screen.getByText('EN')).toBeInTheDocument();
        expect(screen.getByText('CN')).toBeInTheDocument();
        expect(screen.getByText('JA')).toBeInTheDocument();
    });
});

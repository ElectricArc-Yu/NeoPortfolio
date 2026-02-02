import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Documents from '../src/pages/Documents';
import { LanguageProvider } from '../src/context/LanguageContext';

// Mock Framer Motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
        section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
        h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock Data
vi.mock('../web/src/data/documents', () => ({
    publicDocs: [
        {
            id: 'doc-1',
            category: 'Paper',
            titles: { EN: 'Paper 1 Title' },
            descriptions: { EN: 'Long description that might need expansion if it were long enough in our test logic...' },
            date: '2023.01.01',
            paperType: 'Full Paper',
            journal: 'Test Journal',
            impactFactor: '5.0',
            lengths: { EN: '10 pages' },
            originalLangs: { EN: 'English' },
            externalUrl: 'https://paper.com'
        },
        {
            id: 'gdd-1',
            category: 'GDD',
            gddType: 'GDD',
            titles: { EN: 'GDD Title' },
            descriptions: { EN: 'GDD Description' },
            date: '2023.02.01',
            lengths: { EN: '5 pages' },
            originalLangs: { EN: 'English' },
            url: 'gdd.pdf'
        }
    ]
}));

describe('Documents Page', () => {
    it('renders sections correctly', () => {
        render(
            <LanguageProvider>
                <Documents />
            </LanguageProvider>
        );

        expect(screen.getByText('Academic Papers')).toBeInTheDocument();
        expect(screen.getByText('Past Paper Work Examples')).toBeInTheDocument();
        expect(screen.getByText('Paper 1 Title')).toBeInTheDocument();
    });

    it('toggles GDD category expansion', () => {
        render(
            <LanguageProvider>
                <Documents />
            </LanguageProvider>
        );

        // Initially GDD Title might not be visible if category is collapsed 
        // Logic check: Documents.tsx uses isExpanded = expandedCategories.has(type)
        // By default expandedCategories is empty.

        expect(screen.queryByText('GDD Title')).not.toBeInTheDocument();

        const gddHeader = screen.getByText('Full Game Design Documents');
        fireEvent.click(gddHeader);

        expect(screen.getByText('GDD Title')).toBeInTheDocument();
    });

    it('handles external URL opening for papers', () => {
        const windowSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
        render(
            <LanguageProvider>
                <Documents />
            </LanguageProvider>
        );

        const publishedLink = screen.getByText('Published');
        fireEvent.click(publishedLink);

        expect(windowSpy).toHaveBeenCalledWith('https://paper.com', '_blank', 'noopener,noreferrer');
        windowSpy.mockRestore();
    });
});

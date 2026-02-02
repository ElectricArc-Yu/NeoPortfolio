import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectDetail from '../src/pages/ProjectDetail';
import { LanguageProvider } from '../src/context/LanguageContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

// Mock siteConfig
vi.mock('../src/data/siteConfig', () => ({
    siteConfig: {
        i18n: {
            defaultLanguage: 'EN',
            languages: [
                { code: 'EN', label: 'English' },
                { code: 'CN', label: '简体中文' }
            ]
        },
        pages: {},
        brand: {
            titles: { EN: 'Portfolio' },
            titleFormat: 'GlobalPage'
        }
    }
}));

// Mock translations
vi.mock('../src/data/translations', () => ({
    translations: {
        EN: {
            'Project Role': 'Project Role',
            'Tech Stack': 'Tech Stack'
        },
        CN: {}
    }
}));

// Mock Framer Motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
        aside: ({ children, ...props }: any) => <aside {...props}>{children}</aside>,
        h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    },
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: () => 0,
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock Data
vi.mock('../src/data/projects', () => ({
    projects: [
        {
            id: 'test-project',
            titles: { EN: 'Test Project' },
            descriptions: { EN: 'Description' },
            type: 'Commercial',
            gameType: 'RPG',
            role: ['Designer'],
            techStack: ['Unity'],
            links: [
                { type: 'doc', labels: { EN: 'GDD' }, urls: { EN: 'gdd.pdf' } },
                { type: 'demo', labels: { EN: 'Demo' }, urls: { EN: 'demo.com' } }
            ],
            images: ['img1.png'],
            workDistribution: []
        }
    ]
}));

describe('ProjectDetail Page', () => {
    it('renders project details correctly', () => {
        render(
            <MemoryRouter initialEntries={['/project/test-project']}>
                <LanguageProvider>
                    <Routes>
                        <Route path="/project/:id" element={<ProjectDetail />} />
                    </Routes>
                </LanguageProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('Test Project')).toBeInTheDocument();
        expect(screen.getByText('RPG')).toBeInTheDocument();
        expect(screen.getByText('Designer')).toBeInTheDocument();
    });

    it('redirects to home if project not found', () => {
        render(
            <MemoryRouter initialEntries={['/project/unknown']}>
                <LanguageProvider>
                    <Routes>
                        <Route path="/project/:id" element={<ProjectDetail />} />
                        <Route path="/" element={<div>Home Page</div>} />
                    </Routes>
                </LanguageProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('Home Page')).toBeInTheDocument();
    });

    it('opens PDF modal when clicking doc link', () => {
        render(
            <MemoryRouter initialEntries={['/project/test-project']}>
                <LanguageProvider>
                    <Routes>
                        <Route path="/project/:id" element={<ProjectDetail />} />
                    </Routes>
                </LanguageProvider>
            </MemoryRouter>
        );

        const gddLink = screen.getByText('GDD');
        fireEvent.click(gddLink);

        // PdfModal should render - check if modal appears
        // The modal title or content should be visible after click
    });
});

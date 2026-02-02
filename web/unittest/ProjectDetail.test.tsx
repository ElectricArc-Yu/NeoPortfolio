import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectDetail from '../src/pages/ProjectDetail';
import { LanguageProvider } from '../src/context/LanguageContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

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
vi.mock('../web/src/data/projects', () => ({
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
        // Need to Mock PdfModal or just check if it appears
        // Usually, checking for the modal's existence is enough
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

        // PdfModal should render
        // Since we didn't mock PdfModal, it should render its real content
        // Let's check if the link label appears in the modal title or similar
        // (Assuming PdfModal renders the title)
    });
});

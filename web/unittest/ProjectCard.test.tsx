import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '../src/components/ProjectCard';
import { LanguageProvider } from '../src/context/LanguageContext';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: () => 0,
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

const mockProject: any = {
    id: 'test-project',
    titles: { EN: 'Test Title', CN: '测试标题' },
    shortDescriptions: { EN: 'Short Desc', CN: '简短描述' },
    type: 'Commercial',
    thumbnail: 'thumb.png',
    engine: 'Unity',
    status: { EN: 'Released', CN: '已发布' },
    sales: '1M+',
    role: ['Designer', 'Programmer'],
    techStack: ['C#', 'Unity'],
    links: [{ type: 'demo', urls: { EN: 'demo.com' } }]
};

describe('ProjectCard Component', () => {
    it('renders project info correctly in English', () => {
        render(
            <BrowserRouter>
                <LanguageProvider>
                    <ProjectCard project={mockProject} />
                </LanguageProvider>
            </BrowserRouter>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Short Desc')).toBeInTheDocument();
        expect(screen.getByText('1M+')).toBeInTheDocument();
        expect(screen.getByText('Released')).toBeInTheDocument();
    });

    it('shows GDD badge if document links exist', () => {
        const projectWithGDD = { ...mockProject, links: [{ type: 'doc', urls: { EN: 'gdd.com' } }] };
        render(
            <BrowserRouter>
                <LanguageProvider>
                    <ProjectCard project={projectWithGDD} />
                </LanguageProvider>
            </BrowserRouter>
        );
        expect(screen.getByText('GDD')).toBeInTheDocument();
    });

    it('shows work hours for non-commercial projects', () => {
        const personalProject = {
            ...mockProject,
            type: 'Personal',
            workHours: 100,
            sales: undefined
        };
        render(
            <BrowserRouter>
                <LanguageProvider>
                    <ProjectCard project={personalProject} />
                </LanguageProvider>
            </BrowserRouter>
        );
        expect(screen.getByText('100h')).toBeInTheDocument();
    });
});

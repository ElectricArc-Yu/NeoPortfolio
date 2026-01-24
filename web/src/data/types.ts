export type ProjectType = 'Commercial' | 'Personal' | 'Miscellaneous';
export type Engine = 'Unity' | 'Unreal' | 'Python' | 'Other';
export type GameType = 'Action' | 'RPG' | 'Strategy' | 'Puzzle' | 'Simulation' | 'Survival' | 'Platformer' | 'Tool' | 'Analysis' | 'Other';

export interface ProjectLink {
    labelCN: string;
    labelEN: string;
    urlCN?: string;
    urlEN?: string; // If different, or fallback
    type: 'repo' | 'demo' | 'doc' | 'video';
}

export interface Project {
    id: string;
    title: string;
    type: ProjectType;
    showPriority: number; // Higher number = shown first
    engine: Engine; // For icon display
    gameType?: GameType; // For colored tag on cards
    role: string[]; // e.g. ["Design", "Program"]
    techStack: string[]; // e.g. ["Unity", "C#"]
    thumbnail: string;
    shortDescriptionCN: string;
    shortDescriptionEN: string;

    // Localized Fields
    platformCN?: string;
    platformEN?: string;
    durationCN?: string;
    durationEN?: string;
    teamSizeCN?: string;
    teamSizeEN?: string;

    // Metrics
    workHours?: number; // For personal projects
    sales?: string; // For commercial projects

    // Detail Page Data
    descriptionCN: string; // Markdown supported
    descriptionEN: string;
    images: string[];
    video?: string; // Optional single video URL for carousel (2nd slot)
    videos?: { type: 'youtube' | 'local', src: string, title?: string }[];
    workDistribution?: { label: string, percentage: number }[]; // For Pie Chart
    links: ProjectLink[];

    // GDD Integration
    gddPdfUrl?: string; // Path to PDF
}

export interface MediaItem {
    id: string;
    title: string; // One common title
    type: 'video' | 'podcast' | 'analysis';
    carrier: 'Bilibili' | 'YouTube' | 'Local' | 'XiaoYuZhou' | 'Other';
    language: 'Chinese' | 'English' | 'Mixed';
    url: string;
    thumbnail?: string;
    descriptionCN: string;
    descriptionEN: string;
    date: string;
    isCollection: boolean;
    duration?: string; // For single episodes
    episodesCount?: number; // For collections
}

export interface ResumeData {
    header: {
        name: string;
        email: string;
        phone: string;
        role: string;
        links: { label: string; url: string }[];
    };
    // Define structure similar to the Latex file
    about: {
        cn: string;
        en: string;
    };
    experience: {
        companyCN: string;
        companyEN: string;
        roleCN: string;
        roleEN: string;
        period: string;
        sizeCN: string;
        sizeEN: string;
        detailsCN: string[];
        detailsEN: string[];
    }[];
    education: {
        period: string;
        schoolCN: string;
        schoolEN: string;
        degreeCN: string;
        degreeEN: string;
        gpa?: string;
        awards?: string[];
    }[];
    skills: {
        category: string;
        categoryCN: string;
        items: string[];
    }[];
}

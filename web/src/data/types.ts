export type ProjectType = 'Commercial' | 'Personal' | 'Miscellaneous';
export type Engine = 'Unity' | 'Unreal' | 'Python' | 'Other';
export type GameType = 'Action' | 'RPG' | 'Strategy' | 'Puzzle' | 'Web Site' | 'Simulation' | 'Survival' | 'Horror' | 'Platformer' | 'Tool' | 'Analysis' | 'Visual Novel' | 'Action RPG' | 'FPS' | 'Hero Shooter' | 'World-building' | 'IP Framework' | 'SoC' | 'Other';

/**
 * Generic localized structure
 */
export type Localized<T = string> = Record<string, T>;

/**
 * Translation dictionary structure
 */
export type Translations = Localized<Localized<string>>;

export interface MainProject {
    id: string;
    titles: Localized;
    descriptions?: Localized;
    gameType?: GameType | GameType[];
}

export interface ProjectLink {
    labels: Localized;
    urls: Localized; // Usually same URL, but can vary by language
    type: 'repo' | 'demo' | 'doc' | 'video' | 'Release Page' | 'waitlist';
}

export interface Project {
    id: string;
    mainProjectId?: string;
    titles: Localized;
    timelineTitles?: Localized;
    type: ProjectType;
    showPriority: number;
    engine: Engine;
    gameType?: GameType | GameType[];
    role: string[];
    techStack: string[];
    thumbnail: string;
    shortDescriptions: Localized;
    introduces?: Localized;

    // Localized Fields
    platforms?: Localized;
    durations?: Localized;
    startDate?: string;
    endDate?: string | 'Present';
    teamSizes?: Localized;

    // Metrics
    workHours?: number;
    sales?: string;
    prices?: Localized;

    // Detail Page Data
    status?: Localized;
    descriptions: Localized; // Markdown supported
    images: string[];
    video?: string;
    videos?: { type: 'youtube' | 'local', src: string, title?: string }[];
    workDistribution?: { labels: Localized, percentage: number }[];
    links: ProjectLink[];

    // GDD Integration
    gddPdfUrl?: string;
}

export type MediaPlatform = 'Bilibili' | 'YouTube' | 'XiaoYuZhou' | 'Gcores' | 'GameRes' | 'Podcast' | 'Local' | 'Other';

export interface PlatformLink {
    platform: MediaPlatform;
    urls: Localized;
    labels?: Localized; // If labels start with %X%, it's a styled label.
}

export interface MediaEpisode {
    id: string;
    episodeNumber: string;
    type?: ('video' | 'article') | ('video' | 'article')[];
    titles: Localized;
    descriptions?: Localized;
    date: string;
    duration?: string;
    thumbnail?: string;
    links: PlatformLink[];
    isPublished?: boolean;
    scheduledDate?: string;
}

export interface PodcastEpisode {
    id: string;
    episodeNumber: string;
    titles: Localized;
    isPublished?: boolean;
    scheduledDate?: string;
}

export interface MediaSeries {
    id: string;
    seriesNames: Localized;
    type: 'video-series' | 'podcast-series';
    seriesBadges?: string[];
    languages: string[];
    descriptions: Localized;
    thumbnail?: string;
    episodes?: MediaEpisode[];
    mainLinks?: PlatformLink[];
    podcastEpisodes?: PodcastEpisode[];
    episodesCount?: number;
}

export interface MediaItem {
    id: string;
    titles: Localized;
    type: 'video' | 'podcast' | 'analysis';
    carrier: 'Bilibili' | 'YouTube' | 'Local' | 'XiaoYuZhou' | 'Other';
    languages: string[];
    url: string;
    thumbnail?: string;
    descriptions: Localized;
    date: string;
    isCollection: boolean;
    duration?: string;
    episodesCount?: number;
}

export interface ResumeData {
    header: {
        names: Localized;
        email: string;
        phone?: string;
        roles: Localized;
        links: { labels: Localized; urls: Localized }[];
    };
    about: Localized;
    experience: {
        companies: Localized;
        roles: Localized;
        period: string;
        sizes: Localized;
        details: Localized<string[]>;
    }[];
    education: {
        period: string;
        schools: Localized;
        degrees: Localized;
        gpa?: string;
        awards?: string[];
    }[];
    certifications?: {
        id: string;
        abbreviation?: string;
        titles: Localized;
        date: string;
        url?: string;
        pdfUrl?: string;
        icon?: string;
        highlight?: boolean;
    }[];
    skills: {
        category: string;
        categories: Localized;
        items: { name: string; highlight?: boolean }[];
    }[];
    cta?: {
        texts: Localized;
        link: string;
    };
}

export type DocCategory = 'GDD' | 'Paper' | 'Lecture';
export type PaperType = 'Letter' | 'Paper' | 'Full Paper' | 'Preprint' | 'Technical Report';
export type GDDType = 'Test' | 'Analysis' | 'Methodology' | 'GDD';

export interface PublicDoc {
    id: string;
    titles: Localized;
    date: string;
    descriptions: Localized; // Abstract
    url?: string; // PDF for internal docs
    externalUrl?: string; // Published page link

    category: DocCategory;
    gddType?: GDDType;
    originalLangs: Localized;
    lengths: Localized;
    isInternal: boolean;
    targetPositions?: Localized;

    paperType?: PaperType;
    journal?: string;
    impactFactor?: string;
    preprintUrl?: string;
}

/**
 * Service item for the Services page
 */
export interface ServiceItem {
    id: string;
    titles: Localized;
    descriptions: Localized;
    icon?: string;
}

/**
 * Services page data structure
 */
export interface ServicesData {
    intro: Localized;
    aboutTitle: Localized;
    aboutContent: Localized;
    sectionTitle: Localized;
    ctaText: Localized;
    items: ServiceItem[];
}

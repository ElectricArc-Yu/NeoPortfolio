export type ProjectType = 'Commercial' | 'Personal' | 'Miscellaneous';
export type Engine = 'Unity' | 'Unreal' | 'Python' | 'Other';
export type GameType = 'Action' | 'RPG' | 'Strategy' | 'Puzzle' | 'Web Site' | 'Simulation' | 'Survival' | 'Horror' | 'Platformer' | 'Tool' | 'Analysis' | 'Visual Novel' | 'Action RPG' | 'FPS' | 'Hero Shooter' | 'World-building' | 'IP Framework' | 'SoC' | 'Other';

export interface MainProject {
    id: string;
    titleCN: string;
    titleEN: string;
    descriptionCN?: string;
    descriptionEN?: string;
    gameType?: GameType | GameType[];
}

export interface ProjectLink {
    labelCN: string;
    labelEN: string;
    urlCN?: string;
    urlEN?: string; // If different, or fallback
    type: 'repo' | 'demo' | 'doc' | 'video' | 'Release Page';
}

export interface Project {
    id: string;
    mainProjectId?: string; // Link to a MainProject
    title: string;
    titleCN: string;
    titleEN: string;
    timelineTitleCN?: string; // Optional: separate title for resume timeline
    timelineTitleEN?: string;
    type: ProjectType;
    showPriority: number; // Higher number = shown first
    engine: Engine; // For icon display
    gameType?: GameType | GameType[]; // For colored tag on cards
    role: string[]; // e.g. ["Design", "Program"]
    techStack: string[]; // e.g. ["Unity", "C#"]
    thumbnail: string;
    shortDescriptionCN: string;
    shortDescriptionEN: string;
    introduceCN?: string; // For Project Introduce section
    introduceEN?: string;

    // Localized Fields
    platformCN?: string;
    platformEN?: string;
    durationCN?: string;
    durationEN?: string;
    startDate?: string; // YYYY.MM
    endDate?: string | 'Present';   // YYYY.MM or 'Present'
    teamSizeCN?: string;
    teamSizeEN?: string;

    // Metrics
    workHours?: number; // For personal projects
    sales?: string; // For commercial projects
    priceCN?: string; // e.g. "¥48"
    priceEN?: string; // e.g. "$9.99"

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

// Platform types for media links
export type MediaPlatform = 'Bilibili' | 'YouTube' | 'XiaoYuZhou' | 'Gcores' | 'GameRes' | 'Podcast' | 'Local' | 'Other';

// Link to a specific platform
export interface PlatformLink {
    platform: MediaPlatform;
    url: string;
    label?: string; // Optional custom label
}

// Single episode/video in a series
export interface MediaEpisode {
    id: string;
    episodeNumber: string; // e.g., "00", "01", "02"
    type?: ('video' | 'article') | ('video' | 'article')[]; // Allow single or multiple types
    titleCN: string;
    titleEN: string;
    descriptionCN?: string;
    descriptionEN?: string;
    date: string;
    duration?: string;
    thumbnail?: string;
    links: PlatformLink[]; // Multiple platform links
    isPublished?: boolean; // Default true, set false for unreleased
    scheduledDate?: string; // Expected release date for unreleased content
}

// Podcast episode (simpler, just for listing)
export interface PodcastEpisode {
    id: string;
    episodeNumber: string;
    titleCN: string;
    titleEN: string;
    isPublished?: boolean; // Default true, set false for unreleased
    scheduledDate?: string; // Expected release date for unreleased content
}

// A media series (collection of episodes)
export interface MediaSeries {
    id: string;
    seriesNameCN: string;
    seriesNameEN: string;
    type: 'video-series' | 'podcast-series';
    seriesBadges?: string[]; // Optional explicit badges for the series header (e.g., ["Video", "Article"])
    language: 'Chinese' | 'English' | 'Mixed';
    descriptionCN: string;
    descriptionEN: string;
    thumbnail?: string;
    // For video series: individual episodes with their own links
    episodes?: MediaEpisode[];
    // For podcast series: main link + episode list
    mainLinks?: PlatformLink[];
    podcastEpisodes?: PodcastEpisode[];
    episodesCount?: number; // Total count if not listing all
}

// Legacy MediaItem for backwards compatibility (demo videos, etc.)
export interface MediaItem {
    id: string;
    title: string;
    type: 'video' | 'podcast' | 'analysis';
    carrier: 'Bilibili' | 'YouTube' | 'Local' | 'XiaoYuZhou' | 'Other';
    language: 'Chinese' | 'English' | 'Mixed';
    url: string;
    thumbnail?: string;
    descriptionCN: string;
    descriptionEN: string;
    date: string;
    isCollection: boolean;
    duration?: string;
    episodesCount?: number;
}

export interface ResumeData {
    header: {
        name: {
            cn: string;
            en: string;
        };
        email: string;
        phone?: string;
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
        items: { name: string; highlight?: boolean }[];
    }[];
    cta?: {
        textCN: string;
        textEN: string;
        link: string;
    };
}

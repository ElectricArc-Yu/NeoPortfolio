
export type SiteStatus = 'WIP' | 'Launched' | 'OutDated';

export interface SiteConfig {
    /**
     * The target status of the site. 
     * Even if set to 'WIP' or 'Launched', it will automatically switch to 'OutDated'
     * if the current date is after the autoOutdatedDate.
     */
    status: SiteStatus;
    /**
     * The date when the site status automatically changes to 'OutDated'.
     * Format: YYYY-MM-DD
     */
    autoOutdatedDate: string;
    /**
     * Display labels for each status (CN/EN)
     */
    statusLabels: Record<SiteStatus, { cn: string, en: string, color: string }>;
    /**
     * Footer configuration
     */
    footer: {
        owner: string;
        year: string;
        disclaimerCN: string;
        disclaimerEN: string;
        subFooterCN?: string;
        subFooterEN?: string;
    };
    contact: {
        email: string;
    };
    pages: {
        home: {
            titleCN: string;
            titleEN: string;
            subtitleCN: string;
            subtitleEN: string;
        };
        media: {
            titleCN: string;
            titleEN: string;
            subtitleCN: string;
            subtitleEN: string;
        };
        resume: {
            titleCN: string;
            titleEN: string;
            subtitleCN: string;
            subtitleEN: string;
        };
    };
}

export const siteConfig: SiteConfig = {
    status: 'Launched',
    autoOutdatedDate: '2026-06-30',
    statusLabels: {
        WIP: { cn: '开发中', en: 'WIP', color: '#f59e0b' },
        Launched: { cn: '正式版', en: 'Launched', color: '#10b981' },
        OutDated: { cn: '旧版本', en: 'Outdated', color: '#6b7280' }
    },
    footer: {
        owner: 'YuChenhaoran',
        year: '2026',
        disclaimerCN: 'All Rights Reserved.',
        disclaimerEN: 'All Rights Reserved.',
        subFooterCN: '',
        subFooterEN: ''
    },
    contact: {
        email: 'yuchenhaoran@preludegames.com'
    },
    pages: {
        home: {
            titleCN: '于陈浩然',
            titleEN: 'Yu Chenhaoran',
            subtitleCN: '游戏设计师 & 游戏开发者',
            subtitleEN: 'Game Designer & Game Developer'
        },
        media: {
            titleCN: '媒体与内容',
            titleEN: 'Media & Content',
            subtitleCN: '游戏设计分析、演示视频与自媒体内容展示。',
            subtitleEN: 'Game design analysis, showcase videos, and media content.'
        },
        resume: {
            titleCN: '于陈浩然',
            titleEN: 'Yu Chenhaoran',
            subtitleCN: '游戏设计师',
            subtitleEN: 'Game Designer'
        }
    }
};

/**
 * Utility to get the computed current status based on the system date.
 */
export const getComputedStatus = (): SiteStatus => {
    const today = new Date();
    const threshold = new Date(siteConfig.autoOutdatedDate);

    // If current time is past the threshold, always return OutDated
    if (today > threshold) {
        return 'OutDated';
    }

    return siteConfig.status;
};

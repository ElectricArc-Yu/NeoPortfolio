
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
}

export const siteConfig: SiteConfig = {
    status: 'Launched', // Current intended status
    autoOutdatedDate: '2026-06-30', // Auto-switch threshold
    statusLabels: {
        WIP: { cn: '开发中', en: 'WIP', color: '#f59e0b' },
        Launched: { cn: '正式版', en: 'Launched', color: '#10b981' },
        OutDated: { cn: '旧版本', en: 'Outdated', color: '#6b7280' }
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

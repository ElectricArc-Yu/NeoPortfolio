
export type SiteStatus = 'WIP' | 'Launched' | 'OutDated';

export interface SiteConfig {
    i18n: {
        languages: { code: string; label: string }[];
        defaultLanguage: string;
    };
    status: SiteStatus;
    autoOutdatedDate: string;
    statusLabels: Record<SiteStatus, { labels: Record<string, string>, color: string }>;
    footer: {
        owner: string;
        year: string;
        disclaimers: Record<string, string>;
        subFooters?: Record<string, string>;
    };
    contact: {
        email: string;
    };
    pages: {
        [key: string]: {
            titles: Record<string, string>;
            subtitles: Record<string, string>;
        };
    };
}

export const siteConfig: SiteConfig = {
    i18n: {
        languages: [
            { code: 'CN', label: '中文' },
            { code: 'EN', label: 'English' },
            { code: 'JA', label: '日本語' }
        ],
        defaultLanguage: 'CN'
    },
    status: 'Launched',
    autoOutdatedDate: '2026-06-30',
    statusLabels: {
        WIP: { labels: { CN: '开发中', EN: 'WIP', JA: '開発中' }, color: '#f59e0b' },
        Launched: { labels: { CN: '正式版', EN: 'Launched', JA: '正式版' }, color: '#10b981' },
        OutDated: { labels: { CN: '旧版本', EN: 'Outdated', JA: '旧バージョン' }, color: '#6b7280' }
    },
    footer: {
        owner: 'YuChenhaoran',
        year: '2026',
        disclaimers: {
            CN: 'All Rights Reserved.',
            EN: 'All Rights Reserved.',
            JA: 'All Rights Reserved.'
        },
        subFooters: {
            CN: '',
            EN: '',
            JA: ''
        }
    },
    contact: {
        email: 'yuchenhaoran@preludegames.com'
    },
    pages: {
        home: {
            titles: { CN: '于陈浩然', EN: 'Yu Chenhaoran', JA: 'Yu Chenhaoran' },
            subtitles: {
                CN: '游戏设计师 & 游戏开发者',
                EN: 'Game Designer & Game Developer',
                JA: 'ゲームデザイナー & ゲーム開発者'
            }
        },
        media: {
            titles: { CN: '媒体与内容', EN: 'Media & Content', JA: 'メディア & コンテンツ' },
            subtitles: {
                CN: '游戏设计分析、演示视频与自媒体内容展示。',
                EN: 'Game design analysis, showcase videos, and media content.',
                JA: 'ゲームデザイン分析、デモビデオ、メディアコンテンツ。'
            }
        },
        resume: {
            titles: { CN: '于陈浩然', EN: 'Yu Chenhaoran', JA: 'Yu Chenhaoran' },
            subtitles: { CN: '游戏设计师', EN: 'Game Designer', JA: 'ゲームデザイナー' }
        },
        contact: {
            titles: { CN: '联系我', EN: 'Contact Me', JA: 'お問い合わせ' },
            subtitles: {
                CN: '如果您有任何项目合作或咨询，欢迎通过以下方式联系。',
                EN: 'If you have any project collaboration or inquiries, feel free to contact me.',
                JA: 'プロジェクトのコラボレーションやお問い合わせなど、お気軽にご連絡ください。'
            }
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

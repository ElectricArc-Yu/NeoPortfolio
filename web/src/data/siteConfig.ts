
export type SiteStatus = 'WIP' | 'Launched' | 'OutDated';
export type TitleFormat = 'GlobalPage' | 'PageGlobal' | 'GlobalOnly' | 'PageOnly';

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
            gddTypeDescriptions?: Record<string, Record<string, string>>;
            favicon?: string;
        };
    };
    brand: {
        titles: Record<string, string>;
        favicon: string;
        titleFormat: TitleFormat;
    };
    loader: {
        displayName: string;
        welcomeMessage: string;
    };
}

export const siteConfig: SiteConfig = {
    i18n: {
        languages: [
            { code: 'CN', label: '中文' },
            { code: 'EN', label: 'English' },
            { code: 'JA', label: '日本語' }
        ],
        defaultLanguage: 'EN'
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
        email: 'yu.chr@prelude.games'
    },
    pages: {
        services: {
            titles: { CN: '服务', EN: 'Services', JA: 'サービス' },
            subtitles: {
                CN: '提供专业的游戏设计与咨询服务',
                EN: 'Providing professional game design & consultancy services',
                JA: 'プロフェッショナルなゲームデザインとコンサルティングサービスを提供'
            },
            favicon: '/NeoPortfolio/services.ico'
        },
        home: {
            titles: { CN: '作品集', EN: 'Portfolio', JA: 'ポートフォリオ' },
            subtitles: {
                CN: '游戏设计师 & 游戏开发者',
                EN: 'Game Designer & Game Developer',
                JA: 'ゲームデザイナー & ゲーム開発者'
            }
        },
        media: {
            titles: { CN: '媒体', EN: 'Media', JA: 'メディア' },
            subtitles: {
                CN: '游戏设计分析、演示视频与自媒体内容展示。',
                EN: 'Game design analysis, showcase videos, and media content.',
                JA: 'ゲームデザイン分析、デモビデオ、メディアコンテンツ。'
            }
        },
        resume: {
            titles: { CN: '简历', EN: 'Resume', JA: 'レジュメ' },
            subtitles: { CN: '游戏设计师', EN: 'Game Designer', JA: 'ゲームデザイナー' }
        },
        contact: {
            titles: { CN: '联系我', EN: 'Contact', JA: 'お問い合わせ' },
            subtitles: {
                CN: '如果您有任何项目合作或咨询，欢迎通过以下方式联系。',
                EN: 'If you have any project collaboration or inquiries, feel free to contact me.',
                JA: 'プロジェクトのコラボレーションやお問い合わせなど、お気軽にご連絡ください。'
            }
        },
        documents: {
            titles: { CN: '写作与演讲', EN: 'Writing & Lectures', JA: '執筆と講演' },
            subtitles: {
                CN: '包含可公开的设计文档、分析文章、学术论文及演讲记录。',
                EN: 'Collection of publicable Game Design Documents, Analysis Articles, Academic Papers & Lectures.',
                JA: '公開可能なゲームデザインドキュメント、分析記事、学術論文、講演記録のコレクション。'
            },
            gddTypeDescriptions: {}
        },
        community: {
            titles: { CN: '新创造者工会', EN: 'The New Creator Guild', JA: '新人クリエイター・ギルド' },
            subtitles: {
                CN: '新人创造者工会：纯粹的创造者集结地。',
                EN: 'The Creator Guild: A place for pure creators.',
                JA: '新人クリエイター・ギルド：純粋なクリエイターの集いの場。'
            }
        }
    },
    brand: {
        titles: {
            CN: "于陈浩然",
            EN: "Yu Chenhaoran",
            JA: "于陳浩然"
        },
        favicon: '/NeoPortfolio/webicon.ico',
        titleFormat: 'GlobalPage'
    },
    loader: {
        displayName: 'Yu Chenhaoran',
        welcomeMessage: 'Welcome to Electric Arc\'s World'
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

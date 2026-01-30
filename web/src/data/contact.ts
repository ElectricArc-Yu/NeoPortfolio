import React from 'react';
import { Briefcase, Users, MonitorSmartphone, Handshake, Compass } from 'lucide-react';
import type { Localized } from './types';

export interface ContactSection {
    id: string;
    iconName: 'Briefcase' | 'Users' | 'MonitorSmartphone' | 'Handshake' | 'Compass';
    titles: Localized;
    descriptions: Localized;
    subjects: Localized;
    bodies: Localized;
}

export const contactData: ContactSection[] = [
    {
        id: 'consultancy',
        iconName: 'Compass',
        titles: { CN: '预研与架构咨询', EN: 'R&D & Architecture Strategy', JA: 'R&D・アーキテクチャ戦略' },
        descriptions: {
            CN: '专注于在高度不确定性中寻找确定路径。擅长将混乱的创意现实转化为有序、可执行的工程管线与系统架构。从混沌到秩序。',
            EN: 'Specializing in identifying certain paths within uncertainty. Expert at transforming chaotic creative realities into orderly, executable engineering pipelines and system architectures. From Chaos to Order.',
            JA: '高度な不確実性の中から確実な道筋を見つけ出すことに特化。混沌としたアイデアを、秩序ある実行可能なエンジニアリングパイプラインとシステム構造に変換します。'
        },
        subjects: {
            CN: '咨询请求: [预研/架构/管线难题]',
            EN: 'Consultancy Request: [R&D/Architecture/Pipeline Challenge]',
            JA: 'コンサルティング依頼: [R&D/アーキテクチャ/パイプライン]'
        },
        bodies: {
            CN: '你好 于陈浩然，\n\n我们目前处于 [项目阶段] 的混沌期，面临关于 [具体难题] 的高度不确定性。\n\n我们需要你协助梳理出一条可依赖、可执行的开发路径。',
            EN: 'Hi Yu Chenhaoran,\n\nWe are currently navigating the chaos of [Project Stage] and facing high uncertainty regarding [Specific Issue].\n\nWe need your assistance to establish a reliable and executable development path.',
            JA: '于陳浩然様、\n\n現在[プロジェクトの段階]における混沌とした状況にあり、[具体的な課題]に関する高い不確実性に直面しています。\n\n信頼できる実行可能な開発パスを確立するために、あなたの支援が必要です。'
        }
    },
    {
        id: 'business',
        iconName: 'Handshake',
        titles: { CN: '商务合作', EN: 'Business Partnership', JA: 'ビジネス提携' },
        descriptions: {
            CN: '针对 Prelude Games 的商务洽谈。开放发行、投资及战略联盟合作。',
            EN: 'Partnership inquiries regarding Prelude Games. Open to Publishing, Investment, and Strategic Alliances.',
            JA: 'Prelude Gamesに関するビジネス提携。パブリッシング、投資、戦略的アライアンスについて。'
        },
        subjects: {
            CN: '商务洽谈: [公司名] x Prelude Games',
            EN: 'Partnership Proposal: [Company Name] x Prelude Games',
            JA: 'ビジネス提携のご提案: [貴社名] x Prelude Games'
        },
        bodies: {
            CN: '你好 Prelude Games 团队，\n\n我是 [公司/职位]，我们看到了双方在 [领域] 的合作潜力，希望讨论...',
            EN: 'Hi Prelude Games Team,\n\nI represent [Company/Role]. We see potential synergy in [Area] and would like to discuss...',
            JA: 'Prelude Gamesチーム様、\n\n[貴社名/役職]の者です。[分野]における双方の協力の可能性を感じており、...についてお話ししたいと考えております。'
        }
    },
    {
        id: 'collaboration',
        iconName: 'Users',
        titles: { CN: '学术与项目共创', EN: 'Research & Collaboration', JA: '研究・プロジェクト協力' },
        descriptions: {
            CN: '开放学术研究合作、跨国独立游戏联合开发及实验性 Game Jam 项目。',
            EN: 'Open to Academic Research collaboration, Cross-border Indie Co-dev, and Experimental Game Jams.',
            JA: '学術研究協力、国際的なインディーゲーム共同開発、実験的なGame Jamプロジェクトを受け付けています。'
        },
        subjects: {
            CN: '共创提案: [主题/项目名]',
            EN: 'Collaboration Proposal: [Topic/Project Name]',
            JA: '共創のご提案: [テーマ/プロジェクト名]'
        },
        bodies: {
            CN: '你好 于陈浩然，\n\n我对你的 [论文/项目] 很感兴趣，希望探讨关于 [主题] 的潜在合作机会。',
            EN: 'Hi Yu Chenhaoran,\n\nI was intrigued by your [Paper/Project] and would like to explore potential collaboration on [Topic].',
            JA: '于陳浩然様、\n\nあなたの[論文/プロジェクト]に興味を持ちました。[テーマ]に関する協力の可能性についてお話しできますでしょうか。'
        }
    },
    {
        id: 'job',
        iconName: 'Briefcase',
        titles: { CN: '全职聘用', EN: 'Full-time Engagement', JA: '正社員採用' },
        descriptions: {
            CN: '仅针对高影响力项目（主策划/资深设计职位）开放全职聘用讨论。',
            EN: 'Open to full-time engagement discussions only for high-impact projects (Lead/Senior Design roles).',
            JA: '高インパクトなプロジェクト（リード/シニアデザイナー職）に限り、正社員としての参画を検討します。'
        },
        subjects: {
            CN: '聘用邀约: [公司名称] - [职位]',
            EN: 'Role Opportunity: [Company Name] - [Position]',
            JA: '採用オファー: [会社名] - [職種]'
        },
        bodies: {
            CN: '你好 于陈浩然，\n\n我们要解决一个极具挑战性的 [项目目标]，认为你的专业背景非常契合 [职位名称]。\n\n是否有兴趣聊聊？',
            EN: 'Hi Yu Chenhaoran,\n\nWe are aiming to solve a challenging goal in [Project Context] and believe your expertise fits the [Role Name] perfectly.\n\nAre you open for a discussion?',
            JA: '于陳浩然様、\n\n私たちは[プロジェクトの目標]という困難な課題に取り組んでおり、あなたの専門性が[職種名]に最適だと考えています。\n\n一度お話しさせていただけますでしょうか？'
        }
    }

];

export const getContactIcon = (iconName: string): React.ReactNode => {
    switch (iconName) {
        case 'Briefcase':
            return React.createElement(Briefcase, { size: 28 });
        case 'Users':
            return React.createElement(Users, { size: 28 });
        case 'Handshake':
            return React.createElement(Handshake, { size: 28 });
        case 'MonitorSmartphone':
            return React.createElement(MonitorSmartphone, { size: 28 });
        case 'Compass':
            return React.createElement(Compass, { size: 28 });
        default:
            return React.createElement(Briefcase, { size: 28 });
    }
};

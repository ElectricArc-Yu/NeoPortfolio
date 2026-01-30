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
        titles: { CN: '预研策略与产品设计', EN: 'R&D Strategy & Product Design', JA: 'R&D戦略・プロダクトデザイン' },
        descriptions: {
            CN: '在不确定性中定义核心体验。结合深度用户研究与产品设计方法论，将混乱的创意转化为逻辑严密、体验自洽且可落地的系统架构。',
            EN: 'Defining core experiences amidst uncertainty. Combining Deep User Research and Product Design methodologies to transform chaotic ideas into logically rigorous, experience-consistent, and executable system architectures.',
            JA: '不確実性の中でコア体験を定義する。詳細なユーザーリサーチとプロダクトデザイン論を組み合わせ、混沌としたアイデアを、論理的で体験の整合性が取れた実行可能なシステム構造に変換します。'
        },
        subjects: {
            CN: '咨询请求: [预研/产品设计/用户体验难题]',
            EN: 'Consultancy Request: [R&D/Product Design/UX Challenge]',
            JA: 'コンサルティング依頼: [R&D/プロダクトデザイン/UX課題]'
        },
        bodies: {
            CN: '你好 于陈浩然，\n\n我们目前在 [项目阶段] 遇到了挑战，特别是在 [用户体验/系统架构/设计方向] 方面存在不确定性。\n\n我们需要你协助梳理设计逻辑，并验证核心体验的可行性。',
            EN: 'Hi Yu Chenhaoran,\n\nWe are facing challenges in the [Project Stage], specifically regarding uncertainty in [User Experience/System Architecture/Design Direction].\n\nWe need your assistance to clarify the design logic and validate the feasibility of the core experience.',
            JA: '于陳浩然様、\n\n現在[プロジェクトの段階]において課題に直面しており、特に[ユーザー体験/システム構造/デザインの方向性]に関する不確実性があります。\n\nデザインロジックを整理し、コア体験の実現可能性を検証するために、あなたの支援が必要です。'
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

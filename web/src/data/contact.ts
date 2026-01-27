import React from 'react';
import { Briefcase, Users, MonitorSmartphone, Handshake } from 'lucide-react';
import type { Localized } from './types';

export interface ContactSection {
    id: string;
    iconName: 'Briefcase' | 'Users' | 'MonitorSmartphone' | 'Handshake';
    titles: Localized;
    descriptions: Localized;
    subject: string;
    body: string;
}

export const contactData: ContactSection[] = [
    {
        id: 'job',
        iconName: 'Briefcase',
        titles: { CN: '工作机会', EN: 'Job Opportunities', JA: '仕事の依頼' },
        descriptions: {
            CN: '我正在寻找【游戏策划】相关职位，特别是关卡设计、系统设计与战斗设计方向。',
            EN: 'Targeting Game Design roles: Level Design, System Design, Combat Design.',
            JA: 'ゲームプランナー職を探しています。特にレベルデザイン、システム設計、戦闘設計を希望しています。'
        },
        subject: 'Job Opportunity: [Company Name] - [Role]',
        body: `Hi Yu Chenhaoran,\n\nWe are interested in your profile for a Game Design position at [Company Name]. \n\nWould you be available for a discussion?`
    },
    {
        id: 'collaboration',
        iconName: 'Users',
        titles: { CN: '项目合作', EN: 'Project Collaboration', JA: 'プロジェクト協力' },
        descriptions: {
            CN: '对跨国合作、独立游戏开发或Game Jam项目感兴趣？我也很乐意参与其中。',
            EN: 'Open to international collaborations, Indie projects, and Game Jams.',
            JA: '国際協力、インディーゲーム開発、Game Jamプロジェクトに興味がありますか？ぜひ参加させてください。'
        },
        subject: 'Collaboration: [Project Name]',
        body: `Hi Yu Chenhaoran,\n\nI'm reaching out regarding a potential collaboration on [Project Name]. We are looking for...`
    },
    {
        id: 'business',
        iconName: 'Handshake',
        titles: { CN: '商务合作', EN: 'Business Cooperation', JA: 'ビジネス協力' },
        descriptions: {
            CN: '关于Prelude Games的商务合作、投资或发行事宜。',
            EN: 'For business inquiries, investment, or publishing regarding Prelude Games.',
            JA: 'Prelude Gamesのビジネス提携、投資、パブリッシングに関するお問い合わせ。'
        },
        subject: 'Business Inquiry: [Topic]',
        body: `Hi Prelude Games Team,\n\nWe are interested in discussing business opportunities regarding...`
    },
    {
        id: 'consultancy',
        iconName: 'MonitorSmartphone',
        titles: { CN: '咨询顾问', EN: 'Consultant', JA: 'コンサルタント' },
        descriptions: {
            CN: '提供游戏设计咨询、Unreal/Unity技术支持或经验分享。',
            EN: 'Providing game design consultancy, Unreal/Unity technical support, or knowledge sharing.',
            JA: 'ゲームデザインのコンサルティング、Unreal/Unityの技術サポート、または経験の共有。'
        },
        subject: 'Consultancy Request: [Topic]',
        body: `Hi Yu Chenhaoran,\n\nWe/I would like to consult with you regarding...`
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
        default:
            return React.createElement(Briefcase, { size: 28 });
    }
};

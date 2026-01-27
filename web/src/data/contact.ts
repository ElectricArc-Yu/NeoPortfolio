import React from 'react';
import { Briefcase, Users, MonitorSmartphone, Handshake } from 'lucide-react';

export interface ContactSection {
    id: string;
    iconName: 'Briefcase' | 'Users' | 'MonitorSmartphone' | 'Handshake';
    titleCN: string;
    titleEN: string;
    descCN: string;
    descEN: string;
    subject: string;
    body: string;
}

export const contactData: ContactSection[] = [
    {
        id: 'job',
        iconName: 'Briefcase',
        titleCN: '工作机会',
        titleEN: 'Job Opportunities',
        descCN: '我正在寻找【游戏策划】相关职位，特别是关卡设计、系统设计与战斗设计方向。',
        descEN: 'Targeting Game Design roles: Level Design, System Design, Combat Design.',
        subject: 'Job Opportunity: [Company Name] - [Role]',
        body: `Hi Yu Chenhaoran,\n\nWe are interested in your profile for a Game Design position at [Company Name]. \n\nWould you be available for a discussion?`
    },
    {
        id: 'collaboration',
        iconName: 'Users',
        titleCN: '项目合作',
        titleEN: 'Project Collaboration',
        descCN: '对跨国合作、独立游戏开发或Game Jam项目感兴趣？我也很乐意参与其中。',
        descEN: 'Open to international collaborations, Indie projects, and Game Jams.',
        subject: 'Collaboration: [Project Name]',
        body: `Hi Yu Chenhaoran,\n\nI'm reaching out regarding a potential collaboration on [Project Name]. We are looking for...`
    },
    {
        id: 'business',
        iconName: 'Handshake',
        titleCN: '商务合作',
        titleEN: 'Business Cooperation',
        descCN: '关于Prelude Games的商务合作、投资或发行事宜。',
        descEN: 'For business inquiries, investment, or publishing regarding Prelude Games.',
        subject: 'Business Inquiry: [Topic]',
        body: `Hi Prelude Games Team,\n\nWe are interested in discussing business opportunities regarding...`
    },
    {
        id: 'consultancy',
        iconName: 'MonitorSmartphone',
        titleCN: '咨询顾问',
        titleEN: 'Consultant',
        descCN: '提供游戏设计咨询、Unreal/Unity技术支持或经验分享。',
        descEN: 'Providing game design consultancy, Unreal/Unity technical support, or knowledge sharing.',
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

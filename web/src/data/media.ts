import type { MediaItem } from './types';

export const mediaItems: MediaItem[] = [
    {
        id: 'slime-trailer',
        title: '怪盗史莱姆 游戏演示 | Slime Game Trailer',
        type: 'video',
        carrier: 'Bilibili',
        language: 'Chinese',
        url: 'https://www.bilibili.com/video/BV14g4y1F7Lz',
        thumbnail: '/assets/images/SLIME.png',
        descriptionCN: '史莱姆关卡设计与机制演示。',
        descriptionEN: 'Slime level design and mechanics showcase.',
        date: '2023.11',
        isCollection: false,
        duration: '02:15'
    },
    {
        id: 'nuclear-survival-showcase',
        title: '辐射生存 系统演示 | Nuclear Survival Gameplay',
        type: 'video',
        carrier: 'Local',
        language: 'Chinese',
        url: '/assets/images/FallOut.mp4',
        thumbnail: '/assets/images/FOCover.png',
        descriptionCN: '展示了后启示录废土生存系统与环境表现。',
        descriptionEN: 'Showcasing the post-apocalyptic survival system and environment.',
        date: '2023.05',
        isCollection: false,
        duration: '03:45'
    },
    {
        id: 'illegal-assembly-dev',
        title: '非法组装 开发演示 | Illegal Assembly Dev Showcase',
        type: 'video',
        carrier: 'Local',
        language: 'Chinese',
        url: '/assets/images/Illegal Assembly.mp4',
        thumbnail: '/assets/images/IllagelAssemblyLogo.PNG',
        descriptionCN: 'UE5工厂化建设自动化的主要系统演示。',
        descriptionEN: 'Primary system showcase of UE5 factory automation.',
        date: '2024.04',
        isCollection: false,
        duration: '05:20'
    },
    {
        id: 'podcast-sample',
        title: '游戏设计杂谈 | Game Design Talk',
        type: 'podcast',
        carrier: 'XiaoYuZhou',
        language: 'Chinese',
        url: 'https://www.xiaoyuzhoufm.com/',
        descriptionCN: '讨论现代MMORPG的关卡构成。',
        descriptionEN: 'Discussing the level structure of modern MMORPGs.',
        date: '2024.01',
        isCollection: true,
        episodesCount: 12
    }
];

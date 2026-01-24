export interface PublicDoc {
    id: string;
    titleCN: string;
    titleEN: string;
    date: string;
    descriptionCN: string; // Abstract
    descriptionEN: string;
    url: string;

    // New Fields
    originalLang: string; // e.g. "中文/Chinese"
    lengthCN: string;
    lengthEN: string;
    isInternal: boolean;
}

export const publicDocs: PublicDoc[] = [
    {
        id: 'ff14-frontline',
        titleCN: '最终幻想14战场新规则提案',
        titleEN: 'FFXIV Frontline New Rules Proposal',
        date: '2024.01',
        descriptionCN: '基于FF14现有架构设计的战场新规则，重点优化战斗节奏与团队协作。',
        descriptionEN: 'Proposed new mechanics for FFXIV Frontline PVP focusing on pacing.',
        url: '/assets/docs/FF14FrontlineDesign.pdf',
        originalLang: '中文 / Chinese',
        lengthCN: '15页',
        lengthEN: '15 Pages',
        isInternal: false
    },
    {
        id: 'mountain-sea-gdd',
        titleCN: '山海 - 游戏设计文档',
        titleEN: 'The Mountain Sea - GDD',
        date: '2023.10',
        descriptionCN: '2D动作平台游戏的完整策划文档，包含系统拆解与关卡规划。',
        descriptionEN: 'Complete GDD for a 2D action platformer, including system and level planning.',
        url: '/assets/docs/TheMountainSeaGDD.pdf',
        originalLang: '中文 / Chinese',
        lengthCN: '42页',
        lengthEN: '42 Pages',
        isInternal: false
    },
    {
        id: 'exploration-design',
        titleCN: 'MMORPG特殊场景探索设计',
        titleEN: 'MMORPG Exploration Design',
        date: '2024.03',
        descriptionCN: '探讨通过场景交互与动态事件提升探索感的分析论文。',
        descriptionEN: 'Analysis paper on enhancing exploration through interaction and dynamic events.',
        url: '/assets/docs/SpecialExplorationDesign.pdf',
        originalLang: '英文 / English',
        lengthCN: '8页',
        lengthEN: '8 Pages',
        isInternal: false
    }
];

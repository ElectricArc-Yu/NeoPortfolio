export type DocCategory = 'GDD' | 'Paper';
export type PaperType = 'Letter' | 'Paper' | 'Full Paper' | 'Preprint' | 'Technical Report';

export interface PublicDoc {
    id: string;
    titleCN: string;
    titleEN: string;
    date: string;
    descriptionCN: string; // Abstract
    descriptionEN: string;
    url?: string; // PDF for internal docs
    externalUrl?: string; // Published page link

    // New Fields
    category: DocCategory;
    originalLangCN: string; // e.g. "英文"
    originalLangEN: string; // e.g. "English"
    lengthCN: string;
    lengthEN: string;
    isInternal: boolean;

    // Paper-specific fields
    paperType?: PaperType; // Letter, Paper, Full Paper, etc.
    journal?: string; // Journal or venue name
    impactFactor?: string; // Impact factor if applicable
    preprintUrl?: string; // Preprint link (e.g. arXiv, ResearchGate)
}

export const publicDocs: PublicDoc[] = [
    // --- Papers ---
    {
        id: 'ffxiv-exploration-value-collapse',
        titleCN: 'The Illusion of Choice: Value Collapse in MMORPG Exploratory Content Post-Reward Decoupling',
        titleEN: 'The Illusion of Choice: Value Collapse in MMORPG Exploratory Content Post-Reward Decoupling',
        date: '2026.01.25',
        descriptionCN: '过去十年间，《最终幻想14》的大型探索内容经历了从"强制垄断"到"完全解耦"的范式转变。本文运用理性选择理论，分析了四个不同时期的玩家留存情况：云冠群岛、禁地优雷卡、博兹雅，以及近期的奥秘暗域。通过建立探索效用方程，我分离出三个关键变量：排他性溢价(α)、环境摩擦(F)和认知负荷(C)。研究发现，在存在高收益外部替代选项的情况下，排他性溢价似乎是主导性解释因素。我将云冠群岛定性为系统性失败，禁地优雷卡定性为由"垄断红利"驱动的成功案例，而博兹雅/奥秘暗域则因奖励解耦而沦为"价值崩塌"的受害者。社区普查数据表明，奥秘暗域呈现出约90%的极端脱离倾向，这表明在高认知负荷与零奖励排他性叠加条件下的理性市场反应。我的结论是，观察到的资源错配源于效用变量的结构性失调——具体表现为排他性(α)降低后，未能相应降低认知负荷(C)及其他系统参数。',
        descriptionEN: 'Over the past decade, Final Fantasy XIV\'s large-scale exploratory content has undergone a paradigm shift from "Coercive Monopoly" to "Complete Decoupling." This paper applies Rational Choice Theory to analyze player retention across four distinct eras: The Diadem, Eureka, Bozja, and the recent Occult Crescent. By establishing an Exploration Utility Equation, I isolate three critical variables: Exclusivity Premium (α), Environmental Friction (F), and Cognitive Load (C). My findings indicate that the Exclusivity Premium appears to be the dominant explanatory factor in the presence of high-yield external alternatives. I identify The Diadem as a systemic failure, Eureka as a success driven by "Monopoly Dividend," and Bozja/Occult Crescent as victims of "Value Collapse" due to Reward Decoupling. Community census data suggests that Occult Crescent exhibits an extreme disengagement tendency of estimated 90%, indicating a rational market response to high Cognitive Load combined with zero reward exclusivity. I conclude that the observed resource misallocation stems from a structural misalignment of utility variables—specifically, the reduction of Exclusivity (α) without a compensatory reduction in Cognitive Load (C) and other systemic parameters.',
        category: 'Paper',
        paperType: 'Letter',
        originalLangCN: '英文',
        originalLangEN: 'English',
        lengthCN: '4页',
        lengthEN: '4 Pages',
        isInternal: false,
        journal: 'IEEE ToG (Under Review)',
        impactFactor: '99999999',
        preprintUrl: 'blank.page',
        externalUrl: 'blank.page'
    },
    // --- GDDs ---
    {
        id: 'ff14-frontline',
        titleCN: '最终幻想14战场新规则提案',
        titleEN: 'FFXIV Frontline New Rules Proposal',
        date: '2024.01',
        descriptionCN: '基于FF14现有架构设计的战场新规则，重点优化战斗节奏与团队协作。',
        descriptionEN: 'Proposed new mechanics for FFXIV Frontline PVP focusing on pacing.',
        url: '/assets/docs/FF14FrontlineDesign.pdf',
        category: 'GDD',
        originalLangCN: '中文',
        originalLangEN: 'Chinese',
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
        category: 'GDD',
        originalLangCN: '中文',
        originalLangEN: 'Chinese',
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
        category: 'GDD',
        originalLangCN: '英文',
        originalLangEN: 'English',
        lengthCN: '8页',
        lengthEN: '8 Pages',
        isInternal: false
    }
];


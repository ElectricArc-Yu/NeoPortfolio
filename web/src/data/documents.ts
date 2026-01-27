import type { PublicDoc } from './types';

export const publicDocs: PublicDoc[] = [
    // --- Papers ---
    {
        id: 'ffxiv-exploration-value-collapse',
        titles: { CN: "The Illusion of Choice: Value Collapse in MMORPG Exploratory Content Post-Reward Decoupling", EN: "The Illusion of Choice: Value Collapse in MMORPG Exploratory Content Post-Reward Decoupling" },
        date: '2026.01.25',
        descriptions: { CN: "过去十年间，《最终幻想14》的大型探索内容经历了从\"强制垄断\"到\"完全解耦\"的范式转变。本文运用理性选择理论，分析了四个不同时期的玩家留存情况：云冠群岛、禁地优雷卡、博兹雅，以及近期的奥秘暗域。通过建立探索效用方程，我分离出三个关键变量：排他性溢价(α)、环境摩擦(F)和认知负荷(C)。研究发现，在存在高收益外部替代选项的情况下，排他性溢价似乎是主导性解释因素。我将云冠群岛定性为系统性失败，禁地优雷卡定性为由\"垄断红利\"驱动的成功案例，而博兹雅/奥秘暗域则因奖励解耦而沦为\"价值崩塌\"的受害者。社区普查数据表明，奥秘暗域呈现出约90%的极端脱离倾向，这表明在高认知负荷与零奖励排他性叠加条件下的理性市场反应。我的结论是，观察到的资源错配源于效用变量的结构性失调——具体表现为排他性(α)降低后，未能相应降低认知负荷(C)及其他系统参数。", EN: "Over the past decade, Final Fantasy XIV\'s large-scale exploratory content has undergone a paradigm shift from \"Coercive Monopoly\" to \"Complete Decoupling.\" This paper applies Rational Choice Theory to analyze player retention across four distinct eras: The Diadem, Eureka, Bozja, and the recent Occult Crescent. By establishing an Exploration Utility Equation, I isolate three critical variables: Exclusivity Premium (α), Environmental Friction (F), and Cognitive Load (C). My findings indicate that the Exclusivity Premium appears to be the dominant explanatory factor in the presence of high-yield external alternatives. I identify The Diadem as a systemic failure, Eureka as a success driven by \"Monopoly Dividend,\" and Bozja/Occult Crescent as victims of \"Value Collapse\" due to Reward Decoupling. Community census data suggests that Occult Crescent exhibits an extreme disengagement tendency of estimated 90%, indicating a rational market response to high Cognitive Load combined with zero reward exclusivity. I conclude that the observed resource misallocation stems from a structural misalignment of utility variables—specifically, the reduction of Exclusivity (α) without a compensatory reduction in Cognitive Load (C) and other systemic parameters." },
        category: 'Paper',
        paperType: 'Letter',
        originalLangs: { CN: "英文", EN: "English" },
        lengths: { CN: "4页", EN: "4 Pages" },
        isInternal: false,
        journal: 'IEEE ToG (Under Review)',
        impactFactor: '0',
        preprintUrl: '',
        externalUrl: ''
    },

    // --- GDDs: Test Papers (策划测试题) ---
    {
        id: 'ff14-frontline',
        titles: { CN: "FFXIV战场系统设计提案", EN: "FFXIV Frontline System Design Proposal" },
        date: '2024.03',
        descriptions: { CN: "申请SE第三工作室系统策划岗位（PVP方向）时撰写的测试题。针对《最终幻想14》现有战场（Frontline）玩法进行深度分析，并提出新规则与系统优化方案。", EN: "A test assignment written when applying for the System Planner position (PVP direction) at Square Enix Creative Business Unit III. Features in-depth analysis of FFXIV\'s existing Frontline PVP mode with proposed new rules and system improvements." },
        url: '/assets/docs/FF14FrontlineDesign.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: { CN: "日文", EN: "Japanese" },
        lengths: { CN: "44页", EN: "44 Pages" },
        isInternal: false,
        targetPositions: { CN: "SE第三工作室 系统策划 (PVP向)", EN: "SE CBU III System Planner (PVP)" }
    },
    {
        id: 'ugc-gameplay-test',
        titles: { CN: "UGC玩法策划测试题", EN: "UGC Gameplay Planner Test" },
        date: '2026.01',
        descriptions: { CN: "申请UGC玩法策划岗位时完成的设计测试题，涉及用户生成内容的系统设计与玩法创新。", EN: "A design test completed when applying for a UGC Gameplay Planner position, covering user-generated content system design and gameplay innovation." },
        url: '/assets/docs/Test1.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: { CN: "中文", EN: "Chinese" },
        lengths: { CN: "38页", EN: "38 Pages" },
        isInternal: false,
        targetPositions: { CN: "UGC玩法策划", EN: "UGC Gameplay Planner" }
    },
    {
        id: 'quest-design-test',
        titles: { CN: "任务策划测试题", EN: "Quest Design Test" },
        date: '2024.06',
        descriptions: { CN: "求职过程中撰写的任务策划岗位测试题，展示任务系统设计与叙事整合能力。", EN: "A quest design test written during job application, demonstrating quest system design and narrative integration capabilities." },
        url: '/assets/docs/Test3.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: { CN: "中文", EN: "Chinese" },
        lengths: { CN: "6页", EN: "6 Pages" },
        isInternal: false,
        targetPositions: { CN: "任务策划", EN: "Quest Designer" }
    },
    {
        id: 'pre-research-test',
        titles: { CN: "预研项目笔试题", EN: "Pre-Research Project Test" },
        date: '2025.11',
        descriptions: { CN: "针对创意型预研项目岗位撰写的攻坚型笔试题，展示从零到一的创意设计能力、系统架构思维以及创新性玩法探索。内容涵盖项目定位、核心玩法设计、系统拆解与技术预研等多个维度。", EN: "A challenging written test for a creative pre-research project position, demonstrating ability to design from zero to one, system architecture thinking, and innovative gameplay exploration. Covers project positioning, core gameplay design, system breakdown, and technical pre-research." },
        url: '/assets/docs/Test4.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: { CN: "中文", EN: "Chinese" },
        lengths: { CN: "36页", EN: "36 Pages" },
        isInternal: false,
        targetPositions: { CN: "预研项目策划", EN: "Pre-Research Project Designer" }
    },

    // --- GDDs: Analysis (分析研究) ---
    {
        id: 'exploration-design',
        titles: { CN: "FFXIV特殊场景探索玩法设计分析", EN: "FFXIV Special Zone Exploration Design Analysis" },
        date: '2024.03',
        descriptions: { CN: "2023年完成、2024年公开的极度详细的《最终幻想14》特殊场景探索玩法设计分析。深入探讨禁地优雷卡、博兹雅等大型探索内容的设计理念、系统架构与玩家体验，涵盖场景交互设计、动态事件系统、长线留存机制等核心议题。", EN: "An extremely detailed analysis of FFXIV special zone exploration gameplay design, completed in 2023 and published in 2024. Deep-dives into the design philosophy, system architecture, and player experience of large-scale exploratory content like Eureka and Bozja, covering scene interaction design, dynamic event systems, and long-term retention mechanisms." },
        url: '/assets/docs/SpecialExplorationDesign.pdf',
        category: 'GDD',
        gddType: 'Analysis',
        originalLangs: { CN: "中文", EN: "Chinese" },
        lengths: { CN: "28页", EN: "28 Pages" },
        isInternal: false
    },

    // --- GDDs: Methodology (方法论/教程) ---
    {
        id: 'emotional-design-method',
        titles: { CN: "游戏情感设计方法论", EN: "Game Emotional Design Methodology" },
        date: '2025.09',
        descriptions: { CN: "一套旨在提高设计下限而非提升上限的游戏情感设计方法论。视角极高，颗粒度极粗，作用是让没有设计基础的人快速建立情感设计框架，提高设计下限。注意：本文对上限提高、情感投放逻辑、频率控制、认知负荷等进阶话题基本没有提及。", EN: "A game emotional design methodology aimed at raising the design floor rather than the ceiling. High-level perspective with coarse granularity, designed to help people without design fundamentals quickly establish an emotional design framework. Note: This document does not cover advanced topics such as raising the ceiling, emotional delivery logic, frequency control, or cognitive load." },
        url: '/assets/docs/Method1.pdf',
        category: 'GDD',
        gddType: 'Methodology',
        originalLangs: { CN: "中文", EN: "Chinese" },
        lengths: { CN: "47页", EN: "47 Pages" },
        isInternal: true
    },
    {
        id: 'professional-communication',
        titles: { CN: "策划专业度提升指南：认知纠偏与沟通技巧", EN: "Professional Communication Guide for Game Designers" },
        date: '2025.11',
        descriptions: { CN: "针对游戏策划行业的认知纠偏教程，帮助从业者建立正确的设计思维并提高与他人（包括程序、美术、制作人等）沟通时的专业度。适合希望提升职业素养与跨部门协作能力的策划人员。", EN: "A tutorial on cognitive correction for the game design industry, helping practitioners establish correct design thinking and improve professionalism when communicating with others (including programmers, artists, producers, etc.). Suitable for planners looking to enhance professional quality and cross-department collaboration skills." },
        url: '/assets/docs/Method2.pdf',
        category: 'GDD',
        gddType: 'Methodology',
        originalLangs: { CN: "中文", EN: "Chinese" },
        lengths: { CN: "8页", EN: "8 Pages" },
        isInternal: true
    },

    // --- GDDs: Full GDD ---
    {
        id: 'mountain-sea-gdd',
        titles: { CN: "山海 - 游戏设计文档", EN: "The Mountain Sea - GDD" },
        date: '2023.10',
        descriptions: { CN: "2D动作平台游戏的完整策划文档，包含系统拆解与关卡规划。", EN: "Complete GDD for a 2D action platformer, including system and level planning." },
        url: '/assets/docs/TheMountainSeaGDD.pdf',
        category: 'GDD',
        gddType: 'GDD',
        originalLangs: { CN: "中文", EN: "Chinese" },
        lengths: { CN: "42页", EN: "42 Pages" },
        isInternal: false
    }
];
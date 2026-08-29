import type { PublicDoc } from './types';

export const publicDocs: PublicDoc[] = [
    {
        id: 'validation',
        titles: {
            CN: "",
            EN: "A System-Anchored Perceptual Taxonomy and Closed-Form Operator for Participatory Systems: A Preliminary Empirical Validation",
            JA: ""
        },
        date: '2026.02.14',
        descriptions: {
            CN: "",
            EN: "Understanding how system-level properties shape players' evaluations and subsequent participation remains a central challenge in game research. We present the first empirical examination of two jointly applicable theoretical constructs, the Taxonomy of System Architecture and Behaviour (TSAB) and the Push--Pull Friction Ratio Operator (PPFRO), that link interpretable system attributes to subjective sentiment and behavioural retention through a closed-form mechanism. Using 2,497 user reviews spanning four game ecosystems and one productivity-software system, we evaluate structural validity, predictive utility, robustness to annotation noise, and extrapolative reach. The 28-dimensional TSAB representation exhibits low inter-dimensional dependence (mean |rho|=0.2103; mean VIF=2.4337, N=101) and predicts sentiment polarity (AUC 95% CI: TSAB [0.9294,0.9497]; PPFRO [0.9212,0.9497]) and churn/retention (AUC 95% CI: TSAB [0.6424,0.7173]; PPFRO [0.6442,0.6958]). PPFRO captures 96.3% of TSAB's explained variance while maintaining comparable predictive accuracy, and preliminary temporal hold-out and cross-domain tests indicate that its signal persists beyond the training distribution. Perturbation experiments further demonstrate resilience to substantial annotation noise. Together, these results establish an empirical chain from theoretically grounded system structure to prediction, interpretable mechanistic reduction, and preliminary extrapolation, while providing initial evidence for transfer across games, time, and a related participatory domain.",
            JA: ""
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '33',
        isInternal: false,
        journal: 'Under Review',
        publisher: 'None',
        impactFactor: '0',
        preprintUrl: '',
        externalUrl: ''
    },
    {
        id: 'ppfro',
        titles: {
            CN: "",
            EN: "A Closed-Form Operator for Participatory Systems",
            JA: ""
        },
        date: '2026.02.14',
        descriptions: {
            CN: "",
            EN: "Understanding how design influences player entry, experience, retention, and departure remains a central challenge in game design research. Existing approaches generally treat explanatory macro-level theory and task-specific predictive capacity as an inherent trade-off, with few studies offering a formally explicit mechanism for translating theoretical assumptions into interpretable computational structures. Here, we introduce the Push--Pull Friction Ratio Operator (PPFRO), a phenomenological equation that formalises participation propensity from a system-side perspective. The operator is defined over three core constructs---motivation, value, and friction---whose ontological level of abstraction affords reasoning at multiple granularities within the same analytical target. To accommodate influence factors beyond the system's direct control, we further propose a modular moderator extension. We adopt the Taxonomy of System Architecture and Behaviour as an operationalisation taxonomy for the operator and conduct a preliminary calibration of PPFRO performance through Youden's-index maximisation on player positive-review classification, in which a distinct bimodal separation was observed. Finally, we advance seven hypothetical propositions as directions for subsequent empirical investigation.",
            JA: ""
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '33',
        isInternal: false,
        journal: 'Under Review',
        publisher: 'None',
        impactFactor: '0',
        preprintUrl: '',
        externalUrl: ''
    },
    {
        id: 'tsab',
        titles: {
            CN: "",
            EN: "A System-Anchored Perceptual Taxonomy for Participatory Systems",
            JA: ""
        },
        date: '2026.02.14',
        descriptions: {
            CN: "",
            EN: "Participatory systems---bounded dynamic systems defined by explicit rule sets within which participants interact while retaining conditional freedom to enter and exit---pose a persistent analytical challenge: macro-level psychological theories (e.g., Self-Determination Theory, Flow Theory) provide explanatory power but lack the engineering granularity required for actionable system design, whereas micro-level empirical models optimise predictive accuracy yet offer limited insight into why participants disengage or what designers should intervene upon. To bridge this gap, the present study proposes the Taxonomy of System Architecture and Behaviour (TSAB): an ontological taxonomy comprising 7 primary dimensions and 28 sub-dimensions, constructed from the system side to ensure that every dimension corresponds to a mechanism controllable through system rules and content. The taxonomy is derived from a 2 * 3 + 1 architecture that crosses two modalities of influence (physical and mental) with three eliciting conditions (success, failure, and outcome-independent), supplemented by an independent temporal dimension. Dimensions are developed through a hybrid inductive--deductive method, guided by four exclusion rules and four merging rules that enforce conceptual independence, interventionability, and analytical boundary clarity. Drawing upon and extending Prospect Theory, Cognitive Load Theory, Social Comparison Theory, Self-Determination Theory, and other foundational frameworks, TSAB re-grounds participant-centred constructs in system-level affordances amenable to design intervention. A case study demonstrates the framework's qualitative diagnostic capability by mapping unstructured player feedback onto specific dimensions, deriving directional interpretations, distinguishing boundary cases, and generating targeted intervention implications. The taxonomy is intended to serve as a foundational, domain-general diagnostic framework that preserves both interpretability and intervention feasibility while remaining extensible for subsequent operationalisation across diverse participatory system domains.",
            JA: ""
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '33',
        isInternal: false,
        journal: 'Under Review',
        publisher: 'None',
        impactFactor: '0',
        preprintUrl: '',
        externalUrl: ''
    },
    {
        id: 'mygo',
        titles: {
            CN: "",
            EN: "A Diagnostic-Oriented Framework for Participatory Systems",
            JA: ""
        },
        date: '2026.02.14',
        descriptions: {
            CN: "",
            EN: "Participatory systems involve asymmetric relationships among designers, participants, system structures, and information, yet existing theoretical models often examine these relationships from isolated perspectives such as design, interaction, experience, or activity. This paper introduces the Mooring, Yardstick, Generation and Outcome (MYGO) framework, a unified epistemological architecture for describing how agents process, transform, and reconstruct information across hierarchical levels within bounded participatory systems. MYGO distinguishes four interconnected layers—Mooring, Yardstick, Generation, and Outcome—and formalizes four analytical routes: Generate, Experience, Diagnostic, and Interpret, corresponding to forward and reverse reasoning from designer and participant perspectives. Through synthetic cases, the framework demonstrates how these routes can support system generation, perspective switching, feedback interpretation, and problem localisation. The framework further formalizes designer thinking, empathic design, and user thinking as distinct combinations of analytical routes and derives implications concerning baseline superposition, lossy information transfer, cognitive subjectivity, evaluation uncertainty, and route misalignment. MYGO thus provides a process-oriented basis for analyzing and intervening in complex participatory systems.",
            JA: ""
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '33',
        isInternal: false,
        journal: 'Under Review',
        publisher: 'None',
        impactFactor: '0',
        preprintUrl: '',
        externalUrl: ''
    },

    // ─── Test Lecture Entry ───
    // {
    //     id: 'test-conference-talk',
    //     titles: {
    //         CN: "参与式系统设计：从理论到量化审计",
    //         EN: "Participatory System Design: From Theory to Quantitative Auditing",
    //         JA: "参加型システム設計：理論から定量的監査へ"
    //     },
    //     date: '2026.03',
    //     descriptions: {
    //         CN: "探讨如何将参与式设计理论转化为可量化、可审计的设计诊断工具，通过双层架构将系统属性与用户感知分离，实现结构化的体验评估。",
    //         EN: "Exploring how to transform participatory design theory into quantifiable, auditable design diagnostic tools through a dual-layer architecture that separates system properties from user perception.",
    //         JA: "参加型デザイン理論を、システム属性とユーザー認知を分離する二層アーキテクチャにより定量的かつ監査可能なデザイン診断ツールへと変換する方法を探求する。"
    //     },
    //     category: 'Lecture',
    //     lectureType: 'Conference',
    //     venue: 'Games for Change (G4C)',
    //     duration: '45 min',
    //     deckUrl: 'https://example.com/deck',
    //     originalLangs: 'EN',
    //     lengths: '45 min',
    //     isInternal: false,
    //     journal: '',
    //     publisher: 'GDC',
    //     impactFactor: '0',
    //     preprintUrl: '',
    //     externalUrl: 'https://example.com/talk'
    // },

    // --- GDDs: Test Papers (策划测试题) ---

    {
        id: 'ff14-frontline',
        titles: { CN: "FFXIV战场系统设计提案", EN: "FFXIV Frontline System Design Proposal", JA: "FFXIVフロントライン 系统设计提案书" },
        date: '2024.03',
        descriptions: {
            CN: "申请SE第三工作室系统策划岗位（PVP方向）时撰写的测试题。针对《最终幻想14》现有战场（Frontline）玩法进行深度分析，并提出新规则与系统优化方案。",
            EN: "A test assignment written when applying for the System Planner position (PVP direction) at Square Enix Creative Business Unit III. Features in-depth analysis of FFXIV\'s existing Frontline PVP mode with proposed new rules and system improvements.",
            JA: "スクウェア・エニックス第三開発事業本部（CBU III）のシステムプランナー（PVP担当）に応募した際に作成した課題。FFXIVの既存のフロントライン（PVP）を深く分析し、新ルールとシステムの最適化案を提案したもの。"
        },
        url: '/assets/docs/FF14FrontlineDesign.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: 'JA',
        lengths: '44',
        isInternal: false,
        publisher: 'None',
        targetPositions: { CN: "SE第三工作室 系统策划 (PVP向)", EN: "SE CBU III System Planner (PVP)", JA: "スクエニ 第三開発事業本部 システムプランナー (PVP担当)" }
    },
    {
        id: 'ugc-gameplay-test',
        titles: { CN: "UGC玩法策划测试题", EN: "UGC Gameplay Planner Test", JA: "UGCゲームプレイプランナー 試験課題" },
        date: '2026.01',
        descriptions: {
            CN: "申请UGC玩法策划岗位时完成的设计测试题，涉及用户生成内容的系统设计与玩法创新。",
            EN: "A design test completed when applying for a UGC Gameplay Planner position, covering user-generated content system design and gameplay innovation.",
            JA: "UGCゲームプレイプランナー職への応募時に完成させた設計テスト。ユーザー生成コンテンツ（UGC）のシステム設計とゲームプレイの革新に関する内容。"
        },
        url: '/assets/docs/Test1.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: 'CN',
        lengths: '38',
        isInternal: false,
        publisher: 'None',
        targetPositions: { CN: "UGC玩法策划", EN: "UGC Gameplay Planner", JA: "UGCゲームプレイプランナー" }
    },
    {
        id: 'quest-design-test',
        titles: { CN: "任务策划测试题", EN: "Quest Design Test", JA: "クエストプランナー 試験課題" },
        date: '2024.06',
        descriptions: {
            CN: "求职过程中撰写的任务策划岗位测试题，展示任务系统设计与叙事整合能力。",
            EN: "A quest design test written during job application, demonstrating quest system design and narrative integration capabilities.",
            JA: "就職活動中に作成したクエストプランナー職の試験課題。クエストシステムの設計とナラティブの統合能力を提示。"
        },
        url: '/assets/docs/Test3.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: 'CN',
        lengths: '6',
        isInternal: false,
        publisher: 'None',
        targetPositions: { CN: "任务策划", EN: "Quest Designer", JA: "クエストプランナー" }
    },
    {
        id: 'pre-research-test',
        titles: { CN: "预研项目笔试题", EN: "Pre-Research Project Test", JA: "先行研究プロジェクト 笔记入试课题" },
        date: '2025.11',
        descriptions: {
            CN: "针对创意型预研项目岗位撰写的攻坚型笔试题，展示从零到一的创意设计能力、系统架构思维以及创新性玩法探索。内容涵盖项目定位、核心玩法设计、系统拆解与技术预研等多个维度。",
            EN: "A challenging written test for a creative pre-research project position, demonstrating ability to design from zero to one, system architecture thinking, and innovative gameplay exploration. Covers project positioning, core gameplay design, system breakdown, and technical pre-research.",
            JA: "クリエイティブな先行研究プロジェクト職向けの高度な筆記課題。ゼロからイチへのクリエイティブ力、システムアーキテクチャ思考、革新的なゲームプレイ探索を提示。プロジェクトのポジショニング、コアプレイ設計、システム分解、技術的予察など多角的な内容。"
        },
        url: '/assets/docs/Test4.pdf',
        category: 'GDD',
        gddType: 'Test',
        originalLangs: 'CN',
        lengths: '36',
        isInternal: false,
        publisher: 'None',
        targetPositions: { CN: "预研项目策划", EN: "Pre-Research Project Designer", JA: "先行研究プロジェクトプランナー" }
    },

    // --- GDDs: Analysis (分析研究) ---
    {
        id: 'exploration-design',
        titles: {
            CN: "FFXIV特殊场景探索玩法设计分析",
            EN: "FFXIV Special Zone Exploration Design Analysis",
            JA: "FFXIV 特殊フィールド探索コンテンツ 设计分析"
        },
        date: '2024.03',
        descriptions: {
            CN: "2023年完成、2024年公开的极度详细的《最终幻想14》特殊场景探索玩法设计分析。深入探讨禁地优雷卡、博兹雅等大型探索内容的设计理念、系统架构与玩家体验，涵盖场景交互设计、动态事件系统、长线留存机制等核心议题。",
            EN: "An extremely detailed analysis of FFXIV special zone exploration gameplay design, completed in 2023 and published in 2024. Deep-dives into the design philosophy, system architecture, and player experience of large-scale exploratory content like Eureka and Bozja, covering scene interaction design, dynamic event systems, and long-term retention mechanisms.",
            JA: "2023年に作成、2024年に公開された『ファイナルファンタジーXIV』の特殊フィールド探索コンテンツに関する極めて詳細な設計分析。エウレカやボズヤなどの大規模探索コンテンツの設計理念、システムアーキテクチャ、プレイヤー体験を深く掘り下げ、フィールド内のインタラクション設計、ダイナミックイベントシステム、長期継続メカニズムなどの核心的なトピックを網羅。"
        },
        url: '/assets/docs/SpecialExplorationDesign.pdf',
        category: 'GDD',
        gddType: 'Analysis',
        originalLangs: 'CN',
        lengths: '28',
        publisher: 'None',
        isInternal: false
    },
    {
        id: 'tech-due-diligence-audit',
        titles: {
            CN: "技术尽职调查与工程审计报告",
            EN: "Technical Due Diligence & Engineering Audit Report",
            JA: "技術デューデリジェンス＆エンジニアリング監査報告書"
        },
        date: '2026.01',
        descriptions: {
            CN: "针对某游戏项目的全面技术审计报告（脱敏版）。审计范围涵盖源代码仓库、工程基础设施、C++ 实现细节、开发工作流以及数字资产安全性。识别了版本控制完整性、持续集成可靠性、架构模块化等方面的关键风险，并提供了分阶段整改建议。",
            EN: "A comprehensive technical audit report for a game project (redacted version). The audit scope covers source code repositories, engineering infrastructure, C++ implementation details, development workflows, and digital asset security. Identifies critical risks in version control integrity, CI reliability, and architectural modularity, with phased remediation recommendations.",
            JA: "あるゲームプロジェクトに対する包括的な技術監査報告書（匿名化版）。監査範囲はソースコードリポジトリ、エンジニアリングインフラ、C++実装詳細、開発ワークフロー、デジタル資産のセキュリティを網羅。バージョン管理の完全性、CI信頼性、アーキテクチャのモジュール化における重要なリスクを特定し、段階的な改善提案を提示。"
        },
        url: '/assets/docs/audit.html',
        category: 'GDD',
        gddType: 'Analysis',
        originalLangs: 'CN',
        lengths: { CN: "1页 (HTML)", EN: "1 Page (HTML)", JA: "1ページ (HTML)" },
        publisher: 'None',
        isInternal: false
    },

    // --- GDDs: Methodology (方法论/教程) ---
    {
        id: 'emotional-design-method',
        titles: { CN: "游戏情感设计方法论", EN: "Game Emotional Design Methodology", JA: "ゲーム感情設計メソッド" },
        date: '2025.09',
        descriptions: {
            CN: "一套旨在提高设计下限而非提升上限的游戏情感设计方法论。视角极高，颗粒度极粗，作用是让没有设计基础的人快速建立情感设计框架，提高设计下限。注意：本文对上限提高、情感投放逻辑、频率控制、认知负荷等进阶话题基本没有提及。",
            EN: "A game emotional design methodology aimed at raising the design floor rather than the ceiling. High-level perspective with coarse granularity, designed to help people without design fundamentals quickly establish an emotional design framework. Note: This document does not cover advanced topics such as raising the ceiling, emotional delivery logic, frequency control, or cognitive load.",
            JA: "デザインの上限を上げるのではなく、下限を底上げすることを目的としたゲーム感情設計メソッド。極めて高い視点と粗い粒度で構成され、デザインの基礎がない人でも迅速に感情設計の枠組みを構築できるようにするもの。注：本稿では、上限の向上、感情投入のロジック、頻度制御、認知負荷などの高度な話題には触れていない。"
        },
        url: '/assets/docs/Method1.pdf',
        category: 'GDD',
        gddType: 'Methodology',
        originalLangs: 'CN',
        lengths: '47',
        publisher: 'None',
        isInternal: true
    },
    {
        id: 'professional-communication',
        titles: { CN: "策划专业度提升指南：认知纠偏与沟通技巧", EN: "Professional Communication Guide for Game Designers", JA: "ゲームプランナーのためのプロフェッショナル・コミュニケーションガイド" },
        date: '2025.11',
        descriptions: {
            CN: "针对游戏策划行业的认知纠偏教程，帮助从业者建立正确的设计思维并提高与他人（包括程序、美术、制作人等）沟通时的专业度。适合希望提升职业素养与跨部门协作能力的策划人员。",
            EN: "A tutorial on cognitive correction for the game design industry, helping practitioners establish correct design thinking and improve professionalism when communicating with others (including programmers, artists, producers, etc.). Suitable for planners looking to enhance professional quality and cross-department collaboration skills.",
            JA: "ゲーム業界向けの認知バイアス修正チュートリアル。設計思考を正し、他職種（プログラマー、アーティスト、プロデューサーなど）とのコミュニケーションにおけるプロフェッショナル度を高める。職業的素養と部門間協力能力を向上させたいプランナーに最適。"
        },
        url: '/assets/docs/Method2.pdf',
        category: 'GDD',
        gddType: 'Methodology',
        originalLangs: 'CN',
        lengths: '8',
        publisher: 'None',
        isInternal: true
    },

    // --- GDDs: Full GDD ---
    {
        id: 'mountain-sea-gdd',
        titles: { CN: "山海 - 游戏设计文档", EN: "The Mountain Sea - GDD", JA: "山海 - ゲーム设计文书" },
        date: '2023.10',
        descriptions: {
            CN: "2D动作平台游戏的完整策划文档，包含系统拆解与关卡规划。",
            EN: "Complete GDD for a 2D action platformer, including system and level planning.",
            JA: "2Dアクションプラットフォーマーの完全な仕様書。システム分解とレベルプランニングを含む。"
        },
        url: '/assets/docs/TheMountainSeaGDD.pdf',
        category: 'GDD',
        gddType: 'GDD',
        originalLangs: 'CN',
        lengths: '17',
        publisher: 'None',
        isInternal: false
    }
];
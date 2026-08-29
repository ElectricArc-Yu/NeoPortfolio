import type { PublicDoc } from './types';

export const publicDocs: PublicDoc[] = [
    {
        id: 'validation',
        titles: {
            CN: "A System-Anchored Perceptual Taxonomy and Closed-Form Operator for Participatory Systems: A Preliminary Empirical Validation",
            EN: "A System-Anchored Perceptual Taxonomy and Closed-Form Operator for Participatory Systems: A Preliminary Empirical Validation",
            JA: "A System-Anchored Perceptual Taxonomy and Closed-Form Operator for Participatory Systems: A Preliminary Empirical Validation"
        },
        date: '2026.02.14',
        descriptions: {
            CN: "探明系统级属性如何塑造玩家的评估及后续参与，始终是游戏研究的核心挑战。本文对两项联合适用的理论构念——系统架构与行为分类学（TSAB）及推拉摩擦比算子（PPFRO）进行了首次实证检验，通过显式解析机制将可解释的系统属性与主观情感及行为留存相连接。基于跨越4个游戏生态与1个生产力软件系统的2,497条用户评价，评估了其结构效度、预测效用、对标注噪声的鲁棒性及外推能力。28维TSAB表征表现出较低的维度间依赖性（平均|rho|=0.2103；平均VIF=2.4337，N=101），能够有效预测情感极性与留存/流失行为。PPFRO在保持相当预测精度的同时捕获了TSAB 96.3%的解释方差，为跨游戏生态与相关参与式领域的系统诊断与机制分析提供了实证支撑。",
            EN: "Understanding how system-level properties shape players' evaluations and subsequent participation remains a central challenge in game research. We present the first empirical examination of two jointly applicable theoretical constructs, the Taxonomy of System Architecture and Behaviour (TSAB) and the Push--Pull Friction Ratio Operator (PPFRO), that link interpretable system attributes to subjective sentiment and behavioural retention through a closed-form mechanism. Using 2,497 user reviews spanning four game ecosystems and one productivity-software system, we evaluate structural validity, predictive utility, robustness to annotation noise, and extrapolative reach. The 28-dimensional TSAB representation exhibits low inter-dimensional dependence (mean |rho|=0.2103; mean VIF=2.4337, N=101) and predicts sentiment polarity (AUC 95% CI: TSAB [0.9294,0.9497]; PPFRO [0.9212,0.9497]) and churn/retention (AUC 95% CI: TSAB [0.6424,0.7173]; PPFRO [0.6442,0.6958]). PPFRO captures 96.3% of TSAB's explained variance while maintaining comparable predictive accuracy, and preliminary temporal hold-out and cross-domain tests indicate that its signal persists beyond the training distribution. Perturbation experiments further demonstrate resilience to substantial annotation noise. Together, these results establish an empirical chain from theoretically grounded system structure to prediction, interpretable mechanistic reduction, and preliminary extrapolation, while providing initial evidence for transfer across games, time, and a related participatory domain.",
            JA: "システムレベルの属性がプレイヤーの評価やその後の参加行動にどのように影響を与えるかを明らかにすることは、ゲーム研究における中心課題である。本論文では、解釈可能なシステム属性と主観的感情・行動継続を陽形式の数理メカニズムで結びつける2つの理論的構成概念、すなわちシステム構造・行動分類学（TSAB）およびプッシュ・プル摩擦比作用素（PPFRO）に対する初の実証的検証を行う。4つのゲームエコシステムと1つの生産性ソフトウェアにまたがる2,497件のユーザーレビューを用い、構造的妥当性、予測的有用性、アノテーションノイズへの耐性、外挿性を評価。28次元のTSAB表現は低い次元間相関を示し、感情の極性および離脱／継続を有意に予測した。PPFROは同等の予測精度を維持しながらTSABの説明分散の96.3%を捉え、領域横断的なシステム診断のための実証的基盤を確立した。"
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '10',
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
            CN: "A Closed-Form Operator for Participatory Systems",
            EN: "A Closed-Form Operator for Participatory Systems",
            JA: "A Closed-Form Operator for Participatory Systems"
        },
        date: '2026.02.14',
        descriptions: {
            CN: "探究游戏设计如何影响玩家的进入、体验、留存与流失，是游戏设计研究的核心议题。既有研究通常将宏观解释性理论与任务特定的预测能力视为固有的权衡，鲜有研究提供形式上明确的机制将理论假设转化为可解释的计算结构。在此，我们提出了推拉摩擦比算子（PPFRO），这是一个从系统端视角对参与倾向进行形式化表达的现象学方程。该算子建立在动机、价值与摩擦三个核心构念之上，其本体论抽象层级支持在同一分析目标内进行多粒度推理。结合模块化调节变量扩展与系统架构行为分类学（TSAB），通过约登指数最大化进行了初步校准，为后续实证研究与系统设计评估提供了数理分析工具。",
            EN: "Understanding how design influences player entry, experience, retention, and departure remains a central challenge in game design research. Existing approaches generally treat explanatory macro-level theory and task-specific predictive capacity as an inherent trade-off, with few studies offering a formally explicit mechanism for translating theoretical assumptions into interpretable computational structures. Here, we introduce the Push--Pull Friction Ratio Operator (PPFRO), a phenomenological equation that formalises participation propensity from a system-side perspective. The operator is defined over three core constructs---motivation, value, and friction---whose ontological level of abstraction affords reasoning at multiple granularities within the same analytical target. To accommodate influence factors beyond the system's direct control, we further propose a modular moderator extension. We adopt the Taxonomy of System Architecture and Behaviour as an operationalisation taxonomy for the operator and conduct a preliminary calibration of PPFRO performance through Youden's-index maximisation on player positive-review classification, in which a distinct bimodal separation was observed. Finally, we advance seven hypothetical propositions as directions for subsequent empirical investigation.",
            JA: "ゲームデザインがプレイヤーの参加、体験、定着、離脱にどのように影響するかを理解することは、ゲームデザイン研究における重要課題である。従来のアプローチではマクロ理論と特定タスクの予測能力はトレードオフとして扱われてきた。本研究では、システム側の視点から参加傾向を数式化する現象学的方程式「プッシュ・プル摩擦比作用素（PPFRO）」を提案する。本作用素は動機、価値、摩擦の3つの核となる構成概念で定義され、同一の分析対象に対して多層的な粒度での推論を可能にする。TSABを操作化タクソノミーとして採用し、好意的なレビュー分類におけるYouden指数の最大化を通じて予備的キャリブレーションを実施。今後の実証研究に向けた数理的基盤を提示する。"
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '10',
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
            CN: "A System-Anchored Perceptual Taxonomy for Participatory System",
            EN: "A System-Anchored Perceptual Taxonomy for Participatory Systems",
            JA: "A System-Anchored Perceptual Taxonomy for Participatory System"
        },
        date: '2026.02.14',
        descriptions: {
            CN: "参与式系统长期面临分析困境：宏观心理学理论具备解释力但缺乏可操作设计所需的工程颗粒度；而微观实证模型虽优化了预测精度，却难以解释参与者流失的根本原因或指导设计干预。为弥合这一差距，本研究提出了系统架构与行为分类学（TSAB）：一套包含7个主维度和28个子维度的本体论分类体系，完全从系统侧构建以确保每个维度均对应可通过规则和内容调控的机制。该分类法源自“2×3+1”架构，交叉了物理与心理两种影响模态与成功、失败、结果无关三种触发情境，并补充了独立的时间维度。TSAB将以参与者为中心的构念重新锚定在可干预的系统层功能可供性上，为游戏及软件系统的体验诊断与设计改良提供了通用的分类框架。",
            EN: "Participatory systems---bounded dynamic systems defined by explicit rule sets within which participants interact while retaining conditional freedom to enter and exit---pose a persistent analytical challenge: macro-level psychological theories (e.g., Self-Determination Theory, Flow Theory) provide explanatory power but lack the engineering granularity required for actionable system design, whereas micro-level empirical models optimise predictive accuracy yet offer limited insight into why participants disengage or what designers should intervene upon. To bridge this gap, the present study proposes the Taxonomy of System Architecture and Behaviour (TSAB): an ontological taxonomy comprising 7 primary dimensions and 28 sub-dimensions, constructed from the system side to ensure that every dimension corresponds to a mechanism controllable through system rules and content. The taxonomy is derived from a 2 * 3 + 1 architecture that crosses two modalities of influence (physical and mental) with three eliciting conditions (success, failure, and outcome-independent), supplemented by an independent temporal dimension. Dimensions are developed through a hybrid inductive--deductive method, guided by four exclusion rules and four merging rules that enforce conceptual independence, interventionability, and analytical boundary clarity. Drawing upon and extending Prospect Theory, Cognitive Load Theory, Social Comparison Theory, Self-Determination Theory, and other foundational frameworks, TSAB re-grounds participant-centred constructs in system-level affordances amenable to design intervention. A case study demonstrates the framework's qualitative diagnostic capability by mapping unstructured player feedback onto specific dimensions, deriving directional interpretations, distinguishing boundary cases, and generating targeted intervention implications. The taxonomy is intended to serve as a foundational, domain-general diagnostic framework that preserves both interpretability and intervention feasibility while remaining extensible for subsequent operationalisation across diverse participatory system domains.",
            JA: "参加型システムにおいて、マクロな心理学理論は実行可能な設計粒度を欠き、ミクロな実証モデルは設計介入への示唆が限られていた。このギャップを埋めるため、本研究では「システム構造・行動分類学（TSAB）」を提案する。本分類学は7つの主次元と28のサブ次元から構成され、すべての次元がシステムルールとコンテンツを通じて制御可能なメカニズムに対応するよう構築されている。「2×3+1」構造に基づき、物理的・心理的影響と3つの生起条件を交差させ、独立した時間次元を付加。解釈可能性と介入可能性を両立させた領域横断的な診断基盤を提供する。"
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '10',
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
            CN: "A Diagnostic-Oriented Framework for Participatory Systems",
            EN: "A Diagnostic-Oriented Framework for Participatory Systems",
            JA: "A Diagnostic-Oriented Framework for Participatory Systems"
        },
        date: '2026.02.14',
        descriptions: {
            CN: "参与式系统包含设计者、参与者、系统结构与信息之间的非对称关系，然而既有理论模型往往从孤立视角割裂考察这些联系。本文提出了锚点-尺度-生成-结果（MYGO）框架，这是一个统一的认识论架构，用于描述主体如何在有界参与式系统内的各个层级之间处理、转化与重构信息。MYGO区分了锚点（Mooring）、尺度（Yardstick）、生成（Generation）与结果（Outcome）四个相互关联的层级，并形式化了四条分析路径：生成（Generate）、体验（Experience）、诊断（Diagnostic）与解释（Interpret），分别对应设计者与参与者视角的正向与逆向推理，为复杂参与式系统的系统生成、视角切换、反馈解释与问题定位提供了面向过程的分析基础。",
            EN: "Participatory systems involve asymmetric relationships among designers, participants, system structures, and information, yet existing theoretical models often examine these relationships from isolated perspectives such as design, interaction, experience, or activity. This paper introduces the Mooring, Yardstick, Generation and Outcome (MYGO) framework, a unified epistemological architecture for describing how agents process, transform, and reconstruct information across hierarchical levels within bounded participatory systems. MYGO distinguishes four interconnected layers—Mooring, Yardstick, Generation, and Outcome—and formalizes four analytical routes: Generate, Experience, Diagnostic, and Interpret, corresponding to forward and reverse reasoning from designer and participant perspectives. Through synthetic cases, the framework demonstrates how these routes can support system generation, perspective switching, feedback interpretation, and problem localisation. The framework further formalizes designer thinking, empathic design, and user thinking as distinct combinations of analytical routes and derives implications concerning baseline superposition, lossy information transfer, cognitive subjectivity, evaluation uncertainty, and route misalignment. MYGO thus provides a process-oriented basis for analyzing and intervening in complex participatory systems.",
            JA: "参加型システムにおける設計者、参加者、システム構造、情報の非対称な関係を統合的に捉える認識論的アーキテクチャ「MYGO（Mooring, Yardstick, Generation, Outcome）フレームワーク」を提案する。係留、尺度、生成、結果の4層を定義し、設計者と参加者の順方向・逆方向の推論に対応する4つの分析ルート（生成、体験、診断、解釈）を定式化。合成事例を通じて、システム生成、視点切り替え、フィードバック解釈、問題箇所の特定をどのように支援できるかを実証し、複雑なシステムの分析と介入に向けたプロセス指向の基盤を提供する。"
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: 'EN',
        lengths: '10',
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
        titles: { CN: "FFXIV战场系统设计提案", EN: "FFXIV Frontline System Design Proposal", JA: "FFXIVフロントライン システム設計提案書" },
        date: '2024.03',
        descriptions: {
            CN: "申请SE第三工作室系统策划岗位（PVP方向）时撰写的测试题。针对《最终幻想14》现有战场（Frontline）玩法进行深度分析，并提出新规则与系统优化方案。",
            EN: "A test assignment written when applying for the System Planner position (PVP direction) at Square Enix Creative Business Unit III. Features in-depth analysis of FFXIV's existing Frontline PVP mode with proposed new rules and system improvements.",
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
        titles: { CN: "预研项目笔试题", EN: "Pre-Research Project Test", JA: "先行研究プロジェクト 筆記試験課題" },
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
            JA: "FFXIV 特殊フィールド探索コンテンツ 設計分析"
        },
        date: '2024.03',
        descriptions: {
            CN: "2023年完成、2024年公开的《最终幻想14》特殊场景探索玩法设计分析。深入探讨禁地优雷卡、博兹雅等大型探索内容的设计理念、系统架构与玩家体验，涵盖场景交互设计、动态事件系统、长线留存机制等核心议题。",
            EN: "A detailed analysis of FFXIV special zone exploration gameplay design, completed in 2023 and published in 2024. Deep-dives into the design philosophy, system architecture, and player experience of large-scale exploratory content like Eureka and Bozja, covering scene interaction design, dynamic event systems, and long-term retention mechanisms.",
            JA: "2023年に作成、2024年に公開された『ファイナルファンタジーXIV』の特殊フィールド探索コンテンツに関する設計分析。エウレカやボズヤなどの大規模探索コンテンツの設計理念、システムアーキテクチャ、プレイヤー体験を深く掘り下げ、フィールド内のインタラクション設計、ダイナミックイベントシステム、長期継続メカニズムなどの核心的なトピックを網羅。"
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
            CN: "一套旨在规范与提升设计下限的游戏情感设计方法论。从宏观视角梳理情感体验的构建逻辑，帮助初学者快速建立情感设计的系统框架，规范基础体验设计流程。",
            EN: "A game emotional design methodology aimed at raising the design floor and standardizing fundamentals. Provides a high-level framework to help designers establish structured emotional design workflows.",
            JA: "デザインの下限を底上げし、基礎を標準化することを目的としたゲーム感情設計メソッド。マクロな視点から感情体験の構築ロジックを整理し、体系的な感情設計フレームワークの構築を支援する。"
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
            CN: "针对游戏策划行业的认知与沟通实践指南，帮助从业者建立严谨的设计思维，提升与程序、美术、制作人等跨职能协作时的沟通效率与专业素养。",
            EN: "A practical guide on design thinking and professional communication in the game industry, helping designers establish structured mindsets and improve cross-functional collaboration with programmers, artists, and producers.",
            JA: "ゲーム業界における設計思考とコミュニケーションの実践ガイド。論理的な思考法を身につけ、プログラマーやアーティスト、プロデューサーとの部門間協業における円滑なコミュニケーションを支援する。"
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
        titles: { CN: "山海 - 游戏设计文档", EN: "The Mountain Sea - GDD", JA: "山海 - ゲーム設計書" },
        date: '2023.10',
        descriptions: {
            CN: "2D动作平台游戏的完整策划文档，包含核心双形态战斗系统拆解、关卡机制与数值规划。",
            EN: "Complete GDD for a 2D action platformer, detailing dual-form combat systems, level design mechanics, and progression pacing.",
            JA: "2Dアクションプラットフォーマーの完全なゲーム設計書。双形態戦闘システム、ステージギミック、レベル設計を網羅。"
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
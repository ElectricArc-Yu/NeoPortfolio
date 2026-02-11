import type { PublicDoc } from './types';

export const publicDocs: PublicDoc[] = [
    // --- Papers ---
    {
        id: 'participation-utility-model',
        titles: {
            CN: "参与行为的结构化分类学：不确定性下的参与建模",
            EN: "A Structural Taxonomy of Participation: Engagement Modeling under Uncertainty",
            JA: "参加行動の構造的タクソノミー（分類学）：不確実性下におけるエンゲージメント・モデリング"
        },
        date: '2026.02.11',
        descriptions: {
            CN: "不确定性下的用户参与通常被归结为系统层面的激励机制或潜在的心理状态。基于先前将参与性系统分解为产出、成本、时间投入、外在与内在动机、失败成本和风险结构等七个正交维度的设计理论框架，本文提供了该分类法的首次大规模实证验证。我分析了涵盖约500个Steam产品的14,717条玩家评论，通过轻量级本地大语言模型（Qwen-2.5-7B）进行解析，并通过跨架构三角验证（盛行率调整及偏差调整Kappa系数，平均PABAK = 0.81）确保了可靠性。研究确立了两个关键结构特征：(1) 正交性——两两相关矩阵呈现稀疏结构（平均|ρ| < 0.1），且单条评论的激活度较低（平均|P| ≈ 1.85），证实了28个子维度捕捉到了真正独立的设计变量，且被用户体验为离散且显著的交互点；(2) 最小完备性——96.56% 的玩家反馈能映射到该分类法中，24个主成分即可捕获90%的方差，且每个维度（包括长尾构造）都能解释简单模型无法观测到的独特子集。此外，在正面与负面反馈的相关结构中观察到了显著的参与度不对称现象。结果表明，参与感可以被视为一种结构上可解构的行为产物，而不仅仅由潜在心理状态所完整表征。",
            EN: "Human participation under uncertainty is typically explained either through system-level incentives or through latent psychological states. Building on a prior design-theoretic framework that decomposes participatory systems into seven orthogonal dimensions spanning output, cost, temporal commitment, extrinsic and intrinsic motivation, failure cost, and risk structure, this paper provides the first large-scale empirical validation of that taxonomy. I analyze N = 14,717 player reviews across approximately 500 Steam titles, decoded via a lightweight local LLM (Qwen-2.5-7B) and validated through cross-architecture triangulation (Prevalence-Adjusted Bias-Adjusted Kappa, Mean PABAK = 0.81). Two structural properties are established: (1) Orthogonality—the pairwise correlation matrix exhibits sparse structure (mean |ρ| < 0.1) alongside low per-review activation (Mean |P | ≈ 1.85), confirming that the 28-subdimensions capture genuinely independent design variance that is experienced by users as discrete,salient interaction points; and (2) Minimal Completeness—96.56% of playerfeedback maps onto the taxonomy, 24 of 28 principal components are required to capture 90% of variance, and every dimension, including rare long-tail constructs, explains unique subsets that would be invisible to simpler models. Additionally, a notable engagement asymmetry is observed in the correlation structure between positive and negative feedback. These results demonstrate that engagement can be treated as a structurally deconstructible behavioral product, rather than being fully or exhaustively characterized by latent psychological states alone.",
            JA: "不確実性下における人間の参加行動は、通常、システムレベルのインセンティブまたは潜在的な心理状態のいずれかによって説明される。本稿では、参加型システムを産出、コスト、時間的コミットメント、外的・内的動機付け、失敗コスト、およびリスク構造の7つの正交する次元に分解する先行のデザイン理論的枠組みに基づき、その分類法の初の大規模な実証研究を行う。約500のSteamタイトルにわたるN = 14,717件のプレイヤーレビューを分析し、軽量なローカルLLM（Qwen-2.5-7B）を用いてデコードし、クロスアーキテクチャ・トライアンギュレーション（普及率調整・バイアス調整済みカッパ係数、平均PABAK = 0.81）を通じて検証した。本研究では2つの構造的特性を確立した：(1) 正交性――ペアワイズ相関行列は希薄な構造（平均|ρ| < 0.1）を示し、レビューごとの活性化度も低い（平均|P| ≈ 1.85）。これは、28のサブ次元が、ユーザーによって離散的で顕著なインタラクションポイントとして体験される、真に独立したデザイン分散を捉えていることを裏付けている。(2) 最小完全性――プレイヤーのフィードバックの96.56%がこの分類法にマッピングされ、分散の90%を捉えるには28のうち24の主成分が必要であり、希少なロングテール要素を含む全次元が、単純なモデルでは不可視な固有のサブセットを説明している。さらに、ポジティブなフィードバックとネガティブなフィードバックの相関構造において、顕著なエンゲージメントの非対称性が観察された。これらの結果は、エンゲージメントが潜在的な心理状態のみによって特徴づけられるものではなく、構造的に解体可能な行動的成果物として扱えることを示している。"
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: { CN: "英文", EN: "English", JA: "英語" },
        lengths: { CN: "24页", EN: "24 Pages", JA: "24ページ" },
        isInternal: false,
        journal: 'Nature Human Behaviour (Desk Review)',
        impactFactor: '0',
        preprintUrl: 'https://osf.io/preprints/psyarxiv/4ah7x_v1',
        externalUrl: ''
    },
    {
        id: 'participation-utility-model',
        titles: {
            CN: "解构参与感：不确定性下参与倾向的设计理论框架",
            EN: "Deconstructing Engagement: A Design-Theoretic Framework for Participation Propensity under Uncertainty",
            JA: "エンゲージメントの解構：不確実性下における参加性向のためのデザイン理論的枠組み"
        },
        date: '2026.02.01',
        descriptions: {
            CN: "游戏分析通过行为指标和数据驱动的优化，在理解玩家行为方面建立了强大的方法。然而，要全面解释为什么某些结构配置会产生观察到的行为模式，分析需要一个补充性的定性层面——解释数据背后因果机制的结构性背景。本文提出了一个设计理论审计框架，用于分析交互系统中的参与倾向。该框架将参与视为一种心理状态，更将其表征为短期参与度与长期价值追求之间的张力，并受“价值范畴（Value Scope）”的调节。本研究将决策空间分解为结果收益、总成本、时间投入、动机、失败成本和风险等七个维度，旨在为诊断导致参与失效的结构性原因提供分析视角，而非单纯依赖经验性的留存调优。",
            EN: "Game analytics has established powerful methods for understanding what happens in player behavior through behavioral metrics and data-driven optimization [7]. However, to fully interpret why certain structural configurations produce observed behavioral patterns, analytics requires a complementary qualitative layer—a structural context that explains the causal mechanisms behind the data. This paper proposes a design-theoretic auditing framework for analyzing participation propensity in interactive systems. Rather than modeling engagement as a monolithic psychological state, participation is characterized as a tension between short-term engagement propensity and long-term value pursuit, moderated by the system’s Value Scope (SV), which reflects the transferability of outcomes beyond the system boundary. The framework decomposes the participation decision space into seven analytically separable dimensions, including Outcome Payoff, Total Cost, Temporal Commitment, Motivation, Failure Cost, and Risk. This decomposition is not claimed to be formally minimal or predictive, but is constructed to support structured design auditing by distinguishing often-conflated mechanisms such as sunk cost versus failure cost, and by introducing risk entanglement as a systemic amplification factor in multi-agent settings. By framing participation as a rational auditing process rather than a purely experiential response, this work aims to provide designers and researchers with an analytical lens for diagnosing structural causes of engagement failure beyond empirical retention tuning. ",
            JA: "ゲーム分析は、行動指標とデータ駆動の最適化を通じて、プレイヤーの行動に何が起こるかを理解するための強力な手法を確立している[7]。しかし、特定の構造構成が観察された行動パターンを生成する理由を完全に解釈するためには、分析には補完的な定性層、すなわちデータの背后にある因果メカニズムを説明する構造的文脈が必要である。本稿では、インタラクティブシステムにおける参加性向を分析するためのデザイン理論的監査フレームワークを提案する。エンゲージメントを単一の心理状態としてモデル化するのではなく、参加を短期的関与と長期的価値追求の間の緊張関係として特徴づけ、システムの価値スコープ（SV）によって調整されるものとする。このフレームワークは、決定空間を7つの分析的に分離可能な次元に分解し、結果のペイオフ、总コスト、时间的コミットメント、动机、失败コスト、リスクなどを含む。この分解は形式的に最小または予測的であると主張するものではないが、埋没コストと失败コストなど、しばしば混同されるメカニズムを区別し、マルチエージェント設定における体系的な增幅因子としてリスクの络み合いを导入することによって、构造化されたデザイン監査をサポートするように构成されている。参加を純粋に経験的な応答としてではなく、合理的な監査プロセスとして捉えることにより、本研究は、経験的なリテンションチューニングを超えて、エンゲージメント失败の构造的原因を诊断するための分析的レンズをデザイナーや研究者に提供することを目指している。"
        },
        category: 'Paper',
        paperType: 'Full Paper',
        originalLangs: { CN: "英文", EN: "English", JA: "英語" },
        lengths: { CN: "8页", EN: "8 Pages", JA: "8ページ" },
        isInternal: false,
        journal: 'IEEE ToG (Desk Review)',
        impactFactor: '0',
        preprintUrl: 'https://osf.io/preprints/psyarxiv/q7dzy_v1',
        externalUrl: ''
    },
    {
        id: 'ffxiv-exploration-value-collapse',
        titles: {
            CN: "选择的错觉：MMORPG探索内容在奖励解耦后的价值崩塌",
            EN: "The Illusion of Choice: Value Collapse in MMORPG Exploratory Content Post-Reward Decoupling",
            JA: "選択の錯覚：報酬の切り離し後におけるMMORPG探索コンテンツの価値崩壊"
        },
        date: '2026.01.25',
        descriptions: {
            CN: "过去十年间，《最终幻想14》的大型探索内容经历了从\"强制垄断\"到\"完全解耦\"的范式转变。本文运用理性选择理论，分析了四个不同时期的玩家留存情况：云冠群岛、禁地优雷卡、博兹雅，以及近期的奥秘暗域。通过建立探索效用方程，我分离出三个关键变量：排他性溢价(α)、环境摩擦(F)和认知负荷(C)。研究发现，在存在高收益外部替代选项的情况下，排他性溢价似乎是主导性解释因素。我将云冠群岛定性为系统性失败，禁地优雷卡定性为由\"垄断红利\"驱动的成功案例，而博兹雅/奥秘暗域则因奖励解耦而沦为\"价值崩塌\"的受害者。社区普查数据表明，奥秘暗域呈现出约90%的极端脱离倾向，这表明在高认知负荷与零奖励排他性叠加条件下的理性市场反应。我的结论是，观察到的资源错配源于效用变量的结构性失调——具体表现为排他性(α)降低后，未能相应降低认知负荷(C)及其他系统参数。",
            EN: "Over the past decade, Final Fantasy XIV\'s large-scale exploratory content has undergone a paradigm shift from \"Coercive Monopoly\" to \"Complete Decoupling.\" This paper applies Rational Choice Theory to analyze player retention across four distinct eras: The Diadem, Eureka, Bozja, and the recent Occult Crescent. By establishing an Exploration Utility Equation, I isolate three critical variables: Exclusivity Premium (α), Environmental Friction (F), and Cognitive Load (C). My findings indicate that the Exclusivity Premium appears to be the dominant explanatory factor in the presence of high-yield external alternatives. I identify The Diadem as a systemic failure, Eureka as a success driven by \"Monopoly Dividend,\" and Bozja/Occult Crescent as victims of \"Value Collapse\" due to Reward Decoupling. Community census data suggests that Occult Crescent exhibits an extreme disengagement tendency of estimated 90%, indicating a rational market response to high Cognitive Load combined with zero reward exclusivity. I conclude that the observed resource misallocation stems from a structural misalignment of utility variables—specifically, the reduction of Exclusivity (α) without a compensatory reduction in Cognitive Load (C) and other systemic parameters.",
            JA: "過去10年間、『ファイナルファンタジーXIV』の大規模探索コンテンツは、「強制的独占」から「完全な切り離し」へとパラダイムシフトを遂げた。本稿では合理的選択理論を用い、4つの異なる時期（ディアデム諸島、禁断の地 エウレカ、ボズヤ、そして最近のオルト・エウレカ）におけるプレイヤーの継続率を分析する。探索効用方程式を構築することで、独占プレミアム(α)、環境の摩擦(F)、認知負荷(C)という3つの重要な変数を分離した。その結果、高利回りの外部代替選択肢が存在する場合、独占プレミアムが支配的な説明要因であることが示唆された。ディアデム諸島をシステム的な失敗、エウレカを「独占の配当」による成功例、 seniorそしてボズヤ/オルト・エウレカを報酬の切り離しによる「価値崩壊」の犠牲者として定義する。コミュニティの調査データによると、オルト・エウレカは約90%という極端な離脱傾向を示しており、これは高い認知負荷とゼロの報酬独占性が重なった条件下の合理的な市場反応である。結論として、観察された資源のミスマッチは効用変数の構造的な不適合、具体的には独占性(α)の低下に対応した認知負荷(C)や他系统パラメータの低减が行われなかったことに起因すると考える。"
        },
        category: 'Paper',
        paperType: 'Letter',
        originalLangs: { CN: "英文", EN: "English", JA: "英語" },
        lengths: { CN: "4页", EN: "4 Pages", JA: "4ページ" },
        isInternal: false,
        journal: 'IEEE ToG (Peer Review)',
        impactFactor: '0',
        preprintUrl: '',
        externalUrl: ''
    },
    /** example
    {
        id: 'game-level-design-book',
        titles: {
            CN: "Game Level Design (Charles River Media, 2006)",
            EN: "Game Level Design (Charles River Media, 2006)",
            JA: "Game Level Design (Charles River Media, 2006)"
        },
        date: '2006.01',
        descriptions: {
            CN: "I wrote Game Level Design when books dedicated to level design specifically were few and far between. CRM contacted me to see if I'd be interested in writing a book for beginners and I thought... sure. Six months of frantic writing later and it was done.",
            EN: "I wrote Game Level Design when books dedicated to level design specifically were few and far between. CRM contacted me to see if I'd be interested in writing a book for beginners and I thought... sure. Six months of frantic writing later and it was done.",
            JA: "I wrote Game Level Design when books dedicated to level design specifically were few and far between. CRM contacted me to see if I'd be interested in writing a book for beginners and I thought... sure. Six months of frantic writing later and it was done."
        },
        category: 'Lecture',
        originalLangs: { CN: "英文", EN: "English", JA: "英語" },
        lengths: { CN: "Book", EN: "Book", JA: "書籍" },
        isInternal: false
    },
    */
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
        originalLangs: { CN: "日文", EN: "Japanese", JA: "日本語" },
        lengths: { CN: "44页", EN: "44 Pages", JA: "44ページ" },
        isInternal: false,
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国語" },
        lengths: { CN: "38页", EN: "38 Pages", JA: "38ページ" },
        isInternal: false,
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国語" },
        lengths: { CN: "6页", EN: "6 Pages", JA: "6页" },
        isInternal: false,
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国語" },
        lengths: { CN: "36页", EN: "36 Pages", JA: "36ページ" },
        isInternal: false,
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国語" },
        lengths: { CN: "28页", EN: "28 Pages", JA: "28ページ" },
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国語" },
        lengths: { CN: "1页 (HTML)", EN: "1 Page (HTML)", JA: "1ページ (HTML)" },
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国语" },
        lengths: { CN: "47页", EN: "47 Pages", JA: "47ページ" },
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国語" },
        lengths: { CN: "8页", EN: "8 Pages", JA: "8ページ" },
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
        originalLangs: { CN: "中文", EN: "Chinese", JA: "中国语" },
        lengths: { CN: "17页", EN: "17 Pages", JA: "17ページ" },
        isInternal: false
    }
];
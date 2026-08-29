import type { Project } from './types';

export const projects: Project[] = [
    // --- Commercial Projects ---
    {//Nuclear Survival
        id: 'nuclear-survival',
        mainProjectId: 'netease-minecraft-mod',
        titles: { CN: "辐射生存", EN: "Nuclear Survival", JA: "Nuclear Survival" },
        type: 'Commercial',
        showPriority: 100,
        engine: 'Python',
        gameType: ['Survival', 'Simulation'],
        role: ['Lead Designer'],
        techStack: ['Full Stack Design'],
        thumbnail: '/assets/images/FOCover.png',
        shortDescriptions: {
            CN: "后启示录题材的基地建设与探索模组，通过渐进式自动化系统优化资源采集与成长节奏。",
            EN: "Post-apocalyptic base-building and exploration mod featuring progressive automation to balance resource flow.",
            JA: "ポスト・アポカリプスを題材とした基地建設・探索MOD。段階的な自動化システムにより資源収集と成長テンポを最適化。"
        },
        introduces: {
            CN: `后启示录题材的基地建设与探索模组。
围绕“基地建设 → 外出探索 → 资源带回 → 自动化提升效率”构建核心循环，
通过阶段性解锁的自动化系统减少重复基础操作的时间占比，引导玩家聚焦于探索决策、基地规划与长期建设目标。`,
            EN: `A post-apocalyptic base-building and exploration Minecraft mod.
Structured around the loop of "Base Building → Exploration → Resource Collection → Automation Optimization".
Progressively unlocks automation to reduce repetitive gathering, allowing players to focus on strategic planning and exploration.`,
            JA: `ポスト・アポカリプスを題材とした基地建設・探索系Minecraft MOD。
「基地建設 → 探索 → 資源回収 → 自動化による効率化」をコアループとし、
段階的に解放される自動化によって単純な収集作業を軽減し、探索の意思決定や長期的な基地計画に集中できるよう設計しました。`
        },
        sales: '100K+ Units',
        platforms: { CN: "我的世界 (中国版)", EN: "Minecraft (NetEase)", JA: "Minecraft (NetEase中国版)" },
        durations: { CN: "约4个月", EN: "About 4 months", JA: "約4ヶ月" },
        startDate: '2023.03',
        endDate: '2023.06',
        teamSizes: { CN: "9人", EN: "9 People", JA: "9人" },
        prices: { CN: "¥10", EN: "$1.99", JA: "¥220" },
        descriptions: {
            CN: `
## 设计目标与挑战

针对偏好清晰直接反馈的玩家群体，既要提供扎实的机甲战斗体验，又要让基地建设具备实际战略价值，同时降低前期单调重复的采矿耗时。

## 设计方案

**核心循环构建:**
以机甲战斗与基地防御为驱动，引入怪物攻城机制赋予基地战略意义；结合自动化系统逐步承接基础矿物产出，使玩家精力自然向中后期探索与配装倾斜。

**认知曲线与内容分层:**
*   采用分阶段的内容解锁节奏，避免初期系统过度堆叠
*   建立模块化的装备与建筑升级体系，降低新内容的理解成本
*   将资源动线梳理为“早期基础矿物 → 中后期复合补给”，平滑引导自动化过渡

**体量与空间规划:**
*   在开放地图中布置20+探索据点（废墟、地下掩体、实验室等），平衡探索密度与行动自由度
*   设计涵盖家园建设、自动化生产、机甲战斗、据点防御、科技研究、天气事件等系统支撑整体循环
*   落地50+武器、30+敌人、5套机甲、70+建筑方块、40+补给品与10+生物群系

## 成果与复盘

**数据与反馈:**
*   累计销量突破10万份，首发月进入平台排行榜前列
*   基于玩家反馈持续调优战斗数值与建造体验，版本迭代后评分提升0.2

**研发协作:**
*   作为主策划负责系统与数值设计，协同9人跨职能团队推进落地
*   梳理资产命名规范与版本协作流程，提升后续内容的开发与交付效率
`,
            EN: `
## Design Goals & Challenges

For players looking for clear, responsive feedback, the goal was to deliver engaging mech combat while ensuring base construction served functional strategic purposes, minimizing early-game repetitive mining.

## Design Solution

**Core Loop Construction:**
Anchored on mech combat and base defense, using siege events to make base placement strategic. Integrated automation systems to handle basic mineral collection progressively, guiding focus toward exploration and equipment progression.

**Cognitive Pacing & Layering:**
*   Structured phased content unlocking to prevent information overload
*   Established modular equipment and structure progression to reduce learning curves
*   Streamlined resource pipelines from basic minerals to advanced supplies, facilitating smooth transitions to automation

**World & Systems Architecture:**
*   Distributed 20+ exploration sites (ruins, bunkers, labs) across the map, balancing density and player freedom
*   Implemented core systems including construction, automation, combat, research, and weather events
*   Delivered 50+ weapons, 30+ enemies, 5 mech sets, 70+ blocks, 40+ consumables, and 10+ biomes

## Results & Retrospective

**Metrics & Feedback:**
*   Exceeded 100K units in total sales; reached top platform rankings during release month
*   Iterated combat balance and build progression based on player feedback, improving overall user rating by 0.2

**Team Collaboration:**
*   Served as lead designer overseeing systems and numbers, coordinating a 9-person cross-functional team
*   Standardized asset naming conventions and version workflows, improving subsequent delivery efficiency
`,
            JA: `
## 設計目標と課題

直接的で分かりやすいフィードバックを好むプレイヤー層に向けて、手応えのあるメカ戦闘を提供しつつ、基地建設に実質的な戦略価値を持たせ、序盤の単調な採掘時間を軽減することを目指しました。

## 設計ソリューション

**コアループの構築:**
メカ戦闘と防衛戦を軸に据え、敵の襲撃イベントを通じて基地の戦略的役割を明確化。自動化システムにより基礎資源の収集負担を軽減し、中盤以降の探索や装備カスタマイズに集中できる構造を整えました。

**認知負荷の段階的調整:**
*   コンテンツを段階的に解放し、初期段階での情報過多を防止
*   武器・メカ・建築の構造をモジュール化し、新要素の学習コストを抑制
*   資源の流れを「序盤の基礎鉱物 → 後期の複合物資」へと整理し、自動化への移行を自然に促進

**空間とシステム規模:**
*   ワールド内に20以上の探索拠点（廃墟、地下シェルター、研究所等）を配置し、密度と自由度を両立
*   建設、自動化、メカ戦闘、防衛、研究、天候イベントなど連携する主要システムを実装
*   50種以上の武器、30種以上の敵、5種のメカ、70種以上の建材、40種以上の補給品を納品

## 成果と振り返り

**実績と検証:**
*   累計販売数10万本を達成し、配信初月にプラットフォームランキング上位入り
*   プレイヤーの反響を基に戦闘と進行曲線を調整し、ユーザー評価を0.2ポイント改善

**チーム連携:**
*   リードプランナーとしてシステム・数値設計を担当し、9名のチームと連携して納品
*   命名規則やバージョン管理フローを整備し、その後の開発効率を向上
`
        },
        images: ['/assets/images/FOCover.png', '/assets/images/Fallout_01.png', '/assets/images/Fallout_02.png'],
        video: '/assets/images/FallOut.mp4',
        links: [
            { labels: { CN: "发布页面", EN: "Release Page", JA: "リリースページ" }, urls: { CN: 'https://resource-minecraft.h5.163.com/#/detail?id=4664344300463689714', EN: 'https://resource-minecraft.h5.163.com/#/detail?id=4664344300463689714' }, type: 'Release Page' }
        ]
    },
    {//Horror Isle
        id: 'horror-isle',
        mainProjectId: 'netease-minecraft-mod',
        titles: { CN: "恐怖岛", EN: "Horror Isle", JA: "恐怖の島" },
        type: 'Commercial',
        showPriority: 90,
        engine: 'Python',
        gameType: ['Horror', 'Survival'],
        role: ['Lead Designer'],
        techStack: ['Full Stack Design'],
        thumbnail: '/assets/images/KBDCover.png',
        shortDescriptions: {
            CN: "恐怖主题的半线性RPG模组，通过紧凑的战斗循环与多维度探索提供短局快节奏体验。",
            EN: "Horror-themed semi-linear RPG mod delivering concise, fast-paced combat and multi-dimensional exploration.",
            JA: "ホラーをテーマにした半線形RPG MOD。引き締まった戦闘サイクルと多次元探索によりテンポの良い体験を提供。"
        },
        introduces: {
            CN: `恐怖主题的半线性 RPG 模组。
以“探索据点 → 讨伐怪物 → 获取材料兑换装备 → 提升战力挑战Boss”为主线驱动，
通过理智值（SAN）与饱食度的双重消耗调节探索节奏，在保障自由度的同时维持清晰的阶段目标。`,
            EN: `A semi-linear horror-themed RPG mod.
Driven by the progression loop of "Exploration → Combat → Material Drops & Gear Exchange → Boss Battles".
Regulates pacing via dual sanity/hunger consumption, balancing player freedom with clear stage progression.`,
            JA: `ホラーをテーマにした半線形RPG MOD。
「探索 → 敵討伐 → ドロップ品による装備交換 → ボス挑戦」を主軸とし、
正気度（SAN値）と満腹度の二重消費で進行テンポをコントロールしながら、自由度と明確な目標を両立させました。`
        },
        sales: '100K+ Units',
        platforms: { CN: "我的世界 (中国版)", EN: "Minecraft (NetEase)", JA: "Minecraft (NetEase中国版)" },
        durations: { CN: "约2个月", EN: "About 2 months", JA: "約2ヶ月" },
        startDate: '2023.05',
        endDate: '2023.07',
        teamSizes: { CN: "7人", EN: "7 People", JA: "7人" },
        prices: { CN: "¥10", EN: "$1.99", JA: "¥220" },
        descriptions: {
            CN: `
## 设计目标与挑战

在短周期开发与UGC自由探索环境下，针对偏好快节奏、短局体验的玩家群体，需要构建轻量、高反馈的战斗与成长循环，同时通过模块化岛屿设计拓展不同主题的探索内容。

## 设计方案

**战斗与成长聚焦:**
*   主线采用半线性设计：设置关键挑战节点引导阶段目标，保持非线性探索的自由度
*   成长循环：“探索 → 击败敌人 → 掉落材料兑换装备 → 战力提升 → 挑战首领”
*   引入理智值（SAN）与饱食度的消耗节奏控制，平衡野外生存探索的紧张感与补给需求

**模块化主题岛屿规划:**
*   规划由主岛向多个独立主题维度岛屿延伸的内容架构，每个岛屿具备差异化的环境、怪物机制与Boss战
*   落地10+生成据点、30+武器、40+敌人、3个阶段Boss与70+功能建筑方块

## 成果与反思

**商业与数据表现:**
*   首发上线后进入周榜，累计销量突破10万份
*   在2个月开发周期内完成7人团队的整体交付

**经验与复盘:**
*   “聚焦核心战斗 + 轻量辅助系统”的设计策略有效降低了上手门槛，验证了短局快节奏体验的接受度
*   原规划的多维度岛屿拓展因项目策略调整未全部展开，后续交接中部分数值梯度的维护偏差也提示了建立严谨交接文档与长期数值平衡规范的重要性
`,
            EN: `
## Design Goals & Challenges

Within a short development timeline and UGC open-world environment, the goal was to deliver a responsive, fast-paced combat and progression loop for players preferring concise sessions, while structuring modular island themes to support varied exploration.

## Design Solution

**Combat & Progression Focus:**
*   Adopted semi-linear progression with checkpoint gates, avoiding rigid critical paths while guiding players
*   Progression loop: "Exploration → Defeating enemies → Trading drops for gear → Power growth → Boss encounters"
*   Integrated Sanity (SAN) and hunger mechanics to regulate survival tension and resource management in the field

**Modular Themed Islands:**
*   Designed an expandable layout spanning a main island and distinct dimensional themed islands, each with unique mechanics and bosses
*   Delivered 10+ exploration sites, 30+ weapons, 40+ enemy types, 3 stage bosses, and 70+ functional blocks

## Results & Retrospective

**Performance & Metrics:**
*   Charted on the platform within the first week; accumulated over 100K units in total sales
*   Completed full delivery with a 7-person team across a 2-month cycle

**Takeaways:**
*   Focusing resources on core combat with streamlined auxiliary mechanics significantly eased onboarding
*   Follow-up expansions were partially adjusted due to product strategy shifts, emphasizing the need for standardized documentation and handoff guidelines for long-term numeric maintenance
`,
            JA: `
## 設計目標と課題

短期間の開発およびUGC環境において、手軽でテンポの良い体験を好む層に向けて、わかりやすく手応えのある戦闘・成長ループを構築することを目指しました。また、モジュール化された島嶼設計を通じて多彩なテーマの探索コンテンツを提供することを試みました。

## 設計ソリューション

**戦闘と成長サイクルの集中:**
*   チェックポイントを配置した半線形設計を採用し、探索の自由度を保ちながら段階的な目標を提示
*   進行ループ：「探索 → 討伐 → 素材交換による装備獲得 → 戦力向上 → ボス戦」
*   正気度（SAN値）と満腹度の二重管理により、野外探索の緊張感と補給の必要性をコントロール

**モジュール型テーマ設計:**
*   メイン島と複数の異次元テーマ島からなる構成を策定。各エリアに独自の環境、モンスター挙動、ボスを用意
*   10箇所以上の探索拠点、30種以上の武器、40種以上の敵、3体のボス、70種以上のブロックを実装

## 成果と振り返り

**実績:**
*   配信初週にランキング入りし、累計販売数10万本を突破
*   7名体制・2ヶ月の開発サイクルで納品を完了

**学びと反省:**
*   戦闘と成長要素にリソースを集中させたことで、導入のハードルを下げテンポの良い体験を実現
*   計画していた追加テーマ展開はプロジェクト方針変更に伴い一部に留まり、長期運用における数値管理規约や引き継ぎドキュメント整備の重要性を再認識しました
`
        },
        images: ['/assets/images/KBDCover.png', '/assets/images/HorrorIsland_01.png', '/assets/images/HorrorIsland_02.png', '/assets/images/HorrorIsland_03.png'],
        links: [
            { labels: { CN: "发布页面", EN: "Release Page", JA: "リリースページ" }, urls: { CN: 'https://resource-minecraft.h5.163.com/#/detail?id=4842525790400877148', EN: 'https://resource-minecraft.h5.163.com/#/detail?id=4842525790400877148' }, type: 'Release Page' }
        ],
        workDistribution: [
            { labels: { CN: "Game Design", EN: "Game Design", JA: "ゲームデザイン" }, percentage: 100 }
        ]
    },
    {//Project FR
        id: 'project-fr',
        titles: { CN: "Project FR", EN: "Project FR", JA: "Project FR" },
        type: 'Commercial',
        showPriority: 75,
        engine: 'Unreal',
        gameType: ['Action RPG'],
        role: ['Creative Director'],
        techStack: ['UE5 Blueprint', 'Full Stack Design', 'Pre-production Management'],
        thumbnail: '/assets/images/FR_SystemDiagram.png',
        shortDescriptions: {
            CN: "基于原创IP的中低体量单机ARPG预研，聚焦乐器战斗与双角色协同机制的可行性验证。",
            EN: "Mid-scale single-player ARPG pre-production based on original IP, validating instrument combat and dual-character cooperation mechanics.",
            JA: "オリジナルIPに基づく中規模シングルプレイヤーARPGのプリプロダクション。楽器戦闘と2人連携メカニクスの実現可能性を検証。"
        },
        sales: 'Pre-production',
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "约1年半", EN: "About 1.5 years", JA: "約1.5年" },
        startDate: '2024.08',
        endDate: 'Present',
        teamSizes: { CN: "3人 + 其他可用人员", EN: "3 People + Other people", JA: "3人 + その他サポート" },
        descriptions: {
            CN: `
## 项目背景与目标

**立项背景:**
配合公司原创IP拓展战略，在种子期有限预算条件下探索中轻量单机ARPG品类的可行性，对标经典同类作品的Vertical Slice规模，验证核心玩法与叙事设定的融合度。

**研发约束:**
处于早期预研阶段，团队规模精简，需要在严格的资源限制下兼顾概念设计、原型开发与投资沟通。

## 设计与预研方案

**核心玩法原型 - 乐器战斗与双角色协同:**
*   **设计构想:** 将乐器作为武器母题，结合节奏与动作指令构建连招体系
*   **主副机机制:** 玩家主控角色与AI协同僚机配合输出与终结，在战斗交互中强化角色间的情感联结与默契感
*   **原型验证:** 基于UE5搭建快速概念原型（POC），验证输入序列、技能衔接与僚机协同逻辑

**预研体系与规范建立:**
*   梳理系统架构图、世界观框架及角色/区域设定，为后续内容铺量建立基线
*   编制10+份设计文档模板（LDD/SDD/设定模板）与评审Checklist，规范流程以降低跨职能沟通成本
*   通过UE5蓝图快速跑通核心战斗循环，辅助设计方案的论证与迭代

## 进展与经验复盘

**阶段成果:**
*   完成了世界观底层框架与系统架构的初期梳理
*   完成了乐器战斗+主副机协同的核心玩法机制验证与原型演示
*   在协作过程中协助培养了核心设计成员独立推进模块的能力

**挑战与反思:**
*   动作游戏深层打击感与技能状态机（GAS框架）的技术实现对早期精简团队具有较高挑战，需更充分的技术预研配合
*   在资源与团队变动环境下，深刻体会到早期技术架构对齐、精细化范围管理及明确协作机制对预研项目平稳推进的重要性
`,
            EN: `
## Background & Goals

**Context:**
As part of the company's original IP expansion, explored the feasibility of a mid-to-compact single-player ARPG within seed-stage resource constraints. Benchmarked against classic concise action titles to validate core mechanics and narrative integration for a vertical slice.

**Constraints:**
Operating in early pre-production with a compact team, requiring balanced focus across conceptual design, prototype implementation, and investor presentations.

## Design & Prototyping

**Core Mechanics - Instrument Combat & Dual-Character Synergy:**
*   **Concept:** Utilized musical instruments as a weapon motif, combining rhythmic timing with action combos
*   **Dual-Character Synergy:** Player-controlled lead coordinated with an AI companion for setups and finishers, reinforcing narrative companion bonds through combat mechanics
*   **POC Validation:** Built rapid prototypes in UE5 to test input sequences, skill transitions, and companion AI behaviors

**Framework & Process Standardization:**
*   Structured system architectures, worldbuilding lore, and character/regional bibles
*   Authored 10+ design document templates (LDD/SDD/lore specs) and review checklists to streamline cross-functional handoffs
*   Utilized UE5 Blueprints to iterate core combat loops and validate mechanics efficiently

## Progress & Retrospective

**Key Milestones:**
*   Established foundational worldbuilding framework and system documentation
*   Validated core mechanics and playable prototypes for instrument combat and companion collaboration
*   Supported team members in taking ownership of specific module designs

**Challenges & Learnings:**
*   Advanced action feel tuning and Gameplay Ability System (GAS) implementation presented substantial technical hurdles for a lean team, highlighting the need for deeper early technical alignment
*   Navigating resource shifts underscored the importance of rigorous scope management and structured communication workflows in pre-production
`,
            JA: `
## プロジェクトの背景と目標

**立ち上げ背景:**
オリジナルIPの展開戦略の一環として、シード段階の限られたリソースの中で中・小規模なシングルプレイARPGの実現可能性を模索。クラシックな同系タイトルの規模感をベンチマークとし、コアアクションと世界観設定の融合度を検証するVertical Sliceを目指しました。

**開発環境:**
少人数体制の初期プリプロダクション段階において、コンセプト設計、プロトタイプ開発、投資家向けピッチを並行して推進。

## 設計とプロトタイプ検証

**コアメカニクス - 楽器戦闘と2人連携:**
*   **着想:** 楽器を武器モチーフとし、リズムとアクションコマンドを融合させたコンボシステムを構想
*   **連携メカニクス:** 主人公とAI僚機の連携による追撃・フィニッシュ演出を通じて、戦闘の中でキャラクター同士の絆を表現
*   **プロトタイプ検証:** UE5ブループリントを用いて入力シーケンス、スキル連携、僚機AIの挙動を検証するPOCを構築

**開発プロセスと基準の整備:**
*   システム構成図、世界観設定、キャラクター/エリア設定のベースラインを策定
*   10以上のドキュメントテンプレート（LDD/SDD/設定書）とレビュー用チェックリストを作成し、連携コストを削減
*   UE5での迅速なプロトタイプ実装を通じて、デザイン案の検証とイテレーションを加速

## 進捗と振り返り

**成果:**
*   世界観の基本骨子およびシステム設計ドキュメントの初版を整備
*   楽器戦闘およびパートナー連携のコアメカニクス検証とプロトタイプ実演を完了
*   各モジュールの設計を自律的に担当できるメンバーの成長をサポート

**課題と学び:**
*   本格的なアクション手触りの調整やGAS（Gameplay Ability System）の実装には高い技術ハードルがあり、初期段階での綿密な技術検証の必要性を実感
*   リソース制約下での開発を通じ、スコープ管理の徹底と明確なコミュニケーションプロセスの重要性を再確認しました
`
        },
        images: ['/assets/images/FR_SystemDiagram.png'],
        video: undefined,
        links: [
            { labels: { CN: "加入等候名单", EN: "Join Waitlist", JA: "ウェイティングリスト" }, urls: { CN: "https://www.preludegames.com", EN: "https://www.preludegames.com", JA: "https://www.preludegames.com" }, type: "waitlist" }
        ]
    },
    {//Project DT
        id: 'project-dt',
        titles: { CN: "Project DT", EN: "Project DT", JA: "Project DT" },
        type: 'Commercial',
        showPriority: 75,
        engine: 'Other',
        gameType: ['Visual Novel'],
        role: ['Creative Director', 'Lead Writer'],
        techStack: ['Full Stack Design'],
        thumbnail: '',
        shortDescriptions: {
            CN: "基于原创IP的成长主题公路剧视觉小说，为后续ARPG项目建立用户认知基础。",
            EN: "Growth-themed road-trip visual novel based on original IP, establishing audience awareness for future ARPG projects.",
            JA: "オリジナルIPに基づく成長をテーマにしたロードムービー風ビジュアルノベル。将来のARPGプロジェクトに向けた認知基盤を構築。"
        },
        sales: 'Pre-production',
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "约2个月", EN: "About 2 months", JA: "約2ヶ月" },
        startDate: '2025.12',
        endDate: 'Present',
        teamSizes: { CN: "10+人 (3全职)", EN: "10+ People (3 full-time)", JA: "10人以上 (フルタイム3名)" },
        descriptions: {
            CN: `
## 项目定位与目标

**叙事与获客协同:**
Project DT作为原创IP世界观的先导叙事作品，采用轻量化视觉小说形式，旨在以较低的制作门槛验证故事与角色魅力，为后续中体量ARPG（Project FR）积累核心受众与世界观认知。

**题材与受众定位:**
*   **成长与探索主题:** 聚焦青年的自我探寻、迷惘与成长，探索更具共鸣感的叙事空间
*   **公路剧叙事模式:** 借助旅途动线逐步展开不同地域、城邦与风土人情，在有限篇幅内优先铺开世界观的广度

## 设计方案

**公路剧叙事结构:**
*   通过男主角的旅程引入各具特色的伙伴，在解决沿途各地事件的过程中展现角色性格转变
*   世界观设定采用渐进式投放，将宏观设定自然融入旅途冲突与人物对话中，避免信息过载

**角色与情感构建:**
*   确立清晰的主角羁绊主线，同时丰富群像同伴的立体度与日常互动
*   注重角色行为与心理动因的刻画，避免生硬的说教式对白

**流程与文档规范:**
*   编制统一的人物设定模板、区域设定文档与情节大纲
*   协同美术、音乐与程序等团队成员推进章节制作与试玩验证

## 进展与复盘

**阶段进展:**
*   完成整体大纲、主要人物选型与核心章节剧本初稿
*   产出配套的世界观与区域设定文档，确保与后续ARPG项目的设定保持自洽
*   在小范围测试中收集了对角色设定与叙事节奏的初期正向反馈

**当前反思:**
*   主线叙事张力与情绪波动的把控仍在持续打磨，需进一步优化部分章节的节奏与互动深度
`,
            EN: `
## Project Positioning & Goals

**Narrative & Audience Building:**
Serving as a narrative precursor to the original IP's universe, Project DT utilizes a visual novel format to test lore appeal and character dynamics with manageable production overhead, establishing audience awareness for the upcoming ARPG (Project FR).

**Theme & Target Audience:**
*   **Growth & Exploration:** Focuses on identity, personal growth, and coming-of-age themes designed to resonate with young adult audiences
*   **Road-Trip Structure:** Employs a journey format to reveal diverse locations and factions, prioritizing world breadth within an accessible scope

## Design Solution

**Road-Trip Narrative Structure:**
*   Structures the narrative around an evolving party travelling across varied settlements, driving character growth through incident resolution
*   Implements layered worldbuilding integration, weaving lore smoothly into character interactions to prevent information overload

**Character Dynamics:**
*   Maintains a cohesive emotional core between key leads while fleshing out ensemble interactions
*   Focuses on behavioral nuance and subtle psychological shifts rather than overt didactic exposition

**Process Standardization:**
*   Authored standard character dossiers, regional bibles, and story outlines
*   Coordinated with art, audio, and script teams to maintain consistent production quality

## Progress & Retrospective

**Key Milestones:**
*   Completed story outlines, core cast definitions, and early chapter drafts
*   Aligned worldbuilding documentation with future ARPG project lore
*   Gathered positive initial qualitative feedback regarding character chemistry and themes

**Current Reflections:**
*   Ongoing iteration is focused on fine-tuning dramatic pacing and narrative tension across mid-game chapters
`,
            JA: `
## プロジェクトのポジショニングと目標

**叙事とファン層形成の連携:**
オリジナルIPの先行叙事作品として、ビジュアルノベル形式を採用。制作負担を抑えつつキャラクターと世界観の魅力を検証し、将来のアクションRPG（Project FR）に向けた認知基盤を構築することを目指しました。

**テーマとターゲット層:**
*   **成長と探求のテーマ:** 若者のアイデンティティ模索や葛藤、成長に焦点を当て、共感性の高い叙事空間を追求
*   **ロードムービー構造:** 旅の動線を通じて多様な地域や風土を順次描写し、限られた開発規模の中で世界観の広がりを提示

## 設計ソリューション

**ロードムービー型ストーリー構成:**
*   主人公たちの旅路を通じて仲間が加わり、各地の事件解決を通じて内面的な成長を描く構成
*   世界観設定を段階的に開示し、会話や葛藤の中に自然に溶け込ませることで情報過多を防止

**キャラクター描写と関係性:**
*   軸となるキャラクター同士の絆を大切にしつつ、群像劇としての仲間たちの個性や日常会話を丁寧に構築
*   説教じみた表現を避け、行動や選択の描写を通じて心情の変化を表現

**制作プロセスの標準化:**
*   キャラクター設定書、エリア設定資料、プロット概要を標準フォーマットで作成
*   アート、音楽、スクリプト担当と連携し、統一感のある進行を推進

## 進捗と振り返り

**現在の進捗:**
*   全体プロット、主要キャラクター設定、初期章のシナリオ初稿を完了
*   後続のARPGプロジェクトと整合性の取れた世界観資料を整備
*   小規模テストにおいて、キャラクターの魅力や物語の方向性に良好な初期反応を確認

**今後の課題:**
*   中盤以降のドラマの緊張感やテンポ感のバランス調整を継続してブラッシュアップ中
`
        },
        images: [],
        video: undefined,
        links: [
            { labels: { CN: "加入等候名单", EN: "Join Waitlist", JA: "ウェイティングリスト" }, urls: { CN: "https://www.preludegames.com", EN: "https://www.preludegames.com", JA: "https://www.preludegames.com" }, type: "waitlist" }
        ]
    },
    {//Lightning Hero
        id: 'lightning-hero',
        mainProjectId: 'netease-minecraft-mod',
        titles: { CN: "闪电英雄", EN: "Lightning Hero", JA: "ライトニング・ヒーロー" },
        type: 'Commercial',
        showPriority: 70,
        engine: 'Python',
        gameType: 'RPG',
        role: ['Lead Designer'],
        techStack: ['Full Stack Design'],
        thumbnail: '/assets/images/LHCover.png',
        shortDescriptions: {
            CN: "轻量级变身体验模组，为游玩大型模组的玩家提供零冲突的即战力补充。",
            EN: "Lightweight hero transformation mod offering seamless, conflict-free combat enhancement alongside heavy modpacks.",
            JA: "軽量なヒーロー変身体験MOD。大型MOD環境でも競合なく手軽に戦力を補完できるよう設計。"
        },
        sales: '1M+ Units',
        platforms: { CN: "我的世界 (中国版)", EN: "Minecraft (NetEase)", JA: "Minecraft (NetEase中国版)" },
        durations: { CN: "5天", EN: "5 days", JA: "5日間" },
        startDate: '2023.05',
        endDate: '2023.05',
        teamSizes: { CN: "3人", EN: "3 People", JA: "3人" },
        prices: { CN: "¥6", EN: "$0.99", JA: "￥130" },
        descriptions: {
            CN: `
## 市场洞察与项目契机

**项目契机:**
该项目最初源于团队负责人给新入职程序布置的一项技术练习作业。在审阅该功能雏形时，我结合当时的市场趋势，评估其具备独立商业化的潜力，因此建议并主导将其完善为独立轻量产品上线。

**市场需求洞察:**
当时平台上的大型模组体量与系统复杂度持续攀升，玩家在加载重度模组时往往难以再加载其他复杂内容。而一个**体积极轻、零前置依赖、无路径冲突且能提供实用战力**的轻量变身工具，恰好能满足玩家在大型模组攻关中获取阶段性战力补充的诉求。

## 设计方案

**精简聚焦的设计原则:**
*   **内容规划:** 精炼收敛为5个标志性变身道具与5项核心能力，不添加冗余辅助系统，控制体积与上手成本
*   **兼容性保障:** 采用独立逻辑实现，确保与市面主流大型模组均能无冲突并存
*   **实用反馈:** 技能数值设定具备明确的实用性，为应对高难度战斗场景提供直观助力

**敏捷研发协作:**
*   基于已有成熟的动作与变身技术框架快速迭代
*   3人团队在5天内高效完成功能打磨、测试与上架准备

## 成果与总结

**商业表现:**
*   累计销量突破100万份，累计获得3000+条评价与4.5的综合评分
*   以极轻量的研发投入取得了超出预期的商业回报

**设计启示:**
*   从看似简单的技术练手中敏锐捕捉未被满足的细分市场需求，体现了以玩家实际游玩场景为导向的设计价值
*   在特定市场阶段，克制、聚焦且兼顾兼容性的轻量级工具产品同样具备强大的生命力
`,
            EN: `
## Market Insight & Project Genesis

**Genesis:**
The project originated as an onboarding practice task assigned by the team lead to a newly joined programmer. During design review of this prototype, I identified clear market potential and recommended refining and packaging it into a standalone lightweight release.

**Market Demand:**
At the time, major platform modpacks were growing increasingly massive and complex, making multiple heavy mods incompatible. Players engaged in challenging modpacks had a distinct need for a **compact, zero-dependency, conflict-free combat utility** to supplement their gameplay without causing technical conflicts.

## Design Solution

**Minimalist & Focused Approach:**
*   **Focused Scope:** Streamlined to 5 iconic transformation items and 5 active abilities, avoiding extraneous systems to minimize download size and learning curves
*   **High Compatibility:** Engineered with self-contained logic ensuring conflict-free integration alongside major heavy mods
*   **Practical Utility:** Tuned ability parameters to provide direct, tangible combat utility in high-difficulty situations

**Agile Execution:**
*   Leveraged established motion and transformation tech stacks for rapid iteration
*   Coordinated a 3-person team across a 5-day cycle to complete design polish, QA, and launch preparation

## Results & Reflections

**Performance:**
*   Achieved over 1M total sales, earning 3,000+ reviews and a 4.5 average rating
*   Delivered strong commercial performance through highly focused, agile execution

**Key Takeaways:**
*   Recognizing genuine user demand within internal technical exercises demonstrated the value of player-centric market awareness
*   Disciplined scope control and high compatibility can turn focused utility mods into successful commercial products
`,
            JA: `
## 市場の洞察とプロジェクトの経緯

**立ち上げの経緯:**
本プロジェクトは、チーム責任者が新入社員のプログラマーに課した技術演習課題が発端でした。そのプロトタイプをレビューした際、当時の市場動向を踏まえて独立製品としての可能性を見出し、ブラッシュアップして単体MODとしてリリースすることを提案・主導しました。

**市場ニーズの把握:**
当時、プラットフォーム上では大型MODの複雑化が進み、複数の重厚なMODを併用することが困難になっていました。その中で、**容量が極めて小さく、依存関係がなく、競合を起こさずに実用的な戦力を提供できる**軽量な変身MODは、高難度MODを攻略中のプレイヤーにとって手軽な戦力補完ツールとしての需要が存在していました。

## 設計ソリューション

**シンプルかつ要点を絞った設計:**
*   **厳選された要素:** 5つの変身アイテムと5つの主要スキルに絞り込み、不要なシステムを排して容量と習得コストを最小化
*   **高い互換性:** 独立した処理構造を採用し、既存の大型MOD環境とも競合なく併用可能に設計
*   **確かな実用性:** スキルの効果と数値を分かりやすく調整し、高難度の戦闘状況で頼りになる性能を提供

**迅速な開発連携:**
*   蓄積された変身システムの技術基盤を活用してスムーズに制作
*   3名体制で5日間の迅速なサイクルにより、機能調整からテスト、配信準備までを完了

## 成果と振り返り

**実績:**
*   累計販売数100万本を突破し、3000件以上のレビューと4.5の高評価を獲得
*   少人数・短期間の集中開発により、高い成果を達成

**学び:**
*   技術演習の中からユーザーの潜在ニーズを見出し、的確な形に昇华させる視点の大切さを実感
*   過度な複雑さを避け、互換性と実用性に特化した軽量設計が市場に受け入れられた事例となりました
`
        },
        images: ['/assets/images/LHCover.png'],
        video: '/assets/images/Lightning Hero.mp4',
        links: [
            { labels: { CN: "发布页面", EN: "Release Page", JA: "リリースページ" }, urls: { CN: 'https://resource-minecraft.h5.163.com/#/detail?id=4664383590833725456', EN: 'https://resource-minecraft.h5.163.com/#/detail?id=4664383590833725456' }, type: 'Release Page' }
        ]
    },
    {//Real World Project
        id: 'rwp-worldview',
        titles: { CN: "RWP 世界观", EN: "Real World Project (RWP)", JA: "RWP 世界観" },
        type: 'Commercial',
        showPriority: 75,
        engine: 'Other',
        gameType: ['World-building', 'IP Framework'],
        role: ['Creative Director'],
        techStack: ['Narrative Design', 'IP Strategy'],
        thumbnail: '',
        shortDescriptions: {
            CN: "原创IP世界观底层架构构建，支撑多品类游戏产品线与长期内容扩展。",
            EN: "Foundational worldbuilding and lore architecture for an original IP, supporting multi-genre games and long-term content expansion.",
            JA: "オリジナルIPの基盤となる世界観フレームワーク構築。複数ジャンルの製品展開と長期的なコンテンツ拡張を支える。"
        },
        sales: 'IP Foundation',
        platforms: { CN: "IP 基础设施", EN: "IP Infrastructure", JA: "IPインフラ" },
        durations: { CN: "约1年 (持续完善)", EN: "About 1 year (implementing)", JA: "約1年 (継続的に改善中)" },
        startDate: '2024.06',
        endDate: 'Present',
        teamSizes: { CN: "4人核心团队", EN: "4-person Core Team", JA: "コアチーム4名" },
        descriptions: {
            CN: `
## 项目定位与目标

**多品类承载的IP基础设施:**
RWP（Real World Project）是为支撑公司多条产品线而搭建的原创世界观底层框架。旨在建立一套自洽、严谨且具备延展性的规则体系，使视觉小说（Project DT）、动作RPG（Project FR）以及未来潜在品类能够共享统一的世界观根基与历史脉络。

## 架构设计与方法论

**架构维度划分:**
*   **时空脉络:** 梳理了跨越数千年的历史年表与纪年体系，明确主要历史纪元与文明演变节点
*   **地理与社会:** 规划了大陆格局、核心国家制度、种族特征与生态分类
*   **底层规则:** 确立了魔法、技术、信仰与物质计量等核心设定，保障不同作品在规则上的逻辑一致性

**“充分且必要”的设计原则:**
*   **精准克制:** 优先搭建支撑当前研发管线所必需的主干设定与记忆点，避免早期无约束的发散与过度设计
*   **逻辑自洽:** 确保新设定的加入能够沿底层规则进行回溯与推导，保持长线扩展的稳固性
*   **服务于玩法交互:** 设定构思始终结合游戏实际玩法需求，确保世界观不仅是一套叙事背景，更具备向关卡与系统转化为游戏体验的空间

## 成果与协同

**核心产出:**
*   建立了覆盖历史、地理、种族、魔法与科技等维度的系统化设定文档库
*   制定了世界观扩展规范与设定审核清单，协助团队在多项目并行时维持设定统一

**跨项目协同:**
*   在AVG项目（Project DT）中投放了地理、种族与基础常识设定，完成玩家对世界观的初次建构
*   为ARPG项目（Project FR）提供了核心阵营、冲突动机与能力设定的理论支撑
`,
            EN: `
## Project Positioning & Goals

**Multi-Genre IP Foundation:**
RWP (Real World Project) serves as the core worldbuilding framework supporting multiple game production pipelines. It establishes a consistent, rigorously structured ruleset enabling visual novels (Project DT), action RPGs (Project FR), and future titles to share a unified historical and mythological foundation.

## Architectural Design & Methodology

**Framework Dimensions:**
*   **Spatiotemporal Lore:** Established a chronological timeline spanning multiple historical eras, documenting major cultural and geopolitical shifts
*   **Geography & Societies:** Defined continent geography, major nations, faction governance, distinct races, and ecological systems
*   **Core Systems:** Standardized underlying rules governing magic, technology, faiths, and metrology to ensure internal consistency

**"Sufficient & Necessary" Methodology:**
*   **Disciplined Scope:** Focused on essential foundational pillars required by active projects, preventing premature over-design
*   **Logical Coherence:** Ensured newly introduced concepts trace logically back to core metaphysical and historical axioms
*   **Gameplay-Oriented Design:** Designed world lore with interactive playability in mind, ensuring settings translate effectively into level layouts and game mechanics

## Deliverables & Coordination

**Core Assets:**
*   Established a comprehensive documentation archive covering history, geography, species, magic, and technology
*   Created worldbuilding expansion guidelines and review checklists to maintain consistency across parallel teams

**Cross-Project Integration:**
*   Integrated geographic, racial, and cultural foundations into the visual novel (Project DT) for initial audience onboarding
*   Provided faction motivations, narrative conflicts, and power systems for the ARPG (Project FR)
`,
            JA: `
## プロジェクトのポジショニングと目標

**複数ジャンルを支えるIPインフラ:**
RWP（Real World Project）は、複数のゲーム開発ラインを支えるために策定されたオリジナル世界観の基盤フレームワークです。論理的整合性と拡張性を備えたルール体系を構築し、ビジュアルノベル（Project DT）やアクションRPG（Project FR）、将来の作品群が共通の歴史と世界観を共有できる基盤を目指しました。

## 設計構造と手法

**フレームワークの構成要素:**
*   **時系列の整理:** 数千年に及ぶ年表と時代区分を策定し、文明の変遷や歴史的出来事の節目を明文化
*   **地理と社会制度:** 大陸の地理区分、主要国家の統治機構、種族の特性や生態系を設計
*   **基底ルール:** 魔法体系、科学技術、信仰、計量基準などのルールを統一し、作品間での設定の矛盾を防止

**「必要十分」な設計原則:**
*   **抑制の効いた設計:** 進行中のプロジェクトに必要な骨格と印象的な要素の構築を優先し、過剰な初期設定を抑制
*   **論理的整合性:** 新しい要素を追加する際にも基底ルールから論理的に推導できるよう構成
*   **ゲームプレイへの配慮:** 単なるテキスト設定にとどまらず、レベルデザインやゲームシステムへと変換可能なプレイアビリティを意識して構築

## 成果とプロジェクト間連携

**主な成果物:**
*   歴史、地理、種族、魔法、科学技術などを網羅した体系的な設定資料群を整備
*   世界観の拡張ルールとレビューチェックリストを策定し、複数チームでの共有を円滑化

**プロジェクト間連携:**
*   ビジュアルノベル（Project DT）において地理や種族の設定を導入し、プレイヤーの世界観理解を促進
*   アクションRPG（Project FR）に向けて勢力間の対立構造や能力設定の根拠を提供
`
        },
        images: [],
        video: undefined,
        links: [{ labels: { CN: "加入等候名单", EN: "Join Waitlist", JA: "ウェイティングリスト" }, urls: { CN: "https://www.preludegames.com", EN: "https://www.preludegames.com", JA: "https://www.preludegames.com" }, type: "waitlist" }]
    },
    {//Overwatch in Minecraft
        id: 'owmc',
        mainProjectId: 'netease-minecraft-mod',
        titles: { CN: "先锋对决", EN: "Overwatch in Minecraft", JA: "オーバーウォッチ in Minecraft" },
        type: 'Commercial',
        showPriority: 60,
        engine: 'Python',
        gameType: ['FPS', 'Hero Shooter'],
        role: ['Designer'],
        techStack: ['UX Design'],
        thumbnail: '/assets/images/OWMCCover.png',
        shortDescriptions: {
            CN: "经典英雄射击机制在MC框架下的玩法移植，聚焦移动端触控UX适配与操作调优。",
            EN: "Hero shooter mechanics adaptation in Minecraft, focusing on mobile touch UX and controls tuning.",
            JA: "ヒーローシューターのメカニクスをMinecraft向けに移植。モバイル端末のタッチUX適合と操作性調整を担当。"
        },
        sales: '10K+',
        platforms: { CN: "我的世界 (中国版)", EN: "Minecraft (NetEase)", JA: "Minecraft (NetEase中国版)" },
        durations: { CN: "约3周", EN: "About 3 Weeks", JA: "約3週間" },
        teamSizes: { CN: "4 人", EN: "4 people", JA: "4人" },
        prices: { CN: "10 RMB", EN: "1.99 USD", JA: "￥220" },
        startDate: '2023.02',
        endDate: '2023.02',
        descriptions: {
            CN: `
## 项目背景与目标

**跨端移植与机制探索:**
承接经典英雄射击玩法的机制复刻与适配需求，在MC移动端环境中探索射击操作与技能交互的可行性，验证平台技术边界与交互体验。

## 工作内容与设计方案

**英雄技能与机制移植:**
*   梳理多个代表性英雄（如源氏、士兵76、半藏等）的核心技能与动作反馈，将其适配至MC的物理与技能事件框架中
*   根据平台特性调整判定范围与冷却节奏，保持英雄辨识度与操作流畅感

**移动端触控交互适配:**
*   设计符合移动端习惯的角色选择、技能释放与主操作界面流程
*   解决触控屏射击与视角转动的冲突，实现支持屏幕触控与连续射击协同的操作逻辑，优化操作便利性与打击反馈

## 成果与沉淀

**能力沉淀:**
*   建立了对PC端键鼠与移动端触控交互在射击品类中差异化设计的实际认知
*   熟悉了网易MC底层API与模组开发流程，为后续复杂系统模组的设计与技术协作奠定了基础
`,
            EN: `
## Project Context & Goals

**Cross-Platform Adaptation & Mechanics Exploration:**
Undertook the gameplay adaptation of classic hero-shooter mechanics to the Minecraft mobile environment, evaluating control feasibility and platform technical constraints.

## Work Scope & Design Solutions

**Hero Mechanics Adaptation:**
*   Mapped key mechanics for representative heroes (Genji, Soldier: 76, Hanzo) into Minecraft's physics and event framework
*   Adjusted hitboxes and cooldown pacing to fit platform characteristics while preserving signature hero gameplay

**Mobile Touch UX Optimization:**
*   Designed mobile-friendly layouts for hero selection, skill activation, and HUD controls
*   Addressed mobile touch conflicts between camera movement and firing, refining screen-tap shooting controls to enhance touch responsiveness

## Deliverables & Growth

**Technical Growth:**
*   Gained concrete understanding of cross-platform UX differences (mouse/keyboard vs. touch interfaces) in shooter games
*   Familiarized with the NetEase Minecraft API and modding pipeline, establishing technical foundations for subsequent complex projects
`,
            JA: `
## プロジェクトの背景と目標

**クロスプラットフォーム適応と検証:**
ヒーローシューターのゲーム性をMinecraftモバイル版へ移植する試みとして、タッチ操作環境における射撃操作とスキル挙動の実現可能性を検証しました。

## 担当業務と設計ソリューション

**ヒーローの移植と調整:**
*   代表的なヒーロー（ゲンジ、ソルジャー76、ハンゾー等）の特徴的なスキルとアクションをMinecraftの仕様に合わせて再構築
*   プラットフォーム特性を考慮して判定やクールダウンを調整し、操作感を維持

**モバイル向けタッチUXの最適化:**
*   スマートフォン環境に適したキャラクター選択、スキル発動、HUDレイアウトを設計
*   視点移動と射撃操作の干渉を改善し、タップ操作と連続射撃が円滑に行える操作ロジックを実装

## 成果と学び

**経験の蓄積:**
*   シューターにおけるPC（マウス・キーボード）とモバイル（タッチ操作）のUI/UX設計の差異について実践的な知見を獲得
*   Minecraft APIおよびMOD開発パイプラインへの理解を深め、その後の大規模プロジェクト設計の基礎を築きました
`
        },
        images: ['/assets/images/OWMCCover.png', '/assets/images/Overwatch.png'],
        video: '/assets/images/OWMC.mp4',
        links: [
            { labels: { CN: "发布页面", EN: "Release Page", JA: "リリースページ" }, urls: { CN: 'https://resource-minecraft.h5.163.com/#/detail?id=4662108906629006831', EN: 'https://resource-minecraft.h5.163.com/#/detail?id=4662108906629006831' }, type: 'Release Page' }
        ]
    },
    {//Illegal Assembly
        id: 'illegal-assembly',
        titles: { CN: "非法组装", EN: "Illegal Assembly", JA: "違法構築" },
        type: 'Personal',
        showPriority: 95,
        engine: 'Unreal',
        gameType: 'Simulation',
        role: ['Lead Designer', 'Lead Programmer'],
        techStack: ['Unreal Engine 5', 'C++', 'Blueprint'],
        thumbnail: '/assets/images/IllagelAssemblyLogo.PNG',
        shortDescriptions: {
            CN: "俯视角3D工厂建设与自动化模拟游戏，验证核心生产循环与模块化系统架构。",
            EN: "Top-down 3D factory automation simulation validating core production loops and modular system architecture.",
            JA: "トップダウン視点の3D工場建設・自動化シミュレーション。コア生産ループとモジュール設計を検証。"
        },
        workHours: 462,
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "2024.06 - 2024.08", EN: "Jun 2024 - Aug 2024", JA: "2024年6月 - 2024年8月" },
        startDate: '2024.06',
        endDate: '2024.08',
        teamSizes: { CN: "8人", EN: "8 People", JA: "8人" },
        descriptions: {
            CN: `
## 项目背景与职责

**项目背景:**
8人团队的学期项目。因团队人员变动，为保障研发进度与整体交付质量，启用了预先构思的自动化题材方案。

**双重职责分工:**
作为主策划兼主程序，负责整体游戏规则与数值框架设计，并直接承担核心系统的蓝图/代码实现，确保设计思路高效转化为可运行的原型。

## 系统设计与原型开发

**核心生产循环构建:**
*   围绕“原料采集 → 产线加工 → 成品物流与交付”构建闭环玩法
*   通过UE5蓝图落地了建筑、物品、配方、任务、科技树与建筑插件等6大核心系统，在设计初期充分考量系统的解耦与拓展性
*   快速完成包含新手引导至基础通关流程的垂直切片（Vertical Slice），用于验证核心逻辑闭环

**交互与工程支持:**
*   快速上手Unreal引擎开发工具链与蓝图可视化编程
*   协同UI程序优化建造与物流交互逻辑，修复多项关键操作层交互问题，保障流水线搭建的顺畅度

## 成果与复盘

**交付成果:**
*   按时交付了流程完整的可玩版本，并通过了多次公开演示与同行试玩反馈
*   验证了自动化模拟游戏在模块化系统设计与范围管理上的可行性

**经验反思:**
*   在有限周期内虽完成了核心玩法的闭环交付，但在深层系统耦合与细节打磨上仍有提升空间
*   深刻体会到复杂模拟类游戏对底层技术架构与工业化管线深度的要求，推动了后续对程序架构与引擎底层技术的深入学习
`,
            EN: `
## Project Context & Responsibilities

**Context:**
An academic semester project for an 8-person team. Implemented a pre-conceived factory automation design to ensure timely milestone completion following team composition adjustments.

**Dual Responsibilities:**
Served as both Lead Designer and Lead Programmer, steering game systems design while directly implementing core mechanics in Unreal Engine 5 Blueprints to maintain efficient design-to-code turnaround.

## System Design & Prototyping

**Production Loop Implementation:**
*   Built the core loop around "Raw Material Gathering → Factory Processing → Logistics & Order Fulfillment"
*   Architected 6 core modular systems: Building, Item Registry, Recipes, Quests, Tech Tree, and Facility Add-ons
*   Delivered a complete Vertical Slice covering onboarding through end-game milestones to validate systemic loops

**Interaction & Engineering:**
*   Rapidly adapted to Unreal Engine 5 workflows and Blueprint visual scripting
*   Assisted UI engineering in refining placement and management interactions, resolving critical interaction issues

## Outcomes & Retrospective

**Milestones:**
*   Delivered a fully playable build on schedule, receiving constructive feedback during public presentations and peer playtests
*   Demonstrated the effectiveness of modular architecture and disciplined scope management in simulation systems

**Reflections:**
*   While the core loop was successfully completed within the timeline, deeper systemic nuance and polish remained areas for growth
*   Highlighted the deep technical rigour required for complex automation simulations, motivating further study into software architecture and engine internals
`,
            JA: `
## プロジェクトの背景と担当業務

**プロジェクトの背景:**
8人チームによる学期制作プロジェクト。体制変更に伴う進行リスクを回避するため、事前に構想していた工場自動化シミュレーション企画を採用して円滑な納品を目指しました。

**担当業務:**
リードプランナー兼リードプログラマーとして、ゲームデザインの策定とUE5ブループリントによる主要システムの実装を兼任し、設計意図を迅速にプロトタイプへ反映させました。

## システム設計と開発

**生産サイクルの構築:**
*   「素材収集 → 生産ライン加工 → 物流・納品」のコアループを構築
*   建築、アイテム、レシピ、クエスト、テックツリー、施設拡張の6つの基盤システムを実装し、拡張性を意識したモジュール設計を採用
*   チュートリアルから目標達成までを通しで遊べるバーティカル・スライスを迅速に構築し、遊びの成立を検証

**操作性とエンジニアリング:**
*   UE5のツールチェーンとブループリント開発を迅速に習得
*   UI周りの操作性向上を支援し、配置や管理に関わる複数の操作課題を解消

## 成果と振り返り

**成果:**
*   通しでプレイ可能なビルドを予定通り納品し、公開プレゼンテーションや試遊会で良好な反応を獲得
*   モジュール化されたシステム設計とスコープ管理の有効性を実証

**学びと反省:**
*   限られた期間内でコアループは完成したものの、より深いシステム間の相互作用やディテールの磨き込みには課題が残りました
*   複雑なシミュレーションゲームにおける基盤設計の重要性を再認識し、以後の技術研鑽への動機づけとなりました
`
        },
        images: ['/assets/images/IllagelAssemblyLogo.PNG', '/assets/images/IA_06.png', '/assets/images/IA_01.png', '/assets/images/IA_02.png', '/assets/images/IA_03.png', '/assets/images/IA_04.png', '/assets/images/IA_05.png', '/assets/images/IA_07.png', '/assets/images/IA_08.png'],
        video: '/assets/images/Illegal Assembly.mp4',
        links: [
            { labels: { CN: "下载试玩", EN: "Download Demo", JA: "デモ版をダウンロード" }, urls: { CN: 'https://github.com/ElectricArc-Yu/GD10Final/releases', EN: 'https://github.com/ElectricArc-Yu/GD10Final/releases' }, type: 'demo' }
        ],
        workDistribution: [
            { labels: { CN: "Design", EN: "Design", JA: "デザイン" }, percentage: 50 },
            { labels: { CN: "Programming", EN: "Programming", JA: "プログラミング" }, percentage: 50 }
        ]
    },
    {//The Mountain Sea
        id: 'the-mountain-sea',
        titles: { CN: "山海", EN: "The Mountain Sea", JA: "山海 (The Mountain Sea)" },
        type: 'Personal',
        showPriority: 75,
        engine: 'Unity',
        gameType: 'Platformer',
        role: ['Designer', 'Lead Programmer'],
        techStack: ['Unity', 'C#'],
        thumbnail: '/assets/images/MountainSea.png',
        shortDescriptions: {
            CN: "2D动作平台游戏，核心为近战引爆与远程叠层的双形态切换机制。",
            EN: "2D action platformer featuring dynamic switching between ranged stacking and melee detonation.",
            JA: "2Dアクションプラットフォーマー。遠距離スタックと近接爆破の双形態切り替えが特徴。"
        },
        workHours: 132,
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "2023.10 - 2023.12", EN: "Oct 2023 - Dec 2023", JA: "2023年10月 - 2023年12月" },
        startDate: '2023.10',
        endDate: '2023.12',
        teamSizes: { CN: "4人", EN: "4-person", JA: "4人" },
        descriptions: {
            CN: `
## 项目背景与约束

**研发背景与挑战:**
2D动作平台课程项目，4人团队（2美术、1策划、1程序），开发周期约2个月。作为团队唯一程序，首次基于Unity与C#独立推进2D动作游戏的核心代码实现。

## 核心机制设计

**双形态切换战斗系统:**
*   **远程形态（标记叠层）：** 远程攻击为敌人附加状态层数，层数越高后续近战引爆收益越高
*   **近战形态（爆发引爆）：** 近距离攻击消耗层数造成高额爆发伤害，但需承担接近敌人的受击风险
*   **风险收益博弈:** 玩家需在“安全远程输出”与“高风险近战终结”之间进行即时决策，形成清晰的战斗节奏感

## 开发推进与协作

**工程实现与协作:**
*   使用Unity完成角色控制器、动作状态机、敌人AI与Boss行为树等核心模块
*   主导建立美术资源导入与Git协作规范，协助美术成员熟悉引擎资源管线
*   在研发中期面对人员变动与工期压力，及时收敛设计范围（Scope），聚焦打磨单关卡与Boss核心战，确保项目按期交付

## 成果与反思

**阶段产出:**
*   交付了包含完整双形态战斗闭环的试玩Demo与设计文档（GDD）
*   在课程汇报与试玩中，核心形态切换机制获得了积极反馈

**经验复盘:**
*   角色在平台跳跃中的部分手感与碰撞细节仍有优化空间，加深了对Unity 2D物理系统调优的认知
*   总结了在短周期项目中严格控制设计范围、优先聚焦核心可玩性打磨的项目管理经验
`,
            EN: `
## Project Context & Constraints

**Context & Challenges:**
A 2D action platformer developed as a coursework project over a 2-month cycle with a 4-person team (2 artists, 1 designer, 1 programmer). Served as the sole programmer, implementing core 2D action gameplay in Unity/C#.

## Core Mechanics Design

**Dual-Form Combat System:**
*   **Ranged Form (Stacking):** Ranged attacks apply marker stacks to enemies; higher stacks amplify subsequent melee burst damage
*   **Melee Form (Detonation):** Close-range strikes consume accumulated stacks for massive burst damage while exposing the player to incoming attacks
*   **Risk-Reward Dynamics:** Encourages continuous tactical decisions between safer ranged poke and high-risk, high-reward melee execution

## Development & Collaboration

**Implementation & Workflows:**
*   Implemented character controllers, action state machines, enemy AI, and boss patterns in Unity
*   Established art asset import pipelines and Git workflows to assist team members
*   Adapted to mid-project resource constraints by tightening scope around a refined vertical slice featuring one core boss encounter

## Deliverables & Retrospective

**Key Deliverables:**
*   Delivered a playable demo showcasing the complete dual-form loop alongside comprehensive GDD documentation
*   Received positive feedback on the responsiveness and tactical depth of the form-switching mechanic

**Reflections:**
*   Physics fine-tuning and jump responsiveness presented areas for further improvement, deepening knowledge of 2D physics tuning
*   Reinforced the importance of disciplined scope management and early polish of core mechanics under tight timelines
`,
            JA: `
## プロジェクトの背景と制約

**背景と課題:**
4人体制（美術2、企画1、プログラム1）・約2ヶ月の開発サイクルによる2Dアクションプラットフォーマー制作。唯一のプログラマーとして、Unity/C#を用いたアクションゲームのコアシステム実装を担当しました。

## コアメカニクス設計

**双形態切り替え戦闘システム:**
*   **遠距離形態（スタック付与）:** 遠距離攻撃で敵にマーカーを付与。スタック数に応じて近接攻撃時のダメージが増加
*   **近接形態（スタック爆破）:** 蓄積したスタックを消費して高威力の近接攻撃を繰り出すが、敵に接近する被弾リスクが伴う
*   **リスクとリターンの駆け引き:** 安全な遠距離牽制とハイリスク・ハイリターンな近接フィニッシュの間で判断を促す設計

## 開発とチーム連携

**実装とパイプライン整備:**
*   Unityでキャラクター制御、ステートマシン、敵AI、ボス挙動を実装
*   美術アセットのインポート基準やGit運用フローを整え、チーム連携をサポート
*   開発中盤のリソース変更に伴いスコープを的確に絞り込み、ボス戦を中心とした体験の完成度を優先

## 成果と振り返り

**成果:**
*   双形態戦闘のコアループを含むプレイアブルデモとGDD（ゲームデザインドキュメント）を納品
*   形態切り替えの爽快感と戦術性について肯定的な評価を獲得

**学び:**
*   ジャンプや移動の細かな手触り調整を通じ、2D物理挙動のチューニングに関する知見を深化
*   限られた期間においてスコープを適切に管理し、コアな面白さに集中する重要性を再確認しました
`
        },
        images: ['/assets/images/MountainSea.png', '/assets/images/Shanhai_01.png', '/assets/images/Shanhai_02.png'],
        gddPdfUrl: '/assets/docs/TheMountainSeaGDD.pdf',
        links: [
            { labels: { CN: "下载试玩", EN: "Download Demo", JA: "デモ版をダウンロード" }, urls: { CN: 'https://shvfs-game-design.itch.io/the-mountain-sea', EN: 'https://shvfs-game-design.itch.io/the-mountain-sea' }, type: 'demo' },
            { labels: { CN: "查看GDD", EN: "View GDD", JA: "GDDを見る" }, urls: { CN: '/assets/docs/TheMountainSeaGDD.pdf', EN: '/assets/docs/TheMountainSeaGDD.pdf' }, type: 'doc' }
        ],
        workDistribution: [
            { labels: { CN: "Design", EN: "Design", JA: "デザイン" }, percentage: 50 },
            { labels: { CN: "Programming", EN: "Programming", JA: "プログラミング" }, percentage: 50 }
        ]
    },
    {//All Story
        id: 'all-story',
        titles: { CN: "All Story", EN: "All Story", JA: "All Story" },
        type: 'Personal',
        showPriority: 75,
        engine: 'Other',
        gameType: 'RPG',
        role: ['Designer'],
        techStack: ['AI', 'TRPG'],
        thumbnail: '/assets/images/AllStory.png',
        shortDescriptions: {
            CN: "基于大语言模型驱动的TRPG跑团原型，探索AI扮演动态世界与多角色的叙事交互。",
            EN: "LLM-driven TRPG prototype exploring dynamic world generation and multi-character roleplay.",
            JA: "LLM駆動のTRPGプロトタイプ。動的な世界生成と複数NPCのロールプレイ対話を検証。"
        },
        workHours: 25,
        platforms: { CN: "网页 / App", EN: "Web / App", JA: "Web / App" },
        durations: { CN: "5 天", EN: "5 days", JA: "5日間" },
        startDate: '2025.07',
        endDate: '2025.07',
        teamSizes: { CN: "5 人", EN: "5-person", JA: "5人" },
        descriptions: {
            CN: `
## 项目背景与目标

**Hackathon极限探索:**
AdventureX 5天黑客松项目，5人跨职能团队。旨在探索大语言模型在TRPG（桌上角色扮演游戏）电子化中的应用，降低跑团门槛并探索新型叙事交互。

## 核心设计方案

**“动态故事世界”架构:**
*   区别于仅将AI作为单一主持人（KP）的传统做法，尝试将大模型扩展为承载“整个故事世界”的基础设施——既承担主线旁白推进，又动态扮演场景中的各色NPC与环境反馈
*   完整保留COC（克苏鲁神话跑团）经典规则内核，包括属性检定、掷骰判定与理智值（SAN）机制，保障核心体验的策略性

**提示词工程与数据支撑:**
*   设计分层提示词结构，约束大模型的输出风格与规则遵从度，保证叙事连贯性
*   构建支持复杂角色状态与世界动态的数据结构，确保数值状态与生成文本双向同步

**辅助工具开发 - RAG线索管理工具:**
使用Python开发了RAG线索管理辅助脚本，将地点、时间、NPC与事件关联关系可视化配置，加速了演示剧本的结构化录入。

## 成果与沉淀

**项目成果:**
*   在5天周期内交付了全流程可玩的跑团原型，并在路演试玩中获得了积极反馈
*   积累了将大语言模型与游戏状态机、数据模型深度结合的实战经验
`,
            EN: `
## Project Context & Goals

**Hackathon Exploration:**
A 5-day hackathon project at AdventureX with a 5-person team. Explored applying Large Language Models (LLMs) to electronic Tabletop RPGs (TRPGs) to lower barriers to entry while testing dynamic narrative mechanics.

## Core Design Solutions

**"Dynamic Living World" Architecture:**
*   Extended the role of the LLM beyond a singular Game Master (Keeper) to embody the broader story world, dynamically handling narration, environmental responses, and distinct NPC interactions
*   Faithfully preserved Call of Cthulhu (COC) mechanics including dice checks, skill tests, and Sanity (SAN) management to maintain strategic depth

**Prompt Engineering & Data Modeling:**
*   Engineered layered prompt structures to enforce narrative tone and strict adherence to rule constraints
*   Designed data schemas tracking character and world states to keep numeric parameters synchronized with generated narratives

**Tool Development - RAG Clue Tool:**
Authored a Python-based RAG clue management utility to visually map relationships between locations, timeframes, NPCs, and evidence, streamlining structured scenario data entry.

## Deliverables & Takeaways

**Outcomes:**
*   Delivered a functional, playable prototype within 5 days, receiving constructive reception during demo showcases
*   Gained practical insights into coupling LLM outputs with deterministic game state machines and data models
`,
            JA: `
## プロジェクトの背景と目標

**ハッカソンでの迅速な検証:**
AdventureXにおける5日間のハッカソン制作（5名体制）。LLM（大規模言語モデル）をテーブルトークRPG（TRPG）に応用し、導入ハードルを下げつつ動的なナラティブ体験を模索しました。

## コア設計ソリューション

**「動的な物語世界」の設計思想:**
*   AIを単一のゲームマスター（KP）にとどめず、「世界全体と多彩なNPC」を演じ分ける存在として拡張。ナレーションとNPC対話を統合的に処理
*   判定ダイス、能力値判定、正気度（SAN値）などクトゥルフ神話TRPG（COC）の核となるルールを忠実に再現

**プロンプト設計とデータ管理:**
*   階層化されたプロンプト構造を設計し、世界観のトーン維持とルール遵守を両立
*   キャラクター状態と世界状態を管理するデータ構造を設計し、数値パラメータと生成テキストの整合性を維持

**支援ツールの開発 - RAG手がかり管理ツール:**
PythonでRAG（検索拡張生成）用のシナリオ手がかり管理スクリプトを制作。場所、時間、NPC、イベントの関連性を整理し、シナリオデータの構造化入力を効率化しました。

## 成果と学び

**成果:**
*   5日間で通しプレイ可能なプロトタイプを納品し、試遊展示にて良好な反響を獲得
*   LLMのテキスト生成と確定的なゲームステートマシンを組み合わせる実践的な知見を獲得
`
        },
        images: ['/assets/images/AllStory.png'],
        links: [
            { labels: { CN: "探索者キャラクターSchema", EN: "Explorer Character Schema", JA: "探索者キャラクターSchema" }, urls: { CN: "/NeoPortfolio/assets/docs/Break.json", EN: "/NeoPortfolio/assets/docs/Break.json", JA: "/NeoPortfolio/assets/docs/Break.json" }, type: "code" }
        ],
        workDistribution: [
            { labels: { CN: "Design", EN: "Design", JA: "デザイン" }, percentage: 100 }
        ]
    },
    {//VR Goldfish
        id: 'vr-goldfish',
        titles: { CN: "VR 捞金鱼", EN: "VR Goldfish Catching", JA: "VR 金魚すくい" },
        type: 'Personal',
        showPriority: 50,
        engine: 'Unity',
        gameType: 'Simulation',
        role: ['Designer', 'Lead Programmer'],
        techStack: ['Unity', 'Oculus VR', 'C#'],
        thumbnail: '/assets/images/VRCatchThemAll.jpg',
        shortDescriptions: {
            CN: "基于Oculus Quest 2的第一人称体感模拟游戏，聚焦手部平稳度判定与物理交互调优。",
            EN: "First-person VR simulation for Oculus Quest 2, focusing on motion stability tracking and physics feel tuning.",
            JA: "Oculus Quest 2向け一人称視点VR体感ゲーム。手の安定性判定と物理インタラクション調整に注力。"
        },
        workHours: 132,
        platforms: { CN: "Oculus Quest 2", EN: "Oculus Quest 2", JA: "Oculus Quest 2" },
        durations: { CN: "2024.01-2024.03", EN: "Jan 2024 - Mar 2024", JA: "2024年1月 - 2024年3月" },
        startDate: '2024.01',
        endDate: '2024.03',
        teamSizes: { CN: "7人", EN: "7-person", JA: "7人" },
        descriptions: {
            CN: `
## 项目背景与目标

**VR体感交互探索:**
VR交互课程项目，7人团队（2程序、2策划、3美术）。团队聚焦于Oculus Quest 2平台，探索体感控制器在微小动作捕捉与物理模拟上的交互体验。

## 交互设计与技术实现

**核心交互机制:**
*   选取“手部平稳度与运动轨迹匹配”作为核心挑战，模拟传统捞金鱼中对纸网入水角度、平稳移动与起网时机的操作要求
*   结合手柄空间位移与速度判定，构建即时反馈机制

**性能优化与对象池:**
*   针对水体中多条金鱼游动与场景特效的高频生成需求，实现轻量对象池系统，确保在VR头显独立运行下维持稳定帧率

**参数化配置系统:**
*   利用Odin Inspector搭建可视化参数配置面板，将重力、水流阻力与网破损阈值等参数开放给策划，方便快速迭代手感平衡

## 成果与反思

**成果总结:**
*   完成了全流程可运行的VR体感Demo交付与现场演示
*   积累了VR硬件环境配置、Oculus SDK接入以及独立头显性能优化的工程实践经验
`,
            EN: `
## Project Context & Goals

**VR Motion Interaction Exploration:**
A VR interaction course project developed by a 7-person team (2 programmers, 2 designers, 3 artists). Focused on Oculus Quest 2 to explore fine motion tracking and physical simulation mechanics.

## Interaction Design & Technical Implementation

**Core Mechanics:**
*   Centered gameplay on hand stability and movement speed matching, simulating real-world scooping mechanics (entry angle, gentle translation, lift timing)
*   Integrated controller spatial velocity tracking to deliver responsive motion feedback

**Performance & Object Pooling:**
*   Implemented an object pooling architecture for animated fish and visual particle effects, ensuring stable frame rates on standalone VR hardware

**Parametric Configuration:**
*   Utilized Odin Inspector to create parametric authoring inspectors, allowing designers to tune water drag, gravity, and net durability parameters efficiently

## Outcomes & Retrospective

**Key Milestones:**
*   Delivered a complete, functional VR interactive demo for live evaluations
*   Deepened practical understanding of Oculus SDK integration, VR testing workflows, and standalone mobile VR performance optimization
`,
            JA: `
## プロジェクトの背景と目標

**VR体感インタラクションの検証:**
VRインタラクション演習（7名体制：プログラム2、企画2、美術3）。Oculus Quest 2をターゲットとし、モーションコントローラーによる繊細な動作追従と物理挙動の融合を検証しました。

## インタラクション設計と実装

**コアメカニクス:**
*   「手の安定性と移動速度の適合」を核心的課題とし、金魚すくいにおけるポイの入水角度や速度調整のリアリティを再現
*   コントローラーの移動速度と軌跡判定を組み合わせ、直感的な操作フィードバックを構築

**パフォーマンス最適化（オブジェクトプール）:**
*   多数の遊泳魚や水面エフェクトの生成負荷を抑えるため、オブジェクトプールを実装してスタンドアロンVR環境でのフレームレート安定化を実現

**パラメータ調整基盤:**
*   Odin Inspectorを活用してパラメータ調整パネルを整備し、水流抵抗やポイの耐久値などを企画担当者が柔軟に微調整できるワークフローを構築

## 成果と学び

**成果:**
*   通しで体験可能なVRデモを完成させ、実機デモ展示を実施
*   Oculus SDKの統合手順、VR実機テストの進行、スタンドアロンVRの最適化手法に関する実践的な経験を獲得
`
        },
        images: ['/assets/images/VRCatchThemAll.jpg'],
        links: [
            { labels: { CN: "仓库地址", EN: "Repo", JA: "リポジトリ" }, urls: { CN: 'https://github.com/ElectricArc-Yu/Portfolio/tree/main/Writerside/downloadable/LFS_Download/GoldFishScrooping', EN: 'https://github.com/ElectricArc-Yu/Portfolio/tree/main/Writerside/downloadable/LFS_Download/GoldFishScrooping' }, type: 'repo' }
        ]
    },
    {//Chan Shi Ye Shi Guan
        id: 'chanshiyeshiguan',
        titles: { CN: "铲屎官也是官", EN: "Chan Shi Ye Shi Guan", JA: "猫の家来も立派な役人" },
        type: 'Personal',
        showPriority: 30,
        engine: 'Unity',
        gameType: 'RPG',
        role: ['Programmer'],
        techStack: ['Unity', 'C#'],
        thumbnail: '/assets/images/ChanShiGuanYeShiGuan.png',
        shortDescriptions: {
            CN: "2D俯视角Roguelike RPG，负责实体交互、合成机制与数据驱动配置的代码实现。",
            EN: "Top-down 2D Roguelike RPG; contributed entity interactions, crafting systems, and data-driven configuration.",
            JA: "トップダウン視点2D Roguelike RPG。エンティティ操作、調合システム、データ駆動型実装を担当。"
        },
        workHours: 100,
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "2024.05", EN: "May 2024", JA: "2024年5月" },
        startDate: '2024.05',
        endDate: '2024.05',
        teamSizes: { CN: "10+ 人", EN: "10+ People", JA: "10名以上" },
        descriptions: {
            CN: `
## 项目背景与职责

**Game Jam团队协作:**
机核 BOOOM Game Jam 参赛作品，10+人团队开发的俯视角2D Roguelike RPG。作为程序组主要成员参与，配合策划与主程推进功能实现。

## 研发职责

**数据驱动与实体交互实现:**
*   负责将策划设计的道具配方与交互逻辑转化为可配置的数据驱动结构
*   完成了场景内可交互物体、原料合成（Ingredients）逻辑的代码编写与调试
*   协助维护部分基础框架代码，保障多人协作下的代码合并稳定性

## 经验沉淀

**工程实践与团队协同:**
*   深入学习了成熟2D Unity项目的数据驱动架构与模块化分工规范
*   提升了在多人敏捷协作环境下快速理解既有代码架构与高效交付模块的能力
`,
            EN: `
## Project Context & Responsibilities

**Game Jam Collaboration:**
A top-down 2D Roguelike RPG developed by a 10+ person team for the Gcores BOOOM Game Jam. Participated as a gameplay programmer implementing mechanics based on design specifications.

## Engineering Responsibilities

**Data-Driven Logic & Entity Interactions:**
*   Translated game design specifications for items and recipes into configurable data-driven tables
*   Implemented scripts for interactable environment objects and ingredient synthesis systems
*   Assisted in maintaining base framework modules and ensuring merge stability across multi-developer branches

## Takeaways

**Engineering Practices:**
*   Gained practical exposure to data-driven architecture and modular code organization in 2D Unity titles
*   Strengthened the ability to adapt to existing codebases and deliver focused features within large agile teams
`,
            JA: `
## プロジェクトの背景と担当業務

**Game Jamでのチーム開発:**
Gcores BOOOM Game Jam参加作品（10名以上のチーム体制）によるトップダウン視点2D Roguelike RPG。ゲームプレイプログラマーとして仕様の実装を担当しました。

## 開発業務

**データ駆動型実装とインタラクション:**
*   アイテムレシピやギミックの仕様を設定可能なデータテーブル構造へ落とし込み
*   ステージ内のインタラクティブオブジェクトおよび素材（Ingredients）合成ロジックを実装・デバッグ
*   フレームワークコードの保守とブランチ統合時の安定性確保をサポート

## 経験と学び

**実践的な知見:**
*   Unityにおけるデータ駆動型アーキテクチャとモジュール設計の実践例を深く学習
*   大人数のアジャイル開発環境において既存コードベースを迅速に把握し、担当モジュールを確実に納品する能力を向上
`
        },
        images: ['/assets/images/ChanShiGuanYeShiGuan.png', '/assets/images/CSYSG_01.png', '/assets/images/CSYSG_02.png'],
        links: [
            { labels: { CN: "游戏页面", EN: "Game Page", JA: "ゲームページ" }, urls: { CN: 'https://www.gcores.com/games/126694', EN: 'https://www.gcores.com/games/126694' }, type: 'demo' }
        ]
    },
    {//Slime
        id: 'slime',
        titles: { CN: "怪盗史莱姆", EN: "Slime", JA: "怪盗スライム" },
        type: 'Personal',
        showPriority: 30,
        engine: 'Unity',
        gameType: 'Platformer',
        role: ['Gameplay Designer'],
        techStack: ['Unity', 'C#'],
        thumbnail: '/assets/images/SLIME.png',
        shortDescriptions: {
            CN: "3D/2D混合视角的平台跳跃解谜游戏，围绕粘液量与体型变化的资源机制展开。",
            EN: "3D/2D puzzle platformer featuring dynamic slime-mass resource management and size shifting.",
            JA: "3D/2D視点のパズルアクション。粘液量に応じた体型変化とリソース管理が核。"
        },
        workHours: 100,
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "2023.06", EN: "Jun 2023", JA: "2023年6月" },
        startDate: '2023.06',
        endDate: '2023.06',
        teamSizes: { CN: "小组 (Game Jam)", EN: "Small Group (Game Jam)", JA: "少人数チーム (Game Jam)" },
        descriptions: {
            CN: `
## 项目背景与职责

**Game Jam玩法原型设计:**
吉比特（G-bits）Game Jam 参赛作品，3D+2D视效融合的平台跳跃解谜游戏。担任玩法设计师，主导核心玩法机制与关卡交互规则设计。

## 核心机制设计

**粘液量与体型联动系统:**
*   设计了基于角色体内粘液储量的体型动态缩放机制，不同体型具备差异化的重量、跳跃高度与通道通过能力
*   跳跃、冲刺等机能动作需消耗粘液，玩家需在关卡中规划资源消耗与回收路线，将资源管理与平台跳跃解谜自然融合，拓展了关卡设计的策略维度
`,
            EN: `
## Project Context & Responsibilities

**Game Jam Gameplay Prototyping:**
Developed for the G-bits Game Jam, this project is a 3D/2D hybrid puzzle platformer. Served as Gameplay Designer, authoring core mechanics and puzzle interaction rules.

## Core Mechanics Design

**Slime Mass & Size-Shifting System:**
*   Engineered a dynamic size-scaling mechanic tied to internal slime resources, where size levels determine weight, jump height, and narrow-passage traversal
*   Action moves (sprints, high jumps) consume slime mass, requiring players to balance resource expenditure against navigation obstacles, blending resource management with platformer spatial puzzles
`,
            JA: `
## プロジェクトの背景と担当業務

**Game Jamにおけるゲームプレイ設計:**
G-bits Game Jam参加作品による3D/2D融合型のパズルアクション。ゲームプレイデザイナーとしてコアメカニクスとギミック仕様の設計を担当しました。

## コアメカニクス設計

**粘液量と体型変化の連動システム:**
*   体内の粘液残量に応じてスライムの体格が変化するメカニクスを設計。体型ごとに重量、ジャンプ力、狭小通路の通過可否が変化
*   ダッシュや大ジャンプに粘液を消費するため、リソースの配分と回復動線の見極めが求められ、リソース管理とプラットフォームパズルの融合を実現
`
        },
        images: ['/assets/images/SLIME.png'],
        links: [
            { labels: { CN: "预告片", EN: "Trailer", JA: "トレーラー" }, urls: { CN: 'https://www.bilibili.com/video/BV14g4y1F7Lz', EN: 'https://www.bilibili.com/video/BV14g4y1F7Lz' }, type: 'video' }
        ]
    },
    {//Detection
        id: 'detection',
        titles: { CN: "看破 (Detection!)", EN: "Detection!", JA: "看破 (Detection!)" },
        type: 'Personal',
        showPriority: 25,
        engine: 'Other',
        gameType: 'Strategy',
        role: ['Solo Creator'],
        techStack: ['Board Game'],
        thumbnail: '',
        shortDescriptions: {
            CN: "低表达压力的行为推理实体桌游，通过观察他人行为模式推断隐藏规则。",
            EN: "A deduction-based physical board game designed around observing behavioral patterns without speech requirements.",
            JA: "発話を必要としない行動推理ボードゲーム。相手の行動パターンから隠されたルールを看破する。"
        },
        workHours: 300,
        platforms: { CN: "实体桌游", EN: "Physical Board Game", JA: "ボードゲーム" },
        durations: { CN: "2024.04 - 至今", EN: "Apr 2024 - Present", JA: "2024年4月 - 現在" },
        startDate: '2024.11',
        endDate: 'Present',
        teamSizes: { CN: "个人", EN: "Solo", JA: "個人" },
        descriptions: {
            CN: `
## 设计背景与动机

**低表达门槛的社交推理设计:**
针对线下聚会中不擅长即兴口头表达或偏好深度观察的玩家群体，探索一套摆脱言语辩论依赖的社交博弈体验：能否在不强制口头交流的前提下，依然营造出深度的心理博弈与互动乐趣？

## 核心机制设计

**行为观察与规则推演:**
*   核心乐趣依托于“观察行为特征 → 逆向推理隐藏规则”，玩家通过捕捉其他玩家在特定情境下的行动规律进行博弈判定
*   **低表达压力:** 全流程不依赖强制发言与言语试探，内向型玩家可专注逻辑推理与观察
*   **非言语互动:** 随着博弈深入，通过局内行为产生的共识与心理博弈自然拉近玩家距离

**规格与模式:**
支持3-6人游玩，设计了轻量破冰与深度策略等多种模式，单局时长控制在15-60分钟。

## 测试与迭代

**多轮实地Playtest:**
累计开展300+小时的跨场景实地试玩测试，收集了不同桌游经验玩家的反馈，反复精简底层规则集，在降低初学者记忆负担的同时保持长线推演深度。
`,
            EN: `
## Design Background & Motivation

**Low-Pressure Social Deduction:**
Explored an alternative social board game experience for players who prefer quiet observation over impromptu verbal sparring: creating deep social engagement and psychological deduction without mandating verbal debate.

## Core Design

**Behavioral Observation & Rule Deduction:**
*   Core dynamic centers on "Observing Actions → Reverse-Engineering Hidden Rules", where players deduce hidden constraints based on others' situational decisions
*   **Low Verbal Pressure:** Gameplay avoids mandatory speaking or defensive speeches, allowing introspective players to focus on logical analysis
*   **Non-Verbal Social Dynamics:** As gameplay unfolds, emergent non-verbal interactions naturally build rapport and psychological tension

**Specifications:**
Supports 3-6 players with modular game modes ranging from quick casual sessions (15 min) to deeper deduction (60 min).

## Testing & Iteration

**Extensive Playtesting:**
Conducted 300+ hours of physical playtests across varied demographics, iteratively trimming rule complexities to lower onboarding friction while preserving deduction depth.
`,
            JA: `
## 設計の背景と動機

**発話ストレスの少ないソーシャル推理:**
対面での親睦会において、即興的な弁論が苦手な人や観察・思考を好むプレイヤーに向けて、言葉による議論に依存しない推理体験を模索。「発話を強制せずとも深い心理戦と相互作用を生み出せるか」という問いから設計を開始しました。

## コアメカニクス設計

**行動観察と言外のルール推論:**
*   「他者の行動パターンを観察し、背後にある隠されたルールを逆算する」メカニクスが中心
*   **低発話ストレス:** 発言や自己主張を強制せず、内向的なプレイヤーも論理的推論に集中可能
*   **非言語コミュニケーション:** 盤面での選択や行動を通じて自然に駆け引きが生まれ、心理的な距離感を縮める構造

**ゲーム仕様:**
3〜6人対応。手軽な短時間モード（15分）から本格的な推理モード（60分）まで柔軟に対応。

## テストと改善

**実地プレイテストの積み重ね:**
300時間以上の実地プレイテストを実施し、初心者から経験者までのフィードバックを収集。ルールの無駄を削ぎ落とし、導入のしやすさと戦略的深みの両立を追求しました。
`
        },
        images: [],
        links: []
    },
    {//Magic Mahjong
        id: 'magic-mahjong',
        titles: { CN: "魔法麻将 (Magic Mahjong)", EN: "Magic Mahjong", JA: "魔法麻雀 (Magic Mahjong)" },
        type: 'Personal',
        status: { CN: "已搁浅", EN: "Shelved", JA: "休止中" },
        showPriority: 80,
        engine: 'Unity',
        gameType: ['Strategy'],
        role: ['Solo Creator'],
        techStack: ['Unity', 'C#', 'Networking', 'GOAP', 'DOD'],
        thumbnail: '',
        workHours: 170,
        shortDescriptions: {
            CN: "面向竞技麻将的确定性同步与高性能服务器/客户端底层架构原型。",
            EN: "Deterministic synchronization and high-performance server/client architecture prototype for competitive Mahjong.",
            JA: "競技麻雀向けの高パフォーマンス・決定論的同期サーバー／クライアント基盤プロトタイプ。"
        },
        durations: { CN: "8个月", EN: "8 Months", JA: "8ヶ月" },
        startDate: '2024.02',
        endDate: '2024.10',
        teamSizes: { CN: "个人", EN: "Solo", JA: "個人" },
        descriptions: {
            CN: `
> **项目说明：** 因更换开发设备，本项目大部分源代码已归档。此处展示内容为早期核心架构设计与逻辑实现。

## 架构概览 (Architectural Overview)

采用逻辑层与表现层严格解耦的混合架构（MVC / ECS-lite 思路），通过 Unity Assembly Definitions (.asmdef) 划分模块依赖边界，旨在验证一套高性能、确定性且具备严密防作弊能力的竞技棋牌底层框架。

## 数据结构与内存优化 (DOD)

*   **手牌数据管理 (HandList):** 践行面向数据设计 (DOD) 思路，运用并行数组 (SoA) 与位标志 (Bit-flags) 追踪手牌状态，结合虚拟索引映射实现零 GC 排序与高频操作
*   **状态序列化与压缩:** 实现自定义位域封包 (Bit-field Packing)，将牌面属性、所属权与特殊标识压缩为 32 位复合结构，网络带宽较传统 JSON 格式减少约 60%
*   **规则参数封包:** 将包括番种、计时、结算等 10+ 项规则定义压缩在 14 字节的数据载荷内高效传递

## 网络同步架构

*   **底层传输:** 基于 System.Net.Sockets 原始 TCP 套接字构建，配套自定义环形缓冲区 (Ring Buffer) 解决 TCP 数据流粘包与拆包问题
*   **确定性同步:** 采用共享随机数种子（Seed + Salt）架构，保证客户端逻辑模拟与服务端状态完全一致，从根源规避客户端改包作弊
*   **发牌分块优化:** 初始配牌采用分块批量传输策略，将网络握手事件大幅精简

## 人工智能决策 (GOAP AI)

*   **目标导向行动计划 (GOAP):** 实现了 \`IGoalOrientedActionPlanning\` 接口，采用逆向链算法在世界状态中检索向“胡牌目标”收敛的最优出牌与做牌序列
*   **混合决策模型:** 结合行为树 (Behavior Tree) 与决策树处理日常快速响应逻辑

## 工程质量保证 (QA)

*   **单元测试驱动 (TDD):** 运用 NUnit 对序列化、随机分配器等核心算法模块实现高覆盖率的单元测试
*   **编辑器工具链:** 编写了基于反射的 Unity 自定义 Inspector 扩展，提升复杂嵌套数据与泛型对象的调试效率
`,
            EN: `
> **Project Note:** Due to development hardware migration, primary source archives were reorganized. The documentation below highlights core architectural design and logic prototypes.

## Architectural Overview

Designed with strict separation between gameplay logic and visual presentation layers (hybrid MVC / ECS-lite approach). Modular boundaries are enforced via Unity Assembly Definitions (.asmdef) to construct a high-performance, deterministic, and anti-cheat foundation for competitive tile games.

## Data Structures & Memory Optimization (DOD)

*   **Hand Management (HandList):** Applied Data-Oriented Design (DOD) principles, using Structure of Arrays (SoA) and bit-flags with virtual index mapping to achieve zero-allocation sorting during high-frequency manipulation
*   **Dynamic Serialization:** Engineered custom bit-field packing, compressing tile type, ownership, and special flags into a 32-bit composite to reduce bandwidth by ~60% compared to typical text formats
*   **Protocol Compaction:** Packed 10+ match rules and timer parameters into a compact 14-byte payload

## Networking & Synchronization

*   **Transport Layer:** Built on raw System.Net.Sockets TCP with custom Ring Buffer handling packet coalescing and fragmentation
*   **Deterministic Sync:** Utilized a shared RNG Seed + Salt architecture, ensuring client-side simulations strictly match authoritative server states to prevent client manipulation
*   **Batching Optimization:** Optimized initial tile dealing via chunked event sequences to reduce initial handshake overhead

## AI Decision Making (GOAP AI)

*   **Goal-Oriented Action Planning (GOAP):** Implemented \`IGoalOrientedActionPlanning\` with reverse-chaining algorithms to dynamically resolve optimal paths toward winning hands
*   **Hybrid Models:** Integrated Behavior Trees for deterministic sequence execution alongside reactive decision models

## Engineering Quality

*   **Test-Driven Quality:** Maintained high unit test coverage across serialization and RNG algorithms using NUnit
*   **Custom Tooling:** Authored reflection-based Unity Custom Inspector utilities to streamline inspection of nested generic structures
`,
            JA: `
> **プロジェクトについて：** 開発機材の移行に伴い、ソースコードを再構成しました。ここでは初期に構築したコアアーキテクチャとロジック実装を掲載しています。

## アーキテクチャ概要

ロジック層と表現層を厳格に分離するハイブリッド設計（MVC / ECS-lite思想）を採用。Unity Assembly Definitions (.asmdef) による依存関係のモジュール化を行い、高パフォーマンスで決定論的な競技麻雀基盤を検証しました。

## データ構造とメモリ最適化 (DOD)

*   **手牌管理 (HandList):** データ指向設計 (DOD) に基づき、Structure of Arrays (SoA) とビットフラグを活用。仮想インデックスマッピングにより、GCアロケーションを発生させないソート・管理を実現
*   **シリアライズと帯域削減:** カスタムビットフィールドパッキングを実装し、牌の種類や所有者情報を32ビットに圧縮。一般的なJSON形式と比較して帯域消費を約60%削減
*   **ルール設定のコンパクト化:** 対局ルールや時間制限など10項目以上の設定を14バイトの固定長ペイロードに凝縮

## ネットワーク同期

*   **トランスポート層:** System.Net.Sockets による生TCPソケットとカスタムリングバッファを用いてパケットの結合・分断を安定処理
*   **決定論的同期:** 共有RNGシード＋ソルト方式を採用し、クライアント側のシミュレーション結果とサーバー状態の完全一致を保証
*   **配牌バッチ処理:** 初期の配牌通信を分割バッチ化し、接続初期のイベント回数を削減

## AI意思決定 (GOAP AI)

*   **GOAP (ゴール指向アクションプランニング):** \`IGoalOrientedActionPlanning\` を実装し、リバースチェイニングアルゴリズムにより「和了（上がり）」へ向けた最適な打牌・鳴きシーケンスを探索
*   **ハイブリッドモデル:** 定型処理にはビヘイビアツリーを組み合わせ、状況に応じた意思決定を支援

## 品質管理とツール

*   **単体テスト (NUnit):** シリアライズや乱数生成などの重要モジュールに対し単体テストを整備
*   **エディタ拡張:** リフレクションを用いたUnityインスペクタ拡張を作成し、入れ子構造のデータ確認を効率化
`
        },
        images: [],
        links: [
            { labels: { CN: "手牌管理 (HandList.cs)", EN: "Hand Management (HandList.cs)", JA: "手牌管理 (HandList.cs)" }, urls: { CN: "/assets/info/HandList.cs", EN: "/assets/info/HandList.cs" }, type: 'code' },
            { labels: { CN: "事件派发器 (EventDispatcher.cs)", EN: "Event Dispatcher (EventDispatcher.cs)", JA: "イベントディスパッチャ (EventDispatcher.cs)" }, urls: { CN: "/assets/info/EventDispatcher.cs", EN: "/assets/info/EventDispatcher.cs" }, type: 'code' },
            { labels: { CN: "GOAP 行动类 (GOAPAction.cs)", EN: "GOAP Action (GOAPAction.cs)", JA: "GOAP アクション (GOAPAction.cs)" }, urls: { CN: "/assets/info/GoalOrientedActionPlanningAction.cs", EN: "/assets/info/GoalOrientedActionPlanningAction.cs" }, type: 'code' },
            { labels: { CN: "GOAP 接口 (IGOAP.cs)", EN: "GOAP Interface (IGOAP.cs)", JA: "GOAP インターフェース (IGOAP.cs)" }, urls: { CN: "/assets/info/IGoalOrientedActionPlanning.cs", EN: "/assets/info/IGoalOrientedActionPlanning.cs" }, type: 'code' },
            { labels: { CN: "牌面压缩 (PaiCompressor.cs)", EN: "Tile Compressor (PaiCompressor.cs)", JA: "牌圧縮 (PaiCompressor.cs)" }, urls: { CN: "/assets/info/SimplePaiCompressorAndDecompressor.cs", EN: "/assets/info/SimplePaiCompressorAndDecompressor.cs" }, type: 'code' },
            { labels: { CN: "规则 DTO (MatchRuleDTO.cs)", EN: "Match Rule DTO (MatchRuleDTO.cs)", JA: "ルール DTO (MatchRuleDTO.cs)" }, urls: { CN: "/assets/info/MatchRuleDTO.cs", EN: "/assets/info/MatchRuleDTO.cs" }, type: 'code' },
            { labels: { CN: "主机匹配管理 (HostManager.cs)", EN: "Host Match Manager (HostManager.cs)", JA: "ホストマッチ管理 (HostManager.cs)" }, urls: { CN: "/assets/info/HostMatchManager.cs", EN: "/assets/info/HostMatchManager.cs" }, type: 'code' },
            { labels: { CN: "单张牌定义 (SPai.cs)", EN: "Single Tile Info (SPai.cs)", JA: "牌定義 (SPai.cs)" }, urls: { CN: "/assets/info/SPai.cs", EN: "/assets/info/SPai.cs" }, type: 'code' },
            { labels: { CN: "数据单元测试 (SerializationTests.cs)", EN: "Serialization Unit Tests (SerializationTests.cs)", JA: "シリアライズ単体テスト (SerializationTests.cs)" }, urls: { CN: "/assets/info/DrawAndDiscardDtoTests.cs", EN: "/assets/info/DrawAndDiscardDtoTests.cs" }, type: 'code' },
            { labels: { CN: "日志生成器 (LogGenerator.cs)", EN: "Log Generator (LogGenerator.cs)", JA: "ログ生成器 (LogGenerator.cs)" }, urls: { CN: "/assets/info/LogGenerator.cs", EN: "/assets/info/LogGenerator.cs" }, type: 'code' },
            { labels: { CN: "摸牌信息 DTO (MultiDrawInfoDto.cs)", EN: "Draw Info DTO (MultiDrawInfoDto.cs)", JA: "ツモ情報 DTO (MultiDrawInfoDto.cs)" }, urls: { CN: "/assets/info/MultiDrawInfoDto.cs", EN: "/assets/info/MultiDrawInfoDto.cs" }, type: 'code' }
        ],
        workDistribution: [
            { labels: { CN: "Architecture", EN: "Architecture", JA: "アーキテクチャ" }, percentage: 60 },
            { labels: { CN: "AI", EN: "AI", JA: "AI" }, percentage: 20 },
            { labels: { CN: "Network", EN: "Network", JA: "ネットワーク" }, percentage: 20 }
        ]
    },
    {//EI18NT
        id: 'easy-l10n',
        titles: { CN: "Easy Localization Tool (UE5 插件)", EN: "Easy Localization Tool", JA: "Easy Localization Tool (UE5プラグイン)" },
        type: 'Commercial',
        showPriority: 45,
        engine: 'Unreal',
        gameType: 'Tool',
        role: ['Solo Creator'],
        techStack: ['Unreal Engine', 'Plugin'],
        thumbnail: '/assets/images/Nodes.png',
        shortDescriptions: {
            CN: "UE5轻量本地化插件，支持通过数据表与单个蓝图节点实现快速多语言切换。",
            EN: "Lightweight UE5 localization plugin enabling rapid language switching via Data Tables and single Blueprint nodes.",
            JA: "UE5向けの軽量多言語化プラグイン。Data Tableと単一ノードによる迅速な言語切り替えを実現。"
        },
        workHours: 100,
        platforms: { CN: "虚幻引擎插件", EN: "Unreal Engine Plugin", JA: "Unreal Engineプラグイン" },
        prices: { CN: "9.99 美元", EN: "$9.99", JA: "9.99ドル" },
        sales: '5+',
        durations: { CN: "2025.03", EN: "Mar 2025", JA: "2025年3月" },
        startDate: '2025.03',
        endDate: '2025.03',
        teamSizes: { CN: "1 人", EN: "Solo", JA: "1名 (個人)" },
        descriptions: {
            CN: `
## 设计背景与动机

**简化UE本地化流程:**
针对中小型UE5项目在原生本地化系统配置繁琐、学习门槛高的问题，设计了一款轻量级本地化工具插件：通过集中式Data Table管理翻译内容，配合单个蓝图节点即可完成运行时语言切换，降低轻量项目的接入成本。

## 核心设计与特性

**轻量化与低侵入:**
*   **集中数据管理:** 基于Data Table统一维护多语言映射文本，无需配置复杂的Localization Target
*   **单节点即时切换:** 提供直观的蓝图节点，在运行时直接触发全局语言变更
*   **零逻辑冲突:** 独立于引擎原生本地化管线，对既有项目架构零侵入

## 成果与沉淀

**全流程实践:**
*   独立完成了从需求梳理、插件功能开发、商店上架（Epic Games Fab）到多语言使用文档编写的完整闭环
*   坚持克制的设计边界，在保障易用性的同时提供稳定可靠的工具支持
`,
            EN: `
## Design Background & Motivation

**Simplifying Unreal Engine Localization:**
Addressing the high configuration complexity and steep learning curve of UE5's native localization system for smaller-scale projects, engineered a lightweight plugin solution: managing translations via a centralized Data Table alongside a single Blueprint node for runtime switching, significantly lowering integration overhead.

## Core Features

**Lightweight & Low-Invasive Architecture:**
*   **Centralized Data Tables:** Manages all localized text mappings within standard Data Tables without requiring complex Localization Targets
*   **Single Blueprint Node:** Exposes clean Blueprint nodes to trigger runtime language switches instantly
*   **Zero Conflict:** Functions independently of native localization pipelines, ensuring non-invasive integration

## Deliverables & Milestones

**End-to-End Delivery:**
*   Independently executed the full lifecycle from feature development and QA to marketplace publishing on Epic Games Fab and authoring technical documentation
*   Maintained disciplined feature scope to ensure high usability and reliable integration
`,
            JA: `
## 設計の背景と動機

**UEローカライズの簡素化:**
中小型のUE5プロジェクトにおいて、標準のローカライズシステムが持つ設定の複雑さや学習コストの高さに着目し、極めてシンプルな多言語化プラグインを開発。Data Tableでのテキスト一元管理と、単一のブループリントノードによる言語切り替えにより、導入コストを大幅に削減しました。

## 主な機能と特徴

**軽量設計と低侵襲性:**
*   **Data Tableによる一括管理:** 翻訳テキストを汎用Data Tableで管理し、複雑なLocalization Target設定を省略
*   **単一ノードでの実行時切り替え:** 実行時に簡潔なブループリントノード一つで言語の即時変更が可能
*   **競合のない構造:** 標準システムに依存せず独立して動作し、既存プロジェクトのアーキテクチャに影響を与えません

## 成果と学び

**全工程の完遂:**
*   機能実装から品質検証、Epic Games Fabストアへの出品、多言語ドキュメント作成に至る一連の工程を完遂
*   過度な複雑化を避け、使いやすさと安定性を両立させたツール設計の知見を獲得
`
        },
        images: ['/assets/images/Nodes.png', '/assets/images/Nodes2.png', '/assets/images/Nodes3.png', '/assets/images/Nodes4.png'],
        links: [
            { labels: { CN: "Fab商店", EN: "Fab Store", JA: "Fabストア" }, urls: { CN: 'https://www.fab.com/listings/4415394c-b086-4c56-bc63-e3325f70e592', EN: 'https://www.fab.com/listings/4415394c-b086-4c56-bc63-e3325f70e592' }, type: 'Release Page' }
        ]
    },
    {//Portfolio Website
        id: 'portfolio-website',
        titles: { CN: "个人作品集网站", EN: "Portfolio Website", JA: "ポートフォリオサイト" },
        type: 'Personal',
        showPriority: 60,
        engine: 'Other',
        gameType: 'Web Site',
        role: ['Full Stack Developer'],
        techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
        thumbnail: '',
        shortDescriptions: {
            CN: "基于React 18与TypeScript构建的响应式现代化作品集，支持多语言与结构化项目检索。",
            EN: "Modern responsive portfolio built with React 18 and TypeScript, featuring multi-language support and structured project filtering.",
            JA: "React 18とTypeScriptで構築されたレスポンシブなポートフォリオサイト。多言語と構造化検索に対応。"
        },
        workHours: 40,
        platforms: { CN: "Web", EN: "Web", JA: "Web" },
        durations: { CN: "2026.01", EN: "Jan 2026", JA: "2026年1月" },
        startDate: '2026.01',
        endDate: '2026.01',
        teamSizes: { CN: "个人", EN: "Solo", JA: "個人" },
        descriptions: {
            CN: `
## 项目概述

本项目为当前浏览的个人作品集网站，基于 React 18 + TypeScript + Vite 架构构建，旨在以结构化、高质感的形式完整呈现游戏策划、全栈程序及工具开发经验。

## 技术栈与工程实现

*   **前端框架：** React 18 + TypeScript
*   **构建工具：** Vite
*   **样式方案：** 纯原生 CSS，构建了统一的设计变量体系与响应式布局
*   **部署上线：** GitHub Pages CI/CD 自动化部署

## 功能特点

*   **三语支持：** 完整支持中文、英文、日文多语言平滑切换
*   **多端响应式：** 针对桌面大屏与移动端触控进行了交互适配
*   **模块化展示：** 结构化呈现商业项目、个人原型、工具资产等各维度作品，支持按引擎、角色等多维过滤
*   **工程协同：** 在架构梳理、代码重构与多语言文本审校中引入现代 AI 辅助流程，保障交付质量与迭代效率
`,
            EN: `
## Project Overview

This website serves as the interactive portfolio you are currently viewing, built with React 18, TypeScript, and Vite to systematically showcase game design, full-stack programming, and tool development work.

## Tech Stack & Implementation

*   **Frontend Framework:** React 18 + TypeScript
*   **Build Tool:** Vite
*   **Styling:** Pure CSS with custom design tokens and responsive layouts
*   **Deployment:** Automated CI/CD via GitHub Pages

## Key Features

*   **Trilingual Support:** Seamless language switching across Chinese, English, and Japanese
*   **Responsive Layout:** Fully optimized for desktop displays and mobile touchscreens
*   **Structured Showcase:** Modular presentation of commercial projects, indie prototypes, and tools with multi-tag filtering
*   **Engineering Workflow:** Leveraged AI-assisted workflows for code review, refactoring, and multi-language verification to maintain code quality
`,
            JA: `
## プロジェクト概要

現在閲覧しているこのポートフォリオサイトそのものです。React 18、TypeScript、Vite を採用し、ゲームデザイン、プログラミング、ツール開発の実績を構造的に提示することを目的に構築しました。

## 技術スタックと実装

*   **フロントエンド:** React 18 + TypeScript
*   **ビルドツール:** Vite
*   **スタイリング:** 統一感のあるデザイントークンを用いた純粋なCSS（フレームワーク非依存）
*   **デプロイ:** GitHub Pages によるCI/CD自動化

## 主な機能と特徴

*   **3言語対応:** 中国語・英語・日本語の切り替えに対応
*   **レスポンシブ対応:** デスクトップからモバイル端末まで快適な閲覧体験を提供
*   **構造化された展示:** 商業実績、個人制作、ツール類をタグや役割ごとにフィルタリング可能
*   **開発フロー:** 設計の整理、コードリファクタリング、多言語校正においてAI支援ツールを活用し、品質と保守性を両立
`
        },
        images: [],
        links: [
            { labels: { CN: "GitHub 仓库", EN: "GitHub Repo", JA: "GitHubリポジトリ" }, urls: { CN: 'https://github.com/ElectricArc-Yu/Portfolio', EN: 'https://github.com/ElectricArc-Yu/Portfolio' }, type: 'repo' }
        ]
    },
    {//CGCS/WGS
        id: 'cgcs-batch',
        titles: { CN: "CGCS/WGS 坐标转换工具", EN: "CGCS/WGS Batch Converter", JA: "CGCS/WGS 座標変換ツール" },
        type: 'Personal',
        showPriority: 10,
        engine: 'Other',
        gameType: 'Tool',
        role: ['Solo Creator'],
        techStack: ['Tool'],
        thumbnail: '',
        shortDescriptions: {
            CN: "为建筑与测绘领域设计的CGCS2000与WGS84坐标系批量转换桌面工具。",
            EN: "Desktop utility for batch converting coordinates between CGCS2000 and WGS84 for architects and surveyors.",
            JA: "建築・測量分野向けに設計されたCGCS2000・WGS84座標系のバッチ変換デスクトップツール。"
        },
        workHours: 20,
        platforms: { CN: "Windows 桌面端", EN: "Windows Desktop", JA: "Windows デスクトップ" },
        durations: { CN: "约20小时", EN: "About 20 hours", JA: "約20時間" },
        teamSizes: { CN: "个人", EN: "Solo", JA: "個人" },
        startDate: '2025.01',
        endDate: '2025.01',
        descriptions: {
            CN: `
## 开发背景与需求

**解决坐标批量转换痛点:**
针对建筑设计与工程测绘中，CGCS2000与WGS84两套常用坐标系之间点位数据批量转换繁琐易错的实际痛点，开发了轻量级的一键批量转换桌面工具。

## 功能与开源

**实用工具交付:**
*   支持批量导入经纬度与平面坐标数据，一键完成高精度数学转换并导出标准报表
*   在GitHub上开源并提供可执行文件发布，持续为有相关工程需求的同行提供便利
`,
            EN: `
## Background & Needs

**Streamlining Coordinate Conversion:**
Developed to address repetitive manual tasks when converting point datasets between CGCS2000 and WGS84 coordinate systems in architectural design and surveying workflows.

## Features & Open Source

**Practical Tool Delivery:**
*   Supports batch import of geographic and projected coordinate data with one-click conversion and standardized export
*   Open-sourced on GitHub with pre-built releases to provide utility for professionals with similar spatial data needs
`,
            JA: `
## 開発の背景とニーズ

**座標変換作業の効率化:**
建築設計や測量業務において頻繁に発生するCGCS2000とWGS84間の座標データ一括変換作業を効率化するため、シンプルなデスクトップバッチ変換ツールを開発しました。

## 機能とオープンソース

**実用的なツール提供:**
*   複数の座標データを一括インポートし、ワンクリックで高精度な変換と結果出力を実行
*   GitHub上でオープンソースとして公開し、実行ファイルを配布して同業者の作業効率化に貢献
`
        },
        images: [],
        links: [
            { labels: { CN: "GitHub发布页", EN: "GitHub Release", JA: "GitHubリリース" }, urls: { CN: 'https://github.com/ElectricArc-Yu/CGCS-Simple-Batch-Converter/releases/tag/v1.3', EN: 'https://github.com/ElectricArc-Yu/CGCS-Simple-Batch-Converter/releases/tag/v1.3' }, type: 'repo' }
        ]
    },
    {//Real Estate Platform
        id: 'jiajiang-platform',
        titles: { CN: "夹江县不动产登记信息管理平台", EN: "Intranet Real Estate Platform", JA: "不動産登記情報管理プラットフォーム" },
        type: 'Commercial',
        showPriority: 5,
        engine: 'Other',
        gameType: 'Web Site',
        role: ['Full Stack Developer'],
        techStack: ['C#', 'SQL'],
        thumbnail: '',
        shortDescriptions: {
            CN: "政务内网不动产登记信息管理系统，负责前端构建与后端功能协助。",
            EN: "Government intranet real estate management system; contributed frontend development and backend assistance.",
            JA: "政府内線ネットワーク向け不動産登記情報管理システム。フロントエンド構築とバックエンド支援を担当。"
        },
        workHours: 200,
        platforms: { CN: "Web (政务内网)", EN: "Web (Intranet)", JA: "Web (イントラネット)" },
        durations: { CN: "2022.06 - 2022.10", EN: "Jun 2022 - Oct 2022", JA: "2022年6月 - 2022年10月" },
        startDate: '2022.06',
        endDate: '2022.10',
        prices: { CN: "保密", EN: "Confidential", JA: "非公開" },
        sales: '1 Unit',
        teamSizes: { CN: "3人", EN: "3 People", JA: "3名" },
        descriptions: {
            CN: `
## 项目性质

政务内网不动产信息管理系统，具体业务流程与数据模型涉密。

## 研发职责

*   **前端页面开发：** 负责系统各业务功能模块的前端页面构建与交互逻辑实现
*   **后端开发协助：** 参与部分数据查询与报表接口的编写
*   **系统维护与支持：** 参与系统上线后的缺陷修复与运行维护工作
`,
            EN: `
## Project Nature

A government intranet management system for real estate registration; specific business workflows and datasets are confidential.

## Engineering Responsibilities

*   **Frontend Development:** Implemented UI pages and client interaction logic across key functional modules
*   **Backend Assistance:** Participated in developing database query routines and report generation APIs
*   **Maintenance & Support:** Assisted in post-launch bug triage and system stability support
`,
            JA: `
## プロジェクトの性質

行政イントラネット向け不動産情報管理システム。詳細な業務フローおよびデータ構造は機密事項に属します。

## 担当業務

*   **フロントエンド開発:** 各業務モジュールの画面構築およびインタラクション実装を担当
*   **バックエンド支援:** データ照会および帳票出力APIの作成を一部担当
*   **保守・運用支援:** システム稼働後の不具合修正と安定稼働をサポート
`
        },
        images: [],
        links: []
    }
];

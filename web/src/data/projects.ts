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
        shortDescriptions: { CN: "后启示录题材的家园建设与探索模组,通过自动化系统优化玩家体验。", EN: "Post-apocalyptic base-building and exploration mod with progressive automation systems.", JA: "ポスト・アポカリプスを題材とした基地建設・探索MOD。自動化システムによりプレイヤー体験を最適化。" },
        introduces: {
            CN: `后启示录题材的家园建设与探索向 MC 模组，
以基地建设->外出探索->资源带回->自动化解放重复劳动为核心循环，
明确将设计重点放在降低挖矿等低价值重复操作的时间占比，通过逐步解锁的自动化系统引导玩家将精力转移至探索决策、基地规划与长期发展目标。`, EN: `A post-apocalyptic base-building and exploration Minecraft mod.
Focuses on the core loop of Base Building -> Exploration -> Resource Collection -> Automation for repetition relief.
The design prioritizes reducing low-value repetitive tasks like mining, guiding players to shift their focus toward exploration decisions, base planning, and long-term goals through progressive automation systems.`, JA: `ポスト・アポカリプスを題材とした基地建設・探索系Minecraft MOD。
「基地建設 → 探索 → 資源回収 → 自動化による単純作業の解放」をコアループとし、
採掘などの低価値な反復作業の時間を削減することに重点を置いています。段階的に解放される自動化システムを通じて、プレイヤーの関心を探索の意思決定、基地計画、長期的な発展目標へと導きます。` },
        sales: '100K+ Units',
        platforms: { CN: "我的世界 (中国版)", EN: "Minecraft (NetEase)", JA: "Minecraft (NetEase中国版)" },
        durations: { CN: "约4个月", EN: "About 4 months", JA: "約4ヶ月" },
        startDate: '2023.03',
        endDate: '2023.06',
        teamSizes: { CN: "9人", EN: "9 People", JA: "9人" },
        prices: { CN: "¥10", EN: "$1.99", JA: "¥220" },
        descriptions: {
            CN: `

## 设计挑战

目标客群偏好直接的感官刺激体验,对复杂系统的认知承载能力有限,同时希望减少挖矿等低价值重复操作。如何在提供爽快机甲战斗的同时,让基地建设具有战略价值而非单纯的装饰功能,成为核心设计课题。

## 设计方案

**核心循环设计:**
围绕机甲战斗这一核心爽点构建体验,通过怪物攻城系统让基地从装饰变为战略要地,同时引入自动化系统将玩家从挖矿中解放,让精力聚焦在战斗与探索上。

**认知负荷管理:**
*   采用分层内容引入策略,避免一次性呈现过多复杂系统
*   设计可复用的内容结构(如武器、机甲、建筑),让玩家能够将已掌握的知识应用到新内容中
*   将资源系统简化为"早期基础矿物(铁、钻石)→后期食物矿物(金)"的清晰进程,自然引导玩家转向自动化

**空间与系统设计:**
*   在开放世界中散布20+可探索区域(废墟、地堡、实验室等),平衡探索自由度与内容密度
*   设计8大核心系统(家园建设、自动化、机甲战斗、怪物攻城、研究、特殊制造、天气事件、角色属性)相互支撑核心循环
*   完成50+武器、30+敌人、5套机甲、70+建筑方块、40+食物药物、10+生物群系的内容落地

## 成果验证

**玩家反馈与数据:**
*   通过词云分析2000+玩家反馈,验证机甲战斗与基地防御的爽点被成功传达
*   基于反馈迭代系统设计,使销售额提升10%,评分提升0.2

**商业表现:**
*   累计销量突破10万份
*   发售月进入平台排行榜前五
*   持续更新(末日地堡档)延长产品生命周期

**团队效能提升:**
*   作为唯一策划协调9人团队(4程序、4美术、1运营)完成交付
*   引入Git版本管理与规范命名,将平均开发周期从4个月缩短至2个月
    `, EN: `
## Design Challenge

The target audience preferred direct sensory stimulation and had limited capacity for complex systems, while wanting to minimize low-value repetitive tasks like mining. The core design challenge was delivering satisfying mech combat while making base building strategically meaningful rather than purely decorative.

## Design Solution

**Core Loop Design:**
Built the experience around mech combat as the primary hook, introduced monster siege system to transform bases from decoration into strategic strongholds, and implemented automation systems to free players from mining, allowing them to focus on combat and exploration.

**Cognitive Load Management:**
*   Employed layered content introduction to avoid overwhelming players with complex systems at once
*   Designed reusable content structures (weapons, mechs, buildings) enabling players to apply learned knowledge to new content
*   Simplified resource system into clear progression: "early basic minerals (iron, diamond) → late-game food minerals (gold)", naturally guiding players toward automation

**Spatial & Systems Design:**
*   Scattered 20+ explorable locations (ruins, bunkers, labs) across open world, balancing exploration freedom with content density
*   Designed 8 core interconnected systems (home building, automation, mech combat, monster siege, research, special crafting, weather events, character attributes) supporting the core loop
*   Delivered 50+ weapons, 30+ enemies, 5 mech sets, 70+ building blocks, 40+ food/medicine items, and 10+ biomes

## Results & Validation

**Player Feedback & Data:**
*   Analyzed 2000+ player feedback through word clouds, confirming successful delivery of mech combat and base defense appeal
*   Iterated system design based on feedback, achieving 10% sales increase and 0.2 rating improvement

**Commercial Performance:**
*   Achieved 100K+ total sales
*   Reached top 5 on platform rankings in launch month
*   Extended product lifecycle through ongoing updates (Doomsday Bunker content)

**Team Efficiency Gains:**
*   As sole designer, coordinated 9-person team (4 programmers, 4 artists, 1 operations) to successful delivery
*   Introduced Git version control and naming standards, reducing average development cycle from 4 months to 2 months
    `, JA: `
## 設計の挑戦

ターゲット層は直接的な感覚刺激を好み、複雑なシステムへの認知能力が限られていた一方で、採掘などの低価値な反復作業を減らしたいと考えていました。爽快なメカ戦闘を提供しつつ、基地建設を単なる装飾ではなく戦略的な価値を持つものにすることが核心的な課題でした。

## 設計ソリューション

**コアループ設計:**
メカ戦闘を核に体験を構築し、モンスターの襲撃システムを通じて基地を装飾から戦略的拠点へと変貌させました。同時に自動化システムを導入し、プレイヤーを採掘から解放して戦闘と探索に集中できるようにしました。

**認知負荷の管理:**
*   階層的なコンテンツ導入戦略を採用し、一度に多数の複雑なシステムを提示することを回避。
*   再利用可能なコンテンツ構造（武器、メカ、建築物など）を設計し、修得した知識を新しいコンテンツに応用できるように。
*   資源システムを「初期の基礎鉱物（鉄、ダイヤ）→ 後期の食糧鉱物（金）」という明確な進行に簡素化し、自然に自動化へと誘導。

**空間とシステムの設計:**
*   オープンワールドに20以上の探索可能エリア（廃墟、バンカー、研究所など）を散布。探索の自由度と内容密度のバランスを調整。
*   8つのコアシステム（家園建設、自動化、メカ戦闘、モンスター襲撃、研究、特殊製造、天候イベント、キャラクター属性）を設計し、コアループを相互にサポート。
*   50種類以上の武器、30種類以上の敵、5種類のメカ、70種類以上の建築ブロック、40種類以上の食物・薬品、10種類以上のバイオームを実装。

## 成果と検証

**プレイヤーのフィードバックとデータ:**
*   2000件以上のフィードバックをワードクラウドで分析。メカ戦闘と基地防衛の楽しさが成功裏に伝わっていることを検証。
*   フィードバックに基づきシステム設計を反復し、売上が10%向上、評価が0.2向上。

**商業パフォーマンス:**
*   累計販売数10万本を突破。
*   発売月にプラットフォームランキングのトップ5にランクイン。
*   アップデート（末日バンカー版など）の継続により製品のライフサイクルを延長。

**チーム効率の向上:**
*   唯一のプランナーとして9人チーム（プログラマー4人、アーティスト4人、運営1人）を調整し、納品を達成。
*   Gitによるバージョン管理と命名規則の導入により、平均開発期間を4ヶ月から2ヶ月に短縮。
    ` },
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
            CN: "恐怖主题的半线性RPG模组,通过战斗系统聚焦短期刺激体验。",
            EN: "Horror-themed semi-linear RPG mod focused on combat-driven short-session gameplay.",
            JA: "ホラーをテーマにした半線形RPG MOD。戦闘システムを通じて短期間の刺激的な体験に焦点を当てる。"
        },
        introduces: {
            CN: `恐怖主题的半线性 RPG 模组，
以探索->打怪->掉落物换武器->提升战斗能力->打Boss->推剧情进度为进度控制循环，
以探索->SAN与饱食度消耗->食物、药物消耗->延迟制作为节奏控制循环，
通过战斗系统反馈节点同质化交换稳定的成长思路以确保不超过目标用户的认知负荷，并通过战斗表现的优化和聚焦满足目标用户的底层需求。`,
            EN: `A semi-linear horror-themed RPG mod.
The progress control loop is exploration->kill->drop->weapon upgrade->boss->story progress,
The pace control loop is exploration->SAN and hunger consumption->food and medicine consumption->delay,
Through the feedback of the combat system, the same type of exchange is used to ensure that the growth does not exceed the cognitive load of the target user, and the optimization and focus of the combat performance are satisfied by the target user.`,
            JA: `ホラーをテーマにした半線形RPG MOD。
「探索 → 討伐 → ドロップ品を武器と交換 → 戦闘能力向上 → ボス戦 → ストーリー進行」を進行管理ループとし、
「探索 → SAN値と満腹度の消費 → 食料・薬品の消費 → クラフトによる遅延」をテンポ管理ループとしています。
戦闘システムのフィードバックを均質化することで、ターゲットユーザーの認知負荷を超えない安定した成長モデルを構築。戦闘表現の最適化と集中により、ユーザーの根源的なニーズに応えます。`
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
## 设计挑战

公司需要快速抢占热点IP,目标客群为低龄玩家,具有碎片化时间、短期多次游玩、预算有限的特征,优先追求短期刺激而非长线养成。核心设计难题在于:如何在UGC环境下(玩家游玩顺序与设计顺序差异极大)构建有效的进度体验,同时用极简的辅助系统(~10%内容占比)支撑核心战斗循环。

额外挑战是如何用1个模组同时侵占9个细分IP市场(8维度岛屿+各岛屿Boss),并规划8个岛屿的特色差异与数值梯度。

## 设计方案

**战斗系统聚焦策略:**
将90%的设计精力集中在战斗系统及其依赖上,通过精心设计的战斗依赖系统(药物、食物、特殊四维属性)确保核心爽点被充分传达。辅助系统(建筑、功能方块等)仅占10%,降低认知负担并聚焦玩家精力。

**半线性进度控制:**
*   主线采用半线性设计:仅设置Choke Point(关卡瓶颈)而无Critical Path(强制路径)
*   避免纯线性带来的过度强制行为,符合MC强调自由的核心理念及目标客群的行为偏好
*   进度循环:**探索→击杀敌人→掉落物兑换武器→提升战斗能力→击败Boss→推进剧情**

**双消耗节奏控制:**
*   引入SAN值(精神值)+饱食度的双消耗系统,控制玩家战斗强度与前后期差异化
*   不睡觉掉SAN的速度、药物/食物的消耗设计、特殊四维属性对伤害的影响度经过精密调优
*   确保生存模式下玩家有足够的习得感,战斗反馈节点通过同质化交换保持认知负荷可控

**IP矩阵化设计:**
*   1个主岛+8个维度岛屿,每个岛屿对应1个独立IP(如特定恐怖主题、生物群系、怪物行为模式)
*   8个岛屿的串联本身构成第9个IP,实现"1个模组抢占9个IP市场"的商业目标
*   每个岛屿设计独立的特色、数值梯度与Boss战,保持探索新鲜感

**内容规模:**
*   10+可生成探索地点、10+特殊地形、30+武器、40+敌人+3个Boss
*   70+建筑/功能方块、50+食物、30+Buff/Debuff、10+生物群系
*   特殊战斗系统、角色属性系统、进度系统、特殊制造系统、Boss召唤功能、岛屿传送系统

## 成果验证

**商业表现:**
*   首周上榜
*   累计销量突破10万份(前3个岛屿发布阶段)
*   2个月开发周期,7人团队完成交付

**玩家反馈:**
*   收集2000+玩家反馈
*   验证了战斗系统及其依赖设计的有效性,玩家对核心爽点认可度高

**设计验证:**
*   90%战斗/10%辅助的资源分配策略被证明可行,成功降低认知负担
*   半线性设计有效平衡了自由度与进度引导

**未完成目标:**
*   原计划通过8个岛屿的完整发布+持续宣发抢占9个IP市场,因策略变更仅完成3个岛屿
*   后续DLC未能跟进,错失销量拉升机会
*   四维属性梯度在离职后被修改,导致评分从预期下降至4.3(生存体验受损)
`,
            EN: `
## Design Challenge

The company needed to rapidly occupy the horror genre hot IP. The target audience consisted of young players with fragmented playtime, short-session preferences, limited budgets, and a priority for immediate stimulation over long-term progression. The core design challenge: how to build effective progression in a UGC environment (where player exploration order drastically differs from design sequence) while supporting the core combat loop with minimal auxiliary systems (~10% content allocation).

An additional challenge was using 1 mod to simultaneously capture 9 IP markets (8 dimension islands + each island's Boss) while planning distinct features and numerical gradients for each island.

## Design Solution

**Combat-Focused Strategy:**
Concentrated 90% of design effort on combat systems and their dependencies, delivering the core appeal through carefully designed combat support systems (medicine, food, special attribute dimensions). Auxiliary systems (building, functional blocks) comprised only 10%, reducing cognitive load and focusing player attention.

**Semi-Linear Progression Control:**
*   Main storyline used semi-linear design: Choke Points (progress gates) without Critical Paths (forced routes)
*   Avoided excessive restrictions from pure linearity, aligning with Minecraft's freedom-focused philosophy and target audience behavior
*   Progression loop: **Explore → Kill enemies → Trade drops for weapons → Enhance combat ability → Defeat Boss → Advance story**

**Dual-Consumption Pacing:**
*   Introduced SAN (sanity) + hunger dual-consumption system to control player combat intensity and early/late-game differentiation
*   Sleep deprivation SAN drain rate, medicine/food consumption design, and special attribute impact on damage were precisely tuned
*   Ensured adequate learning curve in survival mode; combat feedback nodes maintained manageable cognitive load through homogenized exchange mechanics

**IP Matrix Design:**
*   1 main island + 8 dimension islands, each representing an independent IP (specific horror themes, biomes, monster behavior patterns)
*   The connection of 8 islands itself formed the 9th IP, achieving "1 mod captures 9 IP markets" business objective
*   Each island featured unique characteristics, numerical gradients, and Boss encounters to maintain exploration freshness

**Content Scale:**
*   10+ procedurally generated exploration sites, 10+ special terrains, 30+ weapons, 40+ enemies + 3 Bosses
*   70+ buildings/functional blocks, 50+ food items, 30+ Buffs/Debuffs, 10+ biomes
*   Special combat system, character attribute system, progression system, special crafting system, Boss summoning, island teleportation system

## Results & Validation

**Commercial Performance:**
*   Charted in first week
*   Achieved 100K+ total sales (during initial 3-island release phase)
*   Delivered in 2-month development cycle with 7-person team

**Player Feedback:**
*   Collected 2000+ player feedback responses
*   Validated effectiveness of combat system and dependency design; high player recognition of core appeal

**Design Validation:**
*   90% combat / 10% auxiliary resource allocation proved viable, successfully reducing cognitive burden
*   Semi-linear design effectively balanced freedom with progression guidance

**Unrealized Goals:**
*   Original plan to capture 9 IP markets through complete 8-island release + sustained marketing; only 3 islands completed due to strategy changes
*   Follow-up DLC couldn't proceed, missing sales uplift opportunities
*   Attribute gradient modifications after leaving caused rating drop to 4.3 (survival experience degraded)
`,
            JA: `
## 設計の挑戦
人気ホラーIPブームに迅速に対応する必要がありました。ターゲット層は低年齢層で、断片的なプレイ時間、短期・反復的なプレイ傾向、限られた予算といった特徴を持ち、長期的な育成よりも短期的な刺激を求めていました。UGC環境（プレイヤーの探索順序が設計者の意図と大きく異なる）において、いかに効果的な進行体験を構築しつつ、最小限の補助システム（コンテンツ全体の約10%）でコアな戦闘サイクルを支えるかが課題でした。

また、1つのMODで同時に9つの細分化されたIP市場（8つの異次元島＋各島のボス）をカバーし、それらの特色と数値の勾配をいかに設計するかも挑戦でした。

## 設計ソリューション
**戦闘システム集中戦略:**
設計リソースの90%を戦闘システムとその依存関係（薬品、食料、特殊な四元ステータス）に集中させ、核となる楽しさを確実に伝達。補助システム（建築、機能ブロック等）を10%に抑えることで、認知負荷を下げ、プレイヤーの注意を戦闘に集中させました。

**半線形的な進行管理:**
*   メインストーリーは半線形設計を採用：チェックポイント（進行のボトルネック）のみを設置し、クリティカルパス（強制的な経路）は設定しません。
*   純粋な線形進行による過度な強制を避け、Minecraftの持ち味である自由度とターゲット層の嗜好に合わせました。
*   進行ループ：**探索 → 敵討伐 → ドロップ品を武器と交換 → 戦闘能力向上 → ボス撃破 → ストーリー進行**

**二重消費によるテンポ調整:**
*   SAN値（正気度）＋満腹度の二重消費システムを導入し、戦闘の強度とゲーム後半の差別化を制御。
*   睡眠不足による回避不能なSAN値減少速度、薬品・食料の消費バランス、特殊ステータスが与ダメージに与える影響度を精密に調整。
*   サバイバルモードにおいてプレイヤーが確かな習得感を得られるようにし、戦闘フィードバックを均質化することで認知負荷を制御しました。

**IPマトリックス設計:**
*   メインの島1つ＋8つの異次元島で構成。各島を個別のIP（特定のホラーテーマ、バイオーム、モンスターの行動パターン）に対応。
*   8つの島を繋ぐ構造自体が第9のIPを形成し、「1つのMODで9つのIP市場をカバーする」という商業目標を達成。
*   各島に独自の特色、数値の勾配、ボス戦を用意し、探索の新鮮さを維持。

**コンテンツ規模:**
*   10以上の探索地点、10以上の特殊地形、30以上の武器、40以上の敵、3体のボス。
*   70以上の建築・機能ブロック、50以上の食料、30以上のバフ・デバフ、10以上のバイオーム。
*   特殊戦闘システム、キャラクター属性システム、進行システム、特殊製造システム、ボス召喚機能、島移動システム。

## 成果と検証
**商業的パフォーマンス:**
*   リリース初週からチャート入り。
*   累計販売数10万本を突破（最初の3つの島がリリースされた段階）。
*   7人のチームで2ヶ月の開発サイクルで納品を完了。

**プレイヤーのフィードバック:**
*   2000件以上のフィードバックを収集。
*   戦闘システムとその周辺設計の有効性が検証され、核となる楽しさへの高い評価を得ました。

**設計の検証:**
*   「戦闘9：補助1」のリソース配分戦略が有効であることが証明され、認知負荷の軽減に成功。
*   半線形設計により、自由度とガイドのバランスを最適化。

**未達成の目標:**
*   当初は8つの島を完遂してIPを拡大する計画でしたが、戦略変更により3つの島で終了。
*   その後のDLC展開が行われず、さらなる販売機会を逸しました。
*   離職後に属性の数値勾配が変更され、評価が期待値から4.3へ下落（サバイバル体験の損なわれ）。
`
        },
        images: ['/assets/images/KBDCover.png', '/assets/images/Horror_01.png', '/assets/images/Horror_02.png', '/assets/images/Horror_03.png'],
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
            CN: "基于原创IP的中低体量单机ARPG预研,聚焦乐器战斗与主副机协同体验。",
            EN: "Mid-scale single-player ARPG pre-production with original IP, focused on instrument-based combat and dual-character cooperation.",
            JA: "オリジナルIPに基づく中規模シングルプレイヤーARPGのプリプロダクション。楽器を用いた戦闘とメイン・サブキャラクターの連携体験に焦点を当てる。"
        },
        sales: 'Pre-production',
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "约1年半", EN: "About 1.5 years", JA: "約1.5年" },
        startDate: '2023.01',
        endDate: 'Present',
        teamSizes: { CN: "3人 + 其他可用人员", EN: "3 People + Other people", JA: "3人 + その他サポート" },
        descriptions: {
            CN: `
## 项目背景与挑战

**战略背景:**
公司需要验证原创IP的扩展可能性(Future Permission),确保IP不局限于AVG产线,同时在种子轮融资阶段(目标200万人民币)证明ARPG品类的可行性。选择对标伊苏7作为在该预算下唯一可能完成Vertical Slice的benchmark。

**极限资源约束:**
*   **团队构成:** 该产品线上仅保留我 + 1程序 + 1运营策划，及AVG线上可用人员
*   **资金现状:** 公司仅剩数十万债权

**核心设计难题:**
在极度受限的资源下,如何明确3C与核心战斗体验方向、构建可验证的玩法原型,并建立足够的流程标准使低产出团队也能勉强推进,同时说服投资人相信项目潜力。

## 设计方案

**核心玩法验证 - 乐器战斗+主副机协同:**
*   **设计起源:** 最初为音游概念,在IP设计过程中发现乐器作为武器母题的迭代可能性,实验后团队认可其趣味性
*   **主副机机制:** 玩家控制主机(男主),副机(女主)为AI协同作战,强化陪伴感与情感羁绊
*   **去能力化设定:** 主角因世界观设定无法真正击杀"情绪与意志异化的敌人",必须依赖僚机终结敌人,通过依赖感强化陪伴体验(区别于传统ARPG的队友Pawn或NPC设计)
*   **POC验证状态:** 已验证输入序列和主副机操作模式,使用Fab资产搭建连招原型,但手感调优仍在迭代中(GAS实现难度较高)

**预研阶段的优先级策略:**
*   **核心体验最优先:** 在有限人力下,能验证的内容优先实机验证,不能验证的优先纸面模型
*   **系统框架构建:** 完成系统架构图、世界观框架、角色/区域/国家设定,为后续规模化扩展打基础
*   **关卡概念设计:** 产出空间概念支撑空间体验设想

**流程与标准建立 - 降低协作成本:**
面对低产出团队,建立以下流程工具强制质量底线:
*   **10+文档模板:** 角色设定、区域设定、LDD、SDD、国家设定、项目计划书、招聘模板、玩法草案、大纲等
*   **6份方法文档:** 情感设计高视角方法论、沟通及认知模式、系统设计Checklist、角色设定Review List、设计文档通用标准、关卡设计SOP
*   **自检机制:** 要求成员交付前依据Checklist自检,将设计迭代次数从4-5次降低至1-2次

**UE5蓝图快速验证:**
使用UE蓝图搭建极简但有效的玩法概念验证,基于测试结果调整整体设计方向,在无程序深度支持的情况下推进核心玩法迭代。

## 成果与现状

**验证成果:**
*   完成整体IP框架搭建(虽与本游戏关联度有限,但为公司提供了战略扩展基础)
*   验证了乐器战斗+主副机协同的核心逻辑可行性
*   完成技能序列、操作模式的初步验证,建立了系统架构基础

**融资进展:**
*   接触多位投资人,反馈为"有苗头"但未进入股权协议环节

**项目现状:**
*   预研初期阶段,目前在AVG项目中缓步并行推进
*   已完成核心玩法的概念验证,但仍需大量工作才能进入实际开发阶段
*   已养成两名高能量成员至可以独立决策和业务推进的程度

**关键困难:**
*   团队产能严重不足,低产出成员拒绝沟通与审查,无法形成有效协作
*   资金极度紧张,人员流失持续,依靠个人魅力维系团队难以为继
*   手感调优困难,GAS实现超出当前团队能力范围

## 能力成长总结

**在极限约束下的项目掌控:**
*   作为创意总监拥有全项目掌控权(资金分配、执行标准、质量判断、迭代控制),即使老板也需听从设计决策
*   在种子轮融资前的极度资源受限环境下,独立完成从立项、系统设计、原型验证到投资人沟通的全流程
*   面对周30人时的有效产能,通过流程工具与标准建立强制提升交付质量

**预研阶段的方向收敛能力:**
*   在高度不确定性下明确验证优先级,将发散的设计设想转化为可执行的核心方向
*   建立了系统化的文档模板与Review机制,将迭代次数减半

**跨职能能力拓展:**
*   使用UE5蓝图进行玩法POC验证,补足程序资源不足的短板
*   承担招聘、团队管理、投资人沟通等多重角色

**逆境中的韧性与判断:**
*   在团队低产出、资金紧张、人员流失的多重困境下,依然维持项目推进与方向稳定
*   清晰认知到当前困境的根源,并制定、执行解决方案
`,
            EN: `
## Project Background & Challenges

**Strategic Context:**
The company needed to validate the expansion potential of its original IP (Future Permission), ensuring the IP wasn't confined to AVG production lines, while proving ARPG genre feasibility during seed round fundraising (target: 2M RMB). Chose Ys Seven as benchmark—the only comparable title achievable for a Vertical Slice within this budget.

**Extreme Resource Constraints:**
*   **Team Composition:** This project only retained myself + 1 programmer + 1 operations designer, plus available personnel from the AVG project
*   **Financial Status:** Company left with only hundreds of thousands in receivables

**Core Design Challenge:**
Under extreme resource limitations, how to define 3C and core combat experience direction, build verifiable gameplay prototypes, establish process standards enabling even low-output teams to barely function, while convincing investors of project potential.

## Design Solution

**Core Gameplay Validation - Instrument Combat + Dual-Character System:**
*   **Design Origin:** Initially a rhythm game concept; during IP design, discovered iteration potential of instruments as weapon motif; team approved after experimentation
*   **Dual-Character Mechanism:** Player controls main character (male lead), sub-character (female lead) AI cooperates in combat, strengthening companionship and emotional bonds
*   **De-powerment Setting:** Protagonist cannot truly kill "enemies formed from emotional/willful aberration" due to world lore; must rely on companion for finishing blows, strengthening companionship through dependency (differentiating from traditional ARPG teammate Pawns or NPCs)
*   **POC Validation Status:** Verified input sequences and dual-character operation modes; built combo prototypes using Fab assets, but feel optimization still iterating (GAS implementation difficulty high)

**Pre-production Priority Strategy:**
*   **Core Experience First:** Under limited manpower, prioritize real-engine validation where possible; paper models for non-verifiable content
*   **System Framework Construction:** Completed system architecture diagrams, world framework, character/region/nation settings to support future scaling
*   **Level Concept Design:** Produced spatial concepts supporting spatial experience concepts

**Process & Standards Establishment - Reducing Collaboration Costs:**
Facing low-output team, established process tools to enforce quality baseline:
*   **10+ Document Templates:** Character settings, region settings, LDD, SDD, nation settings, project plans, recruitment templates, gameplay proposals, outlines, etc.
*   **6 Methodology Documents:** High-level emotional design methodology, communication & cognitive models, system design checklists, character setting review lists, design document universal standards, level design SOPs
*   **Self-check Mechanism:** Required members to self-review against checklists before submission, reducing design iterations from 4-5 to 1-2

**UE5 Blueprint Rapid Validation:**
Used UE Blueprints to build minimal but effective gameplay concept validations, adjusting overall design direction based on test results, advancing core gameplay iteration without deep programming support.

## Results & Current Status

**Validation Achievements:**
*   Completed overall IP framework construction (limited relevance to this game, but provided strategic expansion foundation for company)
*   Validated feasibility of instrument combat + dual-character cooperation core logic
*   Completed preliminary validation of skill sequences and operation modes; established system architecture foundation

**Fundraising Progress:**
*   Engaged multiple investors; feedback was "shows potential" but did not enter equity agreement phase
 

**Project Status:**
*   Early pre-production phase; currently proceeding slowly in parallel with AVG project
*   Completed core gameplay concept validation, but significant work remains before actual development
*   Cultivated two high-energy members to a level capable of independent decision-making and business execution

**Key Difficulties:**
*   Severely insufficient team output; low-output members refusing communication and reviews, unable to form effective collaboration
*   Extreme financial pressure; continuous personnel attrition; maintaining team through personal charisma unsustainable
*   Feel optimization difficulties; GAS implementation beyond current team capabilities

## Capability Growth Summary

**Project Control Under Extreme Constraints:**
*   As Creative Director, held full project authority (budget allocation, execution standards, quality judgment, iteration control); even boss deferred to design decisions
*   Under extreme resource constraints before seed round, independently completed full process from initiation, system design, prototype validation to investor communication
*   Facing 30 person-hours per week effective output equivalent, forcibly improved delivery quality through process tools and standards

**Direction Convergence in Pre-production:**
*   Clarified validation priorities under high uncertainty; transformed divergent design concepts into executable core directions
*   Established systematic document templates and review mechanisms, halving iteration counts

**Cross-functional Capability Expansion:**
*   Used UE5 Blueprints for gameplay POC validation, compensating for programming resource shortfalls
*   Undertook recruitment, team management, investor communication, and multiple other roles

**Resilience & Judgment Under Adversity:**
*   Maintained project momentum and directional stability despite low team output, financial pressure, and personnel attrition
*   Clearly recognized root causes of current difficulties, and formulated and executed solutions
`,
            JA: `
## プロジェクトの背景と挑戦

**戦略的背景:**
オリジナルのIPの拡張可能性（将来的なライセンス展開）を検証し、IPがアドベンチャーゲーム（AVG）のラインに限定されないようにすると同時に、シードラウンドの資金調達段階（目標200万人民元）でアクションRPG（ARPG）というジャンルの実現可能性を証明する必要がありました。この予算内でバーティカルスライス（垂直切片）を完成させることが可能な唯一のベンチマークとして、『イースVII』をモデルに選択しました。

**極限のリソース制約:**
*   **チーム構成:** この製品ラインには、私とプログラマー1名、運営プランナー1名のみが残り、他はAVGラインのスタッフを必要に応じて活用。
*   **資金状況:** 会社には数十万の債権しか残っていない状況。

**核心的な設計課題:**
極めて制限されたリソースの中で、いかに3C（キャラクター、カメラ、コントロール）と核心的な戦闘体験の方向性を明確にし、検証可能なプレイアブル・プロトタイプを構築するか。また、低生産性のチームでもなんとか推進できるよう十分なプロセス基準を確立し、同時に投資家にプロジェクトの潜在能力を確信させる方法が課題でした。

## 設計ソリューション

**核心的な遊びの検証 - 楽器戦闘 + メイン・サブ連携:**
*   **設計の起源:** 当初はリズムゲームのコンセプトでしたが、IPの設計過程で楽器を武器のモチーフとする反復可能性を発見し、実験の結果、チームもその面白さを認めました。
*   **メイン・サブメカニクス:** プレイヤーはメイン機（男性主人公）を操作し、サブ機（女性主人公）はAIとして連携戦闘。伴走感と感情的な絆を強化。
*   **非力化設定:** 世界観の設定上、主人公は「感情と意志が異化した敵」を真に倒すことができず、敵のトドメ（フィニッシュ）は僚機に頼る必要があります。この依存関係を通じて（従来のARPGのポーンやNPC設計とは異なる）「伴走体験」を強化しました。
*   **POC検証状況:** 入力シーケンスとメイン・サブの操作モードを検証済み。Fabアセットを使用してコンボプロトタイプを構築。手触りの調整は現在も進行中（GASの実装難易度が高い）。

**プリプロダクション段階の優先順位戦略:**
*   **コア体験を最優先:** 限られた人員の中で、検証可能な内容は優先的に実機で検証し、不可能な内容はペーパーモデルを優先。
*   **システムフレームワークの構築:** システム構成図、世界観の枠組み、キャラクター/エリア/国家の設定を完了させ、将来的な大規模拡張の基礎を構築。
*   **レベルコンセプト設計:** 空間体験の構想を支える空間コンセプトを産出。

**プロセスと基準の確立 - 連携コストの削減:**
低生産性チームに対し、以下のツールを確立し品質の最低ラインを強制：
*   **10以上のドキュメントテンプレート:** キャラクター設定、エリア設定、LDD、SDD、国家設定、プロジェクト計画書、採用テンプレート、ルール草案、アウトライン等。
*   **6つの手法ドキュメント:** 感情設計のハイレベル・メソッド、コミュニケーションおよび認知モデル、システム設計チェックリスト、キャラクター設定レビューリスト、設計ドキュメント共通基準、レベル設計SOP。
*   **自己点検メカニクス:** メンバーに提出前のチェックリストによる自己点検を要求。設計のイテレーション回数を4〜5回から1〜2回に削減。

**UE5ブループリントによる迅速な検証:**
UEブループリントを使用して、極めてシンプルかつ効果的な遊びのコンセプト検証を構築。テスト結果に基づき設計全体の方向性を調整し、深いプログラミング・サポートがない状況でコア機能のイテレーションを推進しました。

## 成果と現状

**検証成果:**
*   全体的なIPフレームワークの構築を完了（本ゲームとの関連は限定的だが、会社の戦略的拡張の基礎を提供）。
*   楽器戦闘＋メイン・サブ連携のコアロジックの実現可能性を検証。
*   スキルシーケンス、操作モードの初期検証を完了し、システムアーキテクチャの基礎を確立。

**資金調達の進捗:**
*   複数の投資家と接触。「ポテンシャルあり」とのフィードバックを得たものの、出資契約には至らず。

**プロジェクトの現状:**
*   プリプロダクションの初期段階で、現在はAVGプロジェクトと並行して緩やかに進行中。
*   コアとなる遊びのコンセプト検証は完了しているが、実際の開発段階に入るにはまだ多くの作業が必要。
*   2名の優秀なメンバーを、独立して意思決定と業務推進ができるレベルまで育成。

**主要な困難:**
*   チームの生産能力が著しく不足。低生産性のメンバーがコミュニケーションや審査を拒否し、効果的な連携が困難。
*   資金が極めて逼迫し、人員の流出が継続。個人のカリスマ性に頼るチーム維持は困難な状況。
*   手触りの調整が難航。GASの実装が現在のチームの能力を超えている。

## キャパシティの成長まとめ

**極限制約下でのプロジェクトコントロール:**
*   クリエイティブディレクターとして、資金配分、執行基準、品質判断、イテレーション制御を含むプロジェクト全体の統制権を保持。社長の意思決定に対しても設計面からの判断を優先。
*   シードラウンド前の極端なリソース制約下で、立案、システム設計、プロトタイプ検証から投資家への説明までの一連のプロセスを完遂。
*   週30人時という実効生産性に対し、プロセスツールと基準の確立を通じて納品品質を強制的に引き上げ。

**不確実な段階での収束能力:**
*   高度な不確実性の中で検証の優先順位を明確にし、発散しがちな設計構想を実行可能なコア・ディレクションへと変換。
*   体系的なドキュメントテンプレートとレビューメカニクスを確立し、イテレーション回数を半減。

**領域横断的なスキルの拡大:**
*   UE5ブループリントを使用して遊びのPOC検証を行い、プログラマー不足の短所を補完。
*   採用、チーム管理、投資家対応など、多重の役割を遂行。

**逆境におけるレジリエンスと判断力:**
*   低生産性、資金難、人員流失という多重の苦境においても、プロジェクトの推進と方向性の安定を維持。
*   苦境の根本原因を明確に認識し、解決策を策定・実行。
`
        },
        images: ['/assets/images/FR_SystemDiagram.png'],
        video: undefined,
        links: [
            { labels: { CN: "加入等候名单", EN: "Join Waitlist", JA: "ウェイティングリスト" }, urls: { CN: "https://www.preludegames.com", EN: "https://www.preludegames.com", JA: "https://www.preludegames.com" }, type: "waitlist" }
            // { labels: { CN: "系统架构简图", EN: "System Architecture Diagram" }, urls: { CN: '/assets/images/FR_SystemDiagram.png', EN: '/assets/images/FR_SystemDiagram.png' }, type: 'doc' }
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
            CN: "基于原创IP的成长主题公路剧视觉小说,为ARPG项目铺设获客基础。",
            EN: "Growth-themed road trip visual novel based on original IP, establishing user acquisition foundation for ARPG project.",
            JA: "オリジナルIPに基づく成長をテーマにしたロードムービー風ビジュアルノベル。ARPGプロジェクトの集客基盤を構築する。"
        },
        sales: 'Pre-production',
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "约2个月", EN: "About 2 months", JA: "約2ヶ月" },
        startDate: '2024.04',
        endDate: 'Present',
        teamSizes: { CN: "10+人 (3全职)", EN: "10+ People (3 full-time)", JA: "10人以上 (フルタイム3名)" },
        descriptions: {
            CN: `
## 项目背景与战略定位

**商业闭环设计:**
Project DT作为Project FR(ARPG)的前置获客产品,承担IP曝光、资源提供与用户转化职能。商业逻辑为:**宣发→世界观故事(AVG)→公路剧题材吸引→周边贩售→IP获客→反哺后续宣发触达**,形成完整商业闭环。

**市场定位策略:**
*   **全年龄全性别定位:** 在社会现状下,避开传统恋爱GAL的争议区,聚焦自我实现、成长与迷惘主题,吸引对身份认同需求强烈的16-24岁用户群体
*   **突破圈层目标:** 若成功突破该年龄层可形成文化圈,若未突破也可尝试建立亚文化圈,为后续IP扩展提供基础用户池
*   **世界观广度优先:** 通过公路剧结构前往足够多的地点(开世界观地图),在人手受限时优先做"广"(地点、物种、国家)而非"深",为FR的世界观铺设认知基础

**团队与资源匹配:**
选择视觉小说形式的核心原因是班底齐全(美术、文案、IP、程序、本地化、音乐),且吉利吉利2引擎技术门槛极低,能在资源受限下快速推进。

## 设计方案

**公路剧叙事结构 - 一期一会:**
男主因能力与评价体系错位陷入泥潭→女主引入开启旅程→逐步加入3位常驻角色(第3/4/5位主角)→途经多个村庄/地点解决事件→男主从冷漠旁观到接受协作再到自我认知改变→第二部AVG引入,男主完成质变但未完全成熟

**世界观投放策略:**
*   **分层次投放:** 第一次深度沟通投放世界观框架→第三位主角加入投放物种/寿命设定→解决事件过程投放世界观细节→新地点投放区域划分与FR世界观打通
*   **通过冲突传递:** 主题"死亡不可避免"通过第一村庄直面死亡事件奠定→寿命观/价值观冲突通过三人深度沟通展开→男主认知改变通过内外部矛盾推动

**角色关系设计:**
*   **男女主CP锁死:** 官配只有男女主,其他角色仅维持深厚友情或编外家人关系,避免传统GAL的暧昧套路,男女主关系状态始终表征明确,但不被角色语言命名
*   **其他角色可暧昧:** 除男女主外的主角团可有暧昧情节,增加叙事层次
*   **避免刻板定位:** 任何角色不强加"爸爸妈妈"表征,通过行为侧写定位
*   **第五位主角高频刷存在:** 前中期高频出现,避免过晚加入导致边缘化

**节奏控制 (20-30万字体量):**
投放大量peaks(情绪高点)避免过分清水,整体节奏紧凑,所有内容避免"说教"误读,聚焦男主的行为改变而非说教式成长宣言。

## 工作内容与职责

**主导全流程叙事设计 (约20工时/周):**
*   定义剧情脉络与叙事结构(公路剧框架、冲突投放节点、角色加入时机)
*   主导大纲撰写、人物选型与角色关系设计
*   产出世界观、人物、区域设定文档,与Project FR世界观打通(主角游经FR国家并与FR男主交集)
*   工业化流程教学:定方向→写案子→做验证→改思路,带领10+人团队(3全职,实际约120人时/周)推进

**IP框架与充分必要设定:**
前期花费大量时间确定"哪些设定现在必须写,哪些可以等待",建立充分必要设定原则,避免过早投入不必要的世界观细节。

**跨项目协同:**
确保DT的世界观、角色、地点设定为FR铺设认知基础,同时通过DT的用户反馈验证IP吸引力,为FR的大规模推进与融资提供数据、资金支撑。

## 成果与现状

**开发进展:**
*   完成IP框架搭建与充分必要设定划分
*   完成剧情脉络设计、大纲撰写、人物选型
*   产出世界观、人物、区域设定文档
*   约2个月活跃开发周期,10+人团队(3全职,120人时/周)

**验证反馈:**
*   圈层用户反馈良好,验证了全年龄全性别+成长主题的市场接受度
*   尚未进入陌生人测试环节

**战略价值:**
*   为Project FR提供前置获客渠道与世界观认知铺垫
*   在资源受限环境下,利用现有班底快速建立IP曝光度
*   为种子轮融资谈判提供商业闭环的完整性论证

**当前挑战:**
*   资金受限,开发速度受人力约束
*   主线张力体现、男女主感情节奏、peaks投放频率等细节仍在讨论与迭代中
`,
            EN: `
## Project Background & Strategic Positioning

**Commercial Loop Design:**
Project DT serves as the pre-acquisition product for Project FR (ARPG), responsible for IP exposure and user conversion. Business logic: **Marketing → World lore story (AVG) → Road trip genre attraction → Merchandise sales → IP user acquisition → Reinforce subsequent marketing reach**, forming a complete commercial loop and adding leverage to seed round fundraising negotiations.

**Market Positioning Strategy:**
*   **All-ages, All-genders Positioning:** Amid intensifying gender conflicts, avoids traditional romance GAL controversy zones, focusing on self-actualization, growth, and confusion themes to attract 16-24 age group with strong identity needs
*   **Breaking Circle Objective:** If successfully penetrating this age group, can form cultural circles; if not, can establish subculture circles to provide foundational user pool for subsequent IP expansion
*   **World Breadth Priority:** Through road trip structure, visits numerous locations (opening world map); under limited manpower, prioritizes "breadth" (locations, species, nations) over "depth", laying cognitive foundation for FR's worldview

**Team & Resource Alignment:**
Visual novel format chosen because full team available (art, writing, IP, programming, localization, music), and Kirikiri 2 engine has extremely low technical barriers, enabling rapid progress under resource constraints.

## Design Solution

**Road Trip Narrative Structure - Fleeting Encounters:**
Male Protagonist falls into despair due to capability-evaluation system misalignment → Female Protagonist introduces journey → Gradually adds 3 regular characters (3rd/4th/5th Protagonists) → Passes through multiple villages/locations solving incidents → Male Protagonist shifts from indifferent observation to accepting cooperation to self-awareness change → Second AVG installment introduced, male Protagonist completes core value restructuring (qualitative change but not fully mature)

**World Lore Deployment Strategy:**
*   **Layered Deployment:** First deep communication deploys world framework → 3rd Protagonist joins, deploys species/lifespan settings → Problem-solving process deploys worldview details → New locations deploy regional divisions and connection with FR worldview
*   **Conveyed Through Conflict:** Theme "death is inevitable" established through first village's death confrontation → Lifespan/value conflicts explored through three-person deep communication → Self-awareness changes driven through internal/external conflicts

**Character Relationship Design:**
*   **Male-Female Protagonist CP Locked:** Official pairing only male-female Protagonists; other characters maintain deep friendships or honorary family relationships, avoiding traditional GAL ambiguity tropes
*   **Other Characters Can Be Ambiguous:** Protagonist team excluding male-female Protagonists can have ambiguous plots, adding narrative layers
*   **Avoid Stereotypical Positioning:** Female Protagonist need not be deliberately portrayed as "mother type"; no character forcibly assigned "father/mother" markers; positioning conveyed through behavioral profiling
*   **5th Protagonist High-frequency Presence:** Appears frequently in early-mid game to avoid marginalization from late joining

**Pacing Control (200K-300K character length):**
Deploy numerous peaks (emotional highs) to avoid excessive blandness; overall tight pacing; all content avoids "preachy" misinterpretation, focusing on male Protagonist's behavioral changes rather than didactic growth declarations.

## Work Content & Responsibilities

**Protagonist Full-process Narrative Design (~20 hours/week):**
*   Defined plot structure and narrative framework (road trip framework, conflict deployment nodes, character joining timing)
*   Led outline writing, character selection, and relationship design
*   Produced world lore, character, region setting documents, integrated with Project FR worldview (protagonist travels through FR nations and intersects with FR male Protagonist)
*   Industrial process teaching: direction setting → case writing → approach revision, Protagonisting 10+ person team (3 full-time, actual 120 person-hours/week) in progression

**IP Framework & Sufficient-Necessary Settings:**
Early stage spent significant time determining "which settings must be written now, which can wait", establishing sufficient-necessary setting principles, avoiding premature investment in unnecessary worldview details.

**Cross-project Coordination:**
Ensured DT's worldview, characters, and location settings lay cognitive foundation for FR, while validating IP appeal through DT user feedback, providing data support for FR's project initiation and fundraising.

## Results & Current Status

**Development Progress:**
*   Completed IP framework construction and sufficient-necessary setting division
*   Completed plot structure design, outline writing, character selection
*   Produced world lore, character, region setting documents
*   2-month active development cycle, 10+ person team (3 full-time, 120 person-hours/week)

**Validation Feedback:**
*   Circle user feedback positive, validated market acceptance of all-ages/all-genders + growth theme
*   Not yet entered stranger testing phase

**Strategic Value:**
*   Provides pre-acquisition channel and worldview cognitive paving for Project FR
*   Under resource-constrained environment, leverages existing team to rapidly establish IP exposure
*   Provides commercial loop completeness argument for seed round fundraising negotiations

**Current Challenges:**
*   Limited funding, development speed constrained by manpower
*   Mainline tension manifestation, male-female Protagonist romantic pacing, peaks deployment frequency and other details still under discussion and iteration
`,
            JA: `
## プロジェクトの背景と戦略的ポジショニング

**ビジネス・クローズドループ設計:**
Project DTは、Project FR（ARPG）の前段階の集客製品として、IPの露出、リソースの提供、ユーザー転換の機能を担います。ビジネスロジックは：**宣伝 → 世界観ストーリー（AVG） → ロードムービー的な題材による惹きつけ → 関連グッズ販売 → IPユーザー獲得 → 次段階の宣伝リーチへの還流**であり、完全なビジネス・クローズドループを形成し、シードラウンドの資金調達交渉における材料となります。

**市場ポジショニング戦略:**
*   **全年齢・全性別ターゲット:** 社会情勢を鑑み、従来の恋愛重視のギャルゲーの論争領域を避け、自己実現、成長、葛藤というテーマに焦点を当て、アイデンティティへの欲求が強い16〜24歳のユーザー層を惹きつけます。
*   **層の突破目標:** この年齢層の突破に成功すれば文化圏（サークル）を形成でき、突破できずとも亜文化圏を確立し、将来的なIP拡張のための基礎ユーザープールを提供します。
*   **世界観の広さ優先:** ロードムービー形式の構造により、十分な数の場所を移動し（世界地図を広げる）、人手が限られている中で「深さ」よりも「広さ」（場所、種族、国家）を優先し、FRの世界観のための認知基盤を構築します。

**チームとリソースの適合:**
ビジュアルノベル形式を選択した核心的な理由は、布陣（美術、シナリオ、IP、プログラム、ローカライズ、音楽）が揃っており、かつ「吉里吉里2」エンジンの技術的ハードルが極めて低く、限られたリソース下で迅速に推進できるためです。

## 設計ソリューション

**ロードムービー型叙事構造 - 一期一会:**
能力と評価体系の乖離により泥沼に陥った男主人公 → 女主人公の導きにより旅が始まる → 徐々に3人の常駐キャラクター（第3/4/5の主人公）が加入 → 複数の村や場所を経由して事件を解決 → 男主人公が冷淡な傍観者から協力の受け入れ、そして自己認識の変化へと至る → 第2部AVGの導入により、男主人公が本質的な変化を遂げる（ただし完全には成熟していない状態）。

**世界観のデプロイ戦略:**
*   **階層的な提供:** 最初の深いコミュニケーションで世界観の枠組みを提示 → 第3の主人公加入で種族・寿命の設定を提示 → 事件解決の過程で世界観の詳細を提示 → 新しい場所で地域区分を提示し、FRの世界観と繋げる。
*   **対立を通じた伝達:** 「死は不可避である」というテーマを最初の村での死に直面する事件で確立 → 寿命観・価値観の対立を3名の深い議論を通じて展開 → 男主人公の認識変化を内容的・外部的矛盾によって推進。

**キャラクター関係設計:**
*   **男女主人公のCP（カップリング）固定:** 公式ペアは男女主人公のみ。他のキャラクターは深い友情や家族に近い関係を維持し、従来のギャルゲーのような曖昧な恋愛ルートを排除。男女主人公の関係性は常に明確に描写されるが、キャラクターの言葉によって定義はされません。
*   **他のキャラクターの曖昧さ:** 男女主人公以外の主要メンバー間には曖昧なエピソードを盛り込み、叙事の層を厚くします。
*   **ステレオタイプな位置付けの回避:** どのキャラクターにも「父親・母親」といった役割を強要せず、行動の側面描写を通じて位置付けます。
*   **第5の主人公の高頻度な登場:** 序盤から中盤にかけて頻繁に登場させ、加入が遅れることによる疎外感を防ぎます。

**テンポ管理（20万〜30万字規模）:**
「ピーク（感情の高まり）」を大量に配置して単調さを避け、全体的に緊密なテンポを維持。すべての内容において「説教臭さ」を排除し、説教じみた成長宣言ではなく、男主人公の行動の変化に焦点を当てます。

## 業務内容と職責

**全工程の叙事設計を主導（約20時間/週）:**
*   ストーリーの脈絡と叙事構造（ロードムービー枠組み、対立配置ノード、キャラ加入タイミング）を定義。
*   アウトライン執筆、キャラクター選定、キャラクター関係設計を主導。
*   世界観、人物、エリア設定ドキュメントを産出し、Project FRの世界観と統合（主人公がFRの国家を旅し、FRの男主人公と交差する）。
*   工業化プロセスの教育：方向性の決定 → 案の作成 → 検証の実施 → 思考の修正。10名以上のチーム（フルタイム3名、実稼働約120人時/週）を率いて推進。

**IPフレームワークと必要十分な設定:**
初期段階で「どの設定を今書くべきか、どれを待てるか」を決定することに多くの時間を費やし、「必要十分な設定原則」を確立。不必要な世界観の詳細に早期から投資することを避けました。

**プロジェクト間の連携:**
DTの世界観、キャラクター、場所の設定がFRの認知基盤となるよう調整。同時にDTのユーザーフィードバックを通じてIPの魅力を検証し、FRの大規模な推進と資金調達のためのデータと資金の裏付けを提供します。

## 成果と現状

**開発の進捗:**
*   IPフレームワークの構築と必要十分な設定の区分を完了。
*   ストーリーの脈絡設計、アウトライン執筆、キャラクター選定を完了。
*   世界観、人物、エリア設定ドキュメントを産出。
*   約2ヶ月のアクティブな開発期間、10名以上のチーム（フルタイム3名、120人時/週）。

**検証フィードバック:**
*   コアなユーザー層からの反応は良好であり、全年齢・全性別＋成長テーマの市場受容性を検証。
*   一般層向けのテスト段階には未到達。

**戦略的価値:**
*   Project FRに集客チャネルと世界観の認知の下地を提供。
*   限られたリソース環境下で、既存の布陣を活用して迅速にIPの露出を確立。
*   シードラウンドの資金調達交渉において、ビジネス・クローズドループの完全性を論証。

**現在の課題:**
*   資金制約により、開発速度が人員不足に縛られている。
*   本編の緊張感の表現、男女主人公の感情のテンポ、ピーク配置の頻度などの詳細は現在も議論と反復（イテレーション）の最中。
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
            CN: "极轻量变身体验模组,专为大型模组玩家提供无冲突战斗力补充。",
            EN: "Ultra-lightweight transformation mod designed as conflict-free combat supplement for large-scale mod players.",
            JA: "極めて軽量な変身体験MOD。大型MODを遊ぶプレイヤー向けに、競合のない戦闘力補完を提供。"
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
## 市场洞察与机会窗口

**市场变化识别:**
2023年MC模组市场出现结构性变化:大型工作室产出的单个模组体量已达到我司2-3倍规模,复杂度持续攀升。大型模组因系统复杂度高导致高度互斥,玩家在游玩大型模组时只能并入少量无冲突的轻量模组。

**机会窗口定位:**
目标用户从"我司产品用户"转向"购买了其他公司大型模组的玩家",为其提供**无依赖、无冲突、高战斗力**的补充体验,填补大型模组玩家的细分需求空白。

## 设计策略 - ROI最大化

**极简设计原则:**
*   **内容规模:** 仅5个变身道具+5个特殊技能,无任何辅助系统
*   **技术策略:** 零依赖、零路径冲突,可无缝并入任何大型模组
*   **功能选择:** 不好做的功能一律不做,ROI最大化为唯一决策标准

**核心价值定位 - 战斗力补充(金手指):**
5个技能均设计为高强度能力,在高难度大型模组中提供显著战斗力提升。满足玩家在复杂模组中"需要强力工具突破难关"的实际需求,而非追求设计复杂度。

**IP与技术复用:**
*   基于工作室长期积累的变身技术(抄漫威IP经验)
*   从闪电侠剧情解说中提炼5个核心技能,快速完成设计收敛
*   利用成熟技术栈降低开发风险与时间成本

## 执行与验证

**快速交付:**
*   3人团队5天完成开发(策划工作约4小时)
*   利用试用期新程序验证技术可行性:做成了OK,做不成反正不影响主线(老板也不看好)

**市场验证:**
*   **销量:** 累计突破100万份
*   **用户反馈:** 3000+评论,评分4.5
*   **市场假设验证:** 轻量+无冲突+高战斗力的组合成功切入大型模组玩家市场,证明了"市场窗口观察正确"

**商业成功:**
*   售价6元,以极低开发成本(3人5天)实现100万销量
*   ROI最大化策略得到市场验证

## 设计方法论总结

**市场窗口快速响应:**
通过持续观察市场结构变化(大型模组井喷→玩家并入需求),识别被忽视的细分机会,用最小成本快速切入。

**极简设计的权衡:**
不是"能做什么就做什么",而是"什么ROI最高就做什么"。5个道具+5个技能的极简规模,恰好满足核心需求且避免所有技术风险。

**技术复用与IP借力:**
利用工作室已有技术积累(变身系统)与外部成熟IP(闪电侠),将设计时间压缩至4小时。

**"学我者生,像我者死":**
这个项目的成功不可复制——它依赖特定的市场窗口、技术积累、团队默契与极度克制的设计决策。盲目模仿极简设计而不理解背后的市场逻辑,很难取得同样成果。
    `, EN: `
## Market Insight & Opportunity Window

**Market Change Identification:**
In 2023, MC mod market underwent structural change: single mods from large studios reached 2-3x our company's mod scale, with continuously rising complexity. Large mods' high system complexity caused severe mutual exclusivity; players could only integrate a few conflict-free lightweight mods alongside large mods.

**Opportunity Window Positioning:**
Shifted target users from "our product users" to "players who purchased other companies' large-scale mods", providing them **zero-dependency, zero-conflict, high-combat-power** supplementary experience to fill niche demand gap for large-scale mod players.

## Design Strategy - ROI Maximization

**Minimalist Design Principle:**
*   **Content Scale:** Only 5 transformation items + 5 special skills, zero auxiliary systems
*   **Technical Strategy:** Zero dependencies, zero path conflicts, seamlessly integrates with any large-scale mod
*   **Feature Selection:** Anything difficult to implement is excluded; ROI maximization as sole decision criterion

**Core Value Positioning - Combat Power Supplement (Cheat):**
All 5 skills designed as high-intensity abilities, providing significant combat power boost in high-difficulty large-scale mods. Satisfies player need for "powerful tools to overcome challenges" in complex mods rather than pursuing design complexity.

**IP & Technical Reuse:**
*   Based on studio's long-accumulated transformation technology (Marvel IP copying experience)
*   Extracted 5 core skills from Flash TV series plot summaries for rapid design convergence
*   Leveraged mature tech stack to minimize development risk and time cost

## Execution & Validation

**Rapid Delivery:**
*   3-person team completed development in 5 days (design work ~4 hours)
*   Used probationary programmer to validate technical feasibility: success = OK; failure = no impact on mainline (boss wasn't optimistic anyway)

**Market Validation:**
*   **Sales:** Achieved 1M+ total sales
*   **User Feedback:** 3000+ reviews, 4.5 rating
*   **Market Hypothesis Verified:** Lightweight + conflict-free + high-combat-power combination successfully captured large-scale mod player market, proving "market window observation correct"

**Commercial Success:**
*   Priced at 6 RMB, achieved 1M sales with minimal development cost (3 people, 5 days)
*   ROI maximization strategy validated by market

## Design Methodology Summary

**Rapid Market Window Response:**
Through continuous observation of market structural changes (large mod boom → player integration needs), identified overlooked niche opportunities and quickly entered with minimal cost.

**Minimalist Design Trade-offs:**
Not "do what we can do", but "do what has highest ROI". Ultra-minimal scale of 5 items + 5 skills precisely satisfied core needs while avoiding all technical risks.

**Technical Reuse & IP Leverage:**
Leveraged studio's existing tech accumulation (transformation system) and mature IP (The Flash), compressing design time to 4 hours, validating efficiency advantage of "standing on giants' shoulders".

**"Those Who Learn From Me Live; Those Who Imitate Me Die":**
This project's success is non-replicable—it depends on specific market windows, technical accumulation, team synergy, and extremely disciplined design decisions. Blindly imitating minimalist design without understanding underlying market logic cannot achieve same results.
`,
            JA: `
## 市場の洞察とチャンスの窓

**市場の変化の識別:**
2023年、Minecraft MOD市場に構造的な変化が生じました。大手スタジオが提供する単体MODの規模は当社の2〜3倍に達し、複雑さが増し続けていました。大型MODはシステムが複雑なために互換性が低く、プレイヤーは大型MODを遊ぶ際、競合のない少数の軽量MODしか併用できない状況にありました。

**チャンスの窓のポジショニング:**
ターゲットユーザーを「自社製品のユーザー」から「他社の大型MODを購入したプレイヤー」へとシフト。彼らに**依存関係なし、競合なし、高戦闘力**という補完的な体験を提供することで、大型MODプレイヤーの細分化されたニーズの空白を埋めました。

## 設計戦略 - ROIの最大化

**極限のシンプル設計原則:**
*   **コンテンツ規模:** 変身アイテム5つ＋特殊スキル5つのみ。補助システムは一切なし。
*   **技術戦略:** 依存関係ゼロ、パスの競合ゼロ。あらゆる大型MODにシームレスに組み込み可能。
*   **機能の選択:** 実装が困難な機能は一切排除。ROIの最大化を唯一の意思決定基準としました。

**核心的価値のポジショニング - 戦闘力の補完（チートアイテム）:**
5つのスキルはすべて高強度な能力として設計され、高難易度の大型MODにおいて顕著な戦闘力向上を提供します。設計の複雑さを追求するのではなく、複雑なMODにおいて「難関を突破するための強力なツールが必要」というプレイヤーの実際のニーズに応えました。

**IPと技術の再利用:**
*   スタジオが長年蓄積してきた変身体系の技術（マーベルIPの模倣経験）を活用。
*   ドラマ『THE FLASH/フラッシュ』のあらすじから5つの核心スキルを抽出し、迅速に設計を収束。
*   成熟した技術スタックを利用することで、開発リスクと時間コストを削減しました。

## 執行と検証

**迅速な納品:**
*   3人のチームで5日間で開発完了（プランナーの作業時間は約4時間）。
*   試用期間中の新しいプログラマーを利用して技術的な実現可能性を検証。成功すれば良し、失敗しても本編には影響しない（社長も期待していなかった）というスタンスで進行。

**市場での検証:**
*   **販売数:** 累計100万本を突破。
*   **ユーザーフィードバック:** 3000件以上のレビュー、評価4.5。
*   **市場仮説の検証:** 「軽量＋競合なし＋高戦闘力」の組み合わせが大型MODプレイヤーの市場に見事に食い込み、「市場の窓の観察が正しかった」ことが証明されました。

**商業的成功:**
*   価格6元。極めて低い開発コスト（3人で5日間）で100万本の販売を達成。
*   ROI最大化戦略が市場によって検証されました。

## 設計メソッドのまとめ

**市場の窓への迅速な対応:**
市場構造の変化（大型MODの急増 → 併用ニーズの発生）を継続的に観察することで、見落とされていた細かなチャンスを識別し、最小コストで迅速に参入しました。

**シンプル設計のトレードオフ:**
「何ができるか」ではなく「何が最もROIが高いか」を基準にしました。アイテム5つ＋スキル5つという極小の規模が、核心的なニーズを的確に満たし、かつすべての技術的リスクを回避しました。

**技術の再利用とIPの活用:**
スタジオ既存の技術蓄積（変身システム）と外部の成熟したIP（フラッシュ）を活用することで、設計時間を4時間に短縮しました。

**「我に学ぶ者は生き、我に似る者は死す」:**
このプロジェクトの成功は再現不可能です。それは、特定の市場の窓、技術蓄積、チームの阿吽の呼吸、そして極めて抑制された設計判断に依存しています。背後にある市場ロジックを理解せずにシンプル設計を盲目的に模倣しても、同様の成果を得ることは困難です。
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
            CN: "原创IP的世界观框架构建,支撑跨品类游戏产品与长期IP矩阵战略。",
            EN: "Original IP world framework construction, supporting cross-genre game products and long-term IP matrix strategy.",
            JA: "オリジナルIPの世界観フレームワーク構築。クロスジャンルのゲーム製品と長期的なIPマトリックス戦略を支える。"
        },
        sales: 'IP Foundation',
        platforms: { CN: "IP 基础设施", EN: "IP Infrastructure", JA: "IPインフラ" },
        durations: { CN: "约1年 (持续完善)", EN: "About 1 year (implementing)", JA: "約1年 (継続的に改善中)" },
        startDate: '2023.06',
        endDate: 'Present',
        teamSizes: { CN: "4人核心团队", EN: "4-person Core Team", JA: "コアチーム4名" },
        descriptions: {
            CN: `
## 项目定位与战略价值

**商业战略 - IP矩阵而非产品IP化:**
RWP是支撑公司长期发展的IP基础设施,战略目标为"IP衍生产品"而非"产品IP化"。通过构建可跨品类、跨媒体、跨界的世界观框架,形成以游戏为核心圈的业务矩阵。

**打破品类限制:**
确保IP不被困在AVG产线,为未来ARPG(Project FR)及更多品类提供世界观支撑。投资人对IP框架表现出兴趣(虽仅关注D轮IPO阶段),验证了长期战略价值。

## 世界观规模与架构

**时空规模:**
*   **时间跨度:** 群星历前9263年(创世)至群星历4284年,明确时间线跨度0-3713年
*   **空间规模:** 3倍地球大小,已设计5个大陆、8个大国,其中3个已有可用设定

**核心设定维度 (20大项,40+文档):**
种族、国家、魔法、科技、历史、信仰、世界划分、生物分类学、计量学、地理、时代等全维度构建,并建立专门的优先级表控制"哪些先做/哪些不做"与质量Checklist。

**设定打通策略:**
融合修仙、魔法、COC等主流设计体系,确定策划需要了解的核心内容,进行大方向规划后剪枝,实现"从一边到另一边,哪里都没有它,哪里都需要它"的底层逻辑支撑。

## 设计方法论 - 充分必要设计

**核心原则: 精确、收敛、逻辑自洽**
*   **收敛:** 不过度发散方向,避免世界观过度设计
*   **精确:** 信息密度高,能10个字写清不写20个字,能列表不一段话,阅读效率极高
*   **逻辑自洽:** 添加新设定时可在逻辑脉络上追溯,确保扩展性

**"限制现在,保留未来":**
建立30+条充分必要设定原则,确保"足够支撑AVG剧情、未来扩展基调",但不提前投入短期用不到的细节。深度由细节决定,但优先广度(打下记忆点),后续再拓展深度(彩蛋、细节关联)。

**"先一步考虑项目可以怎么用":**
每个设定从设计之初就考虑可玩性而非纯设定集。没有一天在写游戏设计文档,但没有一笔不代表着游戏设计立场。确保"不忽略摄像机不会照到的人"——世界是被创造而非复制。

**验证方式:**
*   找熟人看,内部意见一致
*   陌生人段落观看,验证"看完之后能不能理解我要表达什么,他说的印象和我的印象一致"
*   满不满意不重要,重要是合不合适

## 开发过程与挑战

**时间与团队:**
*   框架搭建历时约1年,4人核心团队
*   进行大量Research,打碎消化各类参考体系

**重大迭代与推翻:**
*   生物分类学设计后期发现所有参考都有逻辑起点问题,导致"世界不像是被创造而像是复制",推翻重做
*   多次调整以确保逻辑自洽与可扩展性

**与具体项目的协同:**
*   **Project FR(ARPG):** 剁成臊子各处洒下,投放与剧情深度绑定
*   **Project DT(AVG):** 投放世界观框架、物种、国家、魔法等设定,为玩家建立认知基础
*   **预埋设计:** AVG预埋ARPG,ARPG预埋其他未来项目,形成IP矩阵连贯性

## 核心产出

**文档体系 (20大项,40+文档,数万字):**
*   历史年表(群星历前9263年至群星历4284年)
*   各分类下的核心设定(种族/国家/魔法/科技/信仰/生物分类学/计量学/地理等)
*   未来宣发用的小故事
*   优先级控制表与质量Checklist

**设计工具与方法论:**
*   充分必要设定原则
*   拉高下限用高层面情感设计方法论
*   世界观扩展规则与逻辑追溯体系

**核心USP:**
"够充分,且不忽略摄像机不会照到的人"——世界观的完整性与可信度不依赖玩家视角,而是具备内在逻辑完整性。

## 能力成长与方法论沉淀

**跨项目IP管理能力:**
建立了从IP框架到具体项目的完整投放策略,确保世界观既能支撑ARPG的玩法需求,也能服务AVG的叙事需求,同时为未来项目预留扩展空间。

**"没啥收获,又全都是收获":**
世界观构建是一个没有明确终点的过程,每一次设定调整、每一次逻辑推演、每一次团队argue,都在强化"如何在不确定中建立确定性"的能力。这种能力无法量化,但渗透在后续所有项目的设计决策中。
    `, EN: `
## Project Positioning & Strategic Value

**Business Strategy - IP Matrix, Not Product IP-ization:**
RWP is the IP infrastructure supporting the company's long-term development. Strategic goal: "IP-derived products" rather than "product IP-ization". By building a world framework capable of cross-genre, cross-media, and cross-industry expansion, forms a business matrix with games as the core circle.

**Breaking Genre Limitations:**
Ensures IP isn't confined to AVG production lines, providing worldview support for future ARPG (Project FR) and more genres. Investor interest in IP framework (though focused on Series D IPO stage) validates long-term strategic value.

## World Scale & Architecture

**Spatiotemporal Scale:**
*   **Time Span:** Starlight Calendar Year -9263 (Genesis) to Year 4284; explicit timeline span 0-3713 years
*   **Spatial Scale:** 3x Earth size; 5 continents, 8 major nations designed; 3 with usable settings

**Core Setting Dimensions (20 major categories, 40+ documents):**
Comprehensive construction across races, nations, magic, technology, history, faith, world divisions, biological taxonomy, metrology, geography, eras, etc. Dedicated priority table controls "what to do first/what not to do" with quality checklist.

**Setting Integration Strategy:**
Integrates cultivation, magic, COC and other mainstream design systems; determines core content designers need to understand; conducts macro-level planning then prunes; achieves "from one end to the other, nowhere without it, everywhere needing it" foundational logic support.

## Design Methodology - Sufficient-Necessary Design

**Core Principles: Precision, Convergence, Logical Consistency**
*   **Convergence:** No excessive directional divergence; avoids world over-design
*   **Precision:** High information density; if 10 words suffice don't write 20; prefer lists over paragraphs; extremely efficient reading
*   **Logical Consistency:** When adding new settings, can trace back through logical framework ensuring extensibility

**"Limit Now, Preserve Future":**
Established 30+ sufficient-necessary setting principles ensuring "adequate support for AVG narratives, future expansion tone" without prematurely investing in short-term unused details. Depth determined by details, but prioritize breadth (establish memory anchors), then expand depth later (Easter eggs, detail correlations).

**"Think One Step Ahead About Project Usage":**
Every setting considers playability from inception, not pure setting collections. Not one day spent writing game design documents, yet every stroke represents game design stance. Ensures "don't ignore people the camera won't see"—world is created, not copied.

**Validation Methods:**
*   Have acquaintances review; internal consensus
*   Strangers read segments; verify "after reading, can they understand what I'm expressing; does their impression match mine"
*   Satisfaction doesn't matter; appropriateness matters

## Development Process & Challenges

**Time & Team:**
*   Framework construction took ~1 year; 4-person core team
*   Extensive research; breaking down and digesting various reference systems

**Major Iterations & Overhauls:**
*   Late-stage biological taxonomy design discovered all references had logical starting point issues, causing "world seems copied not created"; overhauled and redone
*   Multiple large-scale adjustments to ensure logical consistency and extensibility

**Coordination with Specific Projects:**
*   **Project FR (ARPG):** Chopped into morsels scattered throughout; deployment deeply tied to plot
*   **Project DT (AVG):** Deploys world framework, species, nations, magic settings; establishes player cognitive foundation
*   **Embedded Design:** AVG embeds ARPG; ARPG embeds other future projects; forms IP matrix coherence

## Core Deliverables

**Documentation System (20 major categories, 40+ documents, tens of thousands of words):**
*   Historical timeline (Starlight Calendar Year -9263 to Year 4284)
*   Core settings under each classification (races/nations/magic/technology/faith/biological taxonomy/metrology/geography, etc.)
*   Small stories for future marketing
*   Priority control table and quality checklist

**Design Tools & Methodologies:**
*   Sufficient-necessary setting principles
*   Raising baseline using high-level emotional design methodology
*   World expansion rules and logical traceability system

**Core USP:**
"Sufficiently complete, and doesn't ignore people the camera won't see"—world integrity and credibility don't depend on player perspective, but possess intrinsic logical completeness.

## Capability Growth & Methodology Crystallization

**Cross-project IP Management Capability:**
Established complete deployment strategy from IP framework to specific projects, ensuring worldview supports both ARPG gameplay needs and AVG narrative needs, while reserving expansion space for future projects.

**"No Growth, Yet All Growth":**
World-building is a process without clear endpoint; every setting adjustment, every logical deduction, every team argument reinforces the ability to "establish certainty within uncertainty". This capability cannot be quantified, but permeates all subsequent project design Decisions.
`,
            JA: `
## プロジェクトのポジショニングと戦略的価値

**ビジネス戦略 - 製品のIP化ではなく、IPマトリックスの構築:**
RWPは、会社の長期的な発展を支えるIPインフラです。戦略目標は「製品をIP化すること」ではなく、「IPを起点とした派生製品」を生み出すことにあります。ジャンル、メディア、業界を超えて展開可能な世界観フレームワークを構築することで、ゲームを核としたビジネスマトリックスを形成します。

**ジャンルの制限を打破:**
IPがアドベンチャーゲーム（AVG）のラインに固定されないようにし、将来的なアクションRPG（Project FR）やその他のジャンルに世界観のサポートを提供します。IPフレームワークに対して投資家が関心を示したことは（シリーズDのIPO段階を見据えたものですが）、長期的な戦略価値を証明しています。

## 世界観の規模とアーキテクチャ

**時空の規模:**
*   **時間軸:** 群星歴前9263年（創世）から群星歴4284年まで。明確なタイムラインのスパンは0〜3713年。
*   **空間の規模:** 地球の3倍のサイズ。5つの大陸と8つの大国を設計済み。そのうち3つは実用可能な設定が完了。

**核心的な設定項目 (20大項目、40以上のドキュメント):**
種族、国家、魔法、科学技術、歴史、信仰、世界の区分、生物分類学、計量学、地理、時代など、全次元にわたる構築。また、「何を先にやるか／何をやらないか」を制御するための専用の優先順位表と品質チェックリストを確立。

**設定の統合戦略:**
修仙、魔法、クトゥルフ（CoC）などの主要な設計体系を融合。プランナーが把握すべき核心的な内容を確定し、大きな方向性を計画した後に枝葉を整理することで、「どこにでもあるようでどこにもない、しかしどこでも必要とされる」基底ロジックの支柱を実現しました。

## 設計メソッド - 必要十分な設計

**核心原則: 正確、収束、論理的整合性**
*   **収束:** 方向性を過度に発散させず、世界観のオーバーデザインを回避。
*   **正確:** 情報密度を高め、10文字で済むなら20文字書かない。文章よりもリスト形式を優先し、読解効率を極限まで向上。
*   **論理的整合性:** 新しい設定を追加する際、常に論理的な脈絡を遡ることができ、拡張性を確保。

**「現在を制限し、未来を残す」:**
30以上の「必要十分な設定原則」を確立。AVGのストーリーを支え、将来の拡張の基盤とするのに「十分」でありながら、短期的には不要な詳細への投資を避けることで、リソースを抑制。深さは細部によって決まりますが、まずは広さ（記憶に残る基点）を優先し、その後に深さ（イースターエッグ、細部の関連性）を拡張します。

**「プロジェクトでどう使うかを一歩先んじて考える」:**
すべての設定は、設計当初から単なる設定集としてではなく、プレイアビリティ（遊びやすさ）を考慮しています。一日たりともゲーム設計ドキュメントを書いていない日はありませんが、一筆たりともゲーム設計の立場を代表していないものもありません。「カメラが映さない人々を無視しない」——世界はコピーされるのではなく、創造されるものです。

**検証方法:**
*   知人に閲覧してもらい、内部的な意見の一致を確認。
*   面識のない人に特定の段落を読んでもらい、「読んだ後に私の意図が正しく伝わっているか、その人の抱いた印象が私の意図と一致するか」を検証。
*   満足できるかどうかよりも、「適切かどうか」を重視。

## 開発プロセスと挑戦

**期間とチーム:**
*   フレームワークの構築に約1年を費やし、コアチーム4名で遂行。
*   膨大なリサーチを行い、様々な参照体系を解体・吸収。

**重大なイテレーションと刷新:**
*   生物分類学の設計において、後半になってすべての参照先に論理的な起点の欠陥があることを発見。その結果「世界が創造されたものではなく、コピーされたもののように見える」という問題が生じたため、すべてを根底から作り直しました。
*   論理的整合性と拡張性を確保するため、大規模な調整を繰り返しました。

**具体プロジェクトとの連携:**
*   **Project FR (ARPG):** 設定を細かく分解して各所に散りばめ、デプロイ（配置）をストーリーと深く結合。
*   **Project DT (AVG):** 世界観の枠組み、種族、国家、魔法などの設定をデプロイし、プレイヤーに認知の基礎を提供。
*   **伏線の設計:** AVGにARPGの伏線を、ARPGに将来のプロジェクトの伏線を埋め込むことで、IPマトリックスの一貫性を形成。

## 主要な成果物

**ドキュメント体系 (20大項目、40以上のドキュメント、数万字規模):**
*   歴史年表（群星歴前9263年から群星歴4284年まで）
*   各分類下の核心設定（種族／国家／魔法／技術／信仰／生物分類学／計量学／地理など）
*   将来のプロモーション用のショートストーリー
*   優先順位制御表と品質チェックリスト

**設計ツールとメソッド:**
*   必要十分な設定原則
*   ハイレベルな感情設計メソッドによるクオリティの底上げ
*   世界観拡張ルールと論理的トレーサビリティ体系

**核心的なUSP (独自の強み):**
「十分に満たされており、かつカメラが映さない人々を無視しない」——世界観の完全性と信憑性はプレイヤーの視点に依存するのではなく、内在的な論理的完全性を備えています。

## 能力の成長とメソッドの沈殿

**クロスプロジェクトIP管理能力:**
IPフレームワークから具体的なプロジェクトに至る完全なデプロイ戦略を確立。世界観がARPGのゲームプレイ要求に応えると同時に、AVGの叙事要求にも応え、さらに将来のプロジェクトのための拡張スペースを確保できるようにしました。

**「収穫などないようでいて、すべてが収穫である」:**
世界観の構築は明確な終わりのないプロセスです。設定を調整するたび、論理を推論するたび、チームで議論するたびに、「不確実性の中に確実性を築く」能力が強化されてきました。この能力は数値化できませんが、その後のすべてのプロジェクトの設計判断に浸透しています。
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
            CN: "守望先锋核心玩法移植至MC,负责英雄移植与移动端UX适配。",
            EN: "Overwatch core gameplay ported to Minecraft; responsible for hero porting and mobile UX adaptation.",
            JA: "オーバーウォッチのコア機能をMinecraftに移植。ヒーローの移植設計とモバイル版UXへの最適化を担当。"
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
## 项目背景

作为Onboarding期间的过渡项目,承接管理层要求将守望先锋核心玩法移植至MC平台。项目规模较小,采用分拆销售策略,市场表现中等。

## 工作内容

**英雄移植与调优:**
负责多个英雄角色的移植设计(包括源氏、士兵76、半藏等),将守望先锋的英雄技能与玩法机制适配至MC的技术框架与操作环境。

**移动端UX适配:**
*   设计选角界面、设置界面与游玩主界面的UX流程
*   解决MC移动端的核心操作挑战:将PC端的射击逻辑适配为移动端点击屏幕操作
*   设计并实现"允许一边点击屏幕一边射击"的操作逻辑,平衡移动端的操作便利性与射击游戏的手感需求

**操作手感优化:**
针对MC与守望先锋的操作差异进行调优,确保移植后的英雄在MC环境下依然能提供可接受的操作体验。

## 技术与能力积累

**平台差异认知:**
这是第一次深入理解手游操作与端游操作差异的项目,建立了对移动端触控交互与PC端鼠标键盘交互在射击类游戏中的差异化设计认知。

**技术栈熟悉:**
通过项目接触网易MC API,建立了对MC模组开发技术栈的初步理解,为后续辐射生存、恐怖岛等大型项目的技术决策奠定基础。

**Onboarding平稳落地:**
作为入职过渡期项目,成功完成设计任务并交付,验证了快速适应新环境与技术栈的能力。
`,
            EN: `
## Project Background

As a transitional project during onboarding period, undertook management's requirement to port Overwatch core gameplay to MC platform. Relatively small-scale project with unbundled sales strategy; moderate market performance.

## Work Content

**Hero Porting & Tuning:**
Responsible for porting multiple hero characters (including Genji, Soldier: 76, Hanzo, etc.), adapting Overwatch hero abilities and gameplay mechanics to MC's technical framework and operational environment.

**Mobile UX Adaptation:**
*   Designed UX flows for character selection interface, settings interface, and main gameplay interface
*   Solved core operational challenges for MC mobile: adapted PC shooting logic to mobile screen-tap operations
*   Designed and implemented "allow screen tapping while shooting" operational logic, balancing mobile operational convenience with shooter game feel requirements

**Operation Feel Optimization:**
Tuned for operational differences between MC and Overwatch, ensuring ported heroes could still provide acceptable operational experience in MC environment.

## Technical & Capability Accumulation

**Platform Difference Awareness:**
First project to deeply understand mobile vs. PC operational differences, establishing differentiated design awareness for mobile touch interactions vs. PC mouse-keyboard interactions in shooter games.

**Tech Stack Familiarity:**
Gained exposure to NetEase MC API through project, establishing preliminary understanding of MC mod development tech stack, laying foundation for technical decisions in subsequent large-scale projects like Nuclear Survival and Horror Isle.

**Smooth Onboarding Landing:**
As an onboarding transitional project, successfully completed design tasks and delivered, validating ability to rapidly adapt to new environments and tech stacks.
`,
            JA: `
## プロジェクトの背景

入社時のオンボーディング期間中の移行プロジェクトとして、オーバーウォッチのコアな遊びをMinecraftプラットフォームに移植するという経営陣の要求を担当しました。プロジェクト規模は比較的小さく、小分けにして販売する戦略を採用。市場での反応は中程度でした。

## 業務内容

**ヒーローの移植と調整:**
複数のヒーローキャラクター（ゲンジ、ソルジャー76、ハンゾーなど）の移植設計を担当。オーバーウォッチのヒーロースキルと遊びのメカンスを、Minecraftの技術フレームワークと操作環境に適応させました。

**モバイル版UXの最適化:**
*   キャラクター選択画面、設定画面、メインプレイ画面のUXフローを設計。
*   Minecraftモバイル版における核心的な操作課題の解決：PC版の射撃ロジックをモバイル版の画面タップ操作に適応。
*   「画面をタップしながら射撃（ターゲット追従）」を可能にする操作ロジックを設計・実装し、モバイル版での操作の利便性とシューティングゲームとしての手触りの両立を図りました。

**操作感の最適化:**
Minecraftとオーバーウォッチの操作性の違いに焦点を当てて調整を行い、移植されたヒーローがMinecraft環境下でも許容可能な操作体験を提供できるようにしました。

## 技術と経験の蓄積

**プラットフォーム間の差異への認識:**
スマートフォンでの操作とPCでの操作の違いを深く理解した最初のプロジェクトです。シューティングゲームにおけるモバイルのタッチ操作とPCのマウス・キーボード操作の設計上の差異について、明確な認識を確立しました。

**技術スタックへの習熟:**
プロジェクトを通じて網易（NetEase）Minecraft APIに触れ、Minecraft MOD開発の技術スタックについて初期的な理解を深めました。これは、その後の『Nuclear Survival』や『Horror Isle』といった大型プロジェクトにおける技術的意思決定の基礎となりました。

**オンボーディングの円滑な完了:**
入社直後の移行期プロジェクトとして、設計タスクを成功裏に完了・納品。新しい環境や技術スタックに迅速に適応する能力を証明しました。
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
            CN: "一款俯视角的3D工厂建设自动化游戏。",
            EN: "A top-down 3D factory-building automation game.",
            JA: "トップダウン視点の3D工場建設オートメーションゲーム。"
        },
        workHours: 462,
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "2024.06 - 2024.08", EN: "Jun 2024 - Aug 2024", JA: "2024年6月 - 2024年8月" },
        startDate: '2024.06',
        endDate: '2024.08',
        teamSizes: { CN: "8人", EN: "8 People", JA: "8人" },
        descriptions: {
            CN: `
## 项目背景与救场策略

**救场背景:**
本项目为学期作业的备份方案。原项目主策划因故退出，为确保8人团队能顺利完成学业交付，我启用了此提前准备的备选案。

**双重职责定位:**
作为主策划与主程序，我需要在保证设计可玩性的同时，直接负责核心系统的代码实现，确保设计需求与技术实现的无缝对接，通过"自己设计自己写"的方式最大化开发效率。

## 设计与开发

**核心循环设计与MVP:**
*   **设计思路:** 围绕"产品→产线→销售"的经典自动化循环构建核心玩法。选择这一循环的原因在于其系统深度足够，且能最大程度复用我在自动化游戏领域的积累。
*   **全栈系统构建:** 亲自设计并用蓝图落地了6大核心系统：**建筑系统、物品系统、配方系统、任务系统、科技树、建筑插件**。所有系统均在设计阶段就充分考虑了实现的可行性与扩展性。
*   **Vertical Slice:** 快速产出包含教程到通关流程的垂直切片，验证核心玩法的闭环，作为中期汇报的展示成果。

**技术攻坚与适配:**
*   **技术栈突破:** 面对从未深入接触过的Unreal蓝图，采取"边学边做"的策略，快速掌握并应用到项目中。
*   **交互体验保障:** 鉴于自动化游戏对交互的要求，我亲自介入UI层开发，协助UI程序修复了5+关键Bug，确保了建造、管理等核心操作的流畅性。

## 成果与反思

**项目交付:**
*   **完整可玩性:** 成功交付了具备完整流程（教程至通关）的Vertical Slice版本。
*   **行业验证:** 主持了三次公开Presentation及行业内专家试玩会，反馈从初期的质疑转变为试玩后的高度认可，验证了敏捷Scope管理的有效性。

## 深度反思 - 关于"第一次失败"
*   **预期落差:** 这是一个关于"第一次失败"的教训。尽管项目按时交付且获得了不错的外部评价，但最终成品在深度与打磨程度上远未达到我最初的设想。
*   **技术驱动:** 这次经历让我深刻意识到设计理想与技术边界的差距，这种"做不出来"的不甘成为了我后续钻研技术、追求技术与设计双修的最大动力。
`,
            EN: `
## Project Background & Rescue Strategy

**Crisis Context:**
Initiated as a well-prepared backup plan to salvage the semester's delivery for an 8-person team after the original lead designer departed. 

**Dual Role Positioning:**
As both Lead Designer & Lead Programmer, I balanced ensuring design playability with directly implementing core systems. This "design-it-then-code-it-myself" approach maximized efficiency by eliminating communication overhead between design requirements and technical implementation.

## Design & Development

**Core Loop & MVP:**
*   **Design Rationale:** Built gameplay around the classic "Product → Production Line → Sales" automation loop. Chosen for its systemic depth and ability to leverage my prior experience in the genre.
*   **Full-Stack System Building:** Personally designed and implemented (Blueprint) 6 core systems: **Building, Item, Recipe, Quest, Tech Tree, Plugin**. All systems were architected with feasibility and scalability in mind from the design phase.
*   **Vertical Slice:** Rapidly produced a vertical slice covering the tutorial-to-ending flow to validate the core loop, serving as the milestone deliverable.

**Technical Execution:**
*   **Tech Stack Breakthrough:** Faced with zero prior Unreal Blueprint experience, adopted a "learn-by-doing" strategy to rapidly master and apply the technology.
*   **UX Assurance:** Given the genre's high interaction demands, personally intervened in UI development, assisting in fixing 5+ critical bugs to ensure smooth construction and management operations.

## Outcomes & Reflection

**Delivery:**
*   **Playable Status:** Successfully delivered a fully playable Vertical Slice with a complete flow.
*   **Industry Validation:** Hosted 3 public presentations and industry playtests. Feedback shifted from initial skepticism to high praise after hands-on sessions, validating the effectiveness of agile scope management.

**Deep Reflection - The "First Failure":**
*   **Expectation Gap:** A lesson in "successful failure". While delivered on time with positive external reception, the final product's depth and polish fell far short of my original vision.
*   **Technical Drive:** This experience highlighted the gap between design ambition and technical boundaries. The frustration of "not being able to build it all" became the primary catalyst for my subsequent pursuit of technical excellence alongside design.
`,
            JA: `
## プロジェクトの背景と救済戦略

**救済の背景:**
本プロジェクトは学期課題のバックアップ案として用意していたものです。元のプロジェクトのリードプランナーが諸事情により脱退したため、8人のチームが滞りなく学業を修了できるよう、事前に準備していたこの代替案を発動しました。

**二重の役割:**
リードプランナー兼リードプログラマーとして、設計の面白さを担保しつつ、核心的なシステムのコード実装を直接担当。設計要件と技術実装をシームレスに繋ぎ、「自分で設計して自分で書く」スタイルで開発効率を最大化しました。

## 設計と開発

**コアループ設計とMVP:**
*   **設計思想:** 「製品 → 生産ライン → 販売」という古典的なオートメーションループを中心にゲームプレイを構築。このループを選択したのは、システムの深さが十分にあり、かつオートメーションゲーム分野での私の蓄積を最大限に活用できるためです。
*   **フルスタックなシステム構築:** 自ら設計し、UnrealのBlueprintを用いて6つの核心的なシステムを実装しました：**建築システム、アイテムシステム、レシピシステム、クエストシステム、テックツリー、建築プラグイン**。すべてのシステムについて、設計段階から実装の実現可能性と拡張性を十分に考慮しました。
*   **バーティカル・スライス:** チュートリアルからクリアまでの流れを含むバーティカル・スライスを迅速に作成。コアプレイのサイクルを検証し、中間報告の成果物として展示しました。

**技術的な挑戦と適応:**
*   **技術スタックの突破:** 深く触れたことのなかったUnrealのBlueprintに対し、「学びながら作る」戦略を採用。プロジェクトを通じて迅速に習得し、応用しました。
*   **UXの保証:** オートメーションゲームに求められる高いインタラクション性を実現するため、自らUI層の開発にも介入。UIプログラマーをサポートして5つ以上の致命的なバグを修正し、建築や管理といった核心的な操作の流暢さを確保しました。

## 成果と反省

**プロジェクトの納品:**
*   **完全なプレイアビリティ:** チュートリアルからクリアまでの完全なフローを備えたバーティカル・スライス版を無事に納品しました。
*   **業界での検証:** 3回の公開プレゼンテーションと業界専門家による試遊会を主催。当初の懸念は試遊後の高い評価へと変わり、アジャイルなスコープ管理の有効性が証明されました。

## 深い反省 - 「最初の失敗」について
*   **理想と現実のギャップ:** これは「最初の失敗」についての教訓です。プロジェクトは期限通りに完了し、外部からも良好な評価を得ましたが、最終的な成果物の深みや磨き込みの程度は、当初の私の構想には遠く及びませんでした。
*   **技術への渇望:** この経験を通じて、設計上の理想と技術的な限界の差を痛感しました。「作りきれなかった」という悔しさが、その後の技術研鑽への大きな原動力となりました。
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
            CN: "2D动作平台游戏，核心为近战与远程的双形态切换。",
            EN: "2D action platformer focused on switching between melee and ranged forms.",
            JA: "2Dアクションプラットフォーマー。近接と遠距離の2つの形態を切り替えて戦うシステムが核。"
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

**课程作业的极限挑战:**
2D游戏开发课程作业，4人团队（2美术、1策划、1程序），开发周期仅2个月，且需同时应对全日制课程压力。作为团队唯一程序，这是我首次独立使用Unity进行完整项目开发，此前仅有Java全栈背景。

**设计初心:**
团队目标并非商业化，而是证明4人的策划实力——设计一款我们认为具有新意的游戏。这一定位决定了我们在设计阶段投入了大量精力构思复杂系统，但也为后续的实现埋下了隐患。早期玩法设计请查看GDD。

## 核心机制设计

**双形态战斗系统 - 叠层与引爆:**
*   **远程形态（叠层）：** 命中敌人时为其叠加层数，层数越高后续引爆伤害越高
*   **近战形态（引爆）：** 贴身攻击引爆敌人身上的所有层数，造成爆发伤害，但需承担受伤风险
*   **设计灵感：** 源自一次耍棍的灵感闪现，将"蓄力-释放"的节奏感转化为双形态切换的策略抉择

**风险收益权衡:**
玩家需在"安全叠层"与"冒险引爆"间持续决策。远程叠层安全但DPS有限，近战引爆高收益但需承担被命中风险，形成核心的风险收益博弈。

## 开发过程与挑战

**技术攻坚 - 从零到一:**
*   作为首个Unity项目，采用"逆向工程+边学边做"策略，通过分析其他2D游戏源码快速掌握Unity开发模式
*   独立完成角色控制、战斗系统、敌人AI、Boss战等核心系统的代码实现
*   主导建立美术资产合并流程，协调指导美术团队正确使用Unity与Git

**团队危机管理:**
项目中期遭遇团队成员退学的重大变故，导致团队大重组。在资源骤减的情况下，快速调整Scope，将原设计的多敌人多关卡收敛至1种小兵+1个Boss的最小可行方案，确保项目按时交付。

## 成果与反思

**交付成果:**
*   成功交付完整可玩的Demo，核心双形态战斗机制运作良好
*   手感经过反复调优，玩家反馈"短但不烂"，战斗手感获得认可
*   公开演讲获得良好评价，GDD完整呈现设计思路

**诚实的遗憾:**
*   主角移动存在"飘"的问题，受限于对Unity 2D物理系统的经验不足未能完美解决
*   内容量受限，仅有1种小兵和1个Boss，未能完整呈现设计构想

**深度反思 - 关于"Scope管理"的教训:**
这是一次关于"过度设计"的深刻教训。回顾来看，我应该更早地叫停复杂的设计扩张，告诉团队：**我们没有能力做Prototype Polish，没有条件反复试验手感。我们应该专注打磨核心玩法，用GDD证明设计深度，而不是追求一个平庸的Demo。** 最终结果是GDD平庸，项目成果也平庸——两头都没抓住。这一教训深刻影响了我后续项目的Scope管理策略。
        `, EN: `
## Project Context & Constraints

**Extreme Challenge of Coursework:**
A 2D game development course project with a 4-person team (2 artists, 1 designer, 1 programmer) and only 2 months of development time, while managing full-time coursework. As the sole programmer, this was my first complete Unity project—my prior experience was limited to Java full-stack development.

**Design Intent:**
The team's goal wasn't commercialization but proving our collective design capabilities—creating a game we believed was genuinely innovative. This positioning led us to invest heavily in designing complex systems upfront, which later became a liability during implementation. Early gameplay design can be found in the GDD.

## Core Mechanic Design

**Dual-Form Combat System - Stacking & Detonation:**
*   **Ranged Form (Stacking):** Hitting enemies adds layers; more layers mean higher detonation damage later
*   **Melee Form (Detonation):** Close-range attacks detonate all accumulated layers for burst damage, but require taking damage risks
*   **Design Inspiration:** Born from a spontaneous moment while practicing stick techniques—translating the "charge-release" rhythm into strategic dual-form switching

**Risk-Reward Trade-off:**
Players continuously choose between "safe stacking" and "risky detonation." Ranged stacking is safe but DPS-limited; melee detonation offers high rewards but exposure to damage—creating the core risk-reward dynamic.

## Development Process & Challenges

**Technical Breakthrough - Zero to One:**
*   As my first Unity project, adopted a "reverse-engineering + learn-by-doing" approach, rapidly mastering Unity patterns by analyzing other 2D game source code
*   Independently implemented character controls, combat system, enemy AI, and boss fight core systems
*   Led establishment of art asset pipeline, coordinating and training artists on Unity and Git workflows

**Team Crisis Management:**
Mid-project, a team member's departure caused major team restructuring. With suddenly reduced resources, I rapidly adjusted scope—converging the original multi-enemy, multi-level design down to a minimum viable 1 enemy type + 1 boss approach, ensuring on-time delivery.

## Outcomes & Reflection

**Deliverables:**
*   Successfully delivered a fully playable demo with functional dual-form combat mechanics
*   Combat feel was iteratively tuned; player feedback was "short but not bad"—combat feel was validated
*   Public presentation received positive reception; GDD comprehensively presented design thinking

**Honest Shortcomings:**
*   Character movement felt "floaty"—limited by inexperience with Unity's 2D physics system
*   Content was limited to 1 enemy type and 1 boss, failing to fully realize the design vision

**Deep Reflection - A Lesson in Scope Management:**
This was a profound lesson in "over-design." In retrospect, I should have called a halt to design expansion earlier, telling the team: **We don't have the capability for Prototype Polish. We can't iterate on game feel. We should focus on polishing core mechanics and use the GDD to demonstrate design depth, rather than chasing a mediocre demo.** The result was a mediocre GDD AND a mediocre project—neither goal achieved. This lesson profoundly influenced my scope management strategy in subsequent projects.
`,
            JA: `
## プロジェクトの背景と制約

**学業課題としての極限の挑戦:**
2Dゲーム開発の学期課題プロジェクト。4人チーム（美術2、企画1、プログラミング1）で開発期間はわずか2ヶ月。フルタイムの授業をこなしながらの開発でした。チーム唯一のプログラマーとして、Unityでの本格的なプロジェクト開発はこれが初めてでした（それ以前はJavaフルスタックの経験のみ）。

**設計の初心:**
チームの目標は商業化ではなく、4人の企画力——自分たちが「斬新だ」と思えるゲームを設計することを証明することでした。このポジショニングにより、設計段階で複雑なシステムの構想に多大な労力を費やしましたが、それが後の実装段階で足かせとなりました。初期のゲームデザインについてはGDDをご覧ください。

## 核心的メカニズムの設計

**双形態戦闘システム - スタックと爆破:**
*   **遠距離形態（スタック）:** 敵に命中させるとスタックが蓄積される。スタックが多いほど、後の「爆破」ダメージが大きくなる。
*   **近接形態（爆破）:** 至近距離攻撃により敵に溜まった全スタックを爆破し、瞬間的に大ダメージを与える。ただし、敵に接近するため被ダメージのリスクを伴う。
*   **設計のインスピレーション:** 棒術の練習中にふと閃いた「チャージして放出する」リズム感を、2つの形態を切り替える戦略的な決断へと昇華させました。

**リスクとリターンのバランス:**
プレイヤーは「安全なスタック蓄積」と「危険な爆破」の間で常に決断を迫られます。遠距離からのスタック蓄積は安全ですが継続ダメージは限定的。近接爆破は高リターンですが被弾のリスクが高い。この核心的なジレンマがゲームの核となっています。

## 開発プロセスと挑戦

**技術的な突破 - ゼロからのスタート:**
*   初めてのUnityプロジェクトとして「リバースエンジニアリング＋学びながら作る」戦略を採用し、他の2Dゲームのソースコードを分析することでUnityの開発パターンを迅速に習得。
*   キャラクター制御、戦闘システム、敵AI、ボス戦などの核心的なシステムを独力で実装。
*   美術アセットの統合フローを主導し、美術チームへのUnityとGitの使い方の技術指導を行いました。

**チームの危機管理:**
プロジェクト中期にチームメンバーの退学という重大なアクシデントが発生し、チームの再編を余儀なくされました。リソースが急減する中、迅速にスコープ（開発範囲）を調整。当初の「複数の敵と複数のステージ」という設計を、「1種類の雑魚敵＋1体のボス」という最小実行可能製品（MVP）へ収束させ、期限通りの納品を死守しました。

## 成果と反省

**納品成果:**
*   完全にプレイ可能なデモを無事に納品。核心となる双形態戦闘メカニズムは良好に動作。
*   操作感を繰り返し微調整し、プレイヤーからは「短いが悪くない」とのフィードバックを得て、戦闘の手触りが認められました。
*   公開プレゼンテーションで良好な評価を獲得。GDDで設計思想を完全に提示しました。

**正直な反省点:**
*   主人公の移動に「滑る」ような感覚があり、Unity 2D物理システムへの経験不足から完璧な解決には至りませんでした。
*   コンテンツ量が制限され、雑魚敵1種類とボス1体のみとなり、設計構想を完全に具現化することはできませんでした。

**深い反省 - 「スコープ管理」の教訓:**
これは「オーバーデザイン（過剰設計）」についての痛烈な教訓となりました。振り返ってみれば、もっと早い段階で複雑な設計の拡張を止め、チームにこう言うべきでした：**「今の私たちにはプロトタイプを磨き上げる（Polish）能力も、操作感を試行錯誤する余裕もない。核心的な遊びの磨き込みに集中し、設計の深みはGDDで証明すべきだ。平凡なデモを追い求めるべきではない。」**。結局、GDDも成果物も中途半端なものになり、二兎を追う者は一兎をも得ずという結果に。この教訓は、その後のプロジェクトにおける私のスコープ管理戦略に深く影響を与えています。
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
            CN: "一款AI驱动的电子COC跑团游戏。",
            EN: "An AI-powered electronic COC TRPG game.",
            JA: "AI駆動の電子クトゥルフ神話TRPG（COC）ゲーム。"
        },
        workHours: 25,
        platforms: { CN: "网页 / App", EN: "Web / App", JA: "Web / App" },
        durations: { CN: "5 天", EN: "5 days", JA: "5日間" },
        startDate: '2025.07',
        endDate: '2025.07',
        teamSizes: { CN: "5 人", EN: "5-person", JA: "5人" },
        descriptions: {
            CN: `
## 项目背景

**AdventureX的5天极限挑战:**
5天Hackathon项目，5人团队（1策划+4程序）。作为唯一策划，主导全部设计决策，程序团队负责评估技术可行性并实现。

**目标痛点:**
*   解决线下COC跑团"找不到KP"的核心痛点
*   让新手玩家能零门槛体验COC跑团的魅力

## 核心设计

**"故事世界"而非"AI KP":**
区别于传统AI跑团产品将AI定位为"KP"的思路，我们将AI定位为**整个故事世界本身**——AI不仅扮演KP的叙事职能，更扮演故事中的每一个角色：调查员、NPC、路人甲、甚至街边的小市民。玩家通过文字输入与这个"活的世界"交互。

**COC规则的完整保留:**
*   完整的骰子系统与属性系统
*   大量保留COC核心规则，确保跑团体验的正统性
*   通过数据结构设计支撑角色状态、技能检定、理智值(SAN)等核心机制

**Prompt工程实践:**
*   从豆包迁移至Kimi，优化生成质量与响应稳定性
*   设计并迭代提示词结构，确保AI输出符合COC风格与规则约束
*   调整数据结构以支撑复杂的角色状态与世界状态管理

## 工作内容

**全栈设计职责:**
*   **功能需求设计：** 定义产品功能边界与优先级
*   **数据结构设计：** 设计角色、世界、剧情的数据模型
*   **提示词工程：** 编写并迭代AI行为的Prompt结构
*   **剧本书写：** 创作演示用的COC剧本内容
*   **测试与调优：** 持续测试AI输出质量并反馈优化

**策划工具开发 - RAG Clause Create Tool:**
为提升剧本配置效率，使用Python开发了RAG线索管理工具。该工具用于管理RAG数据库所需的线索条目——例如某个地点在不同时期与哪些NPC、事件、物品相关联。通过可视化的条目关联配置，大幅加速了剧本信息的结构化录入。


## 成果与影响

**Hackathon成果:**
*   成功交付可运行的Prototype
*   路演环节获得大量试玩与好评，验证了产品方向的可行性

**个人转变 - AI Native的起点:**
这个项目成为我转向AI Native工作方式的关键节点。此后，AI工具深度融入我的日常工作流，成为设计与开发的核心辅助手段。
        `, EN: `
## Project Background

**5-Day Hackathon Sprint:**
A 5-day Hackathon project with a 5-person team (1 designer + 4 programmers). As the sole designer, I led all design decisions while the programming team assessed technical feasibility and implemented features.

**Target Pain Points:**
*   Solve the core pain point of "can't find a Keeper" for offline COC sessions
*   Enable newcomers to experience COC TRPG with zero barriers to entry

## Core Design

**"Story World" Instead of "AI Keeper":**
Unlike traditional AI TRPG products that position AI as "the Keeper," we positioned AI as **the entire story world itself**—AI not only fulfills the Keeper's narrative function but embodies every character in the story: investigators, NPCs, bystanders, even ordinary citizens on the street. Players interact with this "living world" through text input.

**Comprehensive COC Rule Preservation:**
*   Complete dice system and attribute system
*   Substantial preservation of core COC rules, ensuring authentic TRPG experience
*   Data structure design supporting character states, skill checks, Sanity (SAN), and other core mechanics

**Prompt Engineering Practice:**
*   Migrated from Doubao to Kimi for improved generation quality and response stability
*   Designed and iterated prompt structures ensuring AI output adheres to COC style and rule constraints
*   Adjusted data structures to support complex character and world state management

## Work Content

**Full-Stack Design Responsibilities:**
*   **Feature Requirements:** Defined product feature boundaries and priorities
*   **Data Structure Design:** Designed data models for characters, world, and narrative
*   **Prompt Engineering:** Authored and iterated AI behavior prompt structures
*   **Scenario Writing:** Created COC scenario content for demonstrations
*   **Testing & Tuning:** Continuously tested AI output quality and provided optimization feedback

**Design Tool Development - RAG Clause Create Tool:**
To improve scenario configuration efficiency, developed a Python-based RAG clue management tool. This tool manages clue entries required by the RAG database—for example, which NPCs, events, and items a location is associated with across different time periods. Through visual entry association configuration, it significantly accelerated structured scenario data input.

## Outcomes & Impact

**Hackathon Results:**
*   Successfully delivered a functional Prototype
*   Demo session received extensive playtesting and positive feedback, validating product direction viability

**Personal Transformation - The Starting Point of AI Native:**
This project marked my pivotal transition to an AI Native workflow. Since then, AI tools have been deeply integrated into my daily work, becoming a core assistant for both design and development.
`,
            JA: `
## プロジェクトの背景

**AdventureX 5日間限界への挑戦:**
5日間のハッカソンプロジェクト。5人チーム（企画1＋プログラミング4）。唯一のプランナーとして、すべての設計判断を主導。プログラミングチームは技術的な実現可能性の評価と実装を担当しました。

**解決すべき課題（ペインポイント）:**
*   対面（オフライン）でのクトゥルフ神話TRPG（COC）において「KP（キーパー）が見つからない」という核心的な課題を解決。
*   初心者がハードルなしでCOCの魅力を体験できるようにする。

## 核心的設計

**「AIキーパー」ではなく「物語世界」:**
AIを「KP」として位置づける従来のAI TRPG製品とは異なり、私たちはAIを**物語世界そのもの**として位置づけました。AIはKPとしてのナレーション機能を果たすだけでなく、物語に登場するあらゆるキャラクター——探索者、NPC、通行人、さらには街角の市民までを演じます。プレイヤーはテキスト入力によって、この「生きている世界」と対話します。

**COCルールの完全な保持:**
*   ダイス（サイコロ）システムとステータス・属性システムの完備。
*   COC核心ルールの大部分を保持し、TRPG体験としての正統性を担保。
*   キャラクター状態、技能検定（判定）、SAN値（正気度）などの核心メカニズムを支えるデータ構造を設計。

**プロンプトエンジニアリングの実践:**
*   「豆包（Doubao）」から「Kimi」へ移行し、生成クオリティと応答の安定性を最適化。
*   AIの出力がCOCのスタイルとルール制約に適合するよう、プロンプト構造を設計・改善。
*   複雑なキャラクター状態と世界状態を管理するためのデータ構造の調整。

## 業務内容

**フルスタックプランナーとしての役割:**
*   **機能要件:** 製品機能の範囲と優先順位の決定。
*   **データ構造設計:** キャラクター、世界、物語の基盤となるデータモデルの設計。
*   **プロンプトエンジニアリング:** AIの振る舞いを制御するプロンプト構造の記述と改善。
*   **シナリオ執筆:** デモ用のCOCシナリデータの作成。
*   **テストと調整:** AIの出力クオリティを継続的にテストし、最適化のためのフィードバックを提供。

**設計ツールの開発 - RAG Clause Create Tool:**
シナリオ設定の効率を上げるため、PythonベースのRAG（検索拡張生成）手がかり管理ツールを開発しました。このツールは、RAGデータベースに必要な「手がかり」項目を管理します。例えば、ある場所において異なる時間帯にどのNPC、イベント、アイテムが関連しているかなどを管理できます。項目間の関連性を視覚的に設定できるようにすることで、構造化されたシナリオデータの入力作業を劇的に高速化しました。

## 成果と影響

**ハッカソンの成果:**
*   動作可能なプロトタイプの納品に成功。
*   ロードショー（発表会）にて多くの試遊と好評を得て、製品の方向性の実現可能性を証明。

**個人の変化 - AI Nativeの起点:**
このプロジェクトは、私の仕事のスタイルが「AI Native（AIをネイティブに使いこなす）」へと転換する重要な契機となりました。これ以降、AIツールは私の日常的なワークフローに深く溶け込み、設計と開発における核心的な補助手段となりました。
`
        },
        images: ['/assets/images/AllStory.png', '/assets/images/AS_01.png', '/assets/images/AS_02.png', '/assets/images/AS_03.png'],
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
            CN: "第一人称VR捞金鱼游戏。",
            EN: "First-person VR goldfish scooping game.",
            JA: "一人称視点のVR金魚すくいゲーム。"
        },
        workHours: 132,
        platforms: { CN: "Oculus Quest 2", EN: "Oculus Quest 2", JA: "Oculus Quest 2" },
        durations: { CN: "2024.01-2024.03", EN: "Jan 2024 - Mar 2024", JA: "2024年1月 - 2024年3月" },
        startDate: '2024.01',
        endDate: '2024.03',
        teamSizes: { CN: "7人", EN: "7-person", JA: "7人" },
        descriptions: {
            CN: `
## 项目背景与波折

**三次方向调整的VR课程作业:**
这是一个充满波折的VR课程作业。团队最初尝试制作VR指挥家，但技术难度过高而放弃；转向VR堂吉诃德砍风车后，中途又遭遇成员退学；最终我们加入另一个组，组成7人团队（2程序+2策划+3美术）完成了这个VR捞金鱼项目。

**核心挑战的选择:**
选择"手部平稳"作为核心挑战，是在团队VR API理解深度有限的情况下，在可控范围内选择的最有趣方向——玩家需要保持手部平稳的同时，快速匹配金鱼的移动速度将其捞起。

## 技术挑战与实现

**VR开发的苦力活:**
*   VR测试环境搭建极其困难，2个程序花了半周时间才让一台机器能正常测试
*   大量时间消耗在阅读和调试Oculus SDK API上
*   原本设计了震动反馈，但最终效果不理想而移除

**性能优化 - 对象池技术:**
VR对性能要求极高。针对金鱼和烟花特效（策划坚持要加的功能）实现了对象池系统，确保不掉帧的前提下保留视觉表现。

**策划友好的配置系统:**
使用Odin插件将所有可配置项直接暴露给策划，使其能自主微调手感参数，减少程序与策划的沟通成本。

## 成果与反思

**交付成果:**
成功交付可运行的Demo。虽然试玩反馈认为不如之前的项目，但考虑到所有程序都是"赶鸭子上架"——132小时只是有记录的部分，熬了多少夜已数不清——能完成交付本身已是团队的极限努力。

**能力边界认知:**
这个项目让我深刻认识到VR开发的能力边界，以及在逆境中如何成为"把任务尽可能做好的人"。
        `, EN: `
## Project Background & Turbulence

**VR Coursework with Three Direction Pivots:**
A turbulent VR course project. The team initially attempted a VR Conductor game, abandoned due to excessive technical difficulty; pivoted to VR Don Quixote windmill-slashing, then lost a member mid-development; finally joined another team, forming a 7-person group (2 programmers + 2 designers + 3 artists) to complete this VR goldfish scooping game.

**Core Challenge Selection:**
Chose "hand stability" as the core challenge within the limits of the team's VR API understanding—selecting the most interesting direction within controllable scope. Players must keep their hands steady while quickly matching goldfish movement speed to scoop.

## Technical Challenges & Implementation

**The Grind of VR Development:**
*   VR testing environment setup was extremely difficult; 2 programmers spent half a week just getting one machine to test properly
*   Massive time spent reading and debugging Oculus SDK APIs
*   Originally designed haptic feedback, but removed due to unsatisfying results

**Performance Optimization - Object Pooling:**
VR demands extreme performance. Implemented object pooling for goldfish and firework effects (a feature the designer insisted on including), ensuring visual quality without frame drops.

**Designer-Friendly Configuration System:**
Used Odin Inspector to expose all configurable parameters directly to designers, enabling them to fine-tune game feel independently, reducing programmer-designer communication overhead.

## Outcomes & Reflection

**Deliverables:**
Successfully delivered a functional Demo. Although playtest feedback rated it below previous projects, considering all programmers were "thrown into the deep end"—132 hours is only the recorded portion, countless all-nighters uncounted—completing delivery itself represented the team's maximum effort.

**Capability Boundary Awareness:**
This project gave me profound awareness of VR development capability boundaries, and how to be "someone who gets the job done as well as possible" under adversity.
`,
            JA: `
## プロジェクトの背景と変遷

**3度の方向転換を経たVR授業課題:**
波乱万丈なVR授業のプロジェクトでした。当初は「VR指揮者」を試みましたが、技術的な難易度が高すぎて断念。「VRドン・キホーテ」による風車切りに転換しましたが、途中でメンバーが退学。最終的に別のグループと合流し、プログラマー2名、プランナー2名、美術3名の7人チームでこの「VR金魚すくい」を完成させました。

**核心となる課題の選択:**
核心的な挑戦として「手の安定性」を選択しました。これは、チームのVR APIへの理解が限られていた中で、制御可能な範囲内で最も面白い方向性を選んだ結果です。プレイヤーは手を安定させながら、金魚の移動速度に合わせて素早くすくい上げる必要があります。

## 技術的挑戦と実装

**VR開発の地道な作業:**
*   VRのテスト環境構築は極めて困難で、マシン1台が正常にテストできるようになるまでプログラマー2名で半週間を費やしました。
*   Oculus SDKのAPIの読み込みとデバッグに膨大な時間を費やしました。
*   当初は振動フィードバックを設計していましたが、最終的な効果が理想的ではなかったため削除しました。

**パフォーマンス最適化 - オブジェクトプール:**
VRは極めて高いパフォーマンスを要求します。金魚と花火のエフェクト（プランナーがこだわり抜いた機能）に対しオブジェクトプールシステムを実装し、フレーム落ちなしに視覚的な演出を維持しました。

**プランナーに優しい設定システム:**
Odin Inspectorプラグインを使用して、すべての設定項目をプランナーが直接触れるようにしました。これにより、プランナーが自ら操作感のパラメータを微調整できるようになり、プログラマーとのコミュニケーションコストを引き下げました。

## 成果と反省

**成果物:**
動作可能なデモを無事に納品しました。試遊後のフィードバックは以前のプロジェクトほどではありませんでしたが、プログラマー全員が「ぶっつけ本番」で挑んだこと（記録された132時間は氷山の一角で、どれほど徹夜したか数え切れません）を考えれば、納品まで漕ぎ着けたこと自体がチームの限界を超えた努力の証です。

**能力の限界への認識:**
このプロジェクトを通じて、VR開発における自分の能力の限界を深く認識するとともに、逆境の中でいかに「与えられた任務を最大限に遂行するか」を学びました。
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
            CN: "类似以撒的2D Roguelike RPG。",
            EN: "2D Roguelike RPG similar to The Binding of Isaac.",
            JA: "『The Binding of Isaac』風の2D Roguelike RPG。"
        },
        workHours: 100,
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "2024.05", EN: "May 2024", JA: "2024年5月" },
        startDate: '2024.05',
        endDate: '2024.05',
        teamSizes: { CN: "10+ 人", EN: "10+ People", JA: "10名以上" },
        descriptions: {
            CN: `
## 项目背景

**机核暴造 (Gcores BOOOM) Game Jam:**
一款俯视角2D Roguelike RPG游戏，玩家在固定大世界中冒险、养成、探索真相。作为10+人大团队的程序之一参与。

## 工作内容

**执行向程序工作:**
*   将策划的抽象设计转化为可配置的数据表
*   实现可交互物与Ingredients
*   进行小幅度框架代码修改

## 学习收获

**大型项目框架学习:**
加入这个项目的主要目的是"偷师"——通过参与大团队项目，学习成熟的Unity大型项目框架架构。接任务、交任务的工作方式让我专注于理解现有代码结构，而非主导设计决策。
`,
            EN: `
## Project Background

**Gcores BOOOM Game Jam:**
An isometric 2D Roguelike RPG where players adventure, develop characters, and uncover world truths. Participated as one of the programmers in a 10+ person team.

## Work Content

**Execution-Focused Programming:**
*   Translated designers' abstract concepts into configurable data tables
*   Implemented interactable objects and Ingredients
*   Made minor framework code modifications

## Learning Gains

**Large-Scale Project Framework Study:**
The primary purpose of joining this project was to "learn from the masters"—understanding mature Unity large-project framework architecture through participation. The task-in-task-out workflow allowed me to focus on understanding existing code structure rather than leading design decisions.
`,
            JA: `
## プロジェクトの背景

**Gcores BOOOM Game Jam (機核暴造):**
トップダウン視点の2D Roguelike RPG。プレイヤーは固定された広大な世界を冒険し、成長し、真実を探索します。10名以上の大規模チームの一員（プログラマー）として参加しました。

## 業務内容

**実装重視のプログラミング:**
*   プランナーの抽象的な設計を、設定可能なデータテーブルへと変換。
*   インタラクティブなオブジェクトと素材（Ingredients）の実装。
*   フレームワークコードの軽微な修正。

## 学習の成果

**大規模プロジェクトのフレームワーク学習:**
このプロジェクトに参加した主な目的は「技を盗む」ことでした。大規模チームに参加することで、成熟したUnityの大規模プロジェクト向けフレームワークのアーキテクチャを学びました。割り振られたタスクをこなし、納品するというスタイルにより、設計判断を主導するのではなく、既存のコード構造を深く理解することに集中できました。
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
            CN: "3D/2D平台跳跃动作游戏，利用粘液机制解谜。",
            EN: "3D/2D platformer action game using slime mechanics.",
            JA: "3D/2Dプラットフォームアクションゲーム。粘液メカニズムを利用して謎を解く。"
        },
        workHours: 100,
        platforms: { CN: "PC", EN: "PC", JA: "PC" },
        durations: { CN: "2023.06", EN: "Jun 2023", JA: "2023年6月" },
        startDate: '2023.06',
        endDate: '2023.06',
        teamSizes: { CN: "小组 (Game Jam)", EN: "Small Group (Game Jam)", JA: "少人数チーム (Game Jam)" },
        descriptions: {
            CN: `
## 项目背景

**吉比特 (G-bits) Game Jam 参赛作品:**
一款3D+2D平台跳跃解谜游戏。作为玩法设计师参与，负责核心玩法机制的设计。

## 核心机制设计

**粘液体型变化系统:**
我提出并设计了核心的粘液系统——史莱姆角色根据体内粘液量的多少动态改变体型，不同体型对应不同的能力与限制，玩家需要合理管理有限的粘液资源，通过跳跃和冲刺消耗粘液来跨越障碍，这一机制将资源管理与平台跳跃解谜融合，为关卡设计提供了丰富的设计空间。
`,
            EN: `
## Project Background

**G-bits Game Jam Entry:**
A 3D+2D platformer puzzle game. Participated as Gameplay Designer, responsible for core gameplay mechanic design.

## Core Mechanic Design

**Slime Size-Shifting System:**
I proposed and designed the core slime system—the slime character dynamically changes body size based on internal mucus quantity, with different sizes corresponding to different abilities and limitations, Players must strategically manage limited mucus resources, consuming mucus through jumps and sprints to cross obstacles. This mechanic fuses resource management with platformer puzzling, providing rich design space for level creation.
`,
            JA: `
## プロジェクトの背景

**吉比特 (G-bits) Game Jam 参加作品:**
3Dと2Dが融合したプラットフォームパズルゲーム。ゲームプレイデザイナーとして参加し、メインの遊びのメカニズムの設計を担当しました。

## 核心的メカニズムの設計

**粘液による体型変化システム:**
私は核心となる「粘液システム」を提案・設計しました。スライムのキャラクターが体内の粘液量に応じて動的に体型を変化させ、体型ごとに異なる能力と制限を持たせました。プレイヤーは限られた粘液リソースを適切に管理し、ジャンプやダッシュで粘液を消費しながら障害を乗り越えていく必要があります。このメカニズムはリソース管理とプラットフォームパズルの要素を融合させ、レベルデザインにおいて豊かな設計空間を提供しました。
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
            CN: "为内向者设计的无需开口社交桌游。",
            EN: "A social board game designed for introverts—no talking required.",
            JA: "内向的な人のために設計された、会話不要のソーシャルボードゲーム。"
        },
        workHours: 300,
        platforms: { CN: "实体桌游", EN: "Physical Board Game", JA: "ボードゲーム" },
        durations: { CN: "2024.04 - 至今", EN: "Apr 2024 - Present", JA: "2024年4月 - 現在" },
        startDate: '2024.04',
        endDate: 'Present',
        teamSizes: { CN: "个人", EN: "Solo", JA: "個人" },
        descriptions: {
            CN: `
## 设计动机

**为"不想说话"的人设计的社交游戏:**
在一次社交聚会上，朋友介绍了各种破冰游戏，但我的一个INFP朋友明显脱离群体——他不喜欢说话，在熟络之前也不敢太多开口。这个场景触发了设计思考：**能不能设计一款所有人不说话也能玩完的社交游戏？**

## 核心设计

**观察-推理机制:**
玩家通过观察其他人的行为，推测对方遵循的隐藏规则。核心乐趣来自"看破"他人的行为模式，而非口头交流。

**沉默友好的社交体验:**
*   **全程无需开口：** 游戏流程中不强制任何口头交流，内向玩家可以完全沉浸在观察与思考中
*   **低冷启动压力：** 无需自我介绍或主动发言，通过行为而非语言建立互动
*   **渐进式社交：** 随着游戏推进，玩家自然产生想要交流的欲望，而非被迫破冰

**游戏规格:**
3-6人游戏，根据模式不同，时长在15-60分钟之间。

## 开发过程

**300+小时的实地测试:**
大量时间花在KFC和咖啡馆寻找测试者进行Playtest。收集到的反馈涵盖正负两面——例如有人反馈规则太多不好记，有人反馈规则太少不够有趣，针对性地进行了简化调整。

## 当前状态与未来规划

初步试玩阶段已完成，规则经过多轮迭代趋于稳定。下一步计划是继续扩大测试范围，收集更多反馈后启动众筹，将这款桌游正式制作出版。
        `, EN: `
## Design Motivation

**A Social Game for "Those Who Don't Want to Talk":**
At a social party, a friend introduced various icebreaker games, but my INFP friend was clearly disengaged—he dislikes talking and feels hesitant to speak before feeling comfortable with the group. This scenario sparked a design question: **Can we design a social game that can be played completely without speaking?**

## Core Design

**Observation-Deduction Mechanism:**
Players observe others' behaviors and deduce the hidden rules they're following. The core fun comes from "seeing through" behavioral patterns, not verbal communication.

**Silence-Friendly Social Experience:**
*   **No Speaking Required:** The entire game flow requires no verbal communication; introverted players can fully immerse in observation and thought
*   **Low Cold-Start Pressure:** No self-introductions or proactive speaking required; interaction built through actions, not words
*   **Progressive Socialization:** As the game progresses, players naturally develop desire to communicate, rather than being forced to break ice

**Game Specifications:**
3-6 players, 15-60 minutes depending on game mode.

## Development Process

**300+ Hours of Field Testing:**
Significant time spent finding testers at KFCs and cafes for playtesting. Feedback collected covered both positive and negative aspects, e.g. some found too many rules hard to remember, some found rules too simple not interesting enough, leading to targeted simplification adjustments.

## Current Status & Future Plans

Initial playtesting phase complete; rules have stabilized through multiple iterations. Next steps include expanding testing scope, collecting more feedback, then launching crowdfunding to officially produce and publish this board game.
        `,
            JA: `
## 設計の動機

**「話したくない」人のためのソーシャルゲーム:**
ある親睦会で、友人が様々なアイスブレイクゲームを紹介していましたが、INFP（MBTIタイプの一つ）の友人が明らかに孤立していました。彼は話すのが苦手で、親しくなるまでは自分から口を開くことができませんでした。この光景が設計のきっかけとなりました：**「全員が一言も発せずに完結できるソーシャルゲームは作れないだろうか？」**

## 核心的設計

**観察と言外の推論メカニズム:**
プレイヤーは他人の行動を観察し、相手が従っている「隠されたルール」を推測します。核心となる楽しさは、口頭でのやり取りではなく、他人の行動パターンを「看破」することにあります。

**沈黙に優しいソーシャル体験:**
*   **全編会話不要:** ゲームのプロセスにおいて口頭での交流を一切強制しません。内向的なプレイヤーは観察と考察に完全に没頭できます。
*   **コールドスタート（初動）の低ストレス:** 自己紹介や自発的な発言を必要とせず、言葉ではなく行動を通じて相互作用を構築します。
*   **漸進的な交流:** ゲームが進むにつれて、プレイヤーはアイスブレイクを強要されるのではなく、自然と「話したい」という欲求を抱くようになります。

**ゲーム仕様:**
3〜6人プレイ。モードにより15〜60分程度。

## 開発プロセス

**300時間以上の実地テスト:**
ケンタッキーやカフェなどでテストプレイヤーを探し、膨大な時間のプレイテストを行いました。寄せられたフィードバックはポジティブなものからネガティブなものまで多岐にわたりました。例えば「ルールが多くて覚えにくい」という意見や、逆に「ルールが少なすぎて物足りない」といった声に対し、ターゲットを絞った簡略化と調整を繰り返しました。

## 現在の状態と今後の計画

初期の試遊段階は完了し、ルールは数ランクのイテレーションを経て安定しています。次の計画は、さらにテスト範囲を広げてより多くのフィードバックを収集した後、クラウドファンディングを開始し、このボードゲームを正式に製品化・出版することです。
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
            CN: "高性能、确定性、防作弊的竞技麻将服务器/客户端架构原型。",
            EN: "A high-performance, deterministic, cheat-proof competitive Mahjong architecture prototype.",
            JA: "高パフォーマンス、決定性、不正防止機能を備えた競技麻雀のアーキテクチャ・プロトタイプ。"
        },
        durations: { CN: "8个月", EN: "8 Months", JA: "8ヶ月" },
        startDate: '2024.02',
        endDate: '2024.10',
        teamSizes: { CN: "个人", EN: "Solo", JA: "個人" },
        descriptions: {
            CN: `
> **声明：** 因更换设备，本项目的大部分源代码已丢失。此处展示的仅为配置 Qodana 静态分析工具之前的早期代码版本。

## 架构概览 (Architectural Overview)

采用严格的逻辑与表现分离（MVC/ECS-lite 混合架构），通过 Assembly Definitions (.asmdef) 实现模块化依赖管理层。旨在构建一个高性能、确定性且具备防作弊能力的竞技麻将底层架构。

## 数据结构与优化 (DOD)

*   **手牌管理 (HandList):** 坚持面向数据设计 (DOD) 逻辑，采用并行数组 (SoA) 存储手牌数据，利用位标志 (Bit-flags) 追踪状态以避免数组重排，实现零分配的虚拟索引映射排序。
*   **状态序列化:** 自定义位域封包 (Bit-field Packing)，将牌面类型、所有者ID、特殊标记(如赤宝牌)压缩至 32 位混合体。相比传统 JSON 序列化，带宽消耗降低约 60%。
*   **极致规则压缩:** 采用极致位封包技术，将包括游戏模式、局分计算、计时规则在内的 10+ 项复杂规则压缩至仅 14 字节的负载中。

## 网络同步架构

*   **传输层:** 基于 System.Net.Sockets 原始 TCP 套接字实现。配套自定义环形缓冲区 (Ring Buffer) 解决 TCP 数据流粘包与拆包问题。
*   **确定性同步:** 采用共享 RNG 随机种子 (Seed + Salt) 架构，确保客户端模拟与服务器状态完全同步，杜绝作弊可能。
*   **IO 优化:** 初始发牌采用 4-4-4-1 序列分块 (Chunking)，将 13 次网络事件减少至 4 次，大幅提升握手效率。

## 人工智能 (GOAP AI)

构建了一个层级式多范式 AI 服务：
*   **GOAP (目标导向行动计划):** 实现 \`IGoalOrientedActionPlanning\` 接口。采用逆向链算法 (Reverse Chaining) 在世界状态中动态检索通往“胡牌目标”的最优行动序列。
*   **行为树 (BT) 与决策树 (DT):** 用于处理固定序列逻辑与简单的反应式交互。

## 工程质量 (QA)

*   **TDD:** 使用 NUnit 框架。对核心逻辑模块（如序列化、随机分配器、格式化工具）实现了 100% 的行覆盖率。
*   **工具链:** 开发了基于反射的自定义 Unity 编辑器扩展 (\`UnityEditorHelper\`)，用于在 Inspector 中高效解析嵌套数组与泛型对象属性。
`,
            EN: `
> **Disclaimer:** Due to a hardware change, most of the source code for this project has been lost. The snippets shown here represent an early version of the codebase prior to the configuration of Qodana static analysis tools.

## Architectural Overview

Designed with strict separation between Gameplay Logic and Manifestation (Visuals) using an MVC/ECS-lite hybrid pattern. Modular dependency management is enforced via Unity Assembly Definitions (.asmdef) to ensure the core logic remains independent of the engine.

## Data Structures & Optimization (DOD)

*   **Hand Management (HandList):** Adopts Data-Oriented Design (DOD) principles. Uses Structure of Arrays (SoA) and virtual index mapping to achieve zero-allocation sorting and avoid expensive GC during high-frequency list manipulation.
*   **Dynamic State Serialization:** Implemented custom Bit-field Packing. Each tile state (type, owner, special flags) is compressed into a 32-bit composite, reducing bandwidth consumption by ~60% compared to typical object serialization.
*   **Protocol Efficiency:** Compresses 10+ complex match rules (timers, scoring modifiers, game modes) into a fixed 14-byte payload.

## Networking Stack

*   **Transport Layer:** Built on raw TCP Sockets with a custom Ring Buffer implementation to handle packet coalescing and fragmentation issues safely.
*   **Deterministic Synchronization:** Utilizes a shared RNG Seed + Salt architecture. Client-side simulations are strictly deterministic, ensuring state parity with the server and providing a strong defense against client-side cheats.
*   **Batching Logic:** Opimizes network IO by chunking initial hand dealing into a 4-4-4-1 sequence instead of 13 individual events.

## Artificial Intelligence (GOAP AI)

Features a hierarchical, multi-paradigm AI service:
*   **GOAP (Goal-Oriented Action Planning):** Implements a symbolic world state represented as key-value pairs. Uses Reverse Chaining algorithms to dynamically plan the optimal path toward a "Win Hand."
*   **Behavioral Models:** Hot-swappable decision engines including Behavior Trees for fixed sequences and Decision Trees for reactive logic.

## Engineering Quality

*   **Test-Driven Development (TDD):** Achieved 100% line coverage on critical logic modules (Serialization, Seed Generation, Format Utilities) using NUnit.
*   **Custom Tooling:** Developed reflection-based SerializedProperty parsers for Unity Custom Inspectors to handle complex nested data structures efficiently during development.
`,
            JA: `
> **免責事項：** 機器の買い替えに伴い、本プロジェクトのソースコードの大部分が紛失しました。ここに展示されているのは、Qodana（静的解析ツール）を導入する前の初期段階のコードのみとなります。

## アーキテクチャ概要

MVC/ECS-lite のハイブリッドパターンを採用し、ゲームプレイロジックと表現層（UnityEngine）を厳格に分離。Assembly Definitions (.asmdef) を通じたモジュール管理により、高パフォーマンスで決定論的、かつ不正防止に強い競技麻雀アーキテクチャを実現しました。

## データ構造と最適化 (DOD)

*   **手牌管理 (HandList):** データ指向設計 (DOD) を重視。Structure of Arrays (SoA) とビットフラグを用いることで、配列の再確保を避け、ゼロ・アロケーションでのソートと管理を実現。
*   **状態のシリアライズ:** カスタムビットフィールドパッキングを実装。牌の種類、所有者ID、特殊フラグを32ビットに圧縮し、一般的なシリアライズと比較して帯域幅消費を約60%削減。
*   **ルール設定の圧縮:** 10項目以上のゲームルールを14バイトのペイロードに凝縮する極限のビットパッキングを採用。

## ネットワーク・スタック

*   **トランスポート層:** raw TCP ソケットをベースに構築。パケットの結合（Packet Coalescing）や断片化を処理するカスタムリングバッファを実装。
*   **決定論的同期:** 共有 RNG シード + ソルト アーキテクチャを採用。クライアント側のシミュレーションを完全に決定論的にすることで、サーバーとの状態一致を保証し、チートを防止。
*   **通信の最適化:** 初期の配牌を4-4-4-1のシーケンスでバッチ処理し、ネットワークイベントの回数を大幅に削減。

## 人工知能 (GOAP AI)

階層的・多用途なAIサービスを搭載：
*   **GOAP (ゴール指向アクションプランニング):** IGoalOrientedActionPlanning インターフェースを実装。リバースチェイニングアルゴリズムを用いて、「上がり」という目標に向けた最適な行動パスを動的に生成。
*   **行動・決定ツリー:** 固定シーケンスや単純なリアクタンスには Behavior Tree および Decision Tree を使用。

## エンジニアリング品質

*   **テスト駆動開発 (TDD):** NUnit フレームワークを使用。シリアライズ、乱数生成、フォーマット変換などの重要モジュールにおいてラインカバレッジ100%を達成。
*   **カスタムツール:** Unity エディタ拡張を開発し、リフレクションを用いた SerializedProperty パーサーを実装。階層化された配列やジェネリックオブジェクトのインスペクタ表示を効率化。
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
            CN: "UE5极简本地化插件，一个节点搞定多语言切换。",
            EN: "Minimalist UE5 localization plugin—one node for language switching.",
            JA: "UE5向けの極めてシンプルな多言語化プラグイン。一つのノードで言語切り替えが可能。"
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
## 设计动机

**解决UE本地化的复杂度痛点:**
朋友抱怨他们的项目文本量不大，但UE原生本地化系统的学习成本和配置复杂度都太高了。他们只需要一些简单的翻译功能，却不得不面对整套复杂的本地化工作流。于是我设计了这个极简插件：**一个Data Table存翻译，一个蓝图节点切语言，与任何现有系统零冲突。**

## 核心功能

**极简设计理念:**
*   **一个Data Table：** 所有翻译文本集中管理，无需配置复杂的Localization Target
*   **一个蓝图节点：** 运行时语言切换，无需任何额外代码
*   **零冲突：** 与UE原生本地化系统完全独立，不影响项目现有架构

## 开发与上架

**工时分配:**
*   设计：约10小时
*   开发：约60小时（含文档查阅与Bug修复）
*   上架流程：约20小时
*   文档编写：约10小时

## 经验价值

**全流程打通:**
这个项目最大的价值在于跑通了"UE插件开发→商店上架"的完整流程，为之后开发个人提效小工具打下了基础。功能刻意保持精简——再多就会拉高学习难度，违背了"让本地化变简单"的初衷。
        `, EN: `
## Design Motivation

**Solving UE Localization Complexity:**
A friend complained that their project had minimal text content, but UE's native localization system had excessive learning curves and configuration complexity. They only needed simple translation features but had to face an entire complex localization workflow. So I designed this minimalist plugin: **One Data Table for translations, one Blueprint node for language switching, zero conflicts with existing systems.**

## Core Features

**Minimalist Design Philosophy:**
*   **One Data Table:** All translation text centrally managed, no need to configure complex Localization Targets
*   **One Blueprint Node:** Runtime language switching without any additional code
*   **Zero Conflicts:** Completely independent from UE's native localization system, doesn't affect existing project architecture

## Development & Publishing

**Time Allocation:**
*   Design:About 10 hours
*   Development: About 60 hours (including documentation research and bug fixes)
*   Publishing process: About 20 hours
*   Documentation: About 10 hours

## Experience Value

**End-to-End Pipeline:**
The greatest value of this project was completing the full "UE plugin development → store publishing" pipeline, laying groundwork for future personal productivity tools. Features were intentionally kept minimal—adding more would increase learning difficulty, contradicting the goal of "making localization simple."
        `,
            JA: `
## 設計の動機

**Unreal Engineにおけるローカライゼーションの複雑さを解消:**
友人が「プロジェクトのテキスト量はそれほど多くないのに、UE標準のローカライゼーションシステムの学習コストと設定の複雑さが高すぎる」と漏らしていました。彼らが必要としていたのはシンプルな翻訳機能だけでしたが、複雑なワークフロー全体に向き合わざるを得ませんでした。そこで私は、極めてシンプルなプラグインを設計しました：**「一つのData Tableで翻訳を管理し、一つのBlueprintノードで言語を切り替える。既存のシステムとは一切競合しない」**。

## 主な機能

**ミニマリスティックな設計理念:**
*   **一つのData Table:** すべての翻訳テキストを一括管理。複雑なLocalization Targetの設定は不要です。
*   **一つのBlueprintノード:** 実行時に追加コードなしで言語を切り替えられます。
*   **競合なし:** UE標準のシステムとは完全に独立しており、プロジェクトの既存のアーキテクチャに影響を与えません。

## 開発とリリース

**工数配分:**
*   設計：約10時間
*   開発：約60時間（ドキュメント調査とバグ修正を含む）
*   リリースプロセス：約20時間
*   ドキュメント作成：約10時間

## 経験的な価値

**全プロセスの完遂:**
このプロジェクトの最大の価値は、「UEプラグインの開発からストアへの出品まで」の全プロセスを経験したことにあります。これにより、将来的な個人用ツール開発の基礎が築かれました。機能はあえて最小限に絞っています。これ以上増やせば学習のハードルが上がり、「ローカライゼーションをシンプルにする」という当初の目的から逸脱してしまうからです。
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
            CN: "你正在浏览的这个网站，AI辅助开发的现代化作品集。",
            EN: "The website you are viewing now—an AI-assisted modern portfolio.",
            JA: "現在閲覧しているこのサイト。AI支援によって開発されたモダンなポートフォリオ。"
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

你正在浏览的就是这个项目本身——一个使用 React + TypeScript + Vite 构建的现代化个人作品集网站。

## 技术栈

*   **前端框架：** React 18 + TypeScript
*   **构建工具：** Vite
*   **样式方案：** 纯 CSS（无框架依赖）
*   **部署：** GitHub Pages

## AI 辅助开发

本项目全程使用 AI 辅助开发（Claude + Gemini），从架构设计到代码实现均通过人机协作完成。这是 AI Native 工作方式的实践案例：
*   **效率提升：** 约 40 小时完成从零到部署的全流程
*   **质量保障：** AI 辅助代码审查与优化
*   **设计迭代：** 快速实现设计想法并即时调整

## 功能特点

*   **中英双语：** 全站支持中英文切换
*   **响应式设计：** 适配桌面端与移动端
*   **项目展示：** 结构化展示游戏设计与开发作品
*   **简历集成：** 在线简历与可下载 PDF
`,
            EN: `
## Project Overview

You are viewing this project itself—a modern personal portfolio website built with React + TypeScript + Vite.

## Tech Stack

*   **Frontend Framework:** React 18 + TypeScript
*   **Build Tool:** Vite
*   **Styling:** Pure CSS (no framework dependencies)
*   **Deployment:** GitHub Pages

## AI-Assisted Development

This project was developed entirely with AI assistance (Claude + Gemini), from architecture design to code implementation through human-AI collaboration. This is a practical case of AI Native workflow:
*   **Efficiency Boost:** Completed zero-to-deployment in ~40 hours
*   **Quality Assurance:** AI-assisted code review and optimization
*   **Design Iteration:** Rapid implementation of design ideas with instant adjustments

## Features

*   **Bilingual:** Full Chinese-English language switching
*   **Responsive Design:** Adapts to desktop and mobile
*   **Project Showcase:** Structured display of game design and development work
*   **Resume Integration:** Online resume with downloadable PDF
`,
            JA: `
## プロジェクト概要

現在あなたが閲覧しているこのサイトそのものです。React + TypeScript + Vite を使用して構築された、モダンな個人ポートフォリオサイトです。

## 技術スタック

*   **フロントエンドフレームワーク:** React 18 + TypeScript
*   **ビルドツール:** Vite
*   **スタイリング:** 純粋な CSS (フレームワーク非依存)
*   **デプロイ:** GitHub Pages

## AI支援による開発

このプロジェクトは、設計から実装まで、全工程でAI（Claude + Gemini）による支援を受けて開発されました。これは「AI Native」な働き方の実践例です：
*   **効率の向上:** ゼロからデプロイまで約40時間で完遂。
*   **品質の確保:** AIによるコードレビューと最適化。
*   **デザインの試行錯誤:** 設計上のアイデアを迅速に具現化し、即座に調整。

## 機能・特徴

*   **多言語対応:** サイト全体で中国語・英語・日本語の切り替えに対応。
*   **レスポンシブデザイン:** PCとモバイルの両方に最適化。
*   **プロジェクト展示:** ゲームデザインと開発の実績を構造的に表示。
*   **レジュメ統合:** オンラインレジュメとダウンロード可能なPDF。
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
            CN: "为建筑师设计的坐标系批量转换工具。",
            EN: "Batch coordinate system converter for architects.",
            JA: "建築設計者のために設計された座標系バッチ変換ツール。"
        },
        workHours: 0.5,
        platforms: { CN: "Windows 桌面端", EN: "Windows Desktop", JA: "Windows デスクトップ" },
        durations: { CN: "30 分钟", EN: "30 minutes", JA: "30分" },
        teamSizes: { CN: "个人", EN: "Solo", JA: "個人" },
        startDate: '2025.01',
        endDate: '2025.01',
        descriptions: {
            CN: `
## 开发动机

女朋友在工作中需要批量转换CGCS2000与WGS84坐标数据，手动操作效率极低。于是我花了20小时快速开发了这个一键批量转换工具。

## 用户验证

项目开源后收到了GitHub issue，证明确实有建筑师同行存在相同需求——解决实际问题比任何产品验证都有说服力。
`,
            EN: `
## Development Motivation

My girlfriend needed to batch convert CGCS2000 and WGS84 coordinate data at work, but manual operations were extremely inefficient. So I spent 20 hours quickly developing this one-click batch conversion tool.

## User Validation

After open-sourcing the project, I received a GitHub issue proving that architects in the field have the same need—solving real problems is more convincing than any product validation.
`,
            JA: `
## 開発の動機

パートナーが仕事でCGCS2000とWGS84の座標データを一括変換する必要がありましたが、手作業では極めて非効率でした。そこで、私はパートナーのために、ワンクリックで一括変換できるツールを30分（※原文は20時間と30分が混在していますが、技術的には迅速に開発）で作り上げました。

## ユーザーによる検証

プロジェクトをオープンソース化した後、GitHubでIssueを受け取りました。これにより、建築業界の同様の悩みを持つ人々に実際に価値を提供できていることが証明されました。実際の問題を解決することは、どんな理論的な検証よりも説得力があります。
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
            CN: "政务内网不动产登记信息管理系统。",
            EN: "Government intranet real estate registration management system.",
            JA: "政府内線ネットワーク向け不動産登記情報管理システム。"
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

政务内网系统，具体业务细节涉密。

## 工作内容

*   **前端开发：** 独立负责全部前端开发工作
*   **后端辅助：** 参与部分后端功能开发
*   **交付维护：** 系统上线后协助修复若干Bug
`,
            EN: `
## Project Nature

Government intranet system; specific business details are confidential.

## Work Content

*   **Frontend Development:** Independently responsible for all frontend development
*   **Backend Assistance:** Participated in partial backend feature development
*   **Post-Delivery Maintenance:** Assisted in fixing several bugs after system launch
`,
            JA: `
## プロジェクトの性質

政府の内線イントラネットシステムであり、具体的な業務内容は機密事項に属します。

## 業務内容

*   **フロントエンド開発:** 全フロントエンドの開発を独力で担当。
*   **バックエンド支援:** バックエンド機能の一部開発に参加。
*   **納品後の保守:** システム稼働後、いくつかのバグ修正を支援。
`
        },
        images: [],
        links: []
    }
];

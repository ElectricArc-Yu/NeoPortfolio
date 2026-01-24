import type { Project } from './types';

export const projects: Project[] = [
    // --- Commercial Projects ---
    {
        id: 'nuclear-survival',
        title: 'Nuclear Survival',
        type: 'Commercial',
        showPriority: 100,
        engine: 'Python',
        gameType: ['Survival', 'Simulation'],
        role: ['Lead Designer'],
        techStack: ['Full Stack Design'],
        thumbnail: '/assets/images/FOCover.png',
        shortDescriptionCN: '后启示录题材的家园建设与探索模组,通过自动化系统优化玩家体验。',
        shortDescriptionEN: 'Post-apocalyptic base-building and exploration mod with progressive automation systems.',
        sales: '100K+ Units',
        platformCN: '我的世界 (中国版)',
        platformEN: 'Minecraft (NetEase)',
        durationCN: '约4个月',
        durationEN: 'About 4 months',
        teamSizeCN: '9人',
        teamSizeEN: '9 People',
        priceCN: '¥10',
        priceEN: '$1.99',
        descriptionCN: `

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
    `,
        descriptionEN: `
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
    `,
        images: ['/assets/images/FOCover.png', '/assets/images/Fallout_01.png', '/assets/images/Fallout_02.png'],
        video: '/assets/images/FallOut.mp4',
        links: [
            { labelCN: '发布页面', labelEN: 'Release Page', urlCN: 'https://resource-minecraft.h5.163.com/#/detail?id=4664344300463689714', type: 'demo' }
        ]
    },
    {
        id: 'horror-isle',
        title: 'Horror Isle',
        type: 'Commercial',
        showPriority: 90,
        engine: 'Python',
        gameType: ['Horror', 'Survival'],
        role: ['Lead Designer'],
        techStack: ['Full Stack Design'],
        thumbnail: '/assets/images/KBDCover.png',
        shortDescriptionCN: '恐怖主题的半线性RPG模组,通过战斗系统聚焦短期刺激体验。',
        shortDescriptionEN: 'Horror-themed semi-linear RPG mod focused on combat-driven short-session gameplay.',
        sales: '100K+ Units',
        platformCN: '我的世界 (中国版)',
        platformEN: 'Minecraft (NetEase)',
        durationCN: '约2个月',
        durationEN: 'About 2 months',
        teamSizeCN: '7人',
        teamSizeEN: '7 People',
        priceCN: '¥10',
        priceEN: '$1.99',
        descriptionCN: `
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
        descriptionEN: `
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
        images: ['/assets/images/KBDCover.png', '/assets/images/HorrorIsland_01.png', '/assets/images/HorrorIsland_02.png', '/assets/images/HorrorIsland_03.png'],
        links: [
            { labelCN: '发布页面', labelEN: 'Release Page', urlCN: 'https://resource-minecraft.h5.163.com/#/detail?id=4665488888721273907', type: 'demo' }
        ]
    },
    {
        id: 'project-fr',
        title: 'Project FR',
        type: 'Commercial',
        showPriority: 95,
        engine: 'Unreal',
        gameType: ['Action RPG'],
        role: ['Creative Director'],
        techStack: ['UE5 Blueprint', 'Full Stack Design', 'Pre-production Management'],
        thumbnail: '/assets/images/FR_SystemDiagram.png',
        shortDescriptionCN: '基于原创IP的中低体量单机ARPG预研,聚焦乐器战斗与主副机协同体验。',
        shortDescriptionEN: 'Mid-scale single-player ARPG pre-production with original IP, focused on instrument-based combat and dual-character cooperation.',
        sales: 'Pre-production',
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '约1年半',
        durationEN: 'About 1.5 years',
        teamSizeCN: '3人 + 其他可用人员',
        teamSizeEN: '3 People + Other people',
        descriptionCN: `
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
        descriptionEN: `
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
        images: ['/assets/images/FR_SystemDiagram.png'],
        video: undefined,
        links: [
            { labelCN: '系统架构简图', labelEN: 'System Architecture Diagram', urlCN: '/assets/images/FR_SystemDiagram.png', type: 'doc' }
        ]
    },
    {
        id: 'project-dt',
        title: 'Project DT',
        type: 'Commercial',
        showPriority: 85,
        engine: 'Other',
        gameType: ['Visual Novel'],
        role: ['Creative Director', 'Lead Writer'],
        techStack: ['Full Stack Design'],
        thumbnail: '',
        shortDescriptionCN: '基于原创IP的成长主题公路剧视觉小说,为ARPG项目铺设获客基础。',
        shortDescriptionEN: 'Growth-themed road trip visual novel based on original IP, establishing user acquisition foundation for ARPG project.',
        sales: 'Pre-production',
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '约2个月',
        durationEN: 'About 2 months',
        teamSizeCN: '10+人 (3全职)',
        teamSizeEN: '10+ People (3 full-time)',
        descriptionCN: `
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
        descriptionEN: `
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
        images: [],
        video: undefined,
        links: []
    },
    {
        id: 'lightning-hero',
        title: 'Lightning Hero',
        type: 'Commercial',
        showPriority: 75,
        engine: 'Python',
        gameType: 'RPG',
        role: ['Lead Designer'],
        techStack: ['Full Stack Design'],
        thumbnail: '/assets/images/LHCover.png',
        shortDescriptionCN: '极轻量变身体验模组,专为大型模组玩家提供无冲突战斗力补充。',
        shortDescriptionEN: 'Ultra-lightweight transformation mod designed as conflict-free combat supplement for large-scale mod players.',
        sales: '1M+ Units',
        platformCN: '我的世界 (中国版)',
        platformEN: 'Minecraft (NetEase)',
        durationCN: '5天',
        durationEN: '5 days',
        teamSizeCN: '3人',
        teamSizeEN: '3 People',
        priceCN: '¥6',
        priceEN: '$0.99',
        descriptionCN: `
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
    `,
        descriptionEN: `
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
*   Based on studio's long-accumulated transformation technology (Marvel IP **copying** experience)
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
        images: ['/assets/images/LHCover.png'],
        video: '/assets/images/Lightning Hero.mp4',
        links: [
            { labelCN: '发布页面', labelEN: 'Release Page', urlCN: 'https://resource-minecraft.h5.163.com/#/detail?id=4664383590833725456', type: 'demo' }
        ]
    },
    {
        id: 'overwatch-mc',
        title: 'Overwatch in Minecraft',
        type: 'Commercial',
        showPriority: 70,
        engine: 'Python',
        gameType: 'Action',
        role: ['Lead Designer'],
        techStack: ['Minecraft Mod', 'Python+JSON'],
        thumbnail: '/assets/images/OWMCCover.png',
        shortDescriptionCN: '在Minecraft中复刻守望先锋角色与6v6战斗。',
        shortDescriptionEN: 'Recreating Overwatch characters and 6v6 battles in Minecraft.',
        sales: '10K+ Units (Series Total)',
        platformCN: '我的世界 (中国版)',
        platformEN: 'Minecraft (China)',
        durationCN: '2023.04 - 2023.06',
        durationEN: 'Apr 2023 - Jun 2023',
        teamSizeCN: '5-8人',
        teamSizeEN: '5-8 People',
        descriptionCN: `
# 先锋对决 (Overwatch in Minecraft)
**角色:** Lead Designer  
**公司:** Hunan Nuoxiyou Technology Co. Ltd.

包含一系列DLC模组。允许玩家使用守望先锋中的角色在固定地图上进行6v6战斗。
        `,
        descriptionEN: `
# Overwatch in Minecraft
**Role:** Lead Designer  
**Company:** Hunan Nuoxiyou Technology Co. Ltd.

This project covers a series of DLC mods. It allows players to use characters from Overwatch to engage in 6v6 battles on fixed maps.
        `,
        images: ['/assets/images/OWMCCover.png', '/assets/images/Overwatch.png'],
        links: [
            { labelCN: '发布页面', labelEN: 'Release Page', urlCN: 'https://resource-minecraft.h5.163.com/#/detail?id=4662108906629006831', type: 'demo' }
        ]
    },

    // --- Personal Projects ---
    {
        id: 'illegal-assembly',
        title: 'Illegal Assembly',
        type: 'Personal',
        showPriority: 95,
        engine: 'Unreal',
        gameType: 'Simulation',
        role: ['Lead Designer', 'Lead Programmer'],
        techStack: ['Unreal Engine 5', 'C++', 'Blueprint'],
        thumbnail: '/assets/images/IllagelAssemblyLogo.PNG',
        shortDescriptionCN: '一款俯视角的3D工厂建设自动化游戏。',
        shortDescriptionEN: 'A top-down 3D factory-building automation game.',
        workHours: 120,
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '2024.03 - 2024.05',
        durationEN: 'Mar 2024 - May 2024',
        teamSizeCN: '个人 / 小组',
        teamSizeEN: 'Solo / Small Group',
        descriptionCN: `
# 非法组装 (Illegal Assembly)
**引擎:** Unreal Engine 5

该项目为一款使用Unreal Engine 5制作的俯视角3D工厂建设游戏，游戏中玩家需要实现各种产品的自动化处理，建造大型工厂并持续优化生产线，完成配方难度不断增高的自动化生产。

**主要工作内容：**
*   游戏整体设计与实现的把控，包括游戏核心玩法、系统、战斗、UX设计等，并进行公开演讲。
*   分解项目工作内容，与PM合作确保进度，控制项目规模并及时汇报工作进度。
*   负责游戏主体框架、玩法功能、UI API的设计与实现。
*   制定适合项目的美术资产合并流程。
        `,
        descriptionEN: `
# Illegal Assembly
**Engine:** Unreal Engine 5

A top-down 3D factory-building game developed in Unreal Engine 5. Players automate production lines, construct massive factories, and optimize workflows to complete increasingly complex recipes.

**Key Contributions:**
*   Overall design and implementation (Core mechanics, Systems, Combat, UX) and public presentation.
*   Project task breakdown, scope control, and milestone tracking with PM.
*   Designed and implemented main game framework, gameplay features, and UI APIs.
*   Established efficient asset integration pipeline.
        `,
        images: ['/assets/images/IllagelAssemblyLogo.PNG', '/assets/images/IA_06.png', '/assets/images/IA_01.png', '/assets/images/IA_02.png', '/assets/images/IA_03.png', '/assets/images/IA_04.png', '/assets/images/IA_05.png', '/assets/images/IA_07.png', '/assets/images/IA_08.png'],
        video: '/assets/images/Illegal Assembly.mp4',
        links: [
            { labelCN: '下载试玩', labelEN: 'Download Demo', urlCN: 'https://github.com/ElectricArc-Yu/GD10Final/releases', type: 'demo' }
        ],
        workDistribution: [
            { label: 'Design', percentage: 40 },
            { label: 'Programming', percentage: 60 }
        ]
    },
    {
        id: 'the-mountain-sea',
        title: 'The Mountain Sea',
        type: 'Personal',
        showPriority: 85,
        engine: 'Unity',
        gameType: 'Platformer',
        role: ['Designer', 'Lead Programmer'],
        techStack: ['Unity', 'C#'],
        thumbnail: '/assets/images/MountainSea.png',
        shortDescriptionCN: '2D动作平台游戏，核心为近战与远程的双形态切换。',
        shortDescriptionEN: '2D action platformer focused on switching between melee and ranged forms.',
        workHours: 80,
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '2023.10 - 2023.12',
        durationEN: 'Oct 2023 - Dec 2023',
        teamSizeCN: '小组',
        teamSizeEN: 'Small Group',
        descriptionCN: `
# 山海 (The Mountain Sea)
**引擎:** Unity

一款2D动作平台跳跃游戏，核心玩法为形态切换、攻击、跳跃和闪避。玩家需要合理切换近战（引爆）和远程（叠层）两种形态，击杀拦路小怪及最终Boss。

**主要工作内容：**
*   游戏整体设计与实现的把控，包括核心玩法、系统、战斗，制作GDD，并进行公开演讲。
*   逆向学习其他项目的制作方式，并指导同组内其他程序实现功能。
*   制定美术资产合并流程，并协调指导美术正确使用Unity和Git。
*   在项目出现重大问题时，整合资源确保项目按时完成。
        `,
        descriptionEN: `
# The Mountain Sea
**Engine:** Unity

A 2D action platformer. Players switch between melee and ranged modes to deal damage and defeat enemies (Stacking layers vs Detonating).

**Key Contributions:**
*   Overall design and implementation (Gameplay, System, Combat), GDD creation, and presentation.
*   Reverse-engineered mechanics from other projects and mentored team programmers.
*   Managed asset pipeline and coordinated with artists on Unity/Git workflow.
*   Crisis management to ensure on-time delivery despite technical hurdles.
        `,
        images: ['/assets/images/MountainSea.png', '/assets/images/Shanhai_01.png', '/assets/images/Shanhai_02.png'],
        gddPdfUrl: '/assets/docs/TheMountainSeaGDD.pdf',
        links: [
            { labelCN: '下载试玩', labelEN: 'Download Demo', urlCN: 'https://shvfs-game-design.itch.io/the-mountain-sea', type: 'demo' },
            { labelCN: '查看GDD', labelEN: 'View GDD', urlCN: '/assets/docs/TheMountainSeaGDD.pdf', type: 'doc' }
        ],
        workDistribution: [
            { label: 'Design', percentage: 50 },
            { label: 'Programming', percentage: 50 }
        ]
    },
    {
        id: 'all-story',
        title: 'All Story',
        type: 'Personal',
        showPriority: 97,
        engine: 'Other',
        gameType: 'RPG',
        role: ['Design Consultant'],
        techStack: ['AI', 'TRPG'],
        thumbnail: '/assets/images/event_dispatch_code_dark.png', // Temporary
        shortDescriptionCN: '一款AI驱动的电子TRPG游戏。',
        shortDescriptionEN: 'An AI-powered electronic TRPG game.',
        workHours: 40,
        platformCN: '网页 / App',
        platformEN: 'Web / App',
        durationCN: '2024.06 - 至今',
        durationEN: 'Jun 2024 - Present',
        teamSizeCN: '小组',
        teamSizeEN: 'Small Group',
        descriptionCN: `
# All Story
**角色:** Design Consultant

作为设计顾问加入并推动项目。这是一款由AI驱动的电子TRPG游戏。
        `,
        descriptionEN: `
# All Story
**Role:** Design Consultant

Joining and pushing the project as a Design Consultant. This project is an AI-powered electronic TRPG game.
        `,
        images: [],
        links: []
    },
    {
        id: 'vr-goldfish',
        title: 'VR Goldfish Catching',
        type: 'Personal',
        showPriority: 60,
        engine: 'Unity',
        gameType: 'Simulation',
        role: ['Designer', 'Lead Programmer'],
        techStack: ['Unity', 'Oculus VR', 'C#'],
        thumbnail: '/assets/images/VRCatchThemAll.jpg',
        shortDescriptionCN: '第一人称VR捞金鱼游戏。',
        shortDescriptionEN: 'First-person VR goldfish scooping game.',
        workHours: 40,
        platformCN: 'Oculus Quest 2',
        platformEN: 'Oculus Quest 2',
        durationCN: '2024.01',
        durationEN: 'Jan 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: `
# VR捞金鱼
**引擎:** Unity (Oculus)

使用Unity + Oculus VR制作的第一人称捞金鱼游戏，核心挑战为保持手部平稳的同时快速的以匹配金鱼的速度将其捞起。

**主要工作内容：**
*   完成项目整体框架及玩法功能的实现，与策划协调后在极有限时间内保留核心玩法。
*   使用水位线对象池技术保证VR流畅性。
*   为策划提供扩展接口，使其可以高度自定义游戏。
*   快速学习VR制作方式，实现所需功能。
        `,
        descriptionEN: `
# VR Goldfish Catching
**Engine:** Unity (Oculus)

A first-person goldfish scooping game developed in Unity with Oculus VR integration.

**Key Contributions:**
*   Implemented project framework and gameplay features under tight deadlines.
*   Used Object Pooling for water level performance.
*   Created extension interfaces for high customizability.
*   Rapidly adapted to VR development workflows.
        `,
        images: ['/assets/images/VRCatchThemAll.jpg'],
        links: [
            { labelCN: '仓库地址', labelEN: 'Repo', urlCN: 'https://github.com/ElectricArc-Yu/Portfolio/tree/main/Writerside/downloadable/LFS_Download/GoldFishScrooping', type: 'repo' }
        ]
    },
    {
        id: 'chanshiyeshiguan',
        title: 'Chan Shi Ye Shi Guan',
        type: 'Personal',
        showPriority: 50,
        engine: 'Unity',
        gameType: 'RPG',
        role: ['Programmer'],
        techStack: ['Unity', 'C#'],
        thumbnail: '/assets/images/ChanShiGuanYeShiGuan.png',
        shortDescriptionCN: '类似以撒的2D Roguelike RPG。',
        shortDescriptionEN: '2D Roguelike RPG similar to The Binding of Isaac.',
        workHours: 60,
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '2023.09',
        durationEN: 'Sep 2023',
        teamSizeCN: '小组',
        teamSizeEN: 'Small Group',
        descriptionCN: `
# 铲屎官也是官
**引擎:** Unity

一款俯视角2D RPG游戏，玩家将在固定大世界中冒险、养成、探索世界的真相。我在项目中负责部分Ingredients制作与框架代码修改。
        `,
        descriptionEN: `
# Chan Shi Ye Shi Guan
**Engine:** Unity

An isometric 2D RPG/Roguelike game. I was responsible for implementing ingredients and adapting framework code.
        `,
        images: ['/assets/images/ChanShiGuanYeShiGuan.png', '/assets/images/CSYSG_01.png', '/assets/images/CSYSG_02.png'],
        links: [
            { labelCN: '游戏页面', labelEN: 'Game Page', urlCN: 'https://www.gcores.com/games/126694', type: 'demo' }
        ]
    },
    {
        id: 'slime',
        title: 'Slime',
        type: 'Personal',
        showPriority: 40,
        engine: 'Unity',
        gameType: 'Platformer',
        role: ['Gameplay Designer'],
        techStack: ['Unity', 'C#'],
        thumbnail: '/assets/images/SLIME.png',
        shortDescriptionCN: '3D/2D平台跳跃动作游戏，利用粘液机制解谜。',
        shortDescriptionEN: '3D/2D platformer action game using slime mechanics.',
        workHours: 48,
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '2023.11',
        durationEN: 'Nov 2023',
        teamSizeCN: '小组 (Game Jam)',
        teamSizeEN: 'Small Group (Game Jam)',
        descriptionCN: `
# 怪盗史莱姆 (Slime)
**引擎:** Unity

3D+2D platformer jumping action game. Players utilize limited mucus resources to cross obstacles through jumps and sprints.
        `,
        descriptionEN: `
# Slime
**Engine:** Unity

A 3D+2D platformer developed for a Game Jam. Players utilize limited mucus resources to cross layers of obstacles through jumps and sprints.
        `,
        images: ['/assets/images/SLIME.png'],
        links: [
            { labelCN: '预告片', labelEN: 'Trailer', urlCN: 'https://www.bilibili.com/video/BV14g4y1F7Lz', type: 'video' }
        ]
    },
    {
        id: 'detection',
        title: 'Detection!',
        type: 'Personal',
        showPriority: 25,
        engine: 'Other',
        gameType: 'Strategy',
        role: ['Solo Creator'],
        techStack: ['Board Game'],
        thumbnail: '',
        shortDescriptionCN: '专注于观察与推理的桌游（看破）。',
        shortDescriptionEN: 'Board game focused on observation and inference.',
        workHours: 40,
        platformCN: '实体桌游',
        platformEN: 'Physical Board Game',
        durationCN: '2024.04',
        durationEN: 'Apr 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: '独力设计的桌游《看破》（Detection!），专注于心理博弈、细节观察与逻辑推理。现正处于打磨阶段。',
        descriptionEN: 'A solo-created board game focused on psychological play, observation, and inference. Currently in the polishing phase.',
        images: [],
        links: []
    },
    {
        id: 'easy-l10n',
        title: 'Easy Localization Tool',
        type: 'Personal',
        showPriority: 45,
        engine: 'Unreal',
        gameType: 'Tool',
        role: ['Solo Creator'],
        techStack: ['Unreal Engine', 'Plugin'],
        thumbnail: '',
        shortDescriptionCN: 'UE5国际化与本地化配置插件。',
        shortDescriptionEN: 'Unreal Engine localization configuration plugin.',
        workHours: 100,
        platformCN: '虚幻引擎插件',
        platformEN: 'Unreal Engine Plugin',
        durationCN: '2024.04',
        durationEN: 'Apr 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: `
# Easy Localization & Internationalization Tool
**引擎:** Unreal Engine

本插件旨在将开发者从虚幻引擎复杂的本地化配置过程中释放出来。通过用户友好且功能完备的蓝图节点，快速搭建本地化结构，为项目提供完整的国际化解决方案。
        `,
        descriptionEN: `
# Easy Localization Tool
**Engine:** Unreal Engine

This plugin spares developers from complex UE localization configuration. Provides user-friendly blueprint nodes to set up localization structures quickly for any project.
        `,
        images: [],
        links: [
            { labelCN: 'Fab商店', labelEN: 'Fab Store', urlCN: 'https://www.fab.com/listings/4415394c-b086-4c56-bc63-e3325f70e592', type: 'demo' }
        ]
    },
    {
        id: 'cgcs-batch',
        title: 'CGCS/WGS Batch Converter',
        type: 'Personal',
        showPriority: 10,
        engine: 'Other',
        gameType: 'Tool',
        role: ['Solo Creator'],
        techStack: ['Tool'],
        thumbnail: '',
        shortDescriptionCN: '坐标系批量转换工具。',
        shortDescriptionEN: 'Coordinate system batch converter.',
        workHours: 20,
        platformCN: 'Windows 桌面端',
        platformEN: 'Windows Desktop',
        durationCN: '2024.02',
        durationEN: 'Feb 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: '为地理工作者/建筑师设计的工具，一键批量转换CGCS2000与WGS84数据。',
        descriptionEN: 'A specialized tool for Geographers and Architects to batch convert between CGCS2000 and WGS84 coordinates in one click.',
        images: [],
        links: [
            { labelCN: 'GitHub发布页', labelEN: 'GitHub Release', urlCN: 'https://github.com/ElectricArc-Yu/CGCS-Simple-Batch-Converter/releases/tag/v1.3', type: 'repo' }
        ]
    },
    {
        id: 'quest-of-velar',
        title: 'Quest Of Velar Level',
        type: 'Personal',
        showPriority: 30,
        engine: 'Unity',
        gameType: 'RPG',
        role: ['Level Designer', 'Programmer'],
        techStack: ['Unity'],
        thumbnail: '/assets/images/TurnalLevel.png',
        shortDescriptionCN: '60工时内完成的夜晚主题关卡设计及技术修复。',
        shortDescriptionEN: 'Night-themed level design and technical fixes completed in 60 hours.',
        workHours: 60,
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '2024.02',
        durationEN: 'Feb 2024',
        teamSizeCN: '个人 (练习项目)',
        teamSizeEN: 'Solo (Exercise)',
        descriptionCN: `
# Quest Of Velar Level Design
根据现有资产为Quest of Velar制作的夜晚主题关卡。

**主要工作内容：**
*   在60工时内完成LDD、白模、Placeholder、玩法机制和打磨优化。
*   全流程Playtest。
*   **技术修复：** 修复了无法打包、钥匙运行、金币收集读取、门开启等重大GSR错误。
        `,
        descriptionEN: `
# Quest Of Velar Level Design
Night background levels created based on existing assets.

**Key Contributions:**
*   Completed LDD, whitebox, gameplay, and polish in 60 hours.
*   Conducted full-process playtests.
*   **Technical Fixes:** Resolved critical issues including build failures, key mechanics, coin collection saving, and door interaction errors.
        `,
        images: ['/assets/images/TurnalLevel.png', '/assets/images/IntroLevel.png'],
        links: []
    },
    {
        id: 'event-dispatch',
        title: 'Event Dispatch Class',
        type: 'Personal',
        showPriority: 15,
        engine: 'Other',
        gameType: 'Tool',
        role: ['Programmer'],
        techStack: ['C#', 'Framework Design'],
        thumbnail: '/assets/images/event_dispatch_code.png',
        shortDescriptionCN: '高性能、解耦的事件分发中心类。',
        shortDescriptionEN: 'High-performance, decoupled Event Dispatch Class.',
        workHours: 10,
        platformCN: '代码库',
        platformEN: 'Code Library',
        durationCN: '2024.04',
        durationEN: 'Apr 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: `
# 事件分发中心 (Event Dispatch Class)
支持单例模式的通用事件分发系统，旨在通过解耦模块通信提高代码的可扩展性和性能。支持多参数传递及带返回值的委托调用。
        `,
        descriptionEN: `
# Event Dispatch Class
A universal event management system designed to decouple module communication, enhancing scalability and performance. Supports multiple parameters and return values.
        `,
        images: ['/assets/images/event_dispatch_code.png', '/assets/images/event_dispatch_code_dark.png'],
        links: []
    },
    {
        id: 'jiajiang-platform',
        title: 'Jiajiang Real Estate Platform',
        type: 'Personal',
        showPriority: 5,
        engine: 'Other',
        gameType: 'Tool',
        role: ['Full Stack Developer'],
        techStack: ['Web', 'SQL'],
        thumbnail: '',
        shortDescriptionCN: '夹江县不动产登记信息管理平台。',
        shortDescriptionEN: 'Jiajiang Real Estate Registration Information Management Platform.',
        workHours: 200,
        platformCN: 'Web (政务内网)',
        platformEN: 'Web (Intranet)',
        durationCN: '2022.06 - 2022.09',
        durationEN: 'Jun 2022 - Sep 2022',
        teamSizeCN: '小组',
        teamSizeEN: 'Small Group',
        descriptionCN: `
# 夹江县不动产登记信息管理平台
**角色:** Full Stack Developer

为夹江县不动产登记局开发并维护的基于Web的不动产登记信息管理系统，跟踪系统的使用和运行情况。
        `,
        descriptionEN: `
# Jiajiang Real Estate Registration Information Management Platform
**Role:** Full Stack Developer

Developed and maintained a web-based real estate registration information management system for the Jiajiang Real Estate Registration Bureau.
        `,
        images: [],
        links: []
    },

    // --- Miscellaneous Projects ---
    {
        id: 'ff14-frontline',
        title: 'FF14 Frontline New Rule',
        type: 'Miscellaneous',
        showPriority: 75,
        engine: 'Other',
        gameType: 'Strategy',
        role: ['Game Designer'],
        techStack: ['GDD', 'Combat Design'],
        thumbnail: '/assets/images/FF14PvPSDD.png',
        shortDescriptionCN: '最终幻想14战场新规则提案。',
        shortDescriptionEN: 'Proposed new rules for Final Fantasy XIV Frontline.',
        platformCN: '策划文档',
        platformEN: 'Design Document',
        durationCN: '2024.01',
        durationEN: 'Jan 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: '基于FF14现有架构设计的战场新规则，重点优化战斗节奏与团队协作。通过新的得分点和战斗机制改善当前PVP体验。',
        descriptionEN: 'Proposed new mechanics for FFXIV Frontline PVP focusing on pacing and team cooperation. Redesigning scoring points and combat flow.',
        images: ['/assets/images/FF14PvPSDD.png'],
        gddPdfUrl: '/assets/docs/FF14FrontlineDesign.pdf',
        links: [
            { labelCN: '查看GDD', labelEN: 'View GDD', urlCN: '/assets/docs/FF14FrontlineDesign.pdf', type: 'doc' }
        ]
    },
    {
        id: 'ff14-mail-system',
        title: 'FF14 Mail System Analysis',
        type: 'Miscellaneous',
        showPriority: 73,
        engine: 'Other',
        gameType: 'Analysis',
        role: ['Game Designer'],
        techStack: ['Systems Analysis', 'UX Design'],
        thumbnail: '/assets/images/MailSystem.png',
        shortDescriptionCN: '最终幻想14邮件系统拆解案。',
        shortDescriptionEN: 'Deconstruction and analysis of the FFXIV Mail System.',
        platformCN: '分析文档',
        platformEN: 'Analysis Document',
        durationCN: '2024.02',
        durationEN: 'Feb 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: `
# 最终幻想14邮件系统拆解案
**角色:** Game Designer  

深入拆解《最终幻想14》的邮件系统，以尽可能还原游戏内的设计方式。

**关键分析点：**
*   **系统目的：** 提供平衡的非即时性玩家沟通、道具转移、付费道具/活动奖励送达渠道。
*   **规则约束：** 仅限同服好友通信，跨服/跨数据中心状态下的功能限制逻辑。
*   **容量设计：** 好友邮件(100封/20个附件)、购物奖励(20封/100个附件)、GM邮件(10封/50个附件)的独立上限平衡。
*   **流程拆解：** 包含邮件解锁逻辑、入口设计（邮差莫古力及交互对象）以及多类邮件的处理逻辑。
        `,
        descriptionEN: `
# FFXIV Mail System Analysis
**Role:** Game Designer

A comprehensive deconstruction of the mail system in Final Fantasy XIV, aiming to restore the internal design patterns.

**Key Analysis Points:**
*   **System Objectives:** Providing balanced asynchronous communication, item transfer, and premium/event reward delivery.
*   **Constraint Logic:** Server-side restrictions on cross-world/cross-datacenter states and friend-only communication rules.
*   **Capacity Design:** Analysis of independent limits for Friend Mail (100 msgs/20 items), Reward Mail (20 msgs/100 items), and GM Mail (10 msgs/50 items).
*   **UX & Flow:** Deconstructing system unlock progression, NPC interaction design, and multi-source mail handling.
        `,
        images: [],
        links: [
            { labelCN: '飞书文档', labelEN: 'Feishu Doc', urlCN: 'https://github.com/ElectricArc-Yu/GD10Final/releases', type: 'doc' }
        ]
    },
    {
        id: 'mmorpg-exploration',
        title: 'MMORPG Exploration Design',
        type: 'Miscellaneous',
        showPriority: 72,
        engine: 'Other',
        gameType: 'RPG',
        role: ['Game Designer'],
        techStack: ['GDD', 'World Building'],
        thumbnail: '/assets/images/MountainSea.png', // Fallback
        shortDescriptionCN: 'MMORPG中的特殊场景探索玩法设计。',
        shortDescriptionEN: 'Special scene exploration gameplay design for MMORPGs.',
        platformCN: '策划文档',
        platformEN: 'Design Document',
        durationCN: '2024.03',
        durationEN: 'Mar 2024',
        teamSizeCN: '个人',
        teamSizeEN: 'Solo',
        descriptionCN: '探讨如何在MMORPG中通过场景交互、动态事件和非线性叙事提升探索感。重点剖析《最终幻想14》中的云冠群岛、优雷卡及天佑女王系列。',
        descriptionEN: 'Analysis on enhancing exploration in MMORPGs through interaction, dynamic events, and non-linear narrative, focusing on FFXIV\'s Eureka and Bozja systems.',
        images: [],
        gddPdfUrl: '/assets/docs/SpecialExplorationDesign.pdf',
        links: [
            { labelCN: '查看论文', labelEN: 'View Paper', urlCN: '/assets/docs/SpecialExplorationDesign.pdf', type: 'doc' }
        ]
    }
];

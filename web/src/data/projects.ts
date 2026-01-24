import type { Project } from './types';

export const projects: Project[] = [
    // --- Commercial Projects ---
    {
        id: 'nuclear-survival',
        title: 'Nuclear Survival',
        type: 'Commercial',
        showPriority: 100,
        engine: 'Python',
        gameType: 'Survival',
        role: ['Lead Designer'],
        techStack: ['Minecraft Mod', 'Python+JSON'],
        thumbnail: '/assets/images/FOCover.png',
        shortDescriptionCN: '辐射风格的末日生存模组，拥有独立的系统构建。',
        shortDescriptionEN: 'Fallout-inspired post-apocalyptic survival mod.',
        sales: '10K+ Units',
        platformCN: '我的世界 (中国版)',
        platformEN: 'Minecraft (China)',
        durationCN: '2023.02 - 2023.07',
        durationEN: 'Feb 2023 - Jul 2023',
        teamSizeCN: '10-15人',
        teamSizeEN: '10-15 People',
        descriptionCN: `
# 辐射生存 (Nuclear Survival)
**角色:** Lead Designer  
**公司:** Hunan Nuoxiyou Technology Co. Ltd.

作为策划领导开发了1.0和2.0版本以及具有独立系统和世界构建逻辑的长期更新策略。

**关键贡献：**
*   设计了一个受辐射启发的后启示录废土生存体验。
*   设计了一个独特的生存系统，重点关注资源管理和环境危害。
*   设计了资源收集、敌人防御、武器/机甲制造和加固基地建设的进展系统。
*   设计了游戏玩法系统、敌人AI和动画以及生物群落。
        `,
        descriptionEN: `
# Nuclear Survival
**Role:** Lead Designer  
**Company:** Hunan Nuoxiyou Technology Co. Ltd.

Led development of the 1.0 and 2.0 versions and long-term update strategy with independent systems and world-building logic.

**Key Contributions:**
*   Designed a fallout-inspired post-apocalyptic wasteland survival experience.
*   Designed a unique survival system with a focus on resource management and environmental hazards.
*   Designed progression systems for resource collection, enemy defense, weapon/mech crafting, and fortified base construction.
*   Designed gameplay systems, enemy AI & animations, and biomes.
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
        gameType: 'Survival',
        role: ['Lead Designer'],
        techStack: ['Minecraft Mod', 'Python+JSON'],
        thumbnail: '/assets/images/KBDCover.png',
        shortDescriptionCN: '基于Minecraft的恐怖生存模组，包含8个可探索岛屿。',
        shortDescriptionEN: 'Horror survival mod for Minecraft with 8 explorable islands.',
        sales: '10K+ Units',
        platformCN: '我的世界 (中国版)',
        platformEN: 'Minecraft (China)',
        durationCN: '2023.02 - 2023.07',
        durationEN: 'Feb 2023 - Jul 2023',
        teamSizeCN: '10-15人',
        teamSizeEN: '10-15 People',
        descriptionCN: `
# 恐怖岛生存 (Horror Isle)
**角色:** Lead Designer  
**公司:** Hunan Nuoxiyou Technology Co. Ltd.

作为策划领导开发了1.0版本和具有独立系统 and 世界构建逻辑的长期更新策略。

**关键贡献：**
*   设计或概念化了八个可探索的岛屿，具有多样的生物群落、建筑系统和Boss战斗场地。
*   设计了包括消灭敌人、装备制作和召唤首领的祭祀仪式在内的挑战路线。
*   建立环境叙事与主岛的传说相关联的谜题。
*   设计了游戏玩法系统、敌人AI and 动画以及生物群落。
        `,
        descriptionEN: `
# Horror Isle
**Role:** Lead Designer
**Company:** Hunan Nuoxiyou Technology Co. Ltd.

Led development of the 1.0 version and long-term update strategy with independent systems and world-building logic.

**Key Contributions:**
*   Designed or conceptualized eight explorable islands with diverse biomes, architectural systems, and boss fight arenas.
*   Designed progression mechanics involving enemy elimination, equipment crafting, and sacrificial rituals to summon bosses.
*   Built narrative-driven mysteries tied to the main island's lore through environmental storytelling.
*   Designed gameplay systems, enemy AI & animations, and biomes.
        `,
        images: ['/assets/images/KBDCover.png', '/assets/images/HorrorIsland_01.png', '/assets/images/HorrorIsland_02.png', '/assets/images/HorrorIsland_03.png'],
        links: [
            { labelCN: '发布页面', labelEN: 'Release Page', urlCN: 'https://resource-minecraft.h5.163.com/#/detail?id=4665488888721273907', type: 'demo' }
        ]
    },
    {
        id: 'code-fr',
        title: 'CODE:FR',
        type: 'Commercial',
        showPriority: 98,
        engine: 'Unreal',
        gameType: 'Action',
        role: ['Producer'],
        techStack: ['Unreal Engine 5', 'ARPG'],
        thumbnail: '/assets/images/VideoCover.png', // Temporary
        shortDescriptionCN: '一款在研的3D动作角色扮演游戏（ARPG）。',
        shortDescriptionEN: 'A 3D Action RPG currently under stealth development.',
        sales: 'Stealth Developing',
        platformCN: 'PC',
        platformEN: 'PC',
        durationCN: '2024.05 - 至今',
        durationEN: 'May 2024 - Present',
        teamSizeCN: '5-10人',
        teamSizeEN: '5-10 People',
        descriptionCN: `
# CODE:FR
**角色:** Producer  
**公司:** Prelude Games

作为制作人领导并推动该项目的开发，这是一款3D ARPG游戏。
        `,
        descriptionEN: `
# CODE:FR
**Role:** Producer  
**Company:** Prelude Games

Leading and pushing the project for Prelude Games. This is a 3D ARPG currently in stealth development.
        `,
        images: [],
        links: []
    },
    {
        id: 'lightning-hero',
        title: 'Lightning Hero',
        type: 'Commercial',
        showPriority: 80,
        engine: 'Python',
        gameType: 'Action',
        role: ['Lead Designer'],
        techStack: ['Minecraft Mod', 'Python+JSON'],
        thumbnail: '/assets/images/LHCover.png',
        shortDescriptionCN: '允许玩家变身闪电英雄体验极速快感的模组。',
        shortDescriptionEN: 'Mod allowing players to transform into a lightning hero with super speed.',
        sales: '1M+ Units',
        platformCN: '我的世界 (中国版)',
        platformEN: 'Minecraft (China)',
        durationCN: '2023.03 - 2023.05',
        durationEN: 'Mar 2023 - May 2023',
        teamSizeCN: '5-8人',
        teamSizeEN: '5-8 People',
        descriptionCN: `
# 闪电英雄 (Lightning Hero)
**角色:** Lead Designer  
**公司:** Hunan Nuoxiyou Technology Co. Ltd.

该项目允许玩家制作一套装备后变身为闪电英雄，使用五种技能体验超高速的快感。
        `,
        descriptionEN: `
# Lightning Hero
**Role:** Lead Designer  
**Company:** Hunan Nuoxiyou Technology Co. Ltd.

This mod allow players to transform into lightning hero after crafting a set of equipment, they can use five skills to experience the thrill of super speed.
        `,
        images: ['/assets/images/LHCover.png', '/assets/images/Shandianxia.png'],
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

import type { MediaItem, MediaSeries } from './types';

// =============================================================================
// 自媒体系列 (Media Series)
// =============================================================================

export const mediaSeries: MediaSeries[] = [
    // =========================================================================
    // E起分析 - 游戏设计分析视频系列
    // =========================================================================
    {
        id: 'e-analysis',
        seriesNames: { CN: "E起分析", EN: "E-Analysis" },
        type: 'video-series',
        seriesBadges: ['Video', 'Article'],
        languages: ['%R%Chinese'],
        descriptions: { CN: "深度游戏设计分析系列，探讨各类游戏的机制设计、内容规划与用户体验优化。", EN: "In-depth game design analysis series, exploring mechanics design, content planning, and UX optimization across various games." },
        thumbnail: '/assets/images/media/e-analysis-cover.png',
        episodes: [
            {
                id: 'e-analysis-00',
                type: 'video',
                episodeNumber: '00',
                titles: { CN: "FF14新月岛已知内容分析与猜测", EN: "FF14 Crescent Isle Known Content Analysis & Speculation" },
                date: '2025.02',
                links: [
                    { platform: 'Bilibili', urls: { CN: "https://www.bilibili.com/video/BV1pwKKetEAc", EN: "https://www.bilibili.com/video/BV1pwKKetEAc" } }
                ]
            },
            {
                id: 'e-analysis-01',
                type: 'video',
                episodeNumber: '01',
                titles: { CN: "FF14 7.2x 永久的探求者 PLL细节与设计分析", EN: "FF14 7.2x Eternal Seekers PLL Details & Design Analysis" },
                date: '2025.03',
                links: [
                    { platform: 'Bilibili', urls: { CN: "https://www.bilibili.com/video/BV1M8XHY7EmP", EN: "https://www.bilibili.com/video/BV1M8XHY7EmP" } }
                ]
            },
            {
                id: 'e-analysis-02',
                type: ['video', 'article'],
                episodeNumber: '02',
                titles: { CN: "如何设计一个高难度的战斗体验？深度解析《燕云十六声》高难度下战斗机制设计的痛点与优化空间", EN: "How to Design a High-Difficulty Combat Experience? Deep Dive into \"Where Winds Meet\" Combat Mechanics" },
                date: '2025.04',
                links: [
                    { platform: 'Bilibili', urls: { CN: "https://www.bilibili.com/video/BV1CydhYzEv2", EN: "https://www.bilibili.com/video/BV1CydhYzEv2" } },
                    { platform: 'GameRes', urls: { CN: "https://bbs.gameres.com/thread_910271_1_1.html", EN: "https://bbs.gameres.com/thread_910271_1_1.html" } }
                ]
            },
            {
                id: 'e-analysis-03',
                episodeNumber: '03',
                type: 'article',
                titles: { CN: "什么是认知", EN: "What is Cognition" },
                date: '2025.12',
                links: [
                    { platform: 'Gcores', urls: { CN: "https://www.gcores.com/articles/207902", EN: "https://www.gcores.com/articles/207902" } }
                ]
            },
            // =====================================================================
            // 未发布内容示例 - 使用 isPublished: false 和 scheduledDate
            // =====================================================================
            // {
            //     id: 'e-analysis-04',
            //     episodeNumber: '04',
            //     titles: { CN: "待发布的标题", EN: "Unreleased Title" },
            //     date: '',
            //     isPublished: false,
            //     scheduledDate: '2025.03',
            //     links: [] // 未发布的不需要链接
            // },
        ]
    },

    // =========================================================================
    // GDL100 - 游戏设计播客系列
    // =========================================================================
    {
        id: 'gdl100',
        seriesNames: { CN: "GDL100 游戏设计素养", EN: "GDL100 Game Design Literacy" },
        type: 'podcast-series',
        languages: ['%R%Chinese'],
        descriptions: { CN: "Game Design Literacy 游戏设计核心素养学习系列，从基础概念到高级设计模式，逐步构建完整的游戏设计知识体系。", EN: "Game Design Literacy podcast series, building a complete knowledge system from basic concepts to advanced design patterns." },
        thumbnail: '/assets/images/media/gdl100-cover.png',
        mainLinks: [
            { platform: 'Podcast', urls: { CN: "https://gdl100.podcast.xyz", EN: "https://gdl100.podcast.xyz" }, labels: { CN: "%P%小宇宙(Chinese)", EN: "%P%小宇宙(Chinese)" } },
        ],
        podcastEpisodes: [
            { id: 'gdl-01', episodeNumber: '01', titles: { CN: "什么是游戏设计？——寻找\"有意义的玩法\"", EN: "What is Game Design? — Finding \"Meaningful Play\"" }, scheduledDate: '2026-01-22' },
            { id: 'gdl-02', episodeNumber: '02', titles: { CN: "不仅是娱乐——系统、原子与元素四面体", EN: "More Than Entertainment — Systems, Atoms, and the Elemental Tetrad" }, scheduledDate: '2026-01-22' },
            { id: 'gdl-03', episodeNumber: '03', titles: { CN: "魔法圈——为什么我们在游戏里杀人不犯法？", EN: "The Magic Circle — Why Killing in Games Isn\'t a Crime" }, scheduledDate: '2026-01-22' },
            { id: 'gdl-04', episodeNumber: '04', titles: { CN: "设计的透镜——规则、玩与文化", EN: "Design through the lens of rules, play, and culture" }, scheduledDate: '2026-01-23' },
            { id: 'gdl-05', episodeNumber: '05', titles: { CN: "不仅仅是故事——剥离表象，直击核心机制", EN: "More than just a story — Strip away the appearance and directly target the core mechanism" }, scheduledDate: '2026-01-23' },
            { id: 'gdl-06', episodeNumber: '06', titles: { CN: "设计师的思维方式——如何从生活中提取玩法？", EN: "Designer\'s mindset — How to extract play from life" }, scheduledDate: '2026-01-23' },
            { id: 'gdl-07', episodeNumber: '07', titles: { CN: "编程是必备的吗——不懂代码也能做设计吗？", EN: "Is programming a must? — Can you design without code?" }, scheduledDate: '2026-01-24' },
            { id: 'gdl-08', episodeNumber: '08', titles: { CN: "游戏类型学——像外科医生一样玩游戏", EN: "Game Typeology — Like a surgeon playing games" }, scheduledDate: '2026-01-24' },
            { id: 'gdl-09', episodeNumber: '09', titles: { CN: "玩家心理学基础——别让玩家的脑子死机", EN: "Player Psychology — Don\'t let the player\'s brain freeze" }, scheduledDate: '2026-01-24' },
            { id: 'gdl-10', episodeNumber: '10', titles: { CN: "设计文档 (GDD) 入门——别写没人看的小说", EN: "Intro of Game Design Document (GDD) — Don\'t write a novel no one will read" }, scheduledDate: '2026-01-25' },
            { id: 'gdl-11', episodeNumber: '11', titles: { CN: "迭代设计的力量——1% 的灵感与 99% 的迭代", EN: "Iteration Design — 1% inspiration and 99% iteration" }, scheduledDate: '2026-01-25' },
            { id: 'gdl-12', episodeNumber: '12', titles: { CN: "纸面原型——不写代码，如何在一张纸上跑通 FPS 游戏？", EN: "Paper Prototype — How to run an FPS game on a piece of paper without code" }, scheduledDate: '2026-01-25' },
            { id: 'gdl-13', episodeNumber: '13', titles: { CN: "构建核心机制——找到游戏的“动词”", EN: "Building Core Mechanics — Finding the game\'s \"verb\"" }, scheduledDate: '2026-01-26' },
            { id: 'gdl-14', episodeNumber: '14', titles: { CN: "从玩具到游戏——先做一个好玩的玩具", EN: "From toy to game — Make a fun toy first" }, scheduledDate: '2026-01-26' },
            { id: 'gdl-15', episodeNumber: '15', titles: { CN: "游戏测试 (Playtesting)——别相信你的直觉，相信数据", EN: "Game Testing (Playtesting) — Don\'t believe your intuition, believe the data" }, scheduledDate: '2026-01-26' },
            { id: 'gdl-16', episodeNumber: '16', titles: { CN: "如何处理反馈——筛选噪音，提炼真金", EN: "How to handle feedback — Filter noise, refine gold" }, scheduledDate: '2026-01-27' },
            { id: 'gdl-17', episodeNumber: '17', titles: { CN: "失败的价值——为什么你的第一个原型必须是“垃圾”？", EN: "The value of failure — Why your first prototype must be \"garbage\"" }, scheduledDate: '2026-01-27' },
            { id: 'gdl-18', episodeNumber: '18', titles: { CN: "数字原型——灰盒测试与 3C 设计", EN: "Digital Prototype — Gray Box Testing and 3C Design" }, scheduledDate: '2026-01-27' },
            { id: 'gdl-19', episodeNumber: '19', titles: { CN: "垂直切片 (Vertical Slice)——如何做一个完美的“样板间”？", EN: "Vertical Slice — How to make a perfect \"showcase\"" }, scheduledDate: '2026-01-28' },
            { id: 'gdl-20', episodeNumber: '20', titles: { CN: "Scrum 与敏捷开发——如何像特种部队一样做游戏？", EN: "Scrum and Agile Development — Like a special forces team making games" }, scheduledDate: '2026-01-28' },
            { id: 'gdl-21', episodeNumber: '21', titles: { CN: "关卡设计的定义——是地图，更是体验的容器", EN: "Level Design — It\'s not just a map, it\'s a container for experience" }, scheduledDate: '2026-01-28' },
            { id: 'gdl-22', episodeNumber: '22', titles: { CN: "节奏 (Pacing) 的艺术——如何像作曲家一样设计关卡？", EN: "Pacing — Like a composer designing levels" }, scheduledDate: '2026-01-29' },
            { id: 'gdl-23', episodeNumber: '23', titles: { CN: "起承转合 (Kishōtenketsu)——马里奥的关卡结构哲学", EN: "Kishōtenketsu — Mario\'s level structure philosophy" }, scheduledDate: '2026-01-29' },
            { id: 'gdl-24', episodeNumber: '24', titles: { CN: "非语言引导——构图、灯光与面包屑", EN: "Non-verbal cues — Composition, lighting, and breadcrumbs" }, scheduledDate: '2026-01-29' },
            { id: 'gdl-25', episodeNumber: '25', titles: { CN: "视觉引导技巧——利用“面包屑”创造移动的韵律", EN: "Visual cues — Using breadcrumbs to create movement rhythm" }, scheduledDate: '2026-01-30' },
            { id: 'gdl-26', episodeNumber: '26', titles: { CN: "构建信任关系——为什么不能设计“必死”的陷阱？", EN: "Building trust — Why can\'t we design \"mandatory death\" traps?" }, scheduledDate: '2026-01-30' },
            { id: 'gdl-27', episodeNumber: '27', titles: { CN: "难度曲线设计——难度不应是直线上升", EN: "Difficulty curve — Difficulty shouldn\'t be a straight line" }, scheduledDate: '2026-01-30' },
            { id: 'gdl-28', episodeNumber: '28', titles: { CN: "奖励机制——如何设计宝箱，让探索变得有意义", EN: "Reward system — How to design chests" }, scheduledDate: '2026-01-31' },
            { id: 'gdl-29', episodeNumber: '29', titles: { CN: "地标与导航——如何利用高塔构建玩家的心智地图", EN: "Landmarks and navigation — How to use towers to build player\'s mental map" }, scheduledDate: '2026-01-31' },
            { id: 'gdl-29e-01', episodeNumber: '29E-01', titles: { CN: "关卡拓扑学——从“串糖葫芦”到“类魂立体迷宫”", EN: "Level Topology — From Linear Paths to Souls-like Mazes" }, scheduledDate: '2026-01-31' },
            { id: 'gdl-29e-02', episodeNumber: '29E-02', titles: { CN: "环境叙事——如何让墙壁和物品讲故事？", EN: "Environmental Storytelling — Walls and Objects" }, scheduledDate: '2026-02-01' },
            { id: 'gdl-29e-03', episodeNumber: '29E-03', titles: { CN: "建筑现象学——利用空间尺度与光影操控玩家情绪", EN: "Architectural Phenomenology — Space and Light" }, scheduledDate: '2026-02-01' },
            { id: 'gdl-30', episodeNumber: '30', titles: { CN: "封闭与开放空间——利用空间变化调节心理节奏", EN: "Closed and Open Spaces — Psychological Rhythm" }, scheduledDate: '2026-02-01' },
            { id: 'gdl-31', episodeNumber: '31', titles: { CN: "死胡同与回头路——如何避免无聊的折返？", EN: "Dead Ends and Backtracking — Avoiding Boredom" }, scheduledDate: '2026-02-02' },
            { id: 'gdl-32', episodeNumber: '32', titles: { CN: "惊喜与偶然发现——设计师刻意安排的“偶然”", EN: "Surprises and Discoveries — Planned Serendipity" }, scheduledDate: '2026-02-02' },
            { id: 'gdl-33', episodeNumber: '33', titles: { CN: "10秒规则——动作游戏中，如何保证每10秒就有新的刺激？", EN: "The 10-Second Rule — Pacing in Action Games" }, scheduledDate: '2026-02-02' },
            { id: 'gdl-34', episodeNumber: '34', titles: { CN: "动态关卡——会变化的地图：水位升降与破坏带来的体验改变", EN: "Dynamic Levels — Changing Environments" }, scheduledDate: '2026-02-03' },
            { id: 'gdl-35', episodeNumber: '35', titles: { CN: "关卡与加载——如何利用“电梯”或“窄道”隐藏加载时间，保持沉浸感", EN: "Levels and Loading — Invisible Loading" }, scheduledDate: '2026-02-03' },
            { id: 'gdl-36', episodeNumber: '36', titles: { CN: "类魂游戏的拓扑结构——图论在关卡设计中的应用", EN: "Souls-like Topology — Graph Theory in Level Design" }, scheduledDate: '2026-02-03' },
            { id: 'gdl-37', episodeNumber: '37', titles: { CN: "立体地图设计——纵向空间的利用，跌落与垂直探索的乐趣", EN: "Vertical Map Design — Verticality and Exploration" }, scheduledDate: '2026-02-04' },
            { id: 'gdl-38', episodeNumber: '38', titles: { CN: "捷径的哲学——如何通过开启捷径（不动键）让世界连为一体", EN: "Shortcut Philosophy — Interconnected Worlds" }, scheduledDate: '2026-02-04' },
            { id: 'gdl-39', episodeNumber: '39', titles: { CN: "箱庭探索与兴趣点 (POI)——如何布置兴趣点吸引玩家深入探索", EN: "POI Design — Guiding Player Exploration" }, scheduledDate: '2026-02-04' },
            { id: 'gdl-40', episodeNumber: '40', titles: { CN: "风险与回报——篝火（存档点）的分布与玩家的心理压力管理", EN: "Risk and Reward — Save Points and Stress" }, scheduledDate: '2026-02-05' },
            { id: 'gdl-41', episodeNumber: '41', titles: { CN: "3D 平台跳跃设计——距离、高度与“允许失误”的设计哲学", EN: "3D Platforming — Distance and Forgiveness" }, scheduledDate: '2026-02-05' },
            { id: 'gdl-42', episodeNumber: '42', titles: { CN: "潜行关卡设计——视线遮挡、通风管道与“阿甘城”式的战术沙盒", EN: "Stealth Level Design — Line of Sight and Sandboxes" }, scheduledDate: '2026-02-05' },
            { id: 'gdl-43', episodeNumber: '43', titles: { CN: "恐怖游戏的关卡——狭窄空间、未知与“吓一跳”的节奏设计", EN: "Horror Levels — Narrow Spaces and Jump Scares" }, scheduledDate: '2026-02-06' },
            { id: 'gdl-44', episodeNumber: '44', titles: { CN: "电影化叙事关卡——像《神秘海域》一样设计：让动作与剧情无缝衔接", EN: "Cinematic Levels — Seamless Action and Story" }, scheduledDate: '2026-02-06' },
            { id: 'gdl-45', episodeNumber: '45', titles: { CN: "开放世界的设计——如何用海量任务填充巨大地图而不让玩家感到空虚", EN: "Open World Design — Content and Pacing" }, scheduledDate: '2026-02-06' },
            { id: 'gdl-46', episodeNumber: '46', titles: { CN: "游戏平衡性的类型——玩家间平衡 (PvP) 与 玩家与环境平衡 (PvE)", EN: "Types of Balance — PvP and PvE" }, scheduledDate: '2026-02-07' },
            { id: 'gdl-47', episodeNumber: '47', titles: { CN: "对称与非对称设计——什么时候应该让双方条件相同？", EN: "Symmetry and Asymmetry — Fair Play Design" }, scheduledDate: '2026-02-07' },
            { id: 'gdl-48', episodeNumber: '48', titles: { CN: "石头剪刀布机制——循环相克系统在策略与战斗中的应用", EN: "RPS Mechanics — Cyclic Systems" }, scheduledDate: '2026-02-07' },
            { id: 'gdl-49', episodeNumber: '49', titles: { CN: "数值策划入门——从 Excel 开始，理解数据结构的基础", EN: "Intro to Systems Design — Excel and Data" }, scheduledDate: '2026-02-08' },
            { id: 'gdl-50', episodeNumber: '50', titles: { CN: "公式设计——减法公式 vs 除法公式，为什么要慎用减法？", EN: "Formula Design — Subtraction vs. Division" }, scheduledDate: '2026-02-08' },
            { id: 'gdl-51', episodeNumber: '51', titles: { CN: "战斗设计理论——攻击、防御、生命值的数学模型模拟", EN: "Combat Models — ATK, DEF, and HP Math" }, scheduledDate: '2026-02-08' },
            { id: 'gdl-52', episodeNumber: '52', titles: { CN: "经济系统平衡——资源的产出（Faucet）与消耗（Sink），避免通货膨胀", EN: "Economy Balance — Faucets and Sinks" }, scheduledDate: '2026-02-09' },
            { id: 'gdl-53', episodeNumber: '53', titles: { CN: "正反馈与负反馈——“滚雪球”效应与“蓝龟壳”机制的应用", EN: "Positive and Negative Feedback — Snowballing" }, scheduledDate: '2026-02-09' },
            { id: 'gdl-54', episodeNumber: '54', titles: { CN: "优势策略与平衡——避免“无敌策略” (Dominant Strategy)，确保选择的多样性", EN: "Dominant Strategy — Choice Diversity" }, scheduledDate: '2026-02-09' },
            { id: 'gdl-55', episodeNumber: '55', titles: { CN: "概率与随机性——真随机 vs 伪随机，如何利用随机性增加耐玩度", EN: "Probability — True vs. Pseudo-Randomness" }, scheduledDate: '2026-02-10' },
            { id: 'gdl-56', episodeNumber: '56', titles: { CN: "RPG 的数值成长——等级、经验值与能力曲线的规划", EN: "RPG Progression — Levels and Curves" }, scheduledDate: '2026-02-10' },
            { id: 'gdl-57', episodeNumber: '57', titles: { CN: "塔防游戏的数值——出怪节奏、怪物移速与防御塔攻击力的平衡", EN: "TD Balance — Pacing and Damage" }, scheduledDate: '2026-02-10' },
            { id: 'gdl-58', episodeNumber: '58', titles: { CN: "动作游戏的帧数——攻击前摇、后摇与判定框的精细调整", EN: "Action Frame Data — Startup and Recovery" }, scheduledDate: '2026-02-11' },
            { id: 'gdl-59', episodeNumber: '59', titles: { CN: "调整的艺术——为什么在找不到方向时，“选简单的一方”通常是正解", EN: "The Art of Tuning — Choosing the Simple Path" }, scheduledDate: '2026-02-11' },
            { id: 'gdl-60', episodeNumber: '60', titles: { CN: "黑白棋效应——只要首尾体验好，中间的瑕疵可以被原谅", EN: "The Othello Effect — First and Last Impressions" }, scheduledDate: '2026-02-11' },
            { id: 'gdl-61', episodeNumber: '61', titles: { CN: "叙事设计 vs 编剧——游戏叙事的特殊性：让玩家成为主角", EN: "Narrative Design vs. Writing — Player as Protagonist" }, scheduledDate: '2026-02-12' },
            { id: 'gdl-62', episodeNumber: '62', titles: { CN: "环境叙事——“墙上的涂鸦”与“尸体的位置”：通过场景讲故事", EN: "Environmental Storytelling — Visual Narration" }, scheduledDate: '2026-02-12' },
            { id: 'gdl-63', episodeNumber: '63', titles: { CN: "序破急与场景序列——如何将一个关卡设计成有起伏的小故事", EN: "Jo-ha-kyū — Pacing Levels as Stories" }, scheduledDate: '2026-02-12' },
            { id: 'gdl-64', episodeNumber: '64', titles: { CN: "英雄之旅——约瑟夫·坎贝尔的理论在游戏关卡结构中的应用", EN: "The Hero\'s Journey — Applying the Monomyth" }, scheduledDate: '2026-02-13' },
            { id: 'gdl-65', episodeNumber: '65', titles: { CN: "多线叙事——主线与支线故事的穿插技巧", EN: "Multi-threaded Narrative — Main and Side Quests" }, scheduledDate: '2026-02-13' },
            { id: 'gdl-66', episodeNumber: '66', titles: { CN: "角色设计 (3C)——角色 (Character)、镜头 (Camera)、控制 (Control) 的黄金三角", EN: "3C Design — Character, Camera, Control" }, scheduledDate: '2026-02-13' },
            { id: 'gdl-67', episodeNumber: '67', titles: { CN: "角色与动作——动作本身就是叙事：奎托斯的愤怒与马里奥的欢快", EN: "Movement as Narrative — Character through Action" }, scheduledDate: '2026-02-14' },
            { id: 'gdl-68', episodeNumber: '68', titles: { CN: "搭档角色设计——如《生化危机4》或《古堡迷踪》，如何设计NPC同伴", EN: "Sidekick Design — Companion AI and Gameplay" }, scheduledDate: '2026-02-14' },
            { id: 'gdl-69', episodeNumber: '69', titles: { CN: "世界观构建——从地理、气候到建筑风格的统一性", EN: "World Building — Unity in Environment" }, scheduledDate: '2026-02-14' },
            { id: 'gdl-70', episodeNumber: '70', titles: { CN: "视觉风格与氛围——景别、光影与色调如何影响玩家情绪", EN: "Visual Style and Atmosphere — Lighting and Color" }, scheduledDate: '2026-02-15' },
            { id: 'gdl-71', episodeNumber: '71', titles: { CN: "恐怖与不安的营造——利用未知与受限的视角创造恐惧", EN: "Creating Tension — Unknown and Limited Perspective" }, scheduledDate: '2026-02-15' },
            { id: 'gdl-72', episodeNumber: '72', titles: { CN: "打破第四面墙——游戏独特的叙事诡计与元游戏体验", EN: "Breaking the Fourth Wall — Meta-narratives" }, scheduledDate: '2026-02-15' },
            { id: 'gdl-73', episodeNumber: '73', titles: { CN: "任务设计——如何让简单的“杀怪任务”变得有代入感", EN: "Quest Design — Making Tasks Immersive" }, scheduledDate: '2026-02-16' },
            { id: 'gdl-74', episodeNumber: '74', titles: { CN: "对白写作——游戏对白的特殊性：简洁、功能性与性格塑造", EN: "Dialogue Writing — Conciseness and Function" }, scheduledDate: '2026-02-16' },
            { id: 'gdl-75', episodeNumber: '75', titles: { CN: "过场动画与实机的衔接——如何平滑过渡，保持情绪连贯", EN: "Cinematic Transitions — Seamless Gameplay" }, scheduledDate: '2026-02-16' },
            { id: 'gdl-75e-04', episodeNumber: '75E-04', titles: { CN: "关卡流（Level Flow）——面包屑、地标与视觉引导的艺术", EN: "Level Flow — Breadcrumbs and Landmarks" }, scheduledDate: '2026-02-17' },
            { id: 'gdl-75e-05', episodeNumber: '75E-05', titles: { CN: "情绪曲线与强度（Intensity）——当玩法节奏遇上剧情高潮", EN: "Emotional Curves — Pacing and Intensity" }, scheduledDate: '2026-02-17' },
            { id: 'gdl-75e-06', episodeNumber: '75E-06', titles: { CN: "谜题结构——起承转合与机制的深度整合", EN: "Puzzle Structure — Integrating Mechanics" }, scheduledDate: '2026-02-17' },
            { id: 'gdl-75e-07', episodeNumber: '75E-07', titles: { CN: "地图结构——回溯设计与箱庭理论的拓扑学", EN: "Map Structure — Backtracking and Sandboxes" }, scheduledDate: '2026-02-18' },
            { id: 'gdl-75e-08', episodeNumber: '75E-08', titles: { CN: "游戏中的“楞次定律”——增反减同，来拒去留", EN: "Lenz\'s Law in Games — Conflict and Balance" }, scheduledDate: '2026-02-18' },
            { id: 'gdl-76', episodeNumber: '76', titles: { CN: "动作游戏：操作感——什么是“手感”？打击停顿与反馈的黄金法则", EN: "Action Game Feel — Feedback and Impact" }, scheduledDate: '2026-02-18' },
            { id: 'gdl-77', episodeNumber: '77', titles: { CN: "平台跳跃：节奏感——障碍物的排列与玩家的操作韵律", EN: "Platforming Rhythm — Obstacle Placement" }, scheduledDate: '2026-02-19' },
            { id: 'gdl-78', episodeNumber: '78', titles: { CN: "FPS or TPS：掩体与战术——战场设计如何迫使玩家移动", EN: "Shooters: Cover and Tactics — Forcing Movement" }, scheduledDate: '2026-02-19' },
            { id: 'gdl-79', episodeNumber: '79', titles: { CN: "解谜游戏：顿悟时刻——谜题设计的原则：从困惑到恍然大悟", EN: "Puzzle Eureka — Guiding Insight" }, scheduledDate: '2026-02-19' },
            { id: 'gdl-80', episodeNumber: '80', titles: { CN: "RPG：探索与成长——城镇、野外与迷宫的“呼吸”节奏", EN: "RPG Pacing — Towns, Fields, and Dungeons" }, scheduledDate: '2026-02-20' },
            { id: 'gdl-81', episodeNumber: '81', titles: { CN: "RTS：不对称平衡——不同种族单位的差异化设计与博弈论应用", EN: "RTS Asymmetry — Balance and Game Theory" }, scheduledDate: '2026-02-20' },
            { id: 'gdl-82', episodeNumber: '82', titles: { CN: "休闲游戏：三消与连线——“停不下来”背后的心理学与节奏设计", EN: "Casual Games — Psychology of Habit" }, scheduledDate: '2026-02-20' },
            { id: 'gdl-83', episodeNumber: '83', titles: { CN: "割草游戏：战场感——如何设计能容纳大量敌人的空间与动态", EN: "Musou Pacing — Massive Battlefield Dynamics" }, scheduledDate: '2026-02-21' },
            { id: 'gdl-84', episodeNumber: '84', titles: { CN: "恐怖生存：资源管理——为什么“弹药匮乏”比“怪物”更可怕？", EN: "Survival Horror — Scarcity and Tension" }, scheduledDate: '2026-02-21' },
            { id: 'gdl-85', episodeNumber: '85', titles: { CN: "类银河恶魔城：能力获取与地图回溯——当“锁”是机制，“钥匙”是能力", EN: "Metroidvania — Backtracking and Abilities" }, scheduledDate: '2026-02-21' },
            { id: 'gdl-86', episodeNumber: '86', titles: { CN: "多人游戏地图——竞技场、死斗模式的平衡性与对称性", EN: "Multiplayer Maps — Balance and Symmetry" }, scheduledDate: '2026-02-22' },
            { id: 'gdl-87', episodeNumber: '87', titles: { CN: "教育游戏：避免枯燥——如何将“知识”转化为“机制”", EN: "Educational Games — Knowledge as Mechanics" }, scheduledDate: '2026-02-22' },
            { id: 'gdl-88', episodeNumber: '88', titles: { CN: "严肃游戏：游戏作为表达社会议题的媒介——当游戏不再是为了“赢”", EN: "Serious Games — Social Expression" }, scheduledDate: '2026-02-22' },
            { id: 'gdl-89', episodeNumber: '89', titles: { CN: "独立游戏创新：如何打破常规——“限制”是创意的温床", EN: "Indie Innovation — Constraints and Creativity" }, scheduledDate: '2026-02-23' },
            { id: 'gdl-90', episodeNumber: '90', titles: { CN: "移动端游戏设计：触摸屏与碎片化——在指尖与马桶上的战争", EN: "Mobile Design — Touchscreens and Pacing" }, scheduledDate: '2026-02-23' },
            { id: 'gdl-90e-09', episodeNumber: '90E-09', titles: { CN: "顶层架构——USP、核心支柱（Pillars）与立项逻辑", EN: "High-level Architecture — USPs and Pillars" }, scheduledDate: '2026-02-23' },
            { id: 'gdl-90e-10', episodeNumber: '90E-10', titles: { CN: "经济系统（上）——源头（Faucet）、水槽（Sink）与资源循环", EN: "Economy I — Faucets and Sinks" }, scheduledDate: '2026-02-24' },
            { id: 'gdl-90e-11', episodeNumber: '90E-11', titles: { CN: "经济系统（下）：通胀与交易——为什么“自由市场”在游戏中是灾难？", EN: "Economy II — Inflation and Markets" }, scheduledDate: '2026-02-24' },
            { id: 'gdl-90e-12', episodeNumber: '90E-12', titles: { CN: "社交系统：公会、PvP 与社会化分工——他人即地狱，也是天堂", EN: "Social Systems — Guilds and PvP" }, scheduledDate: '2026-02-24' },
            { id: 'gdl-90e-13', episodeNumber: '90E-13', titles: { CN: "商业化设计：F2P、扭蛋与通行证——如何体面地让玩家掏钱？", EN: "Monetization — F2P, Gacha, and Passes" }, scheduledDate: '2026-02-25' },
            { id: 'gdl-90e-14', episodeNumber: '90E-14', titles: { CN: "长线运营：数据驱动与版本迭代——让游戏“永生”的引擎", EN: "Live Ops — Data and Iteration" }, scheduledDate: '2026-02-25' },
            { id: 'gdl-91', episodeNumber: '91', titles: { CN: "游戏策划的职责——策划不是只出点子，更是执行者与沟通者", EN: "Designer Roles — Implementation and Communication" }, scheduledDate: '2026-02-25' },
            { id: 'gdl-92', episodeNumber: '92', titles: { CN: "团队协作：如何与美术、程序沟通——别做“那个讨人厌的策划”", EN: "Teamwork — Communicating with Art and Engineering" }, scheduledDate: '2026-02-26' },
            { id: 'gdl-93', episodeNumber: '93', titles: { CN: "制作Demo与作品集：如何展示你的设计能力——别给我看你的毕业论文，给我看你的游戏", EN: "Demos and Portfolios — Showing Ability" }, scheduledDate: '2026-02-26' },
            { id: 'gdl-94', episodeNumber: '94', titles: { CN: "从创意到文档：十页说明书与“成三”法则——如何让团队看懂你的设计", EN: "From Concept to GDD — Clear Documentation" }, scheduledDate: '2026-02-26' },
            { id: 'gdl-95', episodeNumber: '95', titles: { CN: "游戏产业概况：发行与运营——上线只是 Day 0，如何让游戏“活”下去？", EN: "Industry Overview — Live Ops after Launch" }, scheduledDate: '2026-02-27' },
            { id: 'gdl-96', episodeNumber: '96', titles: { CN: "持续学习：功夫在诗外——为什么顶尖的设计师都是博学家？", EN: "Constant Learning — The Polymath Designer" }, scheduledDate: '2026-02-27' },
            { id: 'gdl-97', episodeNumber: '97', titles: { CN: "分析游戏的方法：如何通过写游戏分析（Review）来提升设计能力——别只做玩家，做一个解剖师", EN: "Game Analysis — Reviewing for Growth" }, scheduledDate: '2026-02-27' },
            { id: 'gdl-98', episodeNumber: '98', titles: { CN: "设计伦理：成瘾机制与设计师的责任——我们是在制造快乐，还是在制造电子海洛因？", EN: "Design Ethics — Happiness or Addiction?" }, scheduledDate: '2026-02-28' },
            { id: 'gdl-99', episodeNumber: '99', titles: { CN: "给新人的建议：保持热情，多玩、多做、多想、永久学习——这是长跑，不是短跑", EN: "Advice for Newcomers — The Marathon of Design" }, scheduledDate: '2026-02-28' },
            { id: 'gdl-100', episodeNumber: '100', titles: { CN: "结束即开始——游戏设计是一场永无止境的修行", EN: "The End as a Beginning — Design as a Journey" }, scheduledDate: '2026-02-28' },
        ]
    }
];

// =============================================================================
// 项目演示视频 (Legacy MediaItems for project demos)
// =============================================================================

export const mediaItems: MediaItem[] = [
    /**
    {
        id: 'slime-trailer',
        titles: { CN: '怪盗史莱姆 游戏演示 | Slime Game Trailer', EN: '怪盗史莱姆 游戏演示 | Slime Game Trailer' },
        type: 'video',
        carrier: 'Bilibili',
        languages: ['Chinese'],
        url: 'https://www.bilibili.com/video/BV14g4y1F7Lz',
        thumbnail: '/assets/images/SLIME.png',
        descriptions: { CN: "史莱姆关卡设计与机制演示。", EN: "Slime level design and mechanics showcase." },
        date: '2023.11',
        isCollection: false,
        duration: '02:15'
    },
    {
        id: 'nuclear-survival-showcase',
        titles: { CN: '辐射生存 系统演示 | Nuclear Survival Gameplay', EN: '辐射生存 系统演示 | Nuclear Survival Gameplay' },
        type: 'video',
        carrier: 'Local',
        languages: ['Chinese'],
        url: '/assets/images/FallOut.mp4',
        thumbnail: '/assets/images/FOCover.png',
        descriptions: { CN: "展示了后启示录废土生存系统与环境表现。", EN: "Showcasing the post-apocalyptic survival system and environment." },
        date: '2023.05',
        isCollection: false,
        duration: '03:45'
    },
    {
        id: 'illegal-assembly-dev',
        titles: { CN: '非法组装 开发演示 | Illegal Assembly Dev Showcase', EN: '非法组装 开发演示 | Illegal Assembly Dev Showcase' },
        type: 'video',
        carrier: 'Local',
        languages: ['Chinese'],
        url: '/assets/images/Illegal Assembly.mp4',
        thumbnail: '/assets/images/IllagelAssemblyLogo.PNG',
        descriptions: { CN: "UE5工厂化建设自动化的主要系统演示。", EN: "Primary system showcase of UE5 factory automation." },
        date: '2024.04',
        isCollection: false,
        duration: '05:20'
    },
    {
        id: 'podcast-sample',
        titles: { CN: '游戏设计杂谈 | Game Design Talk', EN: '游戏设计杂谈 | Game Design Talk' },
        type: 'podcast',
        carrier: 'XiaoYuZhou',
        languages: ['Chinese'],
        url: 'https://www.xiaoyuzhoufm.com/',
        descriptions: { CN: "讨论现代MMORPG的关卡构成。", EN: "Discussing the level structure of modern MMORPGs." },
        date: '2024.01',
        isCollection: true,
        episodesCount: 12
    }
    */
];

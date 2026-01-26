import type { ResumeData } from '../data/types';

export const resumeData: ResumeData = {
    header: {
        name: {
            cn: "于 陈浩然",
            en: "Yu Chenhaoran"
        },
        email: "YuChenhaoran@Preludegames.com",
        role: "Game Designer & Game Developer",
        links: [
            { label: "GitHub", url: "https://github.com/ElectricArc-Yu" },
            { label: "LinkedIn", url: "https://linkedin.com/in/yuchenhaoran" }
        ]
    },
    about: {
        cn: "策划+技术双修的游戏设计师，专注于战斗体验与系统架构。擅长在资源受限环境下快速验证核心玩法，将设计构想转化为可执行方案。",
        en: "A Game Designer with dual expertise in design and programming. Focused on combat experience and system architecture. Excels at rapidly validating core gameplay under resource constraints, transforming design concepts into executable solutions."
    },
    experience: [
        {
            companyCN: "上海尤古多拉希尔科技有限公司",
            companyEN: "Prelude Games",
            roleCN: "创意总监",
            roleEN: "Founder / Creative Director",
            period: "2024.05 - Present",
            sizeCN: "0-20人",
            sizeEN: "0-20 people",
            detailsCN: [
                "项目统筹：在种子轮融资前的极限资源约束下(3人核心团队+数十万债权),独立完成从立项到投资人沟通的全流程",
                "玩法预研 Owner：主导 ARPG 项目核心战斗体验(乐器战斗+主副机协同)的设计验证与收敛,使用 UE 蓝图搭建 POC 原型",
                "IP 与体验框架：构建原创 IP 世界观底座(40+ 文档数万字)、系统架构图、角色/区域设定,支撑规模化扩展",
                "标准与流程：输出 10+ 设计模板与 6 份 Review 规范(SDD/LDD/角色设定等),将设计迭代从 4-5 次降至 1-2 次",
                "跨职能管理：承担设计 Owner 拆解 Scope,协调极度有限的程序与美术资源,培养 2 名成员至可独立决策程度"
            ],
            detailsEN: [
                "Project Leadership: Under extreme seed-round constraints (3-person core + minimal funding), independently completed full cycle from concept to investor communication",
                "Gameplay R&D Owner: Led ARPG core combat validation (instrument combat + dual-character system), built POC prototypes using UE Blueprints",
                "IP & Framework: Constructed original IP worldview foundation (40+ docs, tens of thousands of words), system architecture, character/region settings for scaling",
                "Standards & Process: Developed 10+ design templates and 6 review methodologies (SDD/LDD/character settings, etc.), reducing design iterations from 4-5 to 1-2",
                "Cross-functional Management: Scoped work as Design Owner, coordinated limited resources, mentored 2 members to independent decision-making level"
            ]
        },
        {
            companyCN: "湖南诺汐游科技有限公司",
            companyEN: "Hunan Nuoxiyou Technology Co. Ltd.",
            roleCN: "主策划",
            roleEN: "Lead Designer",
            period: "2023.02 - 2023.07",
            sizeCN: "0-20人",
            sizeEN: "0-20 people",
            detailsCN: [
                "商业成果：主导 3 款 MC 模组设计,累计销量 100 万+,首周上榜、发售月进入平台排行榜前五,评分 4.5",
                "核心循环设计：《辐射生存》自动化+机甲战斗;《恐怖岛》双消耗(SAN+饱食度)节奏控制",
                "系统与内容落地：完成 8 大核心系统设计,落地 80+ 武器、50+ 敌人/BOSS、100+ 建筑方块、15+ 生物群系",
                "数据驱动迭代：通过词云分析 2K+ 玩家反馈,将痛点转化为可执行改动,使销售额提升 10%、评分提升 0.2",
                "团队效能：作为唯一策划协调 12 人团队,引入 Git 版本管理与规范命名,将开发周期从 4 个月缩短至 2 个月"
            ],
            detailsEN: [
                "Commercial Results: Led design of 3 MC mods with 1M+ total sales, charted in first week, top 5 on platform in launch month, 4.5 rating",
                "Core Loop Design: Nuclear Survival (base building + automation + mech); Horror Isle (dual-consumption pacing)",
                "Systems & Content Delivery: Designed 8 core systems; delivered 80+ weapons, 50+ enemies/bosses, 100+ building blocks, 15+ biomes",
                "Data-Driven Iteration: Word-cloud analysis of 2K+ player feedback; transformed pain points into actionable changes, boosting sales 10% and ratings 0.2",
                "Team Efficiency: As sole designer, coordinated 12-person team; introduced Git + naming standards, reducing dev cycles from 4 to 2 months"
            ]
        }
    ],
    education: [
        {
            period: "2023 - 2024",
            schoolCN: "上海温哥华电影学院",
            schoolEN: "Shanghai Vancouver Film School",
            degreeCN: "高等文凭 (游戏设计)",
            degreeEN: "Diploma (Game Design)",
            gpa: "3.30/4.0",
            awards: ["Talent Scheme Scholarship"]
        },
        {
            period: "2021 - 2023",
            schoolCN: "南昌理工学院",
            schoolEN: "Nanchang Institute of Technology",
            degreeCN: "学士学位 (软件工程)",
            degreeEN: "B.Eng (Software Engineering)",
            gpa: "2.59/4.0",
        },
        {
            period: "2018 - 2021",
            schoolCN: "南昌理工学院",
            schoolEN: "Nanchang Institute of Technology",
            degreeCN: "专科文凭 (软件技术)",
            degreeEN: "A.Eng (Software Technology)",
            gpa: "1.92/4.0"
        }
    ],
    skills: [
        {
            category: "Development",
            categoryCN: "程序开发",
            items: [
                { name: "Unreal Engine 4 & 5", highlight: true },
                { name: "Blueprint", highlight: true },
                { name: "Unity", highlight: true },
                { name: "C#", highlight: true },
                { name: "C++" },
                { name: "Python" },
                { name: "Prompt Engineering" },
                { name: "VCS (Git/SVN)" }
            ]
        },
        {
            category: "Design",
            categoryCN: "策划设计",
            items: [
                { name: "Gameplay Design", highlight: true },
                { name: "System Design", highlight: true },
                { name: "Combat Design", highlight: true },
                { name: "Level Design" },
                { name: "Numerical Design" },
                { name: "Worldview Design" },
                { name: "Narrative Design" }
            ]
        },
        {
            category: "Leadership",
            categoryCN: "团队协作",
            items: [
                { name: "Product Strategy", highlight: true },
                { name: "Team Management", highlight: true },
                { name: "Cross-functional Collaboration", highlight: true },
                { name: "Agile / Scope Management" },
                { name: "Public Speaking" }
            ]
        }
    ],
    cta: {
        textCN: "工作机会？项目合作？商务合作？顾问咨询？立即联系我！",
        textEN: "Job Opportunities? Project Collaboration? Business? Consulting? Contact Me Now!",
        link: "/contact"
    }
};

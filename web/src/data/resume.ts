import type { ResumeData } from '../data/types';

export const resumeData: ResumeData = {
    header: {
        name: "Yu Chenhaoran",
        email: "Yuchenhaoran@outlook.com",
        phone: "+86 180 1085 5935",
        role: "Game Design Leader & World Builder",
        links: [
            { label: "GitHub", url: "https://github.com/ElectricArc-Yu" },
            { label: "LinkedIn", url: "https://linkedin.com/in/yuchenhaoran" }
        ]
    },
    about: {
        cn: "拥有6年以上游戏开发经验（3年设计，3年开发）。专注于系统驱动的设计与世界观构建。善于在快速迭代环境中领导跨职能团队。",
        en: "With 6+ years of game development experience (3 years design, 3 years dev). Focused on system-driven design and world-building. Expert in leading cross-functional teams in rapid iteration environments."
    },
    experience: [
        {
            companyCN: "Prelude Games",
            companyEN: "Prelude Games",
            roleCN: "创始人",
            roleEN: "Founder",
            period: "May 2024 - Present",
            sizeCN: "(0-20人)",
            sizeEN: "(0-20 people)",
            detailsCN: [
                "领导公司的远景和产品策略。积极宣讲并沟通公司及项目愿景，以确保联合创始人及早期投资，建立并维护潜在利益相关者网络。",
                "从零开始组建并培养了一个紧密协作的跨职能团队。营造了一个积极、自下而上且高度透明的工作环境，赋能团队成员并保持与长期目标的高度一致。",
                "与领导层合作建立并维护里程碑、预算和计划。确保核心团队（未来的利益相关者）对项目状态、策略和目标具有高可见性。主动识别并消除摩擦、障碍和潜在风险，为团队和合作伙伴提供支持。",
                "推动将高层愿景转变为可演示的原型。指导团队进行游戏和公司的快速迭代原型制作。在此期间识别并指导潜在的管理精英，快速提升团队能力和自主性。",
                "负责编写和审核关键项目文档，包括商业计划书（BP）、游戏设计文档（GDD）、系统设计文档（SDD）、关卡设计文档（LDD）、叙事设定、美术圣经、技术设计文档（TDD）及项目规划。"
            ],
            detailsEN: [
                "Spearheaded the company's vision and product strategy. Actively pitch and communicate the company and project's vision to secure co-founders and early-stage investment, building trust and maintaining relationships with a network of potential stakeholders.",
                "Built and nurtured a cohesive, cross-functional team from the ground up. Fostered a positive, bottom up and high-transparency work environment that empowers team members and maintains strong alignment with long-term goal.",
                "Collaborate with leadership to establish and maintain milestones, budgeting and planning. Ensure high visibility of project status, strategy, and goals for the core team (stakeholders in future). Proactively identify and eliminate friction, obstacles, and potential risks to support the team and partners.",
                "Drive translating the high-level vision into a demonstrable prototype. Guided the team through rapid, iterative prototyping of both game and company. During that identify and mentor potential management elite, rapidly elevate team capability and autonomy.",
                "Took charge of writing and reviewing key project documentation, including BP, GDD, SDDs (System Design Documents), LDDs, Narrative Settings, Art Bibles, TDDs, and Project Planning."
            ]
        },
        {
            companyCN: "湖南诺西游科技有限公司",
            companyEN: "Hunan Nuoxiyou Technology Co. Ltd.",
            roleCN: "主策划",
            roleEN: "Lead Designer",
            period: "Feb 2023 - Jul 2023",
            sizeCN: "(0-20人)",
            sizeEN: "(0-20 people)",
            detailsCN: [
                "负责多个UGC标题的产品策略和设计方向，全权指导并发布了3个主要产品，总销量超过100万套。",
                "利用实时数据和用户反馈，定义了两个主要版本的迭代路线图，增强了用户满意度并重新激活了生命周期。",
                "优化了跨学科工作流程和资源分配计划，在不牺牲质量的情况下将功能开发周期缩短至2个月以内。",
                "构建了旨在提供刺激游戏体验的复杂数值成长和战斗系统，获得了持续的高用户评分。",
                "负责起草关键项目文档，包括游戏提案、系统设计文档、关卡和道具设计文档以及角色设计文档。"
            ],
            detailsEN: [
                "Owned the product strategy and design direction for multiple UGC titles, fully directed and shipped 3 major products with 1M+ units sold in total.",
                "Leveraged live data and user feedback to define a 2 major version iterative roadmap that enhanced user satisfaction and reactivated life cycles.",
                "Optimized the cross-disciplinary workflow and resource planning, reducing the feature development cycle to under 2 months without compromising on quality.",
                "Architected complex progression and combat systems designed for provide excitement game experiences, resulting in consistently high user ratings.",
                "Took charge of drafting key project documentation, including Game Proposal, SDDs, Level and Item Design Documents, and Character Design Documents."
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
            awards: ["Talent Scheme Scholarship (2023/09)"]
        },
        {
            period: "2021 - 2023",
            schoolCN: "南昌理工学院",
            schoolEN: "Nanchang Institute of Technology",
            degreeCN: "学士学位 (软件工程)",
            degreeEN: "Bachelor's Degree (Software Engineering)",
            gpa: "2.59/4.0"
        },
        {
            period: "2018 - 2021",
            schoolCN: "南昌理工学院",
            schoolEN: "Nanchang Institute of Technology",
            degreeCN: "专科文凭 (软件技术)",
            degreeEN: "Associate Degree (Software Technology)",
            gpa: "3.0/4.0"
        }
    ],
    skills: [
        {
            category: "Development",
            categoryCN: "程序开发",
            items: ["C++", "Unreal Engine 4 & 5", "C#", "Unity", "Java", "Python", "SketchUp", "GoDot", "Lua", "Maya"]
        },
        {
            category: "Design",
            categoryCN: "策划设计",
            items: ["Gameplay Design", "System Design", "Level Design", "Battle Design", "Worldview Design", "Script Writing", "Character Design"]
        },
        {
            category: "Soft Skills",
            categoryCN: "软技能",
            items: ["Passionate", "Precise", "Leadership & Management", "Empathy", "Critical-Thinking"]
        }
    ]
};

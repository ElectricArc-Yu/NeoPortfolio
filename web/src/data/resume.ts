import type { ResumeData } from '../data/types';

export const resumeData: ResumeData = {
    header: {
        names: {
            CN: "于陈浩然",
            EN: "Yu Chenhaoran",
            JA: "Yu Chenhaoran"
        },
        email: "YuChenhaoran@Preludegames.com",
        roles: {
            CN: "游戏策划 & 游戏开发",
            EN: "Game Designer & Game Developer",
            JA: "ゲームプランナー ＆ ゲーム開発"
        },
        links: [
            { labels: { CN: "GitHub", EN: "GitHub", JA: "GitHub" }, urls: { CN: "https://github.com/ElectricArc-Yu", EN: "https://github.com/ElectricArc-Yu" } },
            { labels: { CN: "LinkedIn", EN: "LinkedIn", JA: "LinkedIn" }, urls: { CN: "https://linkedin.com/in/yuchenhaoran", EN: "https://linkedin.com/in/yuchenhaoran" } }
        ]
    },
    about: {
        CN: "策划+技术双修的游戏设计师，专注于战斗体验与系统架构。擅长在资源受限环境下快速验证核心玩法，将设计构想转化为可执行方案。",
        EN: "A Game Designer with dual expertise in design and programming. Focused on combat experience and system architecture. Excels at rapidly validating core gameplay under resource constraints, transforming design concepts into executable solutions.",
        JA: "デザインとプログラミングの両方に精通したゲームデザイナー。戦闘体験とシステムアーキテクチャに焦点を当てる。リソースの制約下でコアなゲームプレイを迅速に検証し、デザインコンセプトを実行可能なソリューションに変換することに長けている。"
    },
    experience: [
        {
            companies: {
                CN: "上海尤古多拉希尔科技有限公司",
                EN: "Prelude Games",
                JA: "Prelude Games"
            },
            roles: {
                CN: "创意总监",
                EN: "Founder / Creative Director",
                JA: "創業者 / クリエイティブディレクター"
            },
            period: "2024.05 - Present",
            sizes: {
                CN: "0-20人",
                EN: "0-20 people",
                JA: "0-20人"
            },
            details: {
                CN: [
                    "项目统筹：在种子轮融资前的极限资源约束下(3人核心团队+数十万债权),独立完成从立项到投资人沟通的全流程",
                    "玩法预研 Owner：主导 ARPG 项目核心战斗体验(乐器战斗+主副机协同)的设计验证与收敛,使用 UE 蓝图搭建 POC 原型",
                    "IP 与体验框架：构建原创 IP 世界观底座(40+ 文档数万字)、系统架构图、角色/区域设定,支撑规模化扩展",
                    "标准与流程：输出 10+ 设计模板与 6 份 Review 规范(SDD/LDD/角色设定等),将设计迭代从 4-5 次降至 1-2 次",
                    "跨职能管理：承担设计 Owner 拆解 Scope,协调极度有限的程序与美术资源,培养 2 名成员至可独立决策程度"
                ],
                EN: [
                    "Project Leadership: Under extreme seed-round constraints (3-person core + minimal funding), independently completed full cycle from concept to investor communication",
                    "Gameplay R&D Owner: Led ARPG core combat validation (instrument combat + dual-character system), built POC prototypes using UE Blueprints",
                    "IP & Framework: Constructed original IP worldview foundation (40+ docs, tens of thousands of words), system architecture, character/region settings for scaling",
                    "Standards & Process: Developed 10+ design templates and 6 review methodologies (SDD/LDD/character settings, etc.), reducing design iterations from 4-5 to 1-2",
                    "Cross-functional Management: Scoped work as Design Owner, coordinated limited resources, mentored 2 members to independent decision-making level"
                ],
                JA: [
                    "プロジェクトリーダーシップ：シードラウンドの極端な制約下（3人のコアチーム + 最小限の資金）で、コンセプトから投資家とのコミュニケーションまでの全サイクルを独立して完了",
                    "ゲームプレイR&Dオーナー：ARPGのコア戦闘検証（楽器戦闘 + デュアルキャラクターシステム）を主導し、UEブループリントを使用してPOCプロトタイプを構築",
                    "IPとフレームワーク：オリジナルのIP世界観の基礎（40以上のドキュメント、数万語）、システムアーキテクチャ、スケーリングのためのキャラクター/地域設定を構築",
                    "標準とプロセス：10以上のデザインテンプレートと6つのレビュー手法（SDD/LDD/キャラクター設定など）を開発し、デザインの反復を4〜5回から1〜2回に削減",
                    "部門間管理：デザインオーナーとしてスコープを定義し、限られたリソースを調整。2名のメンバーを独立した意思決定レベルまで育成"
                ]
            }
        },
        {
            companies: {
                CN: "湖南诺汐游科技有限公司",
                EN: "Hunan Nuoxiyou Technology Co. Ltd.",
                JA: "Hunan Nuoxiyou Technology Co. Ltd."
            },
            roles: {
                CN: "主策划",
                EN: "Lead Designer",
                JA: "リードデザイナー"
            },
            period: "2023.02 - 2023.07",
            sizes: {
                CN: "0-20人",
                EN: "0-20 people",
                JA: "0-20人"
            },
            details: {
                CN: [
                    "商业成果：主导 3 款 MC 模组设计,累计销量 100 万+,首周上榜、发售月进入平台排行榜前五,评分 4.5",
                    "核心循环设计：《辐射生存》自动化+机甲战斗;《恐怖岛》双消耗(SAN+饱食度)节奏控制",
                    "系统与内容落地：完成 8 大核心系统设计,落地 80+ 武器、50+ 敌人/BOSS、100+ 建筑方块、15+ 生物群系",
                    "数据驱动迭代：通过词云分析 2K+ 玩家反馈,将痛点转化为可执行改动,使销售额提升 10%、评分提升 0.2",
                    "团队效能：作为唯一策划协调 12 人团队,引入 Git 版本管理与规范命名,将开发周期从 4 个月缩短至 2 个月"
                ],
                EN: [
                    "Commercial Results: Led design of 3 MC mods with 1M+ total sales, charted in first week, top 5 on platform in launch month, 4.5 rating",
                    "Core Loop Design: Nuclear Survival (base building + automation + mech); Horror Isle (dual-consumption pacing)",
                    "Systems & Content Delivery: Designed 8 core systems; delivered 80+ weapons, 50+ enemies/bosses, 100+ building blocks, 15+ biomes",
                    "Data-Driven Iteration: Word-cloud analysis of 2K+ player feedback; transformed pain points into actionable changes, boosting sales 10% and ratings 0.2",
                    "Team Efficiency: As sole designer, coordinated 12-person team; introduced Git + naming standards, reducing dev cycles from 4 to 2 months"
                ],
                JA: [
                    "商業的成果：合計100万回以上の売り上げ、リリース初週のチャートイン、リリース月のプラットフォームランキングトップ5、評価4.5を記録した3つのMC Modのデザインを主導",
                    "コアループデザイン：Nuclear Survival（基地建設 + 自動化 + メカ）、Horror Isle（二重消費ペーシング）",
                    "システムとコンテンツの提供：8つのコアシステムを設計。80以上の武器、50以上の敵/ボス、100以上のビルディングブロック、15以上のバイオームを提供",
                    "データ駆動の反復：2000件以上のプレイヤーフィードバックのワードクラウド分析。問題点を実行可能な変更に変換し、売り上げを10%、評価を0.2向上",
                    "チーム効率：唯一のデザイナーとして12人のチームを調整。Gitと命名標準を導入し、開発サイクルを4ヶ月から2ヶ月に短縮"
                ]
            }
        }
    ],
    education: [
        {
            period: "2023 - 2024",
            schools: {
                CN: "上海温哥华电影学院",
                EN: "Shanghai Vancouver Film School",
                JA: "上海バンクーバー映画学院"
            },
            degrees: {
                CN: "高等文凭 (游戏设计)",
                EN: "Diploma (Game Design)",
                JA: "高等ディプロマ（ゲームデザイン）"
            },
            gpa: "3.30/4.0",
            awards: ["Talent Scheme Scholarship"]
        },
        {
            period: "2021 - 2023",
            schools: {
                CN: "南昌理工学院",
                EN: "Nanchang Institute of Technology",
                JA: "南昌理工学院"
            },
            degrees: {
                CN: "学士学位 (软件工程)",
                EN: "B.Eng (Software Engineering)",
                JA: "学士（ソフトウェア工学）"
            },
            gpa: "2.59/4.0"
        },
        {
            period: "2018 - 2021",
            schools: {
                CN: "南昌理工学院",
                EN: "Nanchang Institute of Technology",
                JA: "南昌理工学院"
            },
            degrees: {
                CN: "专科文凭 (软件技术)",
                EN: "A.Eng (Software Technology)",
                JA: "短期大学士（ソフトウェア技術）"
            },
            gpa: "1.92/4.0"
        }
    ],
    certifications: [
        /** 
        {
            id: 'ocjp',
            abbreviation: 'OCJP',
            titles: {
                CN: 'Oracle 认证 Java 程序员',
                EN: 'Oracle Certified Java Programmer',
                JA: 'Oracle 認定 Java プログラマ'
            },
            date: '2020-12',
            url: 'https://your-certification-link.com',
            icon: '/assets/images/OCP.png',
            highlight: true
        },
        {
            id: 'ielts',
            abbreviation: 'IELTS',
            titles: {
                CN: '雅思 5.5 (B1 语言认证)',
                EN: 'IELTS 5.5 (CEFR B1)',
                JA: 'IELTS 5.5 (CEFR B1)'
            },
            date: '2025',
            pdfUrl: '/assets/images/IELTS.png',
        },
        {
            id: 'starbucks',
            titles: {
                CN: '星巴克咖啡学院 300: 产地与道德采购',
                EN: 'Starbucks Coffee Academy 300: Origin & Ethical Sourcing',
                JA: 'スターバックスコーヒーアカデミー300: 産地と倫理的調達'
            },
            date: '2025-05',
            pdfUrl: '/assets/docs/sb.pdf',
            icon: '/assets/images/sbicon.png'
        }
        */
    ],
    skills: [
        {
            category: "Development",
            categories: { CN: "程序开发", EN: "Development", JA: "開発" },
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
            categories: { CN: "策划设计", EN: "Design", JA: "デザイン" },
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
            categories: { CN: "团队协作", EN: "Leadership", JA: "リーダーシップ" },
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
        texts: {
            CN: "顾问咨询？商务合作？项目合作？工作机会？立即联系我！",
            EN: "Consulting? Business? Project Collaboration? Job Opportunities? Contact Me Now!",
            JA: "コンサルティング？ビジネス？プロジェクトのご相談？お仕事のご依頼？今すぐお問い合わせください！"
        },
        link: "/contact"
    }
};

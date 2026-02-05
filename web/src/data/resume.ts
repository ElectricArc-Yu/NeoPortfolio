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
        CN: "具备策划与技术双重背景的游戏设计师，专注于核心体验与系统架构搭建。擅长在资源受限环境下快速验证核心玩法，将抽象的设计构想转化为高品质的可执行方案。",
        EN: "Hybrid Game Designer & Developer specializing in core mechanics and system architecture. Expert in rapidly validating core gameplay loops under strict resource constraints and translating high-level concepts into production-ready solutions.",
        JA: "デザインとプログラミングの双方に精通したゲームデザイナー。体験とシステム構築を専門とする。限られたリソースの中でコアゲームプレイを迅速に検証し、抽象的なコンセプトを実行可能なソリューションへ具現化することに長けている。"
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
                EN: "Founder",
                JA: "創業者"
            },
            period: "2024.05 - Present",
            sizes: {
                CN: "0-20人",
                EN: "0-20 employees",
                JA: "0-20人"
            },
            details: {
                CN: [
                    "工作室统筹：在极度受限的种子轮环境下（3人核心团队），全权负责从立项、研发到投资人对接的全生命周期管理",
                    "核心玩法攻坚：主导 ARPG 核心战斗系统（乐器战斗+双角色协同）的研发，利用 UE 蓝图快速构建并验证 POC 原型",
                    "IP 与世界观构建：指导搭建原创 IP 世界观底层架构（40+ 份文档，数万字设定），确立角色与区域设计的标准化规范，为后续内容量产奠定基础",
                    "流程标准化：制定 10+ 项设计模板与评审规范（SDD/LDD/角色设定等），将设计迭代次数从 4-5 次大幅降低至 1-2 次，显著提升研发效能",
                    "跨职能协作与人才培养：作为设计负责人拆解项目 Scope，高效协调程序与美术资源，并成功培养 2 名初级成员具备独立决策能力"
                ],
                EN: [
                    "Studio Leadership: Orchestrated full studio operations from concept to investor readiness under strict seed-stage constraints (3-person core team).",
                    "Gameplay Innovation: Spearheaded R&D for core ARPG combat mechanics (Instrument Combat + Dual-Character System); built functional POC prototypes using UE Blueprints.",
                    "IP Architecture: Guided the construction of a comprehensive original IP foundation (40+ design docs), establishing scalable standards for character and world building.",
                    "Pipeline Optimization: Established standardized design workflows and review protocols, reducing design iteration cycles by 60% (from 4-5 to 1-2 passes).",
                    "Technical Direction: Managed project scope and cross-functional resources; mentored junior members to reach independent decision-making proficiency."
                ],
                JA: [
                    "スタジオ運営：シード期の厳しい制約下（3名のコアチーム）で、コンセプト立案から投資家対応に至るまでの全プロセスを統括",
                    "ゲームプレイ開発：ARPGのコア戦闘システム（楽器戦闘＋デュアルキャラクター）の研究開発を主導し、UEブループリントを用いてPOCプロトタイプを構築・検証",
                    "IP構築：オリジナルIPの世界観基盤（40以上のドキュメント）を構築し、キャラクターやエリア設定の標準化を確立してスケールアップに対応",
                    "プロセス最適化：10以上のデザインテンプレートとレビュー基準を策定し、設計の反復回数を4〜5回から1〜2回へと大幅に削減",
                    "チームマネジメント：デザイン責任者としてスコープ管理を行い、限られたリソースを最適配分。ジュニアメンバー2名を独り立ちできるレベルまで育成"
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
                EN: "Lead Game Designer",
                JA: "リードゲームデザイナー"
            },
            period: "2023.02 - 2023.07",
            sizes: {
                CN: "0-20人",
                EN: "0-20 employees",
                JA: "0-20人"
            },
            details: {
                CN: [
                    "商业化成果：主导 3 款 MC 商业模组设计，累计销量突破 100 万份，首周即跻身畅销榜，发售月维持平台前五，保持 4.5/5.0 高评分",
                    "核心循环设计：设计《辐射生存》的自动化建造+机甲战斗循环，以及《恐怖岛》的 SAN 值+饱食度双资源生存压力模型",
                    "内容量产落地：完成 8 大核心系统架构，统筹落地 80+ 种武器、50+ 种怪物/BOSS、100+ 种建筑方块及 15+ 个特色生物群系",
                    "数据驱动调优：基于 2000+ 条玩家反馈进行词云分析，精准定位体验痛点，迭代后实现销售额提升 10%、评分提升 0.2",
                    "项目管理：作为唯一策划协调 12 人研发团队，引入 Git 工作流与命名规范，成功将开发周期从 4 个月压缩至 2 个月"
                ],
                EN: [
                    "Market Performance: Led design for 3 Minecraft commercial mods achieving 1M+ total sales; consistently charted in Top 5 post-launch with a 4.5/5.0 rating.",
                    "Systems Design: Engineered complex core loops including automation/mech combat for 'Nuclear Survival' and dual-resource management for 'Horror Isle'.",
                    "Content Delivery: Architected 8 core systems and supervised production of 80+ weapons, 50+ enemies, and 15+ biomes.",
                    "Data-Driven Iteration: Analyzed 2,000+ user feedback points to identify pain points, resulting in a 10% revenue uplift and 0.2 rating increase after updates.",
                    "Production Efficiency: Coordinated a 12-person team as the sole designer; introduced Git workflows and naming standards, cutting development cycles by 50%."
                ],
                JA: [
                    "市場成果：Minecraft商用MOD 3作品のデザインを主導し、累計販売数100万本以上を達成。発売初月からランキングトップ5入りし、評価4.5/5.0を維持",
                    "システムデザイン：「Nuclear Survival」の自動化＋メカ戦闘や、「Horror Isle」のSAN値＋満腹度管理など、コアとなるゲームループを設計",
                    "コンテンツ実装：8つの主要システムを構築し、80種以上の武器、50種以上の敵キャラクター、15以上のバイオームの実装を指揮",
                    "データ主導の改善：2,000件以上のユーザーフィードバックを分析して課題を特定。改善アップデートにより売上10%増、評価スコア0.2ポイント向上を実現",
                    "生産性向上：唯一のプランナーとして12名のチームを調整。Gitワークフローと命名規則を導入し、開発期間を4ヶ月から2ヶ月に半減"
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

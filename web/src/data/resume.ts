import type { ResumeData } from '../data/types';

export const resumeData: ResumeData = {
    header: {
        names: {
            CN: "于陈浩然",
            EN: "Yu Chenhaoran",
            JA: "于 陳浩然"
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
        CN: "具备策划与技术复合背景的游戏设计师，专注于核心玩法设计、系统架构搭建与快速原型验证。注重在资源约束下通过严谨的机制设计与敏捷工程实践，将抽象创意转化为扎实可落地的可玩体验。",
        EN: "Hybrid Game Designer & Developer focused on core gameplay design, systemic architecture, and rapid prototyping. Dedicated to translating abstract creative concepts into robust, playable experiences through disciplined design and agile engineering under resource constraints.",
        JA: "企画とプログラミングの双方に知見を持つゲームデザイナー。コアゲームプレイ設計、システム構築、プロトタイプ検証を軸に活動。限られたリソースの中で論理的な設計とアジャイルな実装を組み合わせ、抽象的なアイデアを実行可能な体験へと具現化することに注力している。"
    },
    experience: [
        {
            companies: {
                CN: "上海尤古多拉希尔科技有限公司",
                EN: "Prelude Games",
                JA: "Prelude Games (上海尤古多拉希尔科技)"
            },
            roles: {
                CN: "联合创始人 / 创意总监",
                EN: "Co-Founder / Creative Director",
                JA: "共同創業者 / クリエイティブディレクター"
            },
            period: "2024.05 - Present",
            sizes: {
                CN: "3-15人",
                EN: "3-15 employees",
                JA: "3-15人"
            },
            details: {
                CN: [
                    "团队与项目推进：作为初创团队核心成员，经历从3人种子团队逐步拓展至15人跨职能团队的完整研发周期，参与立项、原型研发与外部合作沟通",
                    "核心玩法攻坚：主导原创ARPG项目（Project FR）核心战斗原型研发，基于UE蓝图与GAS框架搭建并验证“乐器战斗+双角色协同”核心玩法闭环",
                    "IP 与世界观架构：构建原创IP底层世界观体系（输出40+份架构文档与数万字设定资料），确立区域、势力与角色设计的标准化规范，保障多产品线设定自洽",
                    "流程与设计规范化：制定设计文档规范（GDD/SDD）与评审机制，优化跨职能协作流程，降低沟通磨合成本并提升迭代效率",
                    "阶段收尾与资产归档：在项目阶段性调整与资源受限周期中，主导完成核心设计方案、代码工程及美术/世界观资产的结构化归档与知识沉淀，为后续资产复用与项目重启奠定基础"
                ],
                EN: [
                    "Team & Project Growth: As a core founding member, contributed across the development lifecycle from an initial 3-person seed team expanding to a 15-person cross-functional group, managing scoping, prototyping, and partner communications.",
                    "Core Gameplay Prototyping: Led combat prototype R&D for an original ARPG (Project FR), leveraging Unreal Engine Blueprints and GAS to construct and validate the 'Instrument Combat + Companion Synergy' loop.",
                    "IP & Worldbuilding Architecture: Authored foundational universe documentation for an original IP (40+ design specs and comprehensive lore bibles), establishing standardized frameworks across factions and characters for multi-genre alignment.",
                    "Pipeline Standardization: Established design document standards (GDD/SDD) and structured review workflows, improving cross-functional efficiency and reducing iteration overhead.",
                    "Milestone Conclusion & Asset Archival: Following team restructuring and resource realignment, oversaw the systematic archival of design specifications, codebase modules, and creative lore assets, preserving key intellectual properties for future deployment."
                ],
                JA: [
                    "チーム拡大とプロジェクト推進：創業コアメンバーとして、3名の立ち上げ期から15名規模への組織拡大と開発進行を担当。企画立案からプロトタイプ検証、外部連携まで幅広く推進",
                    "コアプレイの研究開発：オリジナルARPG（Project FR）において、UEブループリントおよびGASを活用した「楽器戦闘＋バディ連携」のコア戦闘メカニクスを構築・検証",
                    "IP・世界観の基盤構築：オリジナルIPの基盤設計を主導（40以上の設定資料・仕様書を作成）。勢力・キャラクター設計の標準規格を策定し、複数タイトル間での整合性を担保",
                    "制作プロセスの標準化：ゲームデザイン仕様書（GDD/SDD）のテンプレートとレビュー基準を整備し、職種間のコミュニケーションコストを削減",
                    "マイルストーン完了と資産アーカイブ：組織の体制変更とリソース制約に伴い、主要な設計書、プログラムモジュール、世界観設定の構造化アーカイブを主導。将来の再起動や資産活用に向けた基盤を整備"
                ]
            }
        },
        {
            companies: {
                CN: "湖南诺汐游科技有限公司",
                EN: "Hunan Nuoxiyou Technology Co. Ltd.",
                JA: "Hunan Nuoxiyou Technology Co. Ltd. (湖南諾汐遊科技)"
            },
            roles: {
                CN: "主策划",
                EN: "Lead Game Designer",
                JA: "リードゲームデザイナー"
            },
            period: "2023.02 - 2023.07",
            sizes: {
                CN: "12人",
                EN: "12 employees",
                JA: "12人"
            },
            details: {
                CN: [
                    "商业化模组设计：主导 3 款 Minecraft 商业模组的系统设计与数值调优，累计销量突破 100 万份，上线后进入平台畅销榜前列，综合评分保持 4.5/5.0",
                    "核心循环设计：主导设计《辐射生存》的自动化建造与机甲对抗循环，以及《恐怖岛》的 SAN 值与饱食度多维生存资源模型",
                    "内容量产与落地：完成 8 大核心系统架构设计，统筹推进 80+ 种武器装备、50+ 种怪物行为及 15+ 个特色生物群系的配置与落地",
                    "数据驱动体验调优：基于 2,000+ 条玩家社区反馈定位体验瓶颈，针对性调整前期资源获取曲线与引导节奏，显著改善玩家留存与好评率",
                    "团队研发协作：作为策划负责人协调 12 人研发团队，推动建立 Git 分支管理与资产命名规范，保障版本交付的稳定性与研发效率"
                ],
                EN: [
                    "Commercial Mod Design: Led systems design and numerical balancing for 3 commercial Minecraft mods, achieving 1M+ total sales, consistently charting near the top of platform sales lists with a 4.5/5.0 average user rating.",
                    "Core Loop Architecture: Engineered core loops including automation/mech combat systems in 'Nuclear Survival' and multi-resource survival pressure dynamics in 'Horror Isle'.",
                    "Content Pipeline Coordination: Architected 8 core subsystems and coordinated production pipelines for 80+ weapons, 50+ enemy archetypes, and 15+ custom biomes.",
                    "Data-Driven Tuning: Analyzed 2,000+ player feedback points to diagnose early-game onboarding friction, rebalancing early progression curves to improve player retention and review sentiment.",
                    "Team Workflow Optimization: Coordinated a 12-person development team as lead designer; established Git branch conventions and asset naming standards to ensure build stability and delivery efficiency."
                ],
                JA: [
                    "商用MODの設計：Minecraft向け商用MOD 3作品のシステム設計と数値調整を主導。累計100万本以上の販売を記録し、プラットフォームの売上上位にランクイン（平均評価 4.5/5.0を維持）",
                    "コアループ構築：「Nuclear Survival」における自動化工場とメカ戦闘のループ、「Horror Isle」におけるSAN値と飢えの多層的なサバイバルリソース構造を設計",
                    "コンテンツ量産の推進：8つの基幹システムを設計し、80種以上の装備品、50種以上の敵挙動、15以上のバイオームの仕様策定と実装を統括",
                    "データ主導の改善：2,000件以上のプレイヤーフィードバックを分析して序盤の離脱要因を特定し、リソース獲得曲線とチュートリアルを改善して満足度を向上",
                    "チーム開発の効率化：12名のチームにおいてGit運用ルールとアセット命名規則の導入を推進し、開発サイクルの安定化と効率向上に貢献"
                ]
            }
        }
    ],
    education: [
        {
            period: "2026.09 - 2027.09",
            schools: {
                CN: "蒂赛德大学",
                EN: "Teesside University",
                JA: "ティーズサイド大学"
            },
            degrees: {
                CN: "文学硕士 (游戏设计)",
                EN: "M.A (Games Design)",
                JA: "文学修士（ゲームデザイン）"
            },
            gpa: "",
            awards: [],
            status: 1
        },
        {
            period: "2023.09 - 2024.09",
            schools: {
                CN: "上海温哥华电影学院",
                EN: "Shanghai Vancouver Film School",
                JA: "上海バンクーバー映画学院"
            },
            degrees: {
                CN: "硕士预科文凭 (游戏设计)",
                EN: "Pre-Master Diploma (Game Design)",
                JA: "修士予備校卒業証書（ゲームデザイン）"
            },
            gpa: "3.30/4.0",
            awards: ["Talent Scheme Scholarship"]
        },
        {
            period: "2021.09 - 2023.06",
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
            period: "2018.09 - 2021.06",
            schools: {
                CN: "南昌理工学院",
                EN: "Nanchang Institute of Technology",
                JA: "南昌理工学院"
            },
            degrees: {
                CN: "专科文凭 (软件技术)",
                EN: "Diploma (Software Technology)",
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
            CN: "欢迎交流探讨游戏设计、项目合作或潜在机会，期待与您的联系。",
            EN: "Always open to discussing game design, project collaborations, or potential opportunities. Looking forward to connecting.",
            JA: "ゲームデザインの議論、プロジェクトのご相談、協業のご機会など、お気軽にご連絡ください。"
        },
        link: "mailto:yu.chr@prelude.games"
    }
};

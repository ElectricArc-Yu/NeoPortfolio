import type { ServicesData } from './types';

/**
 * Services page content data
 * All service-related text content is centralized here for i18n support
 */
export const servicesData: ServicesData = {
    intro: {
        EN: "Hi, I'm <strong>Yu Chenhaoran</strong>, a game designer and technical producer who loves to work with individuals and teams to solve complex creative and engineering problems.",
        CN: "嗨，我是<strong>于陈浩然</strong>，一名游戏设计师与技术制作人，热爱与个人和团队合作，解决复杂的创意与工程难题。",
        JA: "こんにちは、<strong>于陳浩然</strong>です。個人やチームと協力し、複雑なクリエイティブおよびエンジニアリングの問題を解決することを愛するゲームデザイナー・テクニカルプロデューサーです。"
    },
    aboutTitle: {
        EN: 'About Me',
        CN: '关于我',
        JA: '私について'
    },
    aboutContent: {
        EN: `Since 2019, I have been working as a freelance game designer and technical producer across commercial outsourcing and independent projects. My approach combines **Engineering Pragmatism** with **Academic Rigor** to deliver production-ready solutions.

- Worked on **Action RPG, FPS, Visual Novel, and Simulation games** across Unity and Unreal Engine
- Designed and implemented **data-oriented architectures**, including custom serialization protocols and network layers
- Built **production pipelines** with CI/CD, TDD coverage, and automated toolchains
- Published **academic papers** on game design theory and player engagement models
- Developed **custom editor tools** and runtime localization utilities for small-scale projects`,

        CN: `自2019年以来，我作为自由职业游戏设计师与技术制作人，参与商业外包与独立项目。我的方法论结合**工程实用主义**与**学术严谨性**，交付可投入生产的解决方案。

- 参与制作 **动作RPG、FPS、视觉小说及模拟类游戏**，覆盖Unity与Unreal引擎
- 设计并实现 **面向数据的架构**，包括自定义序列化协议和网络层
- 搭建 **生产流水线**，包含CI/CD、TDD覆盖及自动化工具链
- 发表 **学术论文**，专注于游戏设计理论与玩家参与模型
- 开发 **自定义编辑器工具** 与小型项目的运行时本地化工具`,

        JA: `2019年以来、フリーランスのゲームデザイナー・テクニカルプロデューサーとして、商業アウトソーシングおよび独立プロジェクトに携わってきました。私のアプローチは**エンジニアリング・プラグマティズム**と**学術的厳密性**を組み合わせ、本番環境に対応したソリューションを提供します。

- UnityとUnreal Engineで**アクションRPG、FPS、ビジュアルノベル、シミュレーションゲーム**の制作に参加
- カスタムシリアライゼーションプロトコルとネットワークレイヤーを含む**データ指向アーキテクチャ**を設計・実装
- CI/CD、TDDカバレッジ、自動化ツールチェーンを備えた**プロダクションパイプライン**を構築
- ゲームデザイン理論とプレイヤーエンゲージメントモデルに関する**学術論文**を発表
- 小規模プロジェクト向けの**カスタムエディターツール**とランタイムローカライゼーションユーティリティを開発`
    },
    sectionTitle: {
        EN: 'How I Can Help You',
        CN: '服务项目',
        JA: '提供可能なサービス'
    },
    ctaText: {
        EN: "Whether you're a studio, indie team, or solo developer — if you need system design expertise, technical pipeline support, or academic consultation, I'd be glad to help. Reach out via [Contact](/contact) or [LinkedIn](https://www.linkedin.com/in/yuchenhaoran/).",
        CN: "无论您是工作室、独立团队还是个人开发者——如果您需要系统设计专业知识、技术流水线支持或学术咨询，我很乐意提供帮助。请通过[联系页面](/contact)或[LinkedIn](https://www.linkedin.com/in/yuchenhaoran/)与我联系。",
        JA: "スタジオ、インディーチーム、個人開発者を問わず、システム設計の専門知識、技術パイプラインのサポート、学術的なコンサルティングが必要な場合は、ぜひご連絡ください。[お問い合わせ](/contact)または[LinkedIn](https://www.linkedin.com/in/yuchenhaoran/)からどうぞ。"
    },
    items: [
        {
            id: 'system-design',
            titles: {
                EN: 'System Design',
                CN: '系统设计',
                JA: 'システムデザイン'
            },
            descriptions: {
                EN: 'Designing core gameplay loops, economy systems, progression mechanics, and combat frameworks with mathematical modeling and simulation validation.',
                CN: '设计核心玩法循环、经济系统、成长机制与战斗框架，结合数学建模与模拟验证。',
                JA: 'コアゲームプレイループ、経済システム、進行メカニクス、戦闘フレームワークを数学的モデリングとシミュレーション検証で設計。'
            },
            icon: '⚙️',
            showPriority: 100
        },
        {
            id: 'technical-production',
            titles: {
                EN: 'Technical Production',
                CN: '技术制作',
                JA: 'テクニカルプロダクション'
            },
            descriptions: {
                EN: 'Pipeline architecture, custom tooling, build automation, and data-oriented design patterns for Unity and Unreal Engine projects.',
                CN: '流水线架构、自定义工具链、构建自动化，以及面向Unity与Unreal引擎项目的数据驱动设计模式。',
                JA: 'UnityおよびUnreal Engineプロジェクト向けのパイプラインアーキテクチャ、カスタムツール、ビルド自動化、データ指向設計パターン。'
            },
            icon: '🔧',
            showPriority: 10
        },
        {
            id: 'gamification',
            titles: {
                EN: 'Gamification',
                CN: '游戏化设计',
                JA: 'ゲーミフィケーション'
            },
            descriptions: {
                EN: 'Developing gameplay mechanics, interactions and UX for products in sectors such as health care, education, and research projects.',
                CN: '为医疗健康、教育培训及学术研究等领域的产品开发游戏机制、交互设计与用户体验。',
                JA: 'ヘルスケア、教育、研究プロジェクトなど、様々な分野の製品向けに游戏プレイメカニクス、インタラクション、UXを開発。'
            },
            icon: '🎮',
            showPriority: 70
        },
        {
            id: 'ideation',
            titles: {
                EN: 'Ideation & Concept',
                CN: '创意与概念',
                JA: 'アイデア・コンセプト'
            },
            descriptions: {
                EN: 'Coming up with core concepts, understanding audience motivation, refining and developing ideas from prototype to production.',
                CN: '提炼核心概念、理解目标受众动机，从原型阶段到生产环境持续打磨与深化创意。',
                JA: 'コアコンセプトの考案、オーディエンスのモチベーション理解、プロトタイプから本番までのアイデア精緻化・発展。'
            },
            icon: '💭',
            showPriority: 80
        },
        {
            id: 'consultancy',
            titles: {
                EN: 'Design Consultancy',
                CN: '设计咨询',
                JA: 'デザインコンサルティング'
            },
            descriptions: {
                EN: 'Expert analysis of existing game systems, economy audits, GDD reviews, and actionable improvement recommendations with academic rigor.',
                CN: '对现有游戏系统进行专业分析，包括经济审计、GDD评审，以及基于学术严谨性的可执行改进建议。',
                JA: '既存ゲームシステムの専門分析、経済監査、GDDレビュー、学術的厳密性に基づく実行可能な改善提案。'
            },
            icon: '💡',
            showPriority: 90
        },
        {
            id: 'ai-native',
            titles: {
                EN: 'AI-Native Workflow',
                CN: 'AI原生工作流',
                JA: 'AIネイティブワークフロー'
            },
            descriptions: {
                EN: 'AI-assisted development workflows, LLM integration for game systems, procedural content generation, and AI-augmented production pipelines.',
                CN: 'AI辅助开发工作流、大语言模型游戏系统集成、程序化内容生成，以及AI增强的生产流水线。',
                JA: 'AI支援開発ワークフロー、ゲームシステムへのLLM統合、プロシージャルコンテンツ生成、AI強化プロダクションパイプライン。'
            },
            icon: '🤖',
            showPriority: 85
        },
        {
            id: 'academic-research',
            titles: {
                EN: 'Academic Research',
                CN: '学术研究',
                JA: '学術研究'
            },
            descriptions: {
                EN: 'Game design theory, player engagement modeling, utility-based decision frameworks, and publication-grade research collaboration.',
                CN: '游戏设计理论、玩家参与建模、基于效用的决策框架，以及出版级学术研究合作。',
                JA: 'ゲームデザイン理論、プレイヤーエンゲージメントモデリング、効用ベースの意思決定フレームワーク、出版品質の研究協力。'
            },
            icon: '📚',
            showPriority: 75
        },
        {
            id: 'mentorship',
            titles: {
                EN: 'Strategy & Directional Guidance',
                CN: '策略引导与设计咨询',
                JA: '戦略的ガイダンス & デザイン相談'
            },
            descriptions: {
                EN: 'Strategic steering for game projects, career path orientation, and expert Q&A sessions to resolve complex conceptual or architectural roadblocks.',
                CN: '提供项目层面的策略引导、职业路径的定点导航，以及针对特定设计瓶颈或架构难题的专家级咨询与答疑。',
                JA: 'ゲームプロジェクトの戦略的な方向付け、キャリアパスのオリエンテーション、および複雑なコンセプトやアーキテクチャの課題を解決するための専門的な相談・質疑応答。'
            },
            icon: '🧭',
            showPriority: 10
        },
        {
            id: 'documentation',
            titles: {
                EN: 'Documentation & Methodology',
                CN: '文档与方法论',
                JA: 'ドキュメントと方法论'
            },
            descriptions: {
                EN: 'GDD architecture, design documentation standards, LOD-based specification systems, and SSOT workflow implementation.',
                CN: 'GDD架构、设计文档标准、基于LOD的规格系统，以及SSOT工作流实施。',
                JA: 'GDDアーキテクチャ、設計ドキュメント標準、LODベースの仕様システム、SSOTワークフローの実装。'
            },
            icon: '📋',
            showPriority: 65
        }
    ],
    serviceStatus: '2026.09-2027.08'
};

import type { Localized } from './types';

export interface GuildCovenantItem {
    iconName: string;
    title: Localized;
    text?: Localized;
}

export interface GuildData {
    coreValues: GuildCovenantItem[];
    covenantTitle: Localized;
    covenantItems: GuildCovenantItem[];
    principlesTitle: Localized;
    principles: GuildCovenantItem[];
    applyTitle: Localized;
    applyDescription: Localized;
    applyButton: Localized;
    footer: Localized;
}

export const guildData: GuildData = {
    coreValues: [
        {
            iconName: "Target",
            title: { CN: "纯粹的创造导向", EN: "Purely Creation Oriented", JA: "純粋な創造志向" }
        },
        {
            iconName: "Shield",
            title: { CN: "尊重与保密", EN: "Respect & Confidentiality", JA: "尊重と守秘義務" }
        },
        {
            iconName: "Zap",
            title: { CN: "挑战而非安逸", EN: "Challenge Over Comfort", JA: "安住ではなく挑戦" }
        }
    ],
    covenantTitle: {
        CN: "新人创造者工会公约 (v1.01)",
        EN: "Guild Convention (v1.01)",
        JA: "新人クリエイターギルド公約 (v1.01)"
    },
    covenantItems: [
        {
            iconName: "Users",
            title: { CN: "1. 群组状态", EN: "1. Group Status", JA: "1. グループの状態" },
            text: {
                CN: "目前群人数上限为50人，所有进群者将被默认为Professional Ready状态，群内沟通方式默认为Professional Only，入群请简单进行自我介绍，闲聊请移步QQ群。",
                EN: "Capacity: 50 members. All members are assumed 'Professional Ready'. Communication is 'Professional Only'. Introduce yourself upon entry; casual chat belongs in QQ groups.",
                JA: "定員50名。「Professional Ready」状態を前提とし、会話は「Professional Only」です。入室時に自己紹介をお願いします。雑談はQQ群で。"
            }
        },
        {
            iconName: "Contact",
            title: { CN: "2. 身份识别", EN: "2. Identification", JA: "2. 身分証明" },
            text: {
                CN: "格式为真实姓名/常用昵称 | 职能，进群请立即修改群名片，48小时未改名将会被踢出。\n职能说明：策划、程序、2D、TA、全栈、3D、声音，具备跨职能能力请选择主能力。",
                EN: "Format: Real Name/Nickname | Role. Update your nickname immediately; 48h deadline or removal.\nRoles: Design, Dev, 2D, TA, Full-stack, 3D, Audio.",
                JA: "形式：本名/ニックネーム | 職能。入室後すぐに変更してください。48時間以内に変更がない場合は除名されます。\n職能：企画、プログラム、2D、TA、フルスタック、3D、サウンド。"
            }
        },
        {
            iconName: "Zap",
            title: { CN: "3. Landing Phase", EN: "3. Action Required", JA: "3. 行動力の証明" },
            text: {
                CN: "进群48小时内提交行动力证明：\n- 策划：一页纸设计案、分析/反推等\n- 程序：核心代码截图、GitHub链接等\n- 美术：草图或拼图、ArtStation链接等\n无产出者将被移除。",
                EN: "Submit proof of action within 48h:\n- Design: One-page GDD, analysis.\n- Dev: Core logic, GitHub link.\n- Art: Sketches, Portfolio.\nThose without output will be removed.",
                JA: "48時間以内に行動力の証明を提出してください：\n- 企画：1枚の設計案、分析など\n- プロ：コアロジック、GitHubリンクなど\n- 美術：スケッチ、ポートフォリオなど\nアウトプットがない場合は除名されます。"
            }
        },
        {
            iconName: "XCircle",
            title: { CN: "4. 拒绝空谈", EN: "4. No Empty Talk", JA: "4. 空論の拒否" },
            text: {
                CN: "禁止发布无载体的“天才方案”。任何设计讨论必须附带载体：设计案、白盒、原型、草图或精确文字说明。点子一文不值，执行与分析是基本盘。",
                EN: "No 'genius ideas' without substance. All discussions must include attachments: docs, white-boxes, prototypes, or precise text structure. Execution > Ideas.",
                JA: "中身のない「天才的な案」は禁止です。議論には必ず設計書、プロトタイプ、スケッチなどの実体を伴わせてください。アイディアより実行力です。"
            }
        },
        {
            iconName: "Lock",
            title: { CN: "5. 关于讨论", EN: "5. Safe Boundaries", JA: "5. 議論の制限" },
            text: {
                CN: "严禁谈论政治、国际形势、非法或情色信息。话题可自由发起。为了你我安全，请保持在群内沟通。",
                EN: "Strictly no politics, illegal content, or adult material. Feel free to start topics, but keep communication within the group for safety.",
                JA: "政治、国際情勢、違法または性的な情報の投稿は厳禁です。話題は自由ですが、安全のためにグループ内でのコミュニケーションを維持してください。"
            }
        },
        {
            iconName: "MessageCircle",
            title: { CN: "6. 沟通礼仪", EN: "6. Communication Etiquette", JA: "6. コミュニケーション・マナー" },
            text: {
                CN: "遵守专业礼仪：禁止教美术画画/用模糊语言描述程序需求/对策划说“我想要”。提问前请学会智慧的提问。说对方能听懂的语言。",
                EN: "Professional etiquette: Don't lecture artists on technique/Devs with vague terms/Designers with 'I want'. Learn to ask smart questions. Speak the other's language.",
                JA: "プロとしてのマナーを守りましょう：デザイナーに描き方を指示したり、プログラマーに曖昧な指示を出したりするのは禁止です。質問の仕方を学び、相手が理解できる言葉で話してください。"
            }
        },
        {
            iconName: "HeartHandshake",
            title: { CN: "7. 反馈原则", EN: "7. Feedback Principles", JA: "7. フィードバック原則" },
            text: {
                CN: "感受 > 方法：像病人描述症状（“我觉得太慢”），而不是开处方（“你应该削弱敌人”）。柔和表达更有助于改进。",
                EN: "Feeling > Prescription: Describe symptoms ('It feels slow') rather than prescribing ('Nerf the enemy'). Soft feedback is more effective.",
                JA: "感情 > 手法：医者に症状を伝えるように（「テンポが遅い」など）、解決策を押し付けるのではなく感じたことを伝えてください。"
            }
        },
        {
            iconName: "FileCode",
            title: { CN: "8. 文档即契约", EN: "8. Docs as Contract", JA: "8. ドキュメントは契約" },
            text: {
                CN: "任何设计、迭代、讨论最终必须落地为文档或原型。禁止“口头设计”。即便个人项目也需文档支持，否则视为“伪设计”。",
                EN: "All designs and discussions must lead to docs or prototypes. No 'verbal design'. Even solo projects need documentation to be considered real design.",
                JA: "すべての設計や議論はドキュメントやプロトタイプに落とし込んでください。「口頭のみの設計」は禁止です。個人プロジェクトでも重要です。"
            }
        },
        {
            iconName: "Activity",
            title: { CN: "9. 考虑限制", EN: "9. Consider Constraints", JA: "9. 制限の考慮" },
            text: {
                CN: "创意提出必须考虑成本。优秀的设计师是戴着镣铐跳舞。请在方案下方输出自己认为方案有哪些层面的限制（技术/资源）。",
                EN: "Proposals must consider technical and resource costs. Great designers dance in chains. List estimated constraints at the bottom of your plans.",
                JA: "提案にはコストを考慮してください。優れたデザイナーは制約の中でこそ輝きます。技術的・美術的な制限を明記してください。"
            }
        },
        {
            iconName: "UserMinus",
            title: { CN: "10. 清退机制", EN: "10. Pruning", JA: "10. メンバーの整理" },
            text: {
                CN: "这里没有观众席。每14天清理一次长期不发言、无产出、无反馈的人。除了自己没有人有义务为你的成长负责。",
                EN: "No spectators. Bi-weekly cleanup for those inactive or without output. No one is responsible for your growth but yourself.",
                JA: "観客席はありません。14日間発言やアウトプットがない方は整理の対象となります。自分の成長に責任を持ってください。"
            }
        },
        {
            iconName: "Headphones",
            title: { CN: "11. 管理员并非客服", EN: "11. Moderation Policy", JA: "11. 運営は非カスタマーサポート" },
            text: {
                CN: "依靠社群互助进行Peer Review。深度、确定性的针对性反馈（个人项目/路径咨询）为付费预约制：500RMB/55min（需提前48h）。",
                EN: "Rely on community Peer Review. Deep, personalized feedback or career consultancy is available via appointment: 500RMB/55min (48h notice).",
                JA: "コミュニティ内での助け合いを優先してください。個人的な深いフィードバックが必要な場合は、予約制の有料相談(500RMB/55分)も可能です。"
            }
        },
        {
            iconName: "Award",
            title: { CN: "12. 信誉机制 (REP)", EN: "12. Reputation (REP)", JA: "12. 信用メカニズム (REP)" },
            text: {
                CN: "引入REP系统。+REP来自于高质量互助与认可（可获MVP头衔）。-REP针对违规行为，累计达到3个将移出群组，达到15个永久禁入。",
                EN: "+REP for high-quality help (MVP rewards). -REP for rule violations. 3 violations lead to temporary removal; 15 lead to a permanent ban.",
                JA: "貢献を量化するREPシステム。+REPは質の高い互助に（MVP称号）。-REPは規約違反に付与され、累積により厳しい処置が取られます。"
            }
        }
    ],
    principlesTitle: {
        CN: "工会价值观",
        EN: "Guild Values",
        JA: "ギルドの価値観"
    },
    principles: [
        {
            iconName: "ArrowRightLeft",
            title: { CN: "关于成员", EN: "About Members", JA: "メンバーについて" },
            text: {
                CN: "成员只拥有选择权，不被保证结果。进入、停留、退出，都是个人选择；工会不为任何选择负责。",
                EN: "Members only have the right to choose, with no guaranteed results. Entry, stay, and exit are individual choices.",
                JA: "メンバーは選択権のみを持ち、結果は保証されません。入会、滞在、退会はすべて個人の選択です。"
            }
        },
        {
            iconName: "Globe",
            title: { CN: "关于工会", EN: "About the Guild", JA: "ギルドについて" },
            text: {
                CN: "工会不判断对错，只判断是否发生，只关心：有没有做、有没有持续、有没有被他人回应。",
                EN: "The Guild does not judge right or wrong, only whether it happened. We care about activity and persistence.",
                JA: "ギルドは正誤を判断せず、発生したかどうかのみを判断します。活動の継続と反応にのみ関心があります。"
            }
        },
        {
            iconName: "Eye",
            title: { CN: "关于反馈", EN: "About Feedback", JA: "フィードバックについて" },
            text: {
                CN: "工会只反馈“被看见”不是“被认可”。管理员与主持人的点赞代表确认存在，而非价值判断。",
                EN: "Feedback means 'being seen,' not 'being approved.' Moderator likes represent existence, not judgment.",
                JA: "フィードバックは「見られた」ことのみを意味し、「承認」ではありません。管理者の評価は存在の確認です。"
            }
        },
        {
            iconName: "HelpCircle",
            title: { CN: "关于帮助", EN: "About Helping", JA: "助け合いについて" },
            text: {
                CN: "工会内部所有帮助必须是非定向、非承诺、非保证结果的。",
                EN: "All help within the Guild must be non-targeted and without guaranteed results.",
                JA: "ギルド内でのすべての助け合いは非約束的であり、結果を保証しないものでなければなりません。"
            }
        },
        {
            iconName: "Award",
            title: { CN: "关于信誉", EN: "About Reputation", JA: "信用について" },
            text: {
                CN: "唯一功能是：记录长期、可见、可被他人感知的参与。",
                EN: "Reputation only functions to record long-term, visible, and perceivable participation.",
                JA: "唯一の機能は、長期的で可視化され、他者に感知可能な参加を記録することです。"
            }
        },
        {
            iconName: "CheckCircle2",
            title: { CN: "关于成果", EN: "About Results", JA: "成果について" },
            text: {
                CN: "工会不关心你做得好不好，只关心你有没有做完。",
                EN: "The Guild does not care about quality, only about completion.",
                JA: "ギルドは出来栄えを気にせず、完遂したかどうかのみを気にします。"
            }
        },
        {
            iconName: "LogOut",
            title: { CN: "关于淘汰", EN: "About Elimination", JA: "淘汰について" },
            text: {
                CN: "工会不清退人，只清退行为。没有冲突、没有审判、没有挽留。",
                EN: "The Guild does not purge people, only behaviors. No conflict, no judgment, no retention.",
                JA: "ギルドは人を排除するのではなく、行為を排除します。対立も、審判も、引き止めもありません。"
            }
        },
        {
            iconName: "Anchor",
            title: { CN: "关于限制", EN: "About Constraints", JA: "制限について" },
            text: {
                CN: "创意源于限制而非自由。工会崇尚“戴着镣铐跳舞”，因为无限的自由只会导致平庸，限制才是创造力的压强。",
                EN: "Creativity stems from constraints. The Guild values 'dancing in chains,' as infinite freedom leads to mediocrity.",
                JA: "創造性は制限から生まれます。無限の自由は凡庸を招くため、ギルドは「手錠をかけられたダンス」を尊重します。"
            }
        }
    ],
    applyTitle: {
        CN: "如何入会",
        EN: "How to Join",
        JA: "入会方法"
    },
    applyDescription: {
        CN: "如果你读完公约，接受挑战，请将你的 Landing Phase 作业（一页纸设计案 / 核心代码）发送至我的邮箱。我们只招收那 1% 的优质开发者。",
        EN: "If you have read the convention and accept the challenge, please send your 'Landing Phase' assignment (one-page design / core code) to my email. We only recruit the top 1% of quality creators.",
        JA: "公約を読み、挑战を受け入れる場合は、「Landing Phase」の課題（1ページの設計案またはコアコード）を私のメールまで送信してください。1%の質の高いクリエイターのみを募集しています。"
    },
    applyButton: {
        CN: "发送申请邮件",
        EN: "Send Application Email",
        JA: "応募メールを送信"
    },
    footer: {
        CN: "邮件标题请注明 [Guild Application]",
        EN: "Email subject must include [Guild Application]",
        JA: "メールの件名には [Guild Application] と明記してください"
    }
};

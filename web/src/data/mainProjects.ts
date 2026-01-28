import type { MainProject } from './types';

export const mainProjects: MainProject[] = [
    {
        id: 'netease-minecraft-mod',
        titles: {
            CN: '网易我的世界模组 (商业项目)',
            EN: 'Minecraft Mods (Commercial Projects)',
            JA: 'NetEase Minecraft Mod (商業プロジェクト)'
        },
        descriptions: {
            CN: '主导三款MC模组设计，累计销量100万+，包含《辐射生存》、《恐怖岛》等知名作品。',
            EN: 'Led design of three MC mods with 1M+ total sales, including "Nuclear Survival" and "Horror Isle".',
            JA: '3つのMinecraft Modの設計を主導し、累計売上100万回以上を記録。「Nuclear Survival」や「Horror Isle」などの人気作を含む。'
        },
        gameType: 'SoC'
    },
    {
        id: 'quest-of-velar-group',
        titles: {
            CN: "Quest Of Velar",
            EN: "Quest Of Velar",
            JA: "Quest Of Velar"
        },
        gameType: 'RPG',
        descriptions: {
            CN: "Quest Of Velar 项目相关工作。",
            EN: "Work related to the Quest Of Velar project.",
            JA: "Quest Of Velarプロジェクト関連の作業。"
        }
    }
];

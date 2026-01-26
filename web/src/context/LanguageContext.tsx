import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'EN' | 'CN';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    EN: {
        'Commercial Projects': 'Commercial Projects',
        'Personal Projects': 'Personal Projects',
        'Project Info': 'Project Info',
        'Quick Links': 'Quick Links',
        'Tech Stack': 'Tech Stack',
        'Work Distribution': 'Work Distribution',
        'Type': 'Game Type',
        'Sales': 'Sales / Hit',
        'Work Hours': 'Work Hours',
        'View Details': 'View Details',
        'Experience': 'Experience',
        'Education': 'Education',
        'Skills': 'Skills',
        'Platform': 'Platform',
        'Project Cycle': 'Project Cycle',
        'Team Size': 'Team Size',
        'Project Role': 'Project Role',
        'GDD Available': 'GDD Document Available',
        'Contact Me': 'Contact Me',
        'Media': 'Media & Analysis',
        'Home': 'Home',
        'Resume': 'Resume',
        'Back to List': 'Back to List',
        'Project Timeline': 'Participated Project Timeline',
        'Project Introduce': 'Project Introduce',
        'All': 'All',
        'Commercial': 'Commercial',
        'Personal': 'Personal',
        'Consultant': 'Consultant',
        'Action': 'Action',
        'RPG': 'RPG',
        'Strategy': 'Strategy',
        'Puzzle': 'Puzzle',
        'Simulation': 'Simulation',
        'Survival': 'Survival',
        'Horror': 'Horror',
        'Platformer': 'Platformer',
        'Tool': 'Tool',
        'Analysis': 'Analysis',
        'Visual Novel': 'Visual Novel',
        'Action RPG': 'Action RPG',
        'FPS': 'FPS',
        'Hero Shooter': 'Hero Shooter',
        'World-building': 'World-building',
        'IP Framework': 'IP Framework',
        'SoC': 'SoC',
        'Other': 'Other',
    },
    CN: {
        'Commercial Projects': '商业项目',
        'Personal Projects': '个人项目',
        'Project Info': '项目信息',
        'Quick Links': '快速链接',
        'Project Introduce': '项目简述',
        'Tech Stack': '技术栈',
        'Work Distribution': '工作量分布',
        'Type': '项目类型',
        'Sales': '销量 / 热度',
        'Work Hours': '工作时长',
        'View Details': '查看详情',
        'Experience': '工作经历',
        'Education': '教育背景',
        'Skills': '技能储备',
        'Platform': '平台',
        'Project Cycle': '项目周期',
        'Team Size': '团队大小',
        'Project Role': '项目角色',
        'GDD Available': '包含设计文档',
        'Contact Me': '联系我',
        'Media': '自媒体',
        'Home': '首页',
        'Resume': '简历',
        'Back to List': '返回列表',
        'Back to Top': '回到顶部',
        'Project Timeline': '参与项目时间轴',
        'Action': '动作',
        'RPG': 'RPG',
        'Strategy': '策略',
        'Puzzle': '解谜',
        'Simulation': '模拟',
        'Survival': '生存',
        'Horror': '恐怖',
        'Platformer': '平台跳跃',
        'Tool': '工具',
        'Analysis': '分析项目',
        'Visual Novel': '视觉小说',
        'Action RPG': '动作RPG',
        'FPS': 'FPS',
        'Hero Shooter': '英雄射击',
        'World-building': '世界观构建',
        'IP Framework': 'IP架构',
        'SoC': 'SoC',
        'Other': '其他',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Determine initial language based on browser settings or stored preference
    const getInitialLanguage = (): Language => {
        const stored = localStorage.getItem('pref-lang') as Language;
        if (stored === 'EN' || stored === 'CN') return stored;

        const browserLang = navigator.language.toLowerCase();
        if (browserLang.includes('zh')) return 'CN';
        return 'EN';
    };

    const [language, setLanguageState] = useState<Language>('CN'); // Initial junk value for SSR safety if needed, or just call helper

    useEffect(() => {
        setLanguageState(getInitialLanguage());
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('pref-lang', lang);
    };

    const t = (key: string) => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <div lang={language === 'CN' ? 'zh-CN' : 'en'}>
            <LanguageContext.Provider value={{ language, setLanguage, t }}>
                {children}
            </LanguageContext.Provider>
        </div>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

import type { Variants } from 'framer-motion';

// 优化的视口检测配置
export const viewportConfig = {
    once: true,
    margin: "-50px", // 提前50px触发，确保用户看到动画
    amount: 0.1 // 元素10%可见时触发
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 }, // 增加初始偏移量
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } // 增加持续时间
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // 稍微增加交错延迟
            delayChildren: 0.1 // 添加初始延迟
        }
    }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

export const slideInLeft: Variants = {
    hidden: { x: -30, opacity: 0 }, // 增加初始偏移量
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

export const slideInRight: Variants = {
    hidden: { x: 30, opacity: 0 }, // 增加初始偏移量
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

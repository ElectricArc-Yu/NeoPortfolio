/**
 * Utility functions for internationalized formatting
 */

export type Currency = 'CNY' | 'USD' | 'JPY';

/**
 * Format a number with its unit correctly for the current language
 * @example formatUnit(12, 'items', 'CN') => '12项'
 * @example formatUnit(12, 'items', 'EN') => '12 items'
 */
export const formatUnit = (value: number | string, unitKey: string, language: string, t: (k: string) => string): string => {
    const localizedUnit = t(unitKey);

    if (language === 'CN' || language === 'JA') {
        return `${value}${localizedUnit}`;
    }

    // Default EN-style: Space between number and unit, pluralize if needed
    const num = typeof value === 'string' ? parseFloat(value) : value;
    const excludedUnits = ['Eps', 'Episodes', 'Items', 'People'];
    const isPlural = num !== 1 && !excludedUnits.some(u => u.toLowerCase() === unitKey.toLowerCase());
    const finalUnit = isPlural ? `${localizedUnit}s` : localizedUnit;

    return `${value} ${finalUnit}`;
};

/**
 * Format currency based on locale
 */
export const formatCurrency = (amount: number | string, currency: Currency, language: string): string => {
    const formatter = new Intl.NumberFormat(language === 'CN' ? 'zh-CN' : (language === 'JA' ? 'ja-JP' : 'en-US'), {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(typeof amount === 'string' ? parseFloat(amount) : amount);
};

/**
 * Common formatter for "Team Size"
 */
export const formatTeamSize = (size: number | string, language: string, t: (k: string) => string): string => {
    if (size === 1 || size === '1') return t('Solo Developer');
    return formatUnit(size, 'People', language, t);
};

/**
 * Common formatter for "Work Hours"
 */
export const formatDuration = (hours: number | string, language: string, t: (k: string) => string): string => {
    return formatUnit(hours, 'Hours', language, t);
};

/**
 * Format a date string (YYYY.MM.DD or YYYY.MM) based on language
 */
export const formatDate = (dateStr: string, language: string): string => {
    const parts = dateStr.split(/[-.]/);
    const date = new Date(parseInt(parts[0]), parseInt(parts[1] || '1') - 1, parseInt(parts[2] || '1'));

    if (language === 'CN' || language === 'JA') {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const suffix = { y: '年', m: '月', d: '日' };

        if (parts.length === 3) return `${year}${suffix.y}${month}${suffix.m}${day}${suffix.d}`;
        return `${year}${suffix.y}${month}${suffix.m}`;
    }

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: parts.length === 3 ? 'numeric' : undefined
    });
};

import type { Localized } from '../data/types';
import { siteConfig, type TitleFormat } from '../data/siteConfig';

/**
 * Gets the localized value for the current language.
 * Falls back to 'EN' then 'CN' then the first available key if the current language is missing.
 */
export function getLocalizedValue<T>(localizedObj: Localized<T> | undefined, currentLang: string): T | undefined {
    if (!localizedObj) return undefined;

    if (localizedObj[currentLang] !== undefined) {
        return localizedObj[currentLang];
    }

    // Fallbacks
    if (localizedObj['EN'] !== undefined) return localizedObj['EN'];
    if (localizedObj['CN'] !== undefined) return localizedObj['CN'];

    const keys = Object.keys(localizedObj);
    if (keys.length > 0) {
        return localizedObj[keys[0]];
    }

    return undefined;
}

/**
 * Generates a formatted page title based on the site configuration.
 */
export function getFormattedTitle(pageKey: string | undefined, currentLang: string, customPageTitle?: string): string {
    const globalTitle = getLocalizedValue(siteConfig.brand.titles, currentLang) || '';
    const pageConfig = pageKey ? siteConfig.pages[pageKey] : undefined;

    const pageTitle = customPageTitle || (pageConfig ? getLocalizedValue(pageConfig.titles, currentLang) : '');
    const format: TitleFormat = siteConfig.brand.titleFormat;

    switch (format) {
        case 'GlobalPage':
            return pageTitle ? `${globalTitle} | ${pageTitle}` : globalTitle;
        case 'PageGlobal':
            return pageTitle ? `${pageTitle} | ${globalTitle}` : globalTitle;
        case 'GlobalOnly':
            return globalTitle;
        case 'PageOnly':
            return pageTitle || globalTitle;
        default:
            return pageTitle ? `${pageTitle} | ${globalTitle}` : globalTitle;
    }
}

// ─── Shorthand Resolvers for Document Fields ───

const LANG_NAMES: Record<string, Record<string, string>> = {
    CN: { CN: '中文', EN: 'Chinese', JA: '中国語' },
    EN: { CN: '英文', EN: 'English', JA: '英語' },
    JA: { CN: '日文', EN: 'Japanese', JA: '日本語' },
    KR: { CN: '韩文', EN: 'Korean', JA: '韓国語' },
    FR: { CN: '法文', EN: 'French', JA: 'フランス語' },
    DE: { CN: '德文', EN: 'German', JA: 'ドイツ語' },
    ES: { CN: '西班牙文', EN: 'Spanish', JA: 'スペイン語' },
};

/**
 * Resolve originalLangs field.
 * Accepts either a full Localized object or a shorthand like 'EN', 'CN'.
 */
export function resolveOriginalLang(value: Record<string, string> | string, displayLang: string): string {
    if (typeof value === 'string') {
        const names = LANG_NAMES[value.toUpperCase()];
        if (names) return names[displayLang] || names['EN'] || value;
        return value;
    }
    return getLocalizedValue(value, displayLang) || '';
}

/**
 * Resolve lengths field.
 * Accepts either a full Localized object or a number string like '8'.
 * Auto-generates: '8 Pages' / '8页' / '8ページ'.
 */
export function resolveLength(value: Record<string, string> | string, displayLang: string): string {
    if (typeof value === 'string') {
        // If it's a plain number, auto-generate page count
        const num = value.trim();
        if (/^\d+$/.test(num)) {
            const n = parseInt(num, 10);
            if (displayLang === 'CN') return `${n}页`;
            if (displayLang === 'JA') return `${n}ページ`;
            return `${n} ${n === 1 ? 'Page' : 'Pages'}`;
        }
        // If it's a duration or custom text, just return as-is
        return value;
    }
    return getLocalizedValue(value, displayLang) || '';
}

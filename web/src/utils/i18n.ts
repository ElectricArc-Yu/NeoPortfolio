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

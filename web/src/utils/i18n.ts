import { Localized } from '../data/types';

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

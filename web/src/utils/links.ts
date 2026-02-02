import type { Localized } from '../data/types';
import type { Language } from '../context/LanguageContext';

export const getDisplayUrl = (link: { urls?: Localized }, language: Language): string | undefined => {
    // Try to get URL for the current language
    // Log for debugging if needed, but for now just return the best match

    if (!link.urls) {
        return undefined;
    }

    if (link.urls[language]) {
        return link.urls[language];
    }

    // Fallbacks
    return link.urls['CN'] || link.urls['EN'] || Object.values(link.urls)[0];
};

import type { ProjectLink } from '../data/types';
import type { Language } from '../context/LanguageContext';

export const getDisplayUrl = (link: ProjectLink, language: Language): string | undefined => {
    if (link.urls[language]) return link.urls[language];
    // Fallbacks
    return link.urls['EN'] || link.urls['CN'] || Object.values(link.urls)[0];
};

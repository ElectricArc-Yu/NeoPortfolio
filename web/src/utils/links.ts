import type { ProjectLink } from '../data/types';
import type { Language } from '../context/LanguageContext';

export const getDisplayUrl = (link: ProjectLink, language: Language): string | undefined => {
    if (language === 'CN' && link.urlCN) return link.urlCN;
    if (language === 'EN' && link.urlEN) return link.urlEN;
    return link.urlCN || link.urlEN;
};

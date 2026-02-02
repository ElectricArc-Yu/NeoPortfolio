import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAssetPath } from '../src/utils/assetPath';
import { getLocalizedValue, getFormattedTitle } from '../src/utils/i18n';
import { getDisplayUrl } from '../src/utils/links';
import { getRoleCategory } from '../src/utils/projectUtils';

// Mock siteConfig for i18n tests
vi.mock('../web/src/data/siteConfig', () => ({
    siteConfig: {
        brand: {
            titles: { EN: 'My Portfolio', CN: '我的作品集' },
            titleFormat: 'GlobalPage'
        },
        pages: {
            'home': { titles: { EN: 'Home', CN: '主页' } },
            'resume': { titles: { EN: 'Resume' } }
        },
        i18n: {
            defaultLanguage: 'EN',
            languages: [
                { code: 'EN', label: 'English' },
                { code: 'CN', label: '简体中文' }
            ]
        }
    }
}));

describe('Asset Utilities', () => {
    beforeEach(() => {
        vi.stubEnv('BASE_URL', '/NeoPortfolio/');
    });

    it('getAssetPath should return empty string for empty input', () => {
        expect(getAssetPath('')).toBe('');
    });

    it('getAssetPath should return absolute URLs as-is', () => {
        expect(getAssetPath('https://example.com/img.png')).toBe('https://example.com/img.png');
        expect(getAssetPath('data:image/png;base64,123')).toBe('data:image/png;base64,123');
    });

    it('getAssetPath should prepend base path to relative paths', () => {
        expect(getAssetPath('images/test.png')).toBe('/NeoPortfolio/images/test.png');
        expect(getAssetPath('/images/test.png')).toBe('/NeoPortfolio/images/test.png');
    });
});

describe('I18n Utilities', () => {
    describe('getLocalizedValue', () => {
        it('should return undefined for undefined input', () => {
            expect(getLocalizedValue(undefined, 'EN')).toBeUndefined();
        });

        it('should return the value for the requested language', () => {
            const obj = { EN: 'Hello', CN: '你好' };
            expect(getLocalizedValue(obj, 'CN')).toBe('你好');
        });

        it('should fall back to EN if requested language is missing', () => {
            const obj = { EN: 'Hello' };
            expect(getLocalizedValue(obj, 'JA')).toBe('Hello');
        });

        it('should fall back to CN if EN is missing', () => {
            const obj = { CN: '你好' };
            expect(getLocalizedValue(obj, 'JA')).toBe('你好');
        });

        it('should fall back to the first available key if all specific fallbacks are missing', () => {
            const obj: Record<string, string> = { JA: 'こんにちは' };
            expect(getLocalizedValue(obj, 'FR')).toBe('こんにちは');
        });

        it('should return undefined for empty object', () => {
            expect(getLocalizedValue({}, 'EN')).toBeUndefined();
        });
    });

    describe('getFormattedTitle', () => {
        it('should format title in GlobalPage mode', () => {
            expect(getFormattedTitle('home', 'EN')).toBe('My Portfolio | Home');
        });

        it('should return global title only if page not found', () => {
            expect(getFormattedTitle('non-existent', 'EN')).toBe('My Portfolio');
        });

        it('should use custom title if provided', () => {
            expect(getFormattedTitle('home', 'EN', 'Custom')).toBe('My Portfolio | Custom');
        });

        it('should handle missing pageKey', () => {
            expect(getFormattedTitle(undefined, 'EN')).toBe('My Portfolio');
        });
    });
});

describe('Link Utilities', () => {
    it('getDisplayUrl should return correct language URL', () => {
        const link = { urls: { EN: 'en.com', CN: 'cn.com' } };
        expect(getDisplayUrl(link, 'CN')).toBe('cn.com');
    });

    it('getDisplayUrl should fall back to CN then EN then first key', () => {
        const link = { urls: { JA: 'ja.com', CN: 'cn.com' } };
        expect(getDisplayUrl(link, 'EN')).toBe('cn.com');

        const link2 = { urls: { JA: 'ja.com', EN: 'en.com' } };
        expect(getDisplayUrl(link2, 'FR')).toBe('en.com');

        const link3 = { urls: { JA: 'ja.com' } };
        expect(getDisplayUrl(link3, 'FR')).toBe('ja.com');
    });

    it('getDisplayUrl should handle undefined urls', () => {
        expect(getDisplayUrl({ urls: undefined }, 'EN')).toBeUndefined();
        expect(getDisplayUrl({}, 'EN')).toBeUndefined();
    });
});

describe('Project Utilities', () => {
    it('getRoleCategory should categorize design roles', () => {
        expect(getRoleCategory('Game Designer')).toBe('Design');
        expect(getRoleCategory('Producer')).toBe('Design');
        expect(getRoleCategory('Consultant')).toBe('Design');
        expect(getRoleCategory('Creative Lead')).toBe('Design');
        expect(getRoleCategory('Writer')).toBe('Design');
        expect(getRoleCategory('关卡策划')).toBe('Design');
    });

    it('getRoleCategory should categorize program roles', () => {
        expect(getRoleCategory('Lead Programmer')).toBe('Program');
        expect(getRoleCategory('Unity Developer')).toBe('Program');
        expect(getRoleCategory('Software Engineer')).toBe('Program');
        expect(getRoleCategory('程序开发')).toBe('Program');
    });

    it('getRoleCategory should categorize creator/management/research roles', () => {
        expect(getRoleCategory('Researcher')).toBe('Creator');
        expect(getRoleCategory('Content Creator')).toBe('Creator');
        expect(getRoleCategory('Project Management')).toBe('Creator');
        expect(getRoleCategory('创造者')).toBe('Creator');
    });

    it('getRoleCategory should return Other for unknown roles', () => {
        expect(getRoleCategory('Artist')).toBe('Other');
        expect(getRoleCategory('Musician')).toBe('Other');
    });
});

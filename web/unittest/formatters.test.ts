import { describe, it, expect } from 'vitest';
import { formatUnit, formatCurrency, formatDate, formatTeamSize, formatDuration } from '../src/utils/formatters';

// Mock translation function
const t = (key: string) => {
    const translations: Record<string, string> = {
        'items': '项',
        'People': '人',
        'Hours': '小时',
        'Solo Developer': '个人开发'
    };
    return translations[key] || key;
};

const tEn = (key: string) => {
    const translations: Record<string, string> = {
        'items': 'item',  // Return singular form, function adds 's' for plural
        'People': 'people', // Already plural, excluded from adding 's'
        'Hours': 'hour',   // Singular form
        'Solo Developer': 'Solo Developer'
    };
    return translations[key] || key;
};

describe('Formatter Utilities', () => {
    describe('formatUnit', () => {
        it('should format units correctly for Chinese (no space)', () => {
            expect(formatUnit(12, 'items', 'CN', t)).toBe('12项');
        });

        it('should format units correctly for English (with space and plural)', () => {
            expect(formatUnit(12, 'items', 'EN', tEn)).toBe('12 items');
            expect(formatUnit(1, 'items', 'EN', tEn)).toBe('1 item');
        });

        it('should not add extra s for excluded units like People', () => {
            // 'People' is excluded from pluralization
            expect(formatUnit(12, 'People', 'EN', tEn)).toBe('12 people');
            expect(formatUnit(1, 'People', 'EN', tEn)).toBe('1 people');
        });
    });

    describe('formatCurrency', () => {
        it('should format CNY correctly', () => {
            // Intl.NumberFormat might vary slightly by environment, but let's test the general output
            const result = formatCurrency(1000, 'CNY', 'CN');
            expect(result).toMatch(/¥1,000|￥1,000/);
        });

        it('should format USD correctly', () => {
            const result = formatCurrency(1000, 'USD', 'EN');
            expect(result).toBe('$1,000');
        });
    });

    describe('formatTeamSize', () => {
        it('should return Solo Developer for size 1', () => {
            expect(formatTeamSize(1, 'CN', t)).toBe('个人开发');
            expect(formatTeamSize(1, 'EN', tEn)).toBe('Solo Developer');
        });

        it('should return plural people for size > 1 in English', () => {
            expect(formatTeamSize(5, 'EN', tEn)).toBe('5 people');
        });
    });

    describe('formatDuration', () => {
        it('should format hours correctly in Chinese', () => {
            expect(formatDuration(10, 'CN', t)).toBe('10小时');
        });

        it('should format hours correctly in English', () => {
            // 'Hours' translates to 'hour' (singular), function adds 's' for plural
            expect(formatDuration(10, 'EN', tEn)).toBe('10 hours');
            expect(formatDuration(1, 'EN', tEn)).toBe('1 hour');
        });
    });

    describe('formatDate', () => {
        it('should format Chinese dates correctly (YYYY年M月D日)', () => {
            expect(formatDate('2023.05.20', 'CN')).toBe('2023年5月20日');
        });

        it('should format English dates correctly (Month Day, Year)', () => {
            // .toLocaleDateString output can be environment specific (Node version)
            // But usually for en-US: May 20, 2023
            const result = formatDate('2023.05.20', 'EN');
            expect(result).toMatch(/May 20, 2023|May 20. 2023/);
        });

        it('should handle YYYY.MM format', () => {
            expect(formatDate('2023.05', 'CN')).toBe('2023年5月');
        });
    });
});

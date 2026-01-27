/**
 * Project and Role related utility functions
 */

export type RoleCategory = 'Design' | 'Program' | 'Creator' | 'Other';

/**
 * Classifies a role string into a predefined category for styling
 */
export const getRoleCategory = (role: string): RoleCategory => {
    const r = role.toLowerCase();

    // Design category
    if (
        r.includes('design') ||
        r.includes('producer') ||
        r.includes('consultant') ||
        r.includes('creative') ||
        r.includes('writer') ||
        r.includes('策划')
    ) {
        return 'Design';
    }

    // Program category
    if (
        r.includes('program') ||
        r.includes('developer') ||
        r.includes('engineer') ||
        r.includes('程序')
    ) {
        return 'Program';
    }

    // Creator/Management/Research category
    if (
        r.includes('research') ||
        r.includes('creator') ||
        r.includes('management') ||
        r.includes('创造者')
    ) {
        return 'Creator';
    }

    return 'Other';
};

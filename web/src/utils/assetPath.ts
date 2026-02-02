// Helper function to resolve asset paths for GitHub Pages deployment
// Prepends the base path when running in production on a subdirectory

const getBasePath = () => {
    const base = import.meta.env.BASE_URL || '/';
    return base.endsWith('/') ? base : `${base}/`;
};

export function getAssetPath(path: string): string {
    if (!path) return '';

    // If path already starts with http/https or data:, return as-is
    if (path.startsWith('http') || path.startsWith('data:')) {
        return path;
    }

    // Remove leading slash if present, then prepend base path
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${getBasePath()}${cleanPath}`;
}

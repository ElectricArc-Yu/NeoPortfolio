# ElectricArc Portfolio - Project Wiki

Welcome to the **ElectricArc Portfolio** Wiki. This document provides a comprehensive overview of the architecture, data structures, and feature implementation of this Game Designer Portfolio.

---

## 🏗 System Architecture

The project is a high-performance, static-site-ready web application built with:
- **Core**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS Modules (Standard CSS with local scoping)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/) (using HashRouter for easy deployment)

### Directory Structure
```text
/src
  /components  - Reusable UI elements (Navbar, Layout, ProjectCards, etc.)
  /context     - Global states (i18n / Language context)
  /data        - Static data content (The "Source of Truth" for all text)
  /pages       - Main views (Portfolio Home, Resume, Media, etc.)
  /utils       - Helper functions (Asset paths, date formatting)
```

---

## 🛠 Features & APIs

### 1. Internationalization (i18n)
Managed via `LanguageContext`.
- **Switch**: Uses a toggle button in the Navbar.
- **Data**: Most data objects in `/data` contain dual fields (e.g., `titleCN` and `titleEN`).

### 2. Site Status & Auto-Outdated Logic
Managed in `src/data/siteConfig.ts`.
- **Dynamic Badge**: Displays `WIP`, `Launched`, or `OutDated` in the Navbar.
- **API**: `getComputedStatus()`
- **Automation**: Switches to `OutDated` automatically if `Date.now() > autoOutdatedDate`.

### 3. Media Portfolio (Videos & Articles)
The Media page supports complex content grouping.
- **Series**: Collection of episodes (e.g., Podcasts, Video Series).
- **Custom Link Color Prefixes**:
  - `%R%`: Red
  - `%G%`: Green
  - `%P%`: Purple
  - `%Y%`: Gold
  - `%B%`: Blue
  - `%K%`: Pink
  - `%O%`: Orange

---

## 📄 Data Structures (types.ts)

### Project Object
```typescript
interface Project {
    id: string;
    titleCN: string;
    titleEN: string;
    type: 'Commercial' | 'Personal' | 'Miscellaneous';
    engine: 'Unity' | 'Unreal' | 'Python' | 'Other';
    techStack: string[];
    // ... detail fields
}
```

### Media Episode
```typescript
interface MediaEpisode {
    id: string;
    episodeNumber: string;
    titleCN: string;
    links: PlatformLink[]; // Supports Bilibili, YouTube, Gcores, etc.
}
```

---

## 🎨 Design System
The site follows a "Dark & Premium" aesthetic:
- **Background**: Dark mesh gradients with blur effects.
- **Glassmorphism**: Headers and cards use `backdrop-filter: blur()`.
- **Typography**: Optimized for dual-language layout (system-default sans-serif with fallback for Chinese).
- **Accents**: Cyan (`#00adb5`) as the primary action color.

---

## 🚀 Deployment
Since it's a Vite project, we use:
1. `npm run build`
2. Deploy the `/dist` folder to any static hosting (GitHub Pages, Vercel, Netlify).
3. The codebase uses `HashRouter`, ensuring that page refreshes work correctly even without complex server-side redirection rules.

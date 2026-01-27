# Project Product Manual (web/src)

This document provides a comprehensive technical overview of the `web/src` directory, detailing the logic, usage, and purpose of every file in the codebase. It is intended to serve as a reference for developers maintaining or extending the portfolio project.

## 1. Directory Structure

```
web/src/
├── assets/         # Static assets (images, global styles)
├── components/     # Reusable UI components
├── context/        # React Context providers (Global State)
├── data/           # Static data files and Type definitions
├── hooks/          # Custom React Hooks (currently empty)
├── pages/          # Page components corresponding to routes
├── utils/          # Utility functions and helpers
├── App.css         # Root component styles
├── App.tsx         # Main Application Component & Router configuration
├── index.css       # Global CSS variables and resets
└── main.tsx        # Application Entry Point
```

---

## 2. Core Architecture

### `main.tsx`
**Logic:**
- The entry point of the React application.
- Mounts the `App` component into the DOM root.
- **Security Feature:** Implements event listeners to prevent right-clicking (`contextmenu`) and copying content (`copy`, `keydown` for Ctrl+C) to protect site content.

**Usage:**
- Automatically invoked by Vite during build/dev.

### `App.tsx`
**Logic:**
- Configures the client-side routing using `react-router-dom` (`HashRouter` used for compatibility with GitHub Pages).
- Wraps the application in global providers:
  - `HelmetProvider`: For managing document head tags.
  - `LanguageProvider`: For internationalization (CN/EN).
- Defines the route hierarchy:
  - `/` -> `Home`
  - `/project/:id` -> `ProjectDetail`
  - `/resume` -> `Resume`
  - `/documents` -> `Documents`
  - `/media` -> `Media`
  - `/contact` -> `Contact`
  - `*` -> `NotFound`
- Includes `ScrollToTop` to handle scroll behavior on navigation.

**Usage:**
- The root component rendered by `main.tsx`.

### `context/LanguageContext.tsx`
**Logic:**
- **State**: Manages current language (`'CN' | 'EN'`).
- **Persistence**: Saves user preference to `localStorage` (`pref-lang`).
- **Auto-detection**: Checks `navigator.language` on first load if no preference is stored.
- **Translation**: Provides a `t(key)` function that returns the translation from a definition object. Keys are English strings by default.
- **Provider**: Wraps children with the context.

**Usage:**
- `import { useLanguage } from '../context/LanguageContext';`
- `const { language, setLanguage, t } = useLanguage();`

---

## 3. Data & Configuration (`data/`)

### `data/types.ts`
**Logic:**
- TypeScript interface definitions for the entire project.
- Key Interfaces:
  - `Project`: Comprehensive structure for portfolio projects.
  - `MainProject`: Wrapper for grouping sub-projects (e.g., Minecraft mods).
  - `MediaSeries`, `MediaEpisode`: Structures for the Media page.
  - `ResumeData`: Structure for resume information.

**Usage:**
- Imported by components to ensure type safety.

### `data/siteConfig.ts`
**Logic:**
- Central configuration file for site-wide settings.
- **Status Management**: Defines site status (`WIP`, `Launched`, `OutDated`) and includes logic to automatically switch to `OutDated` after a specific date (`autoOutdatedDate`).
- **Content**: Stores "static" strings like footer text, page titles for CN/EN, and contact email.
 
**Usage:**
- `import { siteConfig, getComputedStatus } from '../data/siteConfig';`
- Used in `Footer`, `Navbar` and page headers.

### `data/projects.ts`, `data/resume.ts`, `data/documents.ts`, `data/media.ts`, `data/mainProjects.ts`
**Logic:**
- These files contain the actual content of the portfolio in JSON-like structures.
- All text is dual-language (CN fields and EN fields).
- **projects.ts**: Main portfolio items.
- **media.ts**: Data for the self-media section (Series, Videos, Podcasts).
- **documents.ts**: Academic papers and Game Design Documents (GDDs).

**Usage:**
- Imported directly by Pages to render content. Acts as a pseudo-database.

---

## 4. Components (`components/`)

### Layout & Navigation

#### `components/Layout.tsx`
- **Logic**: The main shell of the application. Renders `Navbar`, the current page (`Outlet`), and the `Footer`.
- **Usage**: Used in `App.tsx` as the parent route element.

#### `components/Navbar.tsx`
- **Logic**: Top navigation bar.
- Shows dynamic site status badge (fetched from `siteConfig`).
- Highlights active route using `NavLink`.
- Contains `LanguageSwitch`.

#### `components/LanguageSwitch.tsx`
- **Logic**: A toggle button to switch between CN and EN languages via `LanguageContext`.

#### `components/BackToTop.tsx`
- **Logic**: A floating arrow button that appears when scrolling down. Scrolls window to top when clicked.

#### `components/ScrollToTop.tsx`
- **Logic**: A component (logic-only) that listens to route changes.
- **Feature**: Resets scroll position to (0,0) on navigation *unless* the user is navigating "Back" (POP action), preserving scroll position in that case.

### Content Display

#### `components/ProjectCard.tsx`
- **Logic**: A card component for displaying a summary of a project.
- **Features**: 
  - Engine Icons (`EngineIcon`).
  - "GDD Available" badge if documentation exists.
  - Displays metrics (Sales/Hours).
  - Renders Tags (Game Type, Roles, Tech Stack).

#### `components/ProjectList.tsx`
- **Logic**: Filters `projects` data into three categories: Commercial, Personal, and Miscellaneous.
- **Usage**: Renders the grid of `ProjectCard`s used on the Home page (note: Home page reimplements this logic partially to customize layout, this component might be a fallback or alternative view).

#### `components/MediaGallery.tsx`
- **Logic**: Multimedia carousel/slider.
- **Features**:
  - Handles mixed content (Images + Video).
  - **Video Logic**: Places video at index 1. Auto-mutes by default; provides custom "Unmute" overlay button for better UX. Uses `video` HTML5 element.
  - Thumbnail navigation strip.

#### `components/WorkChart.tsx`
- **Logic**: Wrapper around `recharts` PieChart.
- **Usage**: Displays "Work Distribution" percentages in `ProjectDetail`.

#### `components/CodeLoader.tsx`
- **Logic**: Asynchronously fetches a raw text/code file from a URL/Path.
- **Rendering**: Uses `react-syntax-highlighter` to render the fetched text with syntax highlighting.
- **Usage**: Used inside `ReactMarkdown` components to render code snippets referenced by URL.

### Modals

#### `components/ImageModal.tsx`
- **Logic**: Full-screen overlay to display a high-res image. Closes on backdrop click.

#### `components/PdfModal.tsx`
- **Logic**: Full-screen overlay containing an `<iframe>` to display PDF files.
- **Path Resolution**: Uses `getAssetPath` to ensure correct loading on GitHub Pages.

### Icons & Assets

#### `components/EngineIcon.tsx` / `components/DocumentIcon.tsx`
- **Logic**: Functional components returning SVG assets based on props (e.g., Unity/Unreal logos).

#### `components/PlaceholderImage.tsx`
- **Logic**: Fallback component for missing images (rarely used if assets are managed well).

---

## 5. Page Logic (`pages/`)

### `pages/Home.tsx`
**Logic:**
- **Sorting**: Sorts all projects by `showPriority`.
- **Filtering**: Segments projects into "Commercial" and "Personal".
- **Layout**: Displays a Hero section (title/subtitle from config) and a two-column split layout for the project categories.

### `pages/ProjectDetail.tsx`
**Logic:**
- **Routing**: Captures `:id` from URL. Redirects to Home if not found.
- **Data**: Finds respective project object.
- **Rendering**:
  - Left Column: `MediaGallery` and `ReactMarkdown` description. Markdown supports special components like syntax highlighting and image zooming.
  - Right Sidebar: Project Metadata (Type, Platform, Team Size, Role, Sales/Hours), `WorkChart`, and External Links.
- **Interactivity**: Opens PDF links in `PdfModal` and images in `ImageModal`.

### `pages/Media.tsx`
**Logic:**
- **Data Source**: `data/media.ts` (`mediaSeries` and `mediaItems`).
- **Series Display**: Renders "Cards" for Video Series or Podcast Series.
  - Cards are expandable/collapsible.
  - Stick header behavior when expanded.
- **Episode Rendering**:
  - Differentiates between "Released", "Unreleased" (future date), and "Scheduled".
  - Shows specific metadata (Dates, Duration).
- **Miscellaneous**: A special section that aggregates individual media items (`mediaItems`) that don't belong to a series.
- **Badging**: Supports complex badging system (e.g., color-coded tags like `%R%` for red badges).

### `pages/Resume.tsx`
**Logic:**
- **Timeline Core**: Transforms the flat `projects` list and `mainProjects` groups into a combined Timeline list.
  - **Grouping**: Merges related sub-projects (e.g., mods) under a single `MainProject` entry to avoid clutter.
  - **Sorting**: Complex sorting logic handling "Present" dates, unknown dates, and date ranges.
- **Filtering**: Allows filtering timeline by Project Type (Commercial, Personal, Consultant).
- **Interactivity**:
  - Clicking a Group opens a **Modal** listing sub-projects.
  - Clicking a Project inside that modal opens a **Detail Modal** (floating version of Project Detail page).
  - Clicking a standalone project navigates to `ProjectDetail` page.
- **Layout**: Standard resume sections (Experience, Education, Skills) styled for print/web readability.

### `pages/Documents.tsx`
**Logic:**
- **Categorization**: Separation of "Academic Papers" and "GDDs" (Game Design Documents).
- **GDD Sub-types**: Further categorization into Test, Analysis, Methodology, GDD.
- **Accordion**: Logic to collapse/expand Categories and long Abstracts.
- **PDF Handling**: Direct integration with `PdfModal` for reading documents inline.

### `pages/Contact.tsx`
**Logic:**
- Static display of designated contact channels.
- **Mailto Generators**: Pre-configures email templates (Subject/Body) for different intent types (Job, Biz, Consultant) to facilitate user contact.

### `pages/NotFound.tsx`
- Simple 404 page with a link back to Home.

---

## 6. Utilities (`utils/`)

### `utils/assetPath.ts`
**Logic:**
- **Problem**: When deployed to GitHub Pages (or any subdirectory), absolute paths like `/images/foo.png` break because the root is `domain.com/repo-name/`.
- **Solution**: `getAssetPath(path)` prepends `import.meta.env.BASE_URL` to paths if they are not external (http) or data URIs.
- **Usage**: MUST be used for every `src` attribute for local images/videos/pdfs.

### `utils/links.ts`
**Logic:**
- **Helper**: `getDisplayUrl(link, language)`.
- **Purpose**: Returns the localized URL for a link if available (e.g. Bilibili for CN, YouTube for EN), handling fallbacks.

## 7. Styles
- **`index.css`**: Defines CSS Variables (`:root`) for the color theme (`--accent-color`, `--bg-color`, `--text-primary`, etc.) and basic typography resets.
- **CSS Modules**: All components and pages use `*.module.css` to scope styles locally and prevent class name collisions.

---
*Document generated on 2026-01-27.*

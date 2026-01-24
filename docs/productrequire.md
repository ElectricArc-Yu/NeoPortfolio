# Portfolio Website Requirements Document (RD)

## 1. Project Overview
**Goal:** Create a new, static game designer portfolio website to showcase the user's game design and development work.
**Target Audience:** Recruiters, Studio Leads, Peers.
**Core Identity:** Professional Game Designer & Developer (Technical Designer / System Designer focus).

## 2. Design & User Experience
### 2.1 Visual Identity
*   **Style:** Minimalist, High Readability.
*   **Aesthetics:** "Premium" feel. Avoid generic "black text on white background".
*   **Theme:** Dark or soft-toned background with gamified visual elements (e.g., subtle UI animations, tech-inspired borders).
*   **Responsiveness:**
    *   **Desktop:** Full layout utilization.
    *   **Mobile:** Stacked layout, touch-friendly navigation.
    *   **Constraint:** Must look good on all devices.

### 2.2 Internationalization (i18n)
*   **Languages:** English (EN) and Chinese (CN).
*   **Mechanism:**
    *   Global language toggle switch.
    *   Content must be independently editable data for each language.
*   **Link Behavior:**
    *   **EN Mode:** project link type 1.
    *   **CN Mode:** project link type 2.

## 3. Homepage Structure

### 3.1 Hero / Introduction
*   Brief introduction (synced from Resume "About Me" or similar).
*   Social Links (LinkedIn, GitHub, Email, etc.).

### 3.2 Key Projects Display (Core Feature)
**Layout:** Split/Two-Column Layout representing two categories side-by-side or distinct sections.
*   **Left/Section A:** Commercial Projects (e.g., Hunan Nuoxiyou projects).
*   **Right/Section B:** Personal Projects (e.g., Illegal Assembly, The Mountain Sea).

**Card Metadata:**
*   **Commercial Projects:** Display "Approx. Sales/Downloads" (e.g., "1M+ units sold").
*   **Personal Projects:** Display "Total Work Hours" (e.g., "60 hours").

**Tagging System:**
*   **Roles:** Management, Design, Program, Art. (Distinct visual style for each).
*   **Competencies:** System Design, Gameplay Design, Feature Iteration, Project Management, World/IP Building.
*   **Tech Stack:** **Icons only** (Unity, Unreal, Python, C#, etc.). Text tooltips on hover.

**Sorting & Filtering:**
*   Custom sort order (Manual "Pin/Top" support).
*   Filter by tag (Role/Engine).

## 4. Project Detail Page
**Layout Structure:**
1.  **Header:** Title, Subtitle, Tags.
2.  **Work Summary:** Brief bullet points of specific contributions.
3.  **Media Carousel/Player:**
    *   Support for YouTube embed and Local Video (MP4).
    *   Image Gallery/Carousel.
    *   Support for PDF preview.
    *   must be responsive and mobile-friendly.
    *   has a carousel function 
    *   **Requirement:** Video subtitles must match the selected language (CN/EN).
4.  **Charts:**
    *   **Pie Chart** (Replacting old Ring Chart): Shows distribution of work (e.g., 40% Design, 60% Code).
    *   Connection lines labeling the segments with percentages.
5.  **Project Context:**
    *   Background/Lore (if applicable).
    *   Detailed Design/Technical breakdown.
    *   Floating Window
    *   **GDD Integration:** Specific support for embedding/linking "The Mountain Sea" and "Shanhai" GDDs for direct viewing.
6.  **Quick Links:**
    *   "View on Store" / "Download Demo" / "Repo" button (floating or prominent).
7.  **Content Format:** Markdown supported with Syntax Highlighting for code blocks.

## 5. Past Outputs & Miscellaneous
**Location:** Bottom of the page / Footer area or strictly defined "Archive" section.
**Content:**
*   Job Test Assignments (e.g., Quest of Velar Level Design).
*   Historical Documents.
*   Old Resume versions / Archive.
**Interaction:**
*   Clicking a document opens a **Web-based PDF Preview Modal** (Popup).
*   Each item includes a brief background/context description.

## 6. Resume & Data Integration
*   **Source of Truth:** Data must be mapped from `docs/resume` (content-wise).
*   **Display:**
    *   Render resume content directly on the page (HTML approach).
    *   **NO** direct "Download Resume PDF" button as the primary call to action (focus on the portfolio itself).
*   **Handling Missing Info:** Use stylish placeholders for TBD data.

## 7. Engineering & Maintenance
*   **Tech Stack:** Static Site Generator (SSG) or Single Page App (SPA). (User preference: React/Next.js/Vite typically implies SPA/SSG hybrid). *Constraint: Requirements ask for Static Web Page result.*
*   **Configuration:**
    *   Data-driven content (JSON/YAML/Markdown frontmatter) for easy updates.
    *   `productrequire.md` to be used for tracking future feature requirements (to be created/synced).
*   **Assets:** Minimize repository size. Use `.gitignore` effectively.
*   **Legacy Assets:** Migration from `docs/old portfolio`.

## 8. Reference Material Pointers
*   **Text content tone style ref:** [David Shaver Portfolio](https://www.davidshaver.net/) (Structure reference, but visual needs update).
*   **Content & Visual ContentSource:** `docs/old portfolio/Writerside/topics` (Project descriptions).
*   **Resume Source:** `docs/resume/cv.tex`.

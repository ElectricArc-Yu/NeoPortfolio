# Product Requirement Document (PRD): Game Designer Personal Portfolio

## 1. Project Overview
**Project Name:** Game Designer Personal Portfolio
**Target Audience:** Recruiters, Game Studios, Collaborators, Players (Global Audience)
**Goal:** To showcase game design projects with a focus on readability, minimalism, and "game" aesthetics. The site must be bilingual (Chinese/English) and provide detailed, data-driven insights into the designer's contribution.

## 2. User Stories
- **As a Global Recruiter**, I want to view the portfolio in my native language (English or Chinese) with appropriate context (e.g., GitHub vs Gitee).
- **As a Studio Head**, I want to see a clear breakdown of the designer's specific contribution (Pie Chart) and the project's success metrics (Sales/Downloads) or effort (Personal Hours).
- **As a Peer**, I want to quickly identify the tech stack via icons and the designer's specific role (e.g., System Design, IP Planning).
- **As the Designer**, I want to write content using Markdown mixed with custom components (MDX) for flexibility.

## 3. Functional Requirements

### 3.1. Global Features
- **Bilingual Support:** 
    - Full site translation (UI + Content).
    - Toggle between Chinese (CN) and English (EN).
    - **Context-Aware Links:** "Release" buttons link to Gitee in CN mode and GitHub in EN mode (configurable per project).
- **Design Aesthetic:** 
    - **Minimalist & Readable:** High contrast, clean typography for easy reading.
    - **Game Style:** Subtle game UI elements (e.g., tech-style borders, hover sound effects or visual feedback, pixel or vector icons).

### 3.2. Home Page (Project Showcase)
- **Layout:** Single page listing **ALL** projects directly.
- **Sections:**
    1.  **Personal Projects:**
        -   Metric Display: **Total Personal Work Hours**.
    2.  **Commercial Projects:**
        -   Metric Display: **Approximate Sales / Downloads**.
- **Project Card Elements:**
    -   **Thumbnail:** High-quality visual.
    -   **Core Skill Tags:** Text tags (e.g., System Design, Gameplay Design, Feature Iteration, Project Management, World Building, IP Design).
    -   **Tech Stack:** **Icons Only** (Unity, Unreal, Python, Lua, etc.).
    -   **Domain/Role:** Tag indicating broad category (Management, Design, Programming, Art).

### 3.3. Project Detail Page
- **Contribution Visualization:** A **Pie Chart** showing the distribution of work (e.g., 40% System Design, 30% Scripting, 30% PM).
- **Video Player:**
    -   Support for **YouTube** embeds and **Local/Self-hosted** video files.
    -   **Subtitle Support:** Must support external subtitles (.vtt/.srt).
    -   **Auto-Language:** Play English subtitles in EN mode, Chinese subtitles in CN mode.
- **Content Format:** 
    -   **MDX / Hybrid:** Content written in Markdown but supports embedding code components (e.g., the Pie Chart, interactive demos).
- **Quick Links:**
    -   Prominent "Play/Download" or "Source Code" buttons.
    -   Logic to switch destination based on language (CN -> Gitee, EN -> GitHub).

### 3.4. Tag & Icon Library
-   **Centralized Management:** A dedicated configuration file or data source to manage:
    -   Skill Tags (Text + Color).
    -   Tech Stack (Icon SVG/Path + Name).
    -   Role Tags (Text + Category).

### 3.5. About / Resume
-   Brief professional bio.
-   Resume download (CN/EN versions).

## 4. Non-Functional Requirements
-   **Performance:** Static site generation for speed.
-   **Responsiveness:** Mobile-friendly.
-   **Maintainability:** Easy to add new tags/icons without hardcoding in every file.
-   **SEO:** Basic SEO for name and "Game Designer".

## 5. Technical Constraints & Stack
-   **Type:** Static Site Generator (SSG). Recommended: **Astro** or **Next.js** (for MDX and Internationalization support).
-   **Styling:** TailwindCSS (for rapid, custom styling).
-   **Icons:** React Icons or a custom SVG sprite system.
-   **Deployment:** GitHub Actions -> GitHub Pages.

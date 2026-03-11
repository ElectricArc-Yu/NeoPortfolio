/**
 * Resume Export Utility
 * Generates a printable HTML resume from live site data in Academic, Professional, or Full modes.
 * Color scheme: Blue (#1a56db) + Black (#111827) on White (#ffffff) background.
 */

import { resumeData } from '../data/resume';
import { projects } from '../data/projects';

import { publicDocs } from '../data/documents';
import { mediaSeries } from '../data/media';
import { siteConfig } from '../data/siteConfig';
import { getLocalizedValue, resolveLength } from './i18n';


export type ExportMode = 'academic' | 'professional' | 'full';

interface ExportOptions {
    mode: ExportMode;
    language: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const loc = <T,>(obj: Record<string, T> | undefined, lang: string): T | undefined =>
    getLocalizedValue(obj, lang);

const locStr = (obj: Record<string, string> | undefined, lang: string): string =>
    loc(obj, lang) ?? '';

const escapeHtml = (str: string): string =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ─── Section Builders ─────────────────────────────────────────────────────────

function buildHeader(lang: string): string {
    const name = locStr(resumeData.header.names, lang);
    const role = locStr(resumeData.header.roles, lang);
    const about = locStr(resumeData.about, lang);
    const email = siteConfig.contact.email;
    const websiteLabel = lang === 'CN' ? '个人网站' : lang === 'JA' ? '個人サイト' : 'Personal Website';
    const links = [
        ...resumeData.header.links.map(l => {
            const label = locStr(l.labels, lang);
            const url = locStr(l.urls, lang);
            return url ? `<a href="${url}" target="_blank">${escapeHtml(label)}</a>` : '';
        }),
        `<a href="https://prelude.games" target="_blank">${escapeHtml(websiteLabel)}</a>`
    ].filter(Boolean).join(' · ');

    return `
    <header class="resume-header">
        <h1>${escapeHtml(name)}</h1>
        <p class="role">${escapeHtml(role)}</p>
        <div class="contact-row">
            <span class="email">✉ <a href="mailto:${email}">${email}</a></span>
            ${links ? `<span class="links">${links}</span>` : ''}
        </div>
        <p class="about">${escapeHtml(about)}</p>
    </header>`;
}

function buildEducation(lang: string): string {
    const items = resumeData.education.map(edu => {
        const school = locStr(edu.schools, lang);
        const degree = locStr(edu.degrees, lang);
        const isInProgress = edu.status === 1;
        const offerLabel = isInProgress
            ? (lang === 'CN' ? '已录取' : lang === 'JA' ? '合格通知済み' : 'Offer Received')
            : '';
        const awards = edu.awards?.length
            ? `<div class="awards">🏆 ${edu.awards.map(a => escapeHtml(a)).join(', ')}</div>`
            : '';
        return `
        <div class="edu-item ${isInProgress ? 'edu-in-progress' : ''}">
            <div class="edu-header">
                <strong>${escapeHtml(school)}</strong>
                <span class="period">${edu.period}</span>
            </div>
            <div class="edu-meta">
                <span class="degree">${escapeHtml(degree)}</span>
                ${isInProgress
                ? `<span class="offer-badge">${offerLabel}</span>`
                : (edu.gpa ? `<span class="gpa">GPA: ${edu.gpa}</span>` : '')}
            </div>
            ${awards}
        </div>`;
    }).join('');

    return wrapSection(lang === 'CN' ? '教育背景' : lang === 'JA' ? '学歴' : 'Education', items);
}

function buildExperience(lang: string): string {
    const items = resumeData.experience.map(job => {
        const company = locStr(job.companies, lang);
        const role = locStr(job.roles, lang);
        const size = locStr(job.sizes, lang);
        const details = (loc<string[]>(job.details, lang) ?? [])
            .map(d => {
                const match = d.match(/^(.*?)[：:](.*)$/);
                if (match) {
                    return `<li><span class="detail-badge">${escapeHtml(match[1].trim())}</span> ${escapeHtml(match[2].trim())}</li>`;
                }
                return `<li>${escapeHtml(d)}</li>`;
            })
            .join('');

        return `
        <div class="exp-item">
            <div class="exp-header">
                <div class="exp-main">
                    <strong class="exp-role">${escapeHtml(role)}</strong>
                    <span class="exp-company">${escapeHtml(company)}</span>
                </div>
                <div class="exp-meta">
                    <span class="period">${job.period}</span>
                    <span class="company-size">${escapeHtml(size)}</span>
                </div>
            </div>
            <ul class="exp-details">${details}</ul>
        </div>`;
    }).join('');

    return wrapSection(lang === 'CN' ? '工作经历' : lang === 'JA' ? '職歴' : 'Experience', items);
}

function buildPapers(lang: string): string {
    // Include both Papers and Lectures, sorted by date descending
    const allDocs = publicDocs
        .filter(d => d.category === 'Paper' || d.category === 'Lecture')
        .sort((a, b) => b.date.localeCompare(a.date));
    if (allDocs.length === 0) return '';

    const items = allDocs.map(p => {
        const title = locStr(p.titles, lang);
        const journal = p.journal || '';
        const publisher = p.publisher !== 'None' ? p.publisher : '';
        const paperType = p.paperType || '';
        const pages = resolveLength(p.lengths, lang);
        const link = p.preprintUrl || p.externalUrl || '';
        const isPaper = p.category === 'Paper';
        const categoryLabel = isPaper
            ? (lang === 'CN' ? '论文' : lang === 'JA' ? '論文' : 'Paper')
            : (lang === 'CN' ? '演讲' : lang === 'JA' ? '講演' : 'Conference');

        return `
        <div class="paper-item">
            <div class="paper-title">${link ? `<a href="${link}" target="_blank">${escapeHtml(title)}</a>` : escapeHtml(title)}</div>
            <div class="paper-meta">
                <span class="category-tag ${isPaper ? 'category-paper' : 'category-lecture'}">${categoryLabel}</span>
                ${publisher ? `<span class="publisher-badge">${escapeHtml(publisher)}</span>` : ''}
                ${journal ? `<span class="journal">${escapeHtml(journal)}</span>` : ''}
                ${paperType ? `<span class="paper-type-tag">${escapeHtml(paperType)}</span>` : ''}
                ${pages ? `<span class="pages">${escapeHtml(pages)}</span>` : ''}
                <span class="date">${p.date}</span>
            </div>
        </div>`;
    }).join('');

    const hasPapers = allDocs.some(d => d.category === 'Paper');
    const hasLectures = allDocs.some(d => d.category === 'Lecture');
    const sectionTitle = hasPapers && hasLectures
        ? (lang === 'CN' ? '学术论文与演讲' : lang === 'JA' ? '学術論文と講演' : 'Academic Papers & Lectures')
        : hasPapers
            ? (lang === 'CN' ? '学术论文' : lang === 'JA' ? '学術論文' : 'Academic Papers')
            : (lang === 'CN' ? '演讲' : lang === 'JA' ? '講演' : 'Lectures');
    return wrapSection(sectionTitle, items);
}

function buildSkills(lang: string): string {
    const items = resumeData.skills.map(cat => {
        const catName = locStr(cat.categories, lang);
        const skills = cat.items.map(s =>
            `<span class="skill-tag${s.highlight ? ' highlight' : ''}">${escapeHtml(s.name)}</span>`
        ).join('');
        return `<div class="skill-group"><h4>${escapeHtml(catName)}</h4><div class="skill-tags">${skills}</div></div>`;
    }).join('');

    return wrapSection(lang === 'CN' ? '技能清单' : lang === 'JA' ? 'スキル' : 'Skills', items);
}

function buildProjectList(lang: string, filterType: 'Commercial' | 'Personal'): string {
    const filtered = projects.filter(p => p.type === filterType);
    if (filtered.length === 0) return '';

    // Sort strictly by start date descending (most recent first)
    const sorted = [...filtered].sort((a, b) => {
        return (b.startDate || '').localeCompare(a.startDate || '');
    });

    const items = sorted.map(p => {
        const title = locStr(p.titles, lang);
        const desc = locStr(p.shortDescriptions, lang);
        const roles = p.role?.join(' / ') || '';
        const period = [p.startDate, p.endDate === 'Present' ? (lang === 'CN' ? '至今' : lang === 'JA' ? '現在' : 'Present') : p.endDate].filter(Boolean).join(' - ');
        const engine = p.engine !== 'Other' ? p.engine : '';
        const techStack = p.techStack?.slice(0, 4).join(', ') || '';

        return `
        <div class="proj-card">
            <div class="proj-card-header">
                <div class="proj-card-main">
                    <strong class="proj-card-title">${escapeHtml(title)}</strong>
                    <span class="proj-card-roles">${escapeHtml(roles)}</span>
                </div>
                <span class="proj-card-period">${period}</span>
            </div>
            <p class="proj-card-desc">${escapeHtml(desc)}</p>
            <div class="proj-card-footer">
                ${engine ? `<span class="proj-card-engine">${escapeHtml(engine)}</span>` : ''}
                ${techStack ? `<span class="proj-card-tech">${escapeHtml(techStack)}</span>` : ''}
            </div>
        </div>`;
    }).join('');

    const sectionTitles: Record<string, Record<string, string>> = {
        Commercial: { CN: '商业项目', EN: 'Commercial Projects', JA: '商業プロジェクト' },
        Personal: { CN: '个人项目', EN: 'Personal Projects', JA: '個人プロジェクト' },
    };
    const title = sectionTitles[filterType][lang] || sectionTitles[filterType]['EN'];
    return wrapSection(title, items);
}

function buildProjectTimeline(lang: string): string {
    // Sort strictly by start date descending (most recent first)
    const sorted = [...projects].sort((a, b) => {
        return (b.startDate || '').localeCompare(a.startDate || '');
    });

    const items = sorted.map(p => {
        const title = locStr(p.timelineTitles, lang) || locStr(p.titles, lang);
        const period = [p.startDate, p.endDate === 'Present' ? (lang === 'CN' ? '至今' : lang === 'JA' ? '現在' : 'Present') : p.endDate].filter(Boolean).join(' - ');
        const type = p.type;
        const roles = p.role?.join(', ') || '';

        return `
        <div class="timeline-item">
            <span class="tl-period">${period}</span>
            <span class="tl-title">${escapeHtml(title)}</span>
            <span class="tl-type">${type}</span>
            <span class="tl-roles">${escapeHtml(roles)}</span>
        </div>`;
    }).join('');

    const sectionTitle = lang === 'CN' ? '项目时间轴' : lang === 'JA' ? 'プロジェクト年表' : 'Project Timeline';
    return wrapSection(sectionTitle, items);
}

function buildCertifications(lang: string): string {
    const certs = resumeData.certifications;
    if (!certs || certs.length === 0) return '';

    const items = certs.map(c => {
        const title = locStr(c.titles, lang);
        return `
        <div class="cert-item">
            ${c.abbreviation ? `<span class="cert-abbr">${escapeHtml(c.abbreviation)}</span>` : ''}
            <span class="cert-title">${escapeHtml(title)}</span>
            <span class="cert-date">${c.date}</span>
        </div>`;
    }).join('');

    return wrapSection(lang === 'CN' ? '奖项及认证' : lang === 'JA' ? '認定・資格' : 'Awards & Certifications', items);
}

function buildMedia(lang: string): string {
    if (!mediaSeries || mediaSeries.length === 0) return '';

    const items = mediaSeries.map(s => {
        const name = locStr(s.seriesNames, lang);
        const desc = locStr(s.descriptions, lang);
        const typeLabel = s.type === 'video-series'
            ? (lang === 'CN' ? '视频系列' : lang === 'JA' ? '動画シリーズ' : 'Video Series')
            : (lang === 'CN' ? '播客系列' : lang === 'JA' ? 'ポッドキャスト' : 'Podcast Series');

        // Build episode list with links
        let episodesHtml = '';
        if (s.episodes && s.episodes.length > 0) {
            const epItems = s.episodes
                .filter(ep => ep.isPublished !== false)
                .map(ep => {
                    const epTitle = locStr(ep.titles, lang);
                    const epLinks = ep.links
                        .map(link => {
                            const url = locStr(link.urls, lang);
                            return url ? `<a href="${url}" target="_blank">${link.platform}</a>` : '';
                        })
                        .filter(Boolean)
                        .join(' · ');
                    return `<div class="media-ep">
                        <span class="media-ep-num">EP${ep.episodeNumber}</span>
                        <span class="media-ep-title">${escapeHtml(epTitle)}</span>
                        ${ep.date ? `<span class="media-ep-date">${ep.date}</span>` : ''}
                        ${epLinks ? `<span class="media-ep-links">${epLinks}</span>` : ''}
                    </div>`;
                }).join('');
            episodesHtml = `<div class="media-eps">${epItems}</div>`;
        }

        // Build podcast episode list
        if (s.podcastEpisodes && s.podcastEpisodes.length > 0) {
            const podItems = s.podcastEpisodes
                .filter(ep => ep.isPublished !== false)
                .map(ep => {
                    const epTitle = locStr(ep.titles, lang);
                    return `<div class="media-ep">
                        <span class="media-ep-num">EP${ep.episodeNumber}</span>
                        <span class="media-ep-title">${escapeHtml(epTitle)}</span>
                    </div>`;
                }).join('');
            episodesHtml += `<div class="media-eps">${podItems}</div>`;
        }

        // Main links for the series
        let mainLinksHtml = '';
        if (s.mainLinks && s.mainLinks.length > 0) {
            const linkItems = s.mainLinks.map(link => {
                const url = locStr(link.urls, lang);
                const label = locStr(link.labels, lang) || link.platform;
                return url ? `<a href="${url}" target="_blank" class="media-main-link">${escapeHtml(label?.replace(/^%[A-Z]%/, '') || link.platform)}</a>` : '';
            }).filter(Boolean).join(' ');
            mainLinksHtml = `<div class="media-main-links">${linkItems}</div>`;
        }

        return `
        <div class="media-series">
            <div class="media-series-header">
                <strong>${escapeHtml(name)}</strong>
                <span class="media-type">${typeLabel}</span>
            </div>
            ${desc ? `<p class="media-desc">${escapeHtml(desc)}</p>` : ''}
            ${mainLinksHtml}
            ${episodesHtml}
        </div>`;
    }).join('');

    return wrapSection(lang === 'CN' ? '自媒体' : lang === 'JA' ? 'メディア' : 'Media & Content', items);
}

// ─── Wrapper ──────────────────────────────────────────────────────────────────

function wrapSection(title: string, content: string): string {
    if (!content.trim()) return '';
    return `
    <section class="resume-section">
        <h2>${escapeHtml(title)}</h2>
        ${content}
    </section>`;
}

// ─── Mode-Based Section Assembly ──────────────────────────────────────────────

function assembleSections(options: ExportOptions): string {
    const { mode, language: lang } = options;

    switch (mode) {
        case 'academic':
            // Priority: Papers → Education → Experience → Project Timeline
            return [
                buildPapers(lang),
                buildEducation(lang),
                buildExperience(lang),
                buildProjectTimeline(lang),
            ].join('');

        case 'professional':
            // Priority: Experience → Skills → Papers → Commercial Projects (list) → Education → Certs
            return [
                buildExperience(lang),
                buildSkills(lang),
                buildPapers(lang),
                buildProjectList(lang, 'Commercial'),
                buildEducation(lang),
                buildCertifications(lang),
            ].join('');

        case 'full':
            // All: Education → Experience → Papers → Commercial Projects (list) → Certs → Personal Projects (list) → Project Timeline → Media → Skills
            return [
                buildEducation(lang),
                buildExperience(lang),
                buildPapers(lang),
                buildProjectList(lang, 'Commercial'),
                buildCertifications(lang),
                buildProjectList(lang, 'Personal'),
                buildProjectTimeline(lang),
                buildMedia(lang),
                buildSkills(lang),
            ].join('');

        default:
            return '';
    }
}

// ─── CSS Stylesheet ───────────────────────────────────────────────────────────

function getStylesheet(): string {
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
            --blue-primary: #1a56db;
            --blue-dark: #1e3a5f;
            --blue-light: #3b82f6;
            --blue-accent: #2563eb;
            --blue-bg: #eff6ff;
            --blue-border: #bfdbfe;
            --black-primary: #111827;
            --black-secondary: #374151;
            --black-tertiary: #6b7280;
            --white: #ffffff;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: var(--black-primary);
            background: var(--white);
            line-height: 1.6;
            font-size: 10pt;
            -webkit-font-smoothing: antialiased;
        }

        @page {
            size: A4;
            margin: 16mm 18mm;
        }

        .resume-container {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
        }

        /* ── Header ── */
        .resume-header {
            border-bottom: 3px solid var(--blue-primary);
            padding-bottom: 14px;
            margin-bottom: 18px;
        }

        .resume-header h1 {
            font-size: 28pt;
            font-weight: 800;
            color: var(--black-primary);
            letter-spacing: -0.5px;
            margin-bottom: 2px;
            line-height: 1.1;
        }

        .resume-header .role {
            font-size: 12pt;
            color: var(--blue-primary);
            font-weight: 600;
            margin-bottom: 8px;
            letter-spacing: 0.5px;
        }

        .contact-row {
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 9pt;
            color: var(--black-tertiary);
            margin-bottom: 10px;
            flex-wrap: wrap;
        }

        .contact-row a {
            color: var(--blue-accent);
            text-decoration: none;
        }

        .contact-row a:hover { text-decoration: underline; }

        .about {
            font-size: 9.5pt;
            color: var(--black-secondary);
            line-height: 1.65;
            background: var(--blue-bg);
            border-left: 3px solid var(--blue-primary);
            padding: 10px 14px;
            border-radius: 0 6px 6px 0;
        }

        /* ── Sections ── */
        .resume-section {
            margin-bottom: 16px;
            page-break-inside: avoid;
        }

        .resume-section h2 {
            font-size: 12pt;
            font-weight: 700;
            color: var(--blue-primary);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border-bottom: 1.5px solid var(--gray-200);
            padding-bottom: 4px;
            margin-bottom: 10px;
        }

        /* ── Experience ── */
        .exp-item {
            margin-bottom: 14px;
            page-break-inside: avoid;
        }

        .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 6px;
        }

        .exp-role {
            font-size: 11pt;
            font-weight: 700;
            color: var(--black-primary);
        }

        .exp-company {
            font-size: 9.5pt;
            color: var(--black-secondary);
            margin-left: 8px;
            font-weight: 500;
        }

        .exp-meta {
            text-align: right;
            white-space: nowrap;
        }

        .period {
            font-size: 9pt;
            color: var(--blue-primary);
            font-weight: 600;
        }

        .company-size {
            font-size: 8pt;
            color: var(--black-tertiary);
            display: block;
        }

        .exp-details {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .exp-details li {
            position: relative;
            padding-left: 14px;
            margin-bottom: 4px;
            font-size: 9pt;
            color: var(--black-secondary);
            line-height: 1.55;
        }

        .exp-details li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--blue-primary);
            font-weight: bold;
        }

        .detail-badge {
            display: inline-block;
            background: var(--blue-bg);
            color: var(--blue-primary);
            font-size: 7.5pt;
            font-weight: 700;
            padding: 1px 6px;
            border-radius: 3px;
            margin-right: 4px;
            letter-spacing: 0.3px;
            vertical-align: middle;
        }

        /* ── Education ── */
        .edu-item {
            margin-bottom: 10px;
            padding: 8px 12px;
            border-left: 2px solid var(--blue-primary);
            background: var(--gray-50);
            border-radius: 0 4px 4px 0;
        }

        .edu-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 2px;
        }

        .edu-header strong {
            font-size: 10.5pt;
            color: var(--black-primary);
        }

        .edu-meta {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }

        .degree {
            font-size: 9pt;
            color: var(--black-secondary);
            font-weight: 500;
        }

        .gpa {
            font-size: 8.5pt;
            color: var(--blue-primary);
            font-weight: 600;
        }

        .awards {
            margin-top: 4px;
            font-size: 8.5pt;
            color: var(--blue-dark);
            font-weight: 500;
        }

        .edu-in-progress {
            border-left-color: #10b981;
            background: linear-gradient(135deg, var(--gray-50) 0%, rgba(16, 185, 129, 0.04) 100%);
        }

        .offer-badge {
            font-size: 7.5pt;
            font-weight: 800;
            padding: 1px 8px;
            border-radius: 3px;
            background: #10b981;
            color: #fff;
            letter-spacing: 0.3px;
            text-transform: uppercase;
        }

        /* ── Papers ── */
        .paper-item {
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--gray-100);
        }

        .paper-item:last-child { border-bottom: none; }

        .paper-title {
            font-size: 9.5pt;
            font-weight: 600;
            color: var(--black-primary);
            margin-bottom: 3px;
            line-height: 1.4;
        }

        .paper-title a {
            color: var(--blue-accent);
            text-decoration: none;
        }

        .paper-title a:hover { text-decoration: underline; }

        .paper-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            font-size: 8pt;
            color: var(--black-tertiary);
        }

        .publisher-badge {
            background: var(--blue-primary);
            color: var(--white);
            padding: 1px 6px;
            border-radius: 3px;
            font-size: 7pt;
            font-weight: 700;
            letter-spacing: 0.3px;
        }

        .category-tag {
            padding: 1px 6px;
            border-radius: 3px;
            font-size: 7pt;
            font-weight: 800;
            letter-spacing: 0.3px;
            text-transform: uppercase;
        }

        .category-paper {
            background: #fef3c7;
            color: #92400e;
            border: 1px solid #fcd34d;
        }

        .category-lecture {
            background: #ffedd5;
            color: #9a3412;
            border: 1px solid #fdba74;
        }

        .paper-type-tag {
            font-style: italic;
            color: #b45309;
            font-weight: 500;
        }

        .journal { font-weight: 500; color: var(--black-secondary); }
        .date { color: var(--blue-primary); font-weight: 500; }

        /* ── Skills ── */
        .skill-group {
            margin-bottom: 8px;
        }

        .skill-group h4 {
            font-size: 9pt;
            color: var(--black-secondary);
            font-weight: 600;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .skill-tag {
            display: inline-block;
            background: var(--gray-100);
            border: 1px solid var(--gray-200);
            padding: 2px 8px;
            border-radius: 3px;
            font-size: 8pt;
            color: var(--black-secondary);
        }

        .skill-tag.highlight {
            background: var(--blue-bg);
            border-color: var(--blue-border);
            color: var(--blue-primary);
            font-weight: 600;
        }

        /* ── Project Cards (List) ── */
        .proj-card {
            margin-bottom: 10px;
            padding: 8px 12px;
            border: 1px solid var(--gray-200);
            border-left: 3px solid var(--blue-primary);
            border-radius: 0 6px 6px 0;
            background: var(--gray-50);
            page-break-inside: avoid;
        }

        .proj-card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 4px;
        }

        .proj-card-main {
            display: flex;
            align-items: baseline;
            gap: 8px;
            flex-wrap: wrap;
        }

        .proj-card-title {
            font-size: 10pt;
            font-weight: 700;
            color: var(--black-primary);
        }

        .proj-card-roles {
            font-size: 8pt;
            color: var(--blue-primary);
            font-weight: 600;
            background: var(--blue-bg);
            padding: 1px 6px;
            border-radius: 3px;
        }

        .proj-card-period {
            font-size: 8pt;
            color: var(--blue-primary);
            font-weight: 500;
            white-space: nowrap;
        }

        .proj-card-desc {
            font-size: 8.5pt;
            color: var(--black-secondary);
            line-height: 1.5;
            margin-bottom: 4px;
        }

        .proj-card-footer {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .proj-card-engine {
            font-size: 7pt;
            font-weight: 700;
            color: var(--white);
            background: var(--black-secondary);
            padding: 1px 6px;
            border-radius: 3px;
        }

        .proj-card-tech {
            font-size: 7pt;
            color: var(--black-tertiary);
            font-style: italic;
        }

        /* ── Timeline ── */
        .timeline-item {
            display: flex;
            align-items: baseline;
            gap: 12px;
            padding: 4px 0;
            border-bottom: 1px solid var(--gray-100);
            font-size: 8.5pt;
        }

        .timeline-item:last-child { border-bottom: none; }

        .tl-period {
            min-width: 110px;
            color: var(--blue-primary);
            font-weight: 500;
            font-size: 8pt;
        }

        .tl-title {
            flex: 1;
            font-weight: 600;
            color: var(--black-primary);
        }

        .tl-type {
            font-size: 7pt;
            background: var(--blue-bg);
            color: var(--blue-primary);
            padding: 1px 6px;
            border-radius: 3px;
            font-weight: 600;
        }

        .tl-roles {
            font-size: 7.5pt;
            color: var(--black-tertiary);
            max-width: 160px;
            text-align: right;
        }

        /* ── Certifications ── */
        .cert-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 5px 0;
            border-bottom: 1px solid var(--gray-100);
            font-size: 9pt;
        }

        .cert-item:last-child { border-bottom: none; }

        .cert-abbr {
            background: var(--blue-primary);
            color: var(--white);
            padding: 1px 6px;
            border-radius: 3px;
            font-size: 7pt;
            font-weight: 800;
            letter-spacing: 0.5px;
        }

        .cert-title {
            flex: 1;
            color: var(--black-primary);
            font-weight: 500;
        }

        .cert-date {
            color: var(--blue-primary);
            font-weight: 500;
            font-size: 8pt;
        }

        /* ── Media ── */
        .media-series {
            margin-bottom: 14px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--gray-200);
        }

        .media-series:last-child { border-bottom: none; }

        .media-series-header {
            display: flex;
            align-items: baseline;
            gap: 8px;
            margin-bottom: 4px;
        }

        .media-series-header strong {
            font-size: 10pt;
            color: var(--black-primary);
        }

        .media-type {
            display: inline-block;
            font-size: 7.5pt;
            color: var(--blue-primary);
            font-weight: 600;
            background: var(--blue-bg);
            padding: 1px 6px;
            border-radius: 3px;
        }

        .media-desc {
            font-size: 8.5pt;
            color: var(--black-tertiary);
            margin-bottom: 6px;
            line-height: 1.5;
        }

        .media-main-links {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin-bottom: 6px;
        }

        .media-main-link {
            display: inline-block;
            font-size: 7.5pt;
            color: var(--blue-accent);
            text-decoration: none;
            background: var(--blue-bg);
            border: 1px solid var(--blue-border);
            padding: 1px 8px;
            border-radius: 3px;
            font-weight: 500;
        }

        .media-main-link:hover { text-decoration: underline; }

        .media-eps {
            padding-left: 8px;
            border-left: 2px solid var(--gray-200);
        }

        .media-ep {
            display: flex;
            align-items: baseline;
            gap: 8px;
            padding: 2px 0;
            font-size: 8pt;
        }

        .media-ep-num {
            font-weight: 700;
            color: var(--blue-primary);
            min-width: 32px;
            font-size: 7pt;
        }

        .media-ep-title {
            flex: 1;
            color: var(--black-secondary);
            font-weight: 500;
        }

        .media-ep-date {
            color: var(--black-tertiary);
            font-size: 7pt;
        }

        .media-ep-links {
            font-size: 7pt;
        }

        .media-ep-links a {
            color: var(--blue-accent);
            text-decoration: none;
            margin: 0 2px;
        }

        .media-ep-links a:hover { text-decoration: underline; }

        /* ── Footer ── */
        .resume-footer {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid var(--gray-200);
            text-align: center;
            font-size: 7.5pt;
            color: var(--black-tertiary);
        }

        /* ── Print Overrides ── */
        @media print {
            body { font-size: 9pt; }
            .resume-container { padding: 0; max-width: none; }
            .resume-header h1 { font-size: 24pt; }
            .resume-section { page-break-inside: avoid; }
            a { color: var(--blue-primary) !important; }
        }
    </style>`;
}

// ─── Main Export Function ─────────────────────────────────────────────────────

function getModeLabel(mode: ExportMode, lang: string): string {
    const labels: Record<ExportMode, Record<string, string>> = {
        academic: { CN: '学术简历', EN: 'Academic CV', JA: '学術CV' },
        professional: { CN: '职业简历', EN: 'Professional Resume', JA: '職務経歴書' },
        full: { CN: '完整简历', EN: 'Full Resume', JA: '完全版履歴書' },
    };
    return labels[mode][lang] || labels[mode]['EN'];
}

export function generateResumeHtml(options: ExportOptions): string {
    const { mode, language: lang } = options;
    const modeLabel = getModeLabel(mode, lang);
    const name = locStr(resumeData.header.names, lang);
    const now = new Date().toISOString().split('T')[0];

    return `<!DOCTYPE html>
<html lang="${lang === 'CN' ? 'zh-CN' : lang === 'JA' ? 'ja' : 'en'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(name)} — ${escapeHtml(modeLabel)}</title>
    ${getStylesheet()}
</head>
<body>
    <div class="resume-container">
        ${buildHeader(lang)}
        ${assembleSections(options)}
        <div class="resume-footer">
            ${escapeHtml(name)} · ${escapeHtml(modeLabel)} · ${lang === 'CN' ? '导出时间' : lang === 'JA' ? 'エクスポート日' : 'Exported'}: ${now}
        </div>
    </div>
</body>
</html>`;
}

export function downloadResumeHtml(options: ExportOptions): void {
    const html = generateResumeHtml(options);
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const name = locStr(resumeData.header.names, options.language).replace(/\s+/g, '_');
    const modeLabel = getModeLabel(options.mode, options.language).replace(/\s+/g, '_');

    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}_${modeLabel}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

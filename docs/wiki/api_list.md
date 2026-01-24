# API List & Data Schemas

Since this is a static site, "APIs" refer to the data schemas used in Content Collections and Component Props.

## Content Collections

### `projects`
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Project title |
| `tags` | string[] | Skill tags (e.g., "System Design") |
| `metrics` | object | `{ hours: number }` or `{ sales: string }` |
| `roles` | string[] | Roles played in the project |
| `techStack` | string[] | List of tech icons to display |
| `video` | object | `{ url: string, subtitles_en: string, subtitles_cn: string }` |

## Components

### `ProjectCard`
- `project`: Project data object.

### `SkillPieChart`
- `data`: Array of `{ name: string, value: number }`.

### `VideoPlayer`
- `url`: Video URL.
- `subtitles`: Object with language keys.

import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        metrics: z.object({
            hours: z.number().optional(),
            sales: z.string().optional(),
            downloads: z.string().optional(),
        }).optional(),
        roles: z.array(z.string()),
        techStack: z.array(z.string()), // List of icon names
        category: z.enum(['Personal', 'Commercial']),
        video: z.object({
            url: z.string(),
            subtitles_en: z.string().optional(),
            subtitles_cn: z.string().optional(),
        }).optional(),
        repoUrl: z.string().optional(), // GitHub or Gitee URL
        releaseUrl: z.string().optional(),
        publishDate: z.date(),
    }),
});

export const collections = {
    projects: projectsCollection,
};

import type { CollectionEntry } from 'astro:content';

type ProjectCollection = CollectionEntry<'project'>;

export type Project = ProjectCollection & {
    slug: ProjectCollection['id']; // Content Layer migration
};

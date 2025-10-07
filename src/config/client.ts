import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_URL, SITE_URL } from 'astro:env/client';

import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
    /** all urls without '/' */
    SITE_URL,
    /** same for all environments, defined here, not env var */
    SITE_URL_CANONICAL: 'https://patik.com',
    SITE_TITLE: 'Craig Patik',
    SITE_DESCRIPTION: "I'm Craig, a frontend web developer",
    PLAUSIBLE_SCRIPT_URL,
    PLAUSIBLE_DOMAIN,
    PAGE_SIZE_POST_CARD: 3,
    PAGE_SIZE_POST_CARD_SMALL: 6,
    PAGE_SIZE_PROJECT_CARD: 6,
    MORE_POSTS_COUNT: 3,
    BLUR_IMAGE_DELAY: 200,
    DEFAULT_MODE: 'light',
    DEFAULT_THEME: 'default-light',
    AUTHOR_NAME: 'Craig Patik',
    AUTHOR_EMAIL: 'craig@patik.com',
    AUTHOR_GITHUB: 'https://github.com/patik',
    AUTHOR_LINKEDIN: 'https://www.linkedin.com/in/craig.patik',
    AUTHOR_TWITTER: 'https://twitter.com/craigpatik',
    AUTHOR_YOUTUBE: 'https://www.youtube.com/@craigpatik',
    REPO_URL: 'https://github.com/patik/patik.com-astro',
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);

import sitemap from '@astrojs/sitemap';
import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';

config();

export default defineConfig({
	base: '/',
	integrations: [sitemap()],
	site: process.env.APPLICATION_SITE,
	trailingSlash: 'always',
});

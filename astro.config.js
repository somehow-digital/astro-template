import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { APPLICATION_SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

export default defineConfig({
	base: '/',
	integrations: [sitemap()],
	site: APPLICATION_SITE,
	trailingSlash: 'always',
});

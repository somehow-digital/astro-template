import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';
import { env } from 'node:process';
import unocss from 'unocss/astro';

config();

export default defineConfig({
	base: '/',
	integrations: [
		unocss({
			injectReset: true,
		}),
		vue(),
		sitemap(),
	],
	output: 'static',
	prefetch: {
		defaultStrategy: 'tap',
		prefetchAll: true,
	},
	site: env.APPLICATION_SITE,
	trailingSlash: 'always',
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
outDir: './public_html',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap(), robotsTxt()]
});
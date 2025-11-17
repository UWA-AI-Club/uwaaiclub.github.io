// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://uwa-ai-club.github.io',
  base: '/website',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});

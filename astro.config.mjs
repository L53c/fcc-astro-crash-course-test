import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import nodejs from '@astrojs:node'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()]
});
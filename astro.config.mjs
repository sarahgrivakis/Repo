import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Webflow Cloud mounts the app at this path; keep in sync with the environment mount.
export default defineConfig({
  base: '/app',
  build: { assetsPrefix: '/app' },
  output: 'static',
  adapter: cloudflare(),
});

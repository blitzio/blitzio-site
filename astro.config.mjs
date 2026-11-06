import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blitzio.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});

// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maaumaau.co.uk',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[ext]'
        }
      }
    }
  }
});
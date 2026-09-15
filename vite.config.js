import { defineConfig } from 'vite';

// base './' so the built dist/ works from any static host or sub-folder (itch, GitHub Pages, a USB stick).
export default defineConfig({
  base: './',
  server: { host: true, port: 5173 },
  build: { target: 'es2020', chunkSizeWarningLimit: 1500 },
});

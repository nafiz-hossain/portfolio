/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Single config consumed by both Vite (dev/build) and Vitest (the `test` block).
export default defineConfig({
  // GitHub Pages serves the site at /portfolio/, so all asset URLs are
  // prefixed with this base.
  base: '/portfolio/',
  plugins: [react()],
  // CRA allowed JSX inside .js files; esbuild needs to be told to parse them
  // as JSX so the existing component files keep working without renaming.
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
});

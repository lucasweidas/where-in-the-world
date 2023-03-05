import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: './',
  server: {
    host: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  publicDir: '../public',
});

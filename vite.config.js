import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: '/site_dassos/', // très important
  plugins: [react()],
}));

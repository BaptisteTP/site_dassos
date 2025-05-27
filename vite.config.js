import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/site_dassos/', // important pour GitHub Pages
  plugins: [react()],
})

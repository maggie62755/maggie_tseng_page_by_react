import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/maggie_tseng_page_by_react/',
  plugins: [react()],
})

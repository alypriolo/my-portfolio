import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update `base` to match your GitHub repo name when deploying to GitHub Pages.
// Example: if your repo is github.com/alypriolo/my-portfolio, set base: '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
})

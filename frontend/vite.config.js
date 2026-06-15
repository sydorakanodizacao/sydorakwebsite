import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Tailwind v4 via plugin oficial (@tailwindcss/vite) ao lado do React.
// Sem PostCSS/autoprefixer: o plugin v4 já resolve o prefixing.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

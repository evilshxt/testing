import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Import the Tailwind CSS plugin for Vite
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
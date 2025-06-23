import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(), // ✅ your working Tailwind plugin
  ],
  build: {
    rollupOptions: {
      input: {
        // 👇 Add more HTML entry points here
        main: path.resolve(__dirname, 'index.html'),
        second: path.resolve(__dirname, 'main.html'),
      }
    }
  }
})
// This configuration file sets up Vite with Tailwind CSS and specifies multiple HTML entry points for the build process.
// It uses the `@tailwindcss/vite` plugin for Tailwind CSS support and configures Rollup to handle multiple HTML files as entry points.
// The `path` module is used to resolve the paths to the HTML files, ensuring that the build process can correctly locate them.

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        mining: 'src/pages/mining.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    tailwindcss(),
  ]
})
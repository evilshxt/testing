import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        'vision-mission': 'vision-mission.html',
        mining: 'mining.html',
        energy: 'energy.html',
        marine: 'marine.html',
        telecom: 'telecom.html',
        infrastructure: 'infrastructure.html',
        test: 'test.html'
      },
      output: {
        manualChunks: undefined,
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    minify: 'terser',
    sourcemap: false
  },
  base: '/',
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizeDeps: {
    include: ['aos', 'gsap', 'firebase/app', 'firebase/auth', 'firebase/firestore']
  },
  publicDir: 'public'
})
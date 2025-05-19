import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: './src/app/entrypoint/index.html',
      },
    },
    outDir: '../docs',
    emptyOutDir: true,
  },
  server: {
    open: '/src/app/entrypoint/index.html',
  },
})

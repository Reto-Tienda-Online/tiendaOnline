import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
  resolve: {
    alias: [
      {find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url))},
    ]
  }
})

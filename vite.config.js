import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import analyzer from 'rollup-plugin-analyzer'

export default defineConfig({
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    analyzer({ summaryOnly: true }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://sample-accounts-api.herokuapp.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})

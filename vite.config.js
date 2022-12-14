import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
    }
  }
})

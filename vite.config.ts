import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server:{
    host:'0.0.0.0'
  }
})

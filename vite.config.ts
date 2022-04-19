import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import VisualDev from 'visual-dev/plugins/vite'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    styleImport({
      resolves: [VantResolve()],
    }),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server:{
    host:'0.0.0.0'
  }
})

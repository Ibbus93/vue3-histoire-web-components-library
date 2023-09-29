import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      // This ensure that the components are shipped with <style> tag attached to the component
      // References: https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#using-vue-sfcs-as-custom-elements
      customElement: true,
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'web-components',
      fileName: 'main',
    },
  },
  define: {
    'process.env': process.env,
  },
})

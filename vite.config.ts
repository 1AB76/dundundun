import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import path from "path";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    Components({
      dts: true
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      // use default prompt
      // registerType: 'autoUpdate',
      registerType: 'prompt',
      // includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      // manifest: {
      //   name: '今天我们来做菜',
      //   short_name: '来做菜',
      //   theme_color: '#ffffff',
      //   icons: [
      //     {
      //       src: '/pwa-192x192.png',
      //       sizes: '192x192',
      //       type: 'image/png',
      //     },
      //     {
      //       src: '/pwa-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //     },
      //     {
      //       src: '/pwa-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //       purpose: 'any maskable',
      //     },
      //   ],
      // },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: true,
    }),
  ]
})

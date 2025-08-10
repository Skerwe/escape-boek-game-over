/** @type {import('vite').UserConfig} */
import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path'
import path from 'path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'clover', 'json'],
      include: ['src'],
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      external: [
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          'public/cordova.js',
        ),
      ],
      plugins: [
        del({ targets: 'www/*', hook: 'buildStart' }),
        copy({
          targets: [{ src: 'build/*', dest: 'www' }],
          hook: 'writeBundle',
        }),
        del({ targets: 'www/cordova.js', hook: 'closeBundle' }),
      ],
      output: { assetFileNames: 'assets/[name]-[hash][extname]' },
    },
  },
  plugins: [
    vue(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

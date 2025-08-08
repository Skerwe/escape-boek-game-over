import { defineConfig, globalIgnores } from 'eslint/config'

import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginCypress from 'eslint-plugin-cypress'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'


export default defineConfig([
  { files: ['src/**/*.js'], languageOptions: { globals: globals.browser } },
  { files: ['src/**/*.js'], plugins: { eslint }, extends: ['eslint/recommended'] },
  {
    files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      'cypress/unsafe-to-chain-command': 'error',
    },
  },
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  },
  globalIgnores(['**/cypress.config.js', 'public/cordova.js', 'www/*', 'build/*', 'platforms/*', 'coverage/*'])
])

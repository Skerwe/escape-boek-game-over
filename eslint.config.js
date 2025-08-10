// eslint.config.js
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import cypress from 'eslint-plugin-cypress';
import globals from 'globals';

export default [
  // Global ignores
  {
    ignores: [
      '**/cypress.config.js',
      'public/cordova.js',
      'www/*',
      'build/*',
      'platforms/*',
      'coverage/*',
    ],
  },

  // Base JavaScript/Node settings
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },

  // Vue rules with Babel parser and no config file requirement
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { vue },
    ...vue.configs['vue3-recommended'],
  },

  // Prettier integration with single quotes enforced
  {
    plugins: { prettier },
    rules: {
      ...prettier.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
        },
      ],
    },
  },

  // Cypress test files
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
    },
    plugins: { cypress },
    rules: {
      ...cypress.configs.recommended.rules,
    },
  },
];

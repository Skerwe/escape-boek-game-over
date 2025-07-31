const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
  },
  component: {
    setupNodeEvents(on, config) {
      // component testing node events setup code
    },
  },
})

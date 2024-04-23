const { defineConfig } = require("cypress");

module.export = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

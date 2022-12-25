const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "w5b6zd",
  reporter: "mochawesome",
  retries: {
    runMode: 2,
    openMode: 1,
  },
  env: {
    username: "ay@mail.com",
    password: "pass1234",
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 50000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://tawdry-rule.surge.sh/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },

  scripts: {
    test: "npx cypress run",
    open: "npx cypress open",
    cloudTest:
      "npx cypress run --record --key 781adacf-be2f-4610-ac7d-2537a429f8b9",
  },
});

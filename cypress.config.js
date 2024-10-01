const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js", // Adjust if you have a different path
    baseUrl: "http://localhost:3000", // Adjust to match your frontend URL
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

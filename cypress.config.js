const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Your e2e configuration
    baseUrl: 'http://localhost:3000', // Example base URL
  },
});

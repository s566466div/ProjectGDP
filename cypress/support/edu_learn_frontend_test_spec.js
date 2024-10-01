// cypress/e2e/your_test_spec.js

describe('My First Test', () => {
    it('Visits the frontend', () => {
      cy.visit('http://localhost:3000'); // Adjust the URL to your frontend
      cy.contains('Some Text'); // Replace with an actual text from your frontend
    });
  });
  
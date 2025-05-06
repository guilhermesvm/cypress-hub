const { faker } = require("@faker-js/faker");

describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  });

  it('Successful Registration', () => {
    const randomEmail = faker.internet.email();

    cy.get('[data-test="input-name"]').type('Guilherme QA');
    cy.get('[data-test="input-email"]').type(randomEmail);
    cy.get('[data-test="input-password"]').type('TestingQA@123');
    cy.get('[data-test="input-confirm-password"]').type('TestingQA@123');
    cy.get('[data-test="submit-button"]').click();
    cy.url().should('include', '/login');
  });
});
const { faker } = require("@faker-js/faker");

describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  });

  it('Successful Registration', () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.string.alpha(1).toUpperCase() + faker.string.numeric(1) + faker.string.alpha(5);
    const confirmPassword = randomPassword;
  
    cy.register(randomName, randomEmail, randomPassword, confirmPassword)
    cy.url().should('include', '/login');
  });
});
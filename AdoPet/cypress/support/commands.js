Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(password);
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add('register', (name, email, password, confirmPassword) => {
  cy.get('[data-test="input-name"]').clear().type(name);
  cy.get('[data-test="input-email"]').clear().type(email);
  cy.get('[data-test="input-password"]').clear().type(password);
  cy.get('[data-test="input-confirm-password"]').clear().type(confirmPassword);
  cy.get('[data-test="submit-button"]').click();
});
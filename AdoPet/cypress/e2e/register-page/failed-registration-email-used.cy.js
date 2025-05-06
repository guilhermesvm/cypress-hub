describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  });
  it('Failed Registration - Email Already in Use', () => {
    cy.get('[data-test="input-name"]').type('Guilherme QA');
    cy.get('[data-test="input-email"]').type('guilherme.test@qa.com');
    cy.get('[data-test="input-password"]').type('TestingQA@123');
    cy.get('[data-test="input-confirm-password"]').type('TestingQA@123');
    cy.get('[data-test="submit-button"]').click();
    cy.get('p.error').should('be.visible').and('contain', 'Falha ao cadastrar!');
  });
});
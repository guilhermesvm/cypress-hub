describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  });

  it('Failed Registration - Missing Credentials', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.get('p.error').should('be.visible').and('contain', 'É necessário informar um endereço de email');
    cy.get('p.error').should('be.visible').and('contain', 'Crie uma senha');
    cy.get('p.error').should('be.visible').and('contain', 'Repita a senha criada acima');
  });
});
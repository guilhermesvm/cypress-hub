describe('Register Page', () => {
  const NAME = 'Guilherme QA';
  const EMAIL = 'guilherme.test@qa.com';
  const PASSWORD = 'TestingQA@123';
  const CONFIRM_PASSWORD = PASSWORD;

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  });

  it('Failed Registration - Email Already in Use', () => {
    cy.register(NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD)
    cy.get('p.error').should('be.visible').and('contain', 'Falha ao cadastrar!');
  });
});
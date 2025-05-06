describe('Main page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('should show available pets', () => {
    cy.get('.button').click();
  });

  it('should check header buttons ', () => {
    cy.get('.header__message').click();
    cy.get('.header__home').click();
  });

  it('should go to login page', () => {
    cy.get('[data-test="login-button"]').click();
  });

  it('should go to register page', () => {
    cy.get('[data-test="login-button"]').click();
  });
});
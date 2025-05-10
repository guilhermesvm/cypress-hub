describe('Main page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('should check page title', () => {
    cy.title().should('eq', 'AdoPet');
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
    cy.url().should('include', '/login');
  });

  it('should go to register page', () => {
    cy.get('[data-test="register-button"]').click();
    cy.url().should('include', '/cadastro');
  });
  
  it('should middle paragraph', () => {
    cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  });

  it('should check footer paragraph', () => {
    cy.contains('p', 'Quem ama adota!').should('be.visible');
  });

  
});
describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Successful login', () => {
        cy.login('guilherme.test@qa.com', 'TestingQA@123')
        cy.url().should('include', '/home');
    });
});
describe('Login Page', () => {
    const VALID_EMAIL = 'guilherme.test@qa.com'
    const VALID_PASSWORD = 'TestingQA@123'
    
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Successful login', () => {
        cy.login(VALID_EMAIL, VALID_PASSWORD)
        cy.url().should('include', '/home');
    });
});
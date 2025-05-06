describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Successful login', () => {
        cy.get('[data-test="input-loginEmail"]').type('guilherme.test@qa.com');
        cy.get('[data-test="input-loginPassword"]').type('TestingQA@123');
        cy.get('[data-test="submit-button"]').click();
        cy.url().should('include', '/home');
    });
});
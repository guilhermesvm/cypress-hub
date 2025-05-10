describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Failed Login - empty credentials', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.get('p.error').should('be.visible');
        cy.get('p.error').eq(0).should('contain', 'É necessário informar um endereço de email');
        cy.get('p.error').eq(1).should('contain', 'Insira sua senha');
    });
});
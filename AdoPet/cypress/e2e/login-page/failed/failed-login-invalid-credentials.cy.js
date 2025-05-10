describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Failed Login - invalid credentials', () => {
        cy.get('[data-test="input-loginEmail"]').type('test');
        cy.get('[data-test="input-loginPassword"]').type('test');
        cy.get('[data-test="submit-button"]').click();
        cy.get('p.error').should('be.visible').and('contain', 'Por favor, verifique o email digitado');
        cy.get('p.error').should('be.visible').and('contain', 'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    });
});
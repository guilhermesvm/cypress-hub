describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Failed Login - invalid credentials', () => {
        cy.get('[data-test="input-loginEmail"]').type('graziea@gmail.com');
        cy.get('[data-test="input-loginPassword"]').type('QAovertest123!');
        cy.get('[data-test="submit-button"]').click();
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });

    it('Failed Login - invalid email and valid password', () => {
        cy.get('[data-test="input-loginEmail"]').type('graziea@gmail.com');
        cy.get('[data-test="input-loginPassword"]').type('TestingQA@123');
        cy.get('[data-test="submit-button"]').click();
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });

    it('Failed Login - valid email and invalid password', () => {
        cy.get('[data-test="input-loginEmail"]').type('guilherme.test@qa.com');
        cy.get('[data-test="input-loginPassword"]').type('QAovertest123!');
        cy.get('[data-test="submit-button"]').click();
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });
});
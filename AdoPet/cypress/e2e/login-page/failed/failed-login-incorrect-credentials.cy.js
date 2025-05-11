describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Failed Login - incorrect credentials', () => {
        cy.login('graziea@gmail.com', 'QAovertest123!')
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });

    it('Failed Login - incorrect email and correct password', () => {
        cy.login('graziea@gmail.com', 'TestingQA@123')
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });

    it('Failed Login - correct email and incorrect password', () => {
        cy.login('guilherme.test@qa.com', 'QAovertest123!')
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });
});
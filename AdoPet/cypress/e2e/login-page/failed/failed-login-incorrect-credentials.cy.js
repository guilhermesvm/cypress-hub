describe('Login Page', () => {
    const VALID_EMAIL = 'guilherme.test@qa.com'
    const VALID_PASSWORD = 'TestingQA@123'
    const INCORRECT_EMAIL = 'graziea@gmail.com'
    const INCORRECT_PASSWORD = 'QAovertest123!'

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Failed Login - incorrect credentials', () => {
        cy.login(INCORRECT_EMAIL, INCORRECT_PASSWORD)
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });

    it('Failed Login - incorrect email and correct password', () => {
        cy.login(INCORRECT_EMAIL, VALID_PASSWORD)
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });

    it('Failed Login - correct email and incorrect password', () => {
        cy.login(VALID_EMAIL, INCORRECT_PASSWORD)
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });
});
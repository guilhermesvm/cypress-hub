import { VALID_EMAIL, VALID_PASSWORD, INCORRECT_EMAIL, INCORRECT_PASSWORD } from "../../../support/constants/credentials.js"

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode: 400}).as('stubPost');
    });

    it('Failed Login - incorrect credentials', () => {
        cy.login(INCORRECT_EMAIL, INCORRECT_PASSWORD);
        cy.wait('@stubPost');
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
        
    });

    it('Failed Login - incorrect email and correct password', () => {
        cy.login(INCORRECT_EMAIL, VALID_PASSWORD);
        cy.wait('@stubPost');
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });

    it('Failed Login - correct email and incorrect password', () => {  
        cy.login(VALID_EMAIL, INCORRECT_PASSWORD);
        cy.wait('@stubPost');
        cy.get('p.error').should('be.visible').and('contain', 'Falha no login. Consulte suas credenciais.');
    });
});
import { INVALID_DATA } from "../../../support/constants/credentials.js"

describe('Login Page', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Failed Login - invalid credentials', () => {
        cy.login(INVALID_DATA, INVALID_DATA)
        cy.get('p.error').should('be.visible').and('contain', 'Por favor, verifique o email digitado');
        cy.get('p.error').should('be.visible').and('contain', 'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    });

    it('Failed Login - empty credentials', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.get('p.error').should('be.visible');
        cy.get('p.error').eq(0).should('contain', 'É necessário informar um endereço de email');
        cy.get('p.error').eq(1).should('contain', 'Insira sua senha');
    });
});
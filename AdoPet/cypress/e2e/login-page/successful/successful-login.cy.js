import { VALID_EMAIL, VALID_PASSWORD } from "../../../support/constants/credentials.js"

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });

    it('Successful login', () => {
        cy.login(VALID_EMAIL, VALID_PASSWORD)
        cy.url().should('include', '/home');
    });
});
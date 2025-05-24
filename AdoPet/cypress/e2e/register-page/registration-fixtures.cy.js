import { users } from "../../fixtures/users.json"

describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  });

  users.forEach(user => {
    it('Should correctly fill the form to create accounts for all users', () => {
        cy.register(user.name, user.email, user.password, user.password)
    })
  })
});
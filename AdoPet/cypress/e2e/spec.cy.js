const { faker } = require("@faker-js/faker");

describe('Main page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('should show available pets', () => {
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });

  it('should check header buttons ', () => {
    cy.get('.header__message').click();
    cy.get('.header__home').click();
  })

  it('should go to login page', () => {
    cy.contains('a', 'Fazer login').click();
  })

  it('should go to register page', () => {
    cy.contains('a', 'Cadastrar').click();
  })
})

  
describe('Register page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  });
  //Faker data
  it('successful registration', () => {
    const randomEmail = faker.internet.email();

    cy.get('input[name="nome"]').type('Guilherme QA');
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type('TestingQA@123');
    cy.get('input[name="confirm_password"]').type('TestingQA@123');
    cy.contains('button', 'Cadastrar').click();
    cy.url().should('include', '/login');
  })

  it('failed registration - email already in use', () => {
    cy.get('input[name="nome"]').type('Guilherme QA');
    cy.get('input[name="email"]').type('guilherme@qa.com');
    cy.get('input[name="password"]').type('TestingQA@123');
    cy.get('input[name="confirm_password"]').type('TestingQA@123');
    cy.contains('button', 'Cadastrar').click();
    cy.get('.error').should('be.visible').and('contain', 'Falha ao cadastrar!');
  })
})

// describe('Home page', () => {
//   beforeEach(() => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//   });

//   it('should talk to responsible ', () => {
   
//   })

// })
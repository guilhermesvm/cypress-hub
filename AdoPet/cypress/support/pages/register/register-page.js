import { ELEMENTS } from "./elements";
const { faker } = require("@faker-js/faker");

class RegisterPage {
    visitRegisterPage(){
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get(ELEMENTS.registerButton).click();

    }
    fillForm(){
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        const randomPassword = faker.string.alpha(1).toUpperCase() + faker.string.numeric(1) + faker.string.alpha(5);
        const confirmPassword = randomPassword;

        cy.get(ELEMENTS.name).type(randomName);
        cy.get(ELEMENTS.email).type(randomEmail);
        cy.get(ELEMENTS.inputPassword).type(randomPassword);
        cy.get(ELEMENTS.confirmPassword).type(confirmPassword);
    }
    submitForm(){
        cy.get(ELEMENTS.submitButton).click();
    }
}

export default new RegisterPage();
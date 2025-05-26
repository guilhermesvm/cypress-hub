import RegisterPage from "../../support/pages/register/register-page";

describe('Register Page', () => {
  it('Should correctly fill and submit a form to register a new user', () => {
    RegisterPage.visitRegisterPage();
    RegisterPage.fillForm();
    RegisterPage.submitForm();
  });
});
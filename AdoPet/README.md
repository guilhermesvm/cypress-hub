# E2E Test Automation with Cypress

This repository aims to practice automated testing using [Cypress](https://www.cypress.io/) in a front-end environment. The tests were implemented in the [**AdoPet**](https://adopet-frontend-cypress.vercel.app/) application, which simulates a pet adoption process, following the course [Cypress: End-to-End Test Automation](https://cursos.alura.com.br/course/cypress-automatizando-testes-e2e) from [Alura](https://www.alura.com.br/).

## 📌 Technologies and Tools Used

- **Cypress** for end-to-end test automation.  
- **Mochawesome** for report generation.  
- **Faker.js** for generating random test data.  
- **Cypress Cloud** for cloud test execution and analysis.  
- **Page Object Model (POM)** for better code organization.  
- **Fixtures** for external data usage.  
- **Stubs** to mock HTTP requests.  
- **API testing** with authentication via environment variables (`env`).  
- **Headless Testing** for running tests without a graphical interface.


## ▶️ Important Commands

### Run tests in interactive mode:
```bash
npx cypress open
```

### Run tests in headless mode:
```bash
npx cypress run
```

### Run tests with Mochawesome report generation:
```bash
npx cypress run --reporter mochawesome
```

### Run a specific test file
```bash
npx cypress run --spec "cypress/e2e/register-page/successful-registration.cy.js"
```

## 📘 Learnings

This project covered the following concepts:

- Structuring and **best practices** with Cypress.
- **Selecting** and checking elements.
- Creating and executing API tests.
- Report generation and failure tracking.
- Code organization using **POM** and **Fixtures**.
- Data simulation with **Faker**.
- Mocking requests using **Stubs**.
- Flaky tests (tests with intermittent results)
- Integration with Cypress Cloud, allowing test run analysis, failure history, and performance comparison between runs.
- Sensitive data storage in environment variables
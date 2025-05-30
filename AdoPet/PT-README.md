
# Automação E2E com Cypress

Este repositório tem como objetivo praticar testes automatizados utilizando [Cypress](https://www.cypress.io/) em um ambiente de front-end. Os testes foram implementados na aplicação **AdoPet**, que simula um processo de adoção de pets, através do curso [Cypress: automatizando testes E2E](https://cursos.alura.com.br/course/cypress-automatizando-testes-e2e) da Alura.

## 📌 Tecnologias e Ferramentas Utilizadas

- **Cypress** para automação de testes end-to-end.
- **Mochawesome** para geração de relatórios.
- **Faker.js** para geração de dados aleatórios.
- **Cypress Cloud** para execução e análise de testes na nuvem.
- **Page Objects Model (POM)** para organização do código.
- **Fixtures** para uso de dados externos.
- **Stubs** para simular requisições.
- **Testes de API** com autenticação por variável de ambiente (`env`).
- **Headless Testing** para execução sem interface gráfica.



## ▶️ Comandos Importantes

### Executar testes normalmente:
```bash
npx cypress open
```

### Executar testes em modo headless:
```bash
npx cypress run
```

### Executar testes com geração de relatório Mochawesome:
```bash
npx cypress run --reporter mochawesome
```

## 📘 Aprendizados

Este projeto introduziu os seguintes conceitos:

- Estruturação e boas práticas com Cypress.
- Criação e execução de testes funcionais e de API.
- Geração de relatórios e rastreamento de falhas.
- Organização de código com POM e Fixtures.
- Simulação de dados com Faker.
- Integração com ferramentas externas como o Cypress Cloud.
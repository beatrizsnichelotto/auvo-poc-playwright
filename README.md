# 🚀 Prova de Conceito - Automação de Testes Web (Desafio Auvo)

Este repositório contém uma **prova de conceito (POC)** de automação de testes web utilizando **Playwright com JavaScript** e o padrão **Page Object Model (POM)**.  

O objetivo é validar o fluxo de **cadastro, pesquisa e compra de produto** no site público [SauceDemo](https://www.saucedemo.com/).

---

## 🛠 Tecnologias Utilizadas
- 🌐 [Node.js](https://nodejs.org/) (versão 18+)
- 🤖 [Playwright](https://playwright.dev/)
- 💻 JavaScript
- 🏗 Arquitetura **Page Object Model (POM)**

---

## 📂 Estrutura do Projeto

auvo-poc-playwright/
│── tests/
│   └── productFlow.spec.js
│── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── ProductDetailsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│── playwright.config.js
│── README.md

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Pré-requisitos
- **Node.js 18 ou superior**  
  Verifique sua versão:
  ```bash
  node -v
  ```

### 2️⃣ Clonar o repositório
```bash
git clone https://github.com/beatrizsnichelotto/auvo-poc-playwright.git
cd auvo-poc-playwright
```

### 3️⃣ Instalar dependências
```bash
npm install
```

### 4️⃣ Instalar navegadores do Playwright
```bash
npx playwright install
```

---

## ▶️ Executando os testes

### 💻 Rodar todos os testes (modo headless)
```bash
npm test
```

### 🖥 Rodar com interface gráfica do Playwright
```bash
npm run test:ui
```
### 🔎 Rodar um teste específico
```bash
npx playwright test tests/productFlow.spec.js
```

---

## 📊 Relatório de Testes
Após rodar os testes, você pode gerar e visualizar um relatório em HTML.

### Gerar relatório HTML
```bash
npx playwright test --reporter=html
```

### Abrir o relatório no navegador
```bash
npx playwright show-report
```

### O relatório será aberto automaticamente no navegador e também ficará disponível em:
```bash
playwright-report/index.html
```

---

## ✅ Fluxo Automatizado

### 🔐 Login
- Acessa a página de login do SauceDemo.
- Realiza login com as credenciais padrão:
```bash
Usuário: standard_user
Senha: secret_sauce
```

### 🛒 Navegação e Pesquisa
- Acessa a lista de produtos.
- Seleciona o primeiro produto da lista.

### 📦 Validação do Produto
- Valida o título, preço e descrição do produto.

### 🛍 Carrinho e Checkout
- Adiciona o produto ao carrinho.
- Prossegue para checkout.

### 🏁 Finalização do Pedido
- Preenche os dados de checkout (nome, sobrenome, CEP).
- Finaliza a compra
- Valida a mensagem de sucesso “Thank you for your order”.

---

## 📖 Decisões de Implementação

- Utilização do Page Object Model (POM) para garantir reutilização e manutenção do código.
- Credenciais fixas do SauceDemo foram utilizadas (standard_user / secret_sauce).
- Estrutura do projeto organizada em tests/ e pages/.
- Testes escritos em JavaScript conforme requisito do desafio.
- Documentação em português, mas arquivos de Page Objects mantidos em inglês.

---

## 👩‍💻 Autora

Projeto desenvolvido por **Beatriz Snichelotto** para o **Desafio Técnico Auvo**.

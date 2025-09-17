// tests/productFlow.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Fluxo completo de compra no SauceDemo', async ({ page }) => {
  // 1️⃣ Login
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2️⃣ Página de Produtos
  const productsPage = new ProductsPage(page);
  await productsPage.validateOnPage();
  await productsPage.selectFirstProduct();

  // 3️⃣ Detalhes do Produto
  const productDetailsPage = new ProductDetailsPage(page);
  await productDetailsPage.validateProductDetails();
  await productDetailsPage.addToCart();
  await productDetailsPage.goToCart();

  // 4️⃣ Carrinho
  const cartPage = new CartPage(page);
  await cartPage.validateCartPage();
  await cartPage.checkout();

  // 5️⃣ Checkout
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillInformation('Beatriz', 'Snichelotto', '85801010');
  await checkoutPage.finishOrder();

  // 6️⃣ Validação Final
  await checkoutPage.validateSuccessMessage();
});

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsList = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async validateOnPage() {
    await this.page.waitForSelector('.inventory_list'); // garante que carregou
  }

  async selectFirstProduct() {
    await this.productsList.first().locator('[data-test$="-title-link"]').click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { ProductsPage };
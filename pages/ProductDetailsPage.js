const { expect } = require('@playwright/test');

class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.inventory_details_name');
    this.price = page.locator('.inventory_details_price');
    this.desc = page.locator('.inventory_details_desc');
    this.addButton = page.locator('[data-test^="add-to-cart"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async validateProductDetails() {
    await expect(this.title).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.desc).toBeVisible();
  }

  async addToCart() {
    await this.addButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { ProductDetailsPage };

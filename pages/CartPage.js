const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async validateCartPage() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };

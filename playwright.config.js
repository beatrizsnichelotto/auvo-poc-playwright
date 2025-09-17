// playwright.config.js
// Configuração base do Playwright
// Define onde estão os testes, reporter e opções de execução

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests', // pasta onde ficam os testes
  timeout: 30 * 1000, // tempo máximo por teste (30s)
  retries: 0, // número de tentativas caso falhe
  use: {
    headless: true, // roda sem abrir navegador
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // timeout por ação
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'only-on-failure', 
  },
  reporter: [['list'], ['html', { outputFolder: 'report' }]], 
};

module.exports = config;

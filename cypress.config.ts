import { defineConfig } from 'cypress';

export default defineConfig({
  // Cypress Cloud project id is read from the CYPRESS_PROJECT_ID env variable.
  allowCypressEnv: false,
  retries: { runMode: 2, openMode: 0 },
  video: false,
  e2e: {
    baseUrl: 'https://telnyx.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
  },
});

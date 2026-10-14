import './commands';

// Known noise from third-party scripts on the site ("Script error." is an opaque
// error from a cross-origin script, e.g. the cookie banner). Anything else is a real
// application error and must fail the test.
const IGNORED_ERRORS: RegExp[] = [/ResizeObserver loop/, /> Script error\./];

Cypress.on('uncaught:exception', (err) => {
  if (IGNORED_ERRORS.some((pattern) => pattern.test(err.message))) {
    return false;
  }
  return undefined;
});

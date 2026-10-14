const COOKIE_CONSENT_HOST = 'cdn.cookielaw.org';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Prevents the OneTrust cookie banner from loading, so it can't overlap
       * page elements. The banner itself is covered by cookie-consent.cy.ts.
       */
      skipCookieConsent(): Chainable<null>;
    }
  }
}

Cypress.Commands.add('skipCookieConsent', () => {
  cy.intercept({ hostname: COOKIE_CONSENT_HOST }, { statusCode: 404, body: '' });
});

export {};

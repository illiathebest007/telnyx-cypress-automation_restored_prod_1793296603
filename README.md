# Telnyx E2E Tests

UI tests for [telnyx.com](https://telnyx.com) with Cypress 15, TypeScript and Page Objects.

## Run

```bash
npm install
npm test            # headless
npm run cy:open     # interactive
npm run lint && npm run typecheck
```

## Structure

```
cypress/
├── e2e/                # specs: home, navigation, footer, contact-us, cookie-consent
├── fixtures/           # test data
└── support/
    ├── pages/          # page objects
    └── components/     # header, footer
```

## Notes

- The contact form is never submitted: submission is disabled via the Marketo API and the lead endpoint is stubbed.
- The cookie banner is blocked in regular tests and covered by its own spec.
- No `force: true` or hard waits (enforced by ESLint).
- CI (GitHub Actions) runs lint, type check and tests on push, PRs and a daily schedule.

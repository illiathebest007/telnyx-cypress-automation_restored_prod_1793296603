import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export abstract class BasePage {
  protected abstract readonly path: string;

  readonly header = new Header();
  readonly footer = new Footer();

  visit(): this {
    cy.skipCookieConsent();
    cy.visit(this.path);
    return this;
  }

  get heading(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('main h1').first();
  }

  verifyIsOpened(): this {
    cy.location('pathname').should('eq', this.path);
    this.heading.should('be.visible');
    return this;
  }
}

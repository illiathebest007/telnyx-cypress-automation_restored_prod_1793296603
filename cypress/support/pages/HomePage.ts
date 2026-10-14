import { BasePage } from './BasePage';

class HomePage extends BasePage {
  protected readonly path = '/';

  verifyIsOpened(): this {
    cy.location('pathname').should('eq', this.path);
    cy.title().should('include', 'Telnyx');
    this.header.root.should('be.visible');
    return this;
  }
}

export const homePage = new HomePage();

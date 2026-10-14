export type HeaderMenu =
  'Products' | 'Solutions' | 'Pricing' | 'Why Telnyx' | 'Resources' | 'Developers';

export class Header {
  get root(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('header').first();
  }

  menuButton(menu: HeaderMenu): Cypress.Chainable<JQuery<HTMLButtonElement>> {
    return this.root.contains('button', menu);
  }

  openMenu(menu: HeaderMenu): this {
    this.menuButton(menu).click();
    return this;
  }

  clickLink(href: string): this {
    this.root.find(`a[href="${href}"]`).filter(':visible').first().click();
    return this;
  }
}

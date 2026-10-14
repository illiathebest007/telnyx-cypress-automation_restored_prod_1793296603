export class Footer {
  get root(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('footer').first();
  }

  scrollIntoView(): this {
    this.root.scrollIntoView();
    return this;
  }

  link(text: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> {
    return this.root.contains('a', text);
  }

  // The footer renders separate desktop and mobile layouts with the same links,
  // so look the link up by href among the visible ones.
  clickLink(href: string): this {
    this.root.find(`a[href="${href}"]`).filter(':visible').first().click();
    return this;
  }
}

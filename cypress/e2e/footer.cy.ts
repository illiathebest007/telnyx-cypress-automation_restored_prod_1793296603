import socialLinks from '../fixtures/social-links.json';
import { ContentPage } from '../support/pages/ContentPage';
import { homePage } from '../support/pages/HomePage';

describe('Footer', () => {
  beforeEach(() => {
    homePage.visit();
    homePage.footer.scrollIntoView();
  });

  it('opens Terms and Conditions of Service', () => {
    const terms = new ContentPage('/terms-and-conditions-of-service');

    homePage.footer.clickLink('/terms-and-conditions-of-service');

    terms.verifyIsOpened();
  });

  socialLinks.forEach(({ name, href }) => {
    it(`links to the official ${name} profile`, () => {
      homePage.footer.link(name).should('have.attr', 'href', href);
    });
  });
});

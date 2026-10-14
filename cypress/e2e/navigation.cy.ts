import { ContentPage } from '../support/pages/ContentPage';
import { contactPage } from '../support/pages/ContactPage';
import { homePage } from '../support/pages/HomePage';

describe('Header navigation', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('opens Voice AI pricing from the Pricing menu', () => {
    const voiceAiPricing = new ContentPage('/pricing/voice-ai-agents');

    homePage.header.openMenu('Pricing').clickLink('/pricing/voice-ai-agents');

    voiceAiPricing.verifyIsOpened();
  });

  it('opens the contact page from the "Contact sales" button', () => {
    homePage.header.clickLink('/contact-us');

    contactPage.verifyIsOpened();
  });
});

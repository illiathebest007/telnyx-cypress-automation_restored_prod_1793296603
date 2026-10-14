import contactRequest from '../fixtures/contact-request.json';
import { contactPage } from '../support/pages/ContactPage';

describe('Contact sales form', () => {
  beforeEach(() => {
    contactPage.visit();
  });

  it('accepts a fully filled form without sending a real lead', () => {
    contactPage.fillForm(contactRequest).verifyFormIsValid().submit().verifyNoLeadSent();
  });

  it('highlights all required fields when submitted empty', () => {
    contactPage
      .submit()
      .verifyErrorMessage('This field is required.')
      .verifyAllRequiredFieldsInvalid()
      .verifyNoLeadSent();
  });

  it('rejects an invalid email address', () => {
    contactPage
      .fillForm({ ...contactRequest, email: 'not-an-email' })
      .submit()
      .verifyFieldInvalid('email')
      .verifyNoLeadSent();
  });
});

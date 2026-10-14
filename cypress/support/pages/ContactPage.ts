import type { MktoForm } from '../types/marketo';
import { BasePage } from './BasePage';

export interface ContactRequest {
  reason: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phone: string;
  website: string;
  additionalInfo: string;
  referralSource: string;
}

const FORM_LOAD_TIMEOUT = 30000;

const selectors = {
  reason: '#Reason_for_Contact__c',
  firstName: '#FirstName',
  lastName: '#LastName',
  email: '#Email',
  phoneCountry: '#Phone_Number_Extension__c',
  phone: '#Phone_Number_Base__c',
  website: '#Website',
  additionalInfo: '#Form_Additional_Information__c',
  referralSource: '#How_did_you_hear_about_Telnyx_Open__c',
  submit: 'button[type="submit"]',
  errorMessage: '.mktoErrorMsg',
  invalidField: '.mktoInvalid',
  requiredField: '.mktoRequired',
} as const;

class ContactPage extends BasePage {
  protected readonly path = '/contact-us';

  /**
   * Opens the page with lead submission disabled: the tests run against
   * production, so the form must never create a real lead in the CRM.
   */
  visit(): this {
    cy.intercept('**/leadCapture/**', { statusCode: 200, body: {} }).as('leadCapture');
    super.visit();
    cy.get(selectors.firstName, { timeout: FORM_LOAD_TIMEOUT }).should('be.visible');
    this.form.invoke('submittable', false);
    return this;
  }

  get form(): Cypress.Chainable<MktoForm> {
    return cy.window().its('MktoForms2', { timeout: FORM_LOAD_TIMEOUT }).invoke('allForms').its(0);
  }

  fillForm(data: ContactRequest): this {
    cy.get(selectors.reason).select(data.reason);
    cy.get(selectors.firstName).type(data.firstName);
    cy.get(selectors.lastName).type(data.lastName);
    cy.get(selectors.email).type(data.email);
    cy.get(selectors.phoneCountry).select(data.phoneCountry);
    cy.get(selectors.phone).type(data.phone);
    cy.get(selectors.website).type(data.website);
    cy.get(selectors.additionalInfo).type(data.additionalInfo);
    cy.get(selectors.referralSource).type(data.referralSource);
    return this;
  }

  submit(): this {
    cy.get(selectors.submit).click();
    return this;
  }

  verifyFormIsValid(): this {
    this.form.invoke('validate').should('eq', true);
    cy.get(selectors.invalidField).should('not.exist');
    return this;
  }

  verifyErrorMessage(message: string): this {
    cy.get(selectors.errorMessage).filter(':visible').should('contain', message);
    return this;
  }

  verifyAllRequiredFieldsInvalid(): this {
    cy.get(selectors.requiredField).each(($field) => {
      cy.wrap($field).should('have.class', selectors.invalidField.slice(1));
    });
    return this;
  }

  verifyFieldInvalid(field: keyof ContactRequest): this {
    cy.get(selectors[field]).should('have.class', selectors.invalidField.slice(1));
    return this;
  }

  verifyNoLeadSent(): this {
    cy.get('@leadCapture.all').should('have.length', 0);
    return this;
  }
}

export const contactPage = new ContactPage();

const banner = '#onetrust-banner-sdk';
const acceptButton = '#onetrust-accept-btn-handler';

describe('Cookie consent banner', () => {
  it('is dismissed after accepting cookies and stays hidden on reload', () => {
    cy.visit('/');

    cy.get(banner, { timeout: 20000 }).should('be.visible');
    cy.get(acceptButton).click();

    cy.get(banner).should('not.be.visible');
    cy.getCookie('OptanonAlertBoxClosed').should('exist');

    cy.reload();
    cy.get(banner).should('not.exist');
  });
});

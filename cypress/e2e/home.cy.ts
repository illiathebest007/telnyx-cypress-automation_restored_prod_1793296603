import type { HeaderMenu } from '../support/components/Header';
import { homePage } from '../support/pages/HomePage';

const HEADER_MENUS: HeaderMenu[] = [
  'Products',
  'Solutions',
  'Pricing',
  'Why Telnyx',
  'Resources',
  'Developers',
];

describe('Home page', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('loads with header and footer', () => {
    homePage.verifyIsOpened();
    homePage.footer.scrollIntoView().root.should('be.visible');
  });

  it('shows all top-level navigation menus', () => {
    HEADER_MENUS.forEach((menu) => {
      homePage.header.menuButton(menu).should('be.visible');
    });
  });
});

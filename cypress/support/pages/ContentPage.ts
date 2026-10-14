import { BasePage } from './BasePage';

/** Any static content page (pricing, legal, product) identified by its path. */
export class ContentPage extends BasePage {
  constructor(protected readonly path: string) {
    super();
  }
}

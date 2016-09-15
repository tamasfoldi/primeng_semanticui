import { SemanticUiPrimeNgPage } from './app.po';

describe('semantic-ui-prime-ng App', function() {
  let page: SemanticUiPrimeNgPage;

  beforeEach(() => {
    page = new SemanticUiPrimeNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

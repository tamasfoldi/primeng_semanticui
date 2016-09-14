import { SemanticUIPrimeNgPage } from './app.po';

describe('Semantic UI PrimeNg App', function() {
  let page: SemanticUIPrimeNgPage;

  beforeEach(() => {
    page = new SemanticUIPrimeNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

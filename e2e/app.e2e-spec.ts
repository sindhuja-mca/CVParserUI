import { CVParseUIPage } from './app.po';

describe('cvparse-ui App', function() {
  let page: CVParseUIPage;

  beforeEach(() => {
    page = new CVParseUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

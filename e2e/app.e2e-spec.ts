import { KlimacheckPage } from './app.po';

describe('klimacheck App', function() {
  let page: KlimacheckPage;

  beforeEach(() => {
    page = new KlimacheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

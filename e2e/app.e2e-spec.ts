import { JavisListPage } from './app.po';

describe('javis-list App', () => {
  let page: JavisListPage;

  beforeEach(() => {
    page = new JavisListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

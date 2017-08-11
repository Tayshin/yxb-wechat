import { WeuiPage } from './app.po';

describe('weui App', () => {
  let page: WeuiPage;

  beforeEach(() => {
    page = new WeuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

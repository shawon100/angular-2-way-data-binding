import { MymaterialPage } from './app.po';

describe('mymaterial App', () => {
  let page: MymaterialPage;

  beforeEach(() => {
    page = new MymaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

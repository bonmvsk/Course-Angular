import { ShopingListPage } from './app.po';

describe('shoping-list App', () => {
  let page: ShopingListPage;

  beforeEach(() => {
    page = new ShopingListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

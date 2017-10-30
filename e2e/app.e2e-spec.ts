import { AngularplaygroundPage } from './app.po';

describe('angular-playground App', () => {
  let page: AngularplaygroundPage;

  beforeEach(() => {
    page = new AngularplaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

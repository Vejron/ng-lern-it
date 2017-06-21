import { NgLearnItPage } from './app.po';

describe('ng-learn-it App', () => {
  let page: NgLearnItPage;

  beforeEach(() => {
    page = new NgLearnItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

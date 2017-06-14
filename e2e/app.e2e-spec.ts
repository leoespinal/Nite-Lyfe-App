import { NitelyfePage } from './app.po';

describe('nitelyfe App', () => {
  let page: NitelyfePage;

  beforeEach(() => {
    page = new NitelyfePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

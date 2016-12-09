import { MatrialAdminPage } from './app.po';

describe('matrial-admin App', function() {
  let page: MatrialAdminPage;

  beforeEach(() => {
    page = new MatrialAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

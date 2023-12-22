class LoginPage {
  constructor() {
    //defining Selectors
    this.usernameSelector = "//input[@placeholder='Username']";
    this.loginButtonSelector = "//input[@type='submit']";
    this.passwordSelector = "//input[@placeholder='Password']";
    this.messageSelector = ".wrong";
    this.serverUrl = "http://localhost:8080/";
    this.loginUrl = this.serverUrl + "login";
    this.homeUrl = this.serverUrl + "files/";
  }

  async gotoLoginPage() {
    await page.goto(this.loginUrl);
  }

  async logintoHomePage(username, password) {
    await page.fill(this.usernameSelector, username);
    await page.fill(this.passwordSelector, password);
    await page.click(this.loginButtonSelector);
  }
}

module.exports = LoginPage;

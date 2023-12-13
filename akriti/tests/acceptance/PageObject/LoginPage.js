// const puppeteer =require('puppeteer')

class LoginPage {
  constructor() {
    //Url
    this.url = "http://localhost:8080/login";
    this.homePageUrl = "http://localhost:8080/files/";

    //Define selector
    this.usernameSelector = '//input[@placeholder="Username"]'; 
    this.passwordSelector = '//input[@placeholder="Password"]';
    this.loginButtonSelector = '//input[@type="submit"]';
    this.wrongMessageSelector = '//div[@class="wrong"]';
    
    //div[@class="wrong"]


  }

  async gotoLoginPage() {
    await page.goto(this.url);
  }

  async loginHomePage(username, password) {
    await page.fill(this.usernameSelector, username);
    await page.fill(this.passwordSelector, password);
    await page.click(this.loginButtonSelector);
  }

}
module.exports = LoginPage;

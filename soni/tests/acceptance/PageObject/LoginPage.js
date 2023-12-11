class LoginPage{
    constructor() {
        //defining selectors
this.usernameSelector ="//input[@placeholder='Username']"
this.oginButtonSelector = "//input[@type='submit']"
this.passwordSelector = "//input[@placeholder='Password']"
// const settingSelector = "//button[@title='Settings']"
const homepageUrl = "http://localhost:8080/files/"

//launch url
this.url = "http://localhost:8080/login";
    }
}
async gotoLoginPage() {
    await page.goto(url);
}
async logintoHomePage(username,password) {
  await page.fill(usernameSelector,username);
  await page.fill(passwordSelector,password);
  await page.click(loginButtonSelector);
}

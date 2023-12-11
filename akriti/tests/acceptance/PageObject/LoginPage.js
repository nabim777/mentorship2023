class LoginPage {
  constructor() {
    //define selector
    this.passwordSelector = '//input[@placeholder="Password"]';
    this.loginButtonSelector = '//input[@type="submit"]';
this.usernameselector = '//input[@type = "username"]';

    // WE paste it from the file "loginContent.js " so that we don't need to repeat it again
    //

    const url = "http://localhost:8080/login";
    const url1 = "http://localhost:8080/files";
  }
}

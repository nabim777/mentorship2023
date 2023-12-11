const { expect } = require('@playwright/test');
const assert = require('assert');

// launch url
const baseURL = "http://localhost:8080/"

class LoginPage {
    constructor(){
        this.usernameSelector = '//input[@type="text"]'
        this.passwordSelector = '//input[@type="password"]'
        this.loginButton =  '//input[@type="submit"]'
        this.wrongCredentialsDivSelector='//div[@class="wrong"]'

    }
    async navigateToLoginPage() {
        await page.goto(baseURL + 'login')
    }

    async verifyIfInLoginPage() {
        await expect(page).toHaveURL(baseURL + 'login')
    }

    async fillUsernameAndPassword(username, password) {
        await page.fill(this.usernameSelector, username);
        await page.fill(this.passwordSelector, password);
    }
    async clickLoginButton() {
        await page.click(this.loginButton);
    }

    async verifyIfInFilesPage() {
        await expect(page).toHaveURL(baseURL + "files/");
    }
    async validateErrorMessage(expectedMessage) {
        const errorMessage = await page.innerHTML(this.wrongCredentialsDivSelector)
        assert.equal(errorMessage, expectedMessage, `Expected message string "${expectedMessage}" but recieved message "${errorMessage}" from UI`)
    }
}

const loginPage = new LoginPage()
exports.loginPage = loginPage

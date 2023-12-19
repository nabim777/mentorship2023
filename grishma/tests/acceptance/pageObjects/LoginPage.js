class LoginPage {
    constructor() {
        //define selectors
        this.usernameSelector = '//input[@placeholder="Username"]'
        this.passwordSelector = '//input[@placeholder="Password"]'
        this.loginButtonSelector = '//input[@type="submit"]'
        this.messageSelector = '//div[@class="wrong"]'

        //launch url
        this.baseUrl = 'http://localhost:8080/'
    }

    async gotoLoginPage() {
        await page.goto(this.baseUrl+'login')
    }

    async login(username, password) {
        await page.fill(this.usernameSelector, username)
        await page.fill(this.passwordSelector, password)
        await page.click(this.loginButtonSelector)
    }

}
module.exports = LoginPage
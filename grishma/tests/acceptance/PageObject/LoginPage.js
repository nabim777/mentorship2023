class LoginPage{
    constructor(){

        //define selectors
        this.usernameSelector = '//input[@placeholder="Username"]'
        this.passwordSelector = '//input[@placeholder="Password"]'
        this.loginButtonSelector = '//input[@type="submit"]'
        this.messageSelector = '//div[@class="wrong"]'
        
        //launch url
        this.url ='http://localhost:8080/login'
    }

    async gotoHomePage(){
        await page.goto(url)
        await expect(page).toHaveURL(url)
    } 
}

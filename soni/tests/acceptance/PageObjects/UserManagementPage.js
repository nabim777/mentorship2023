class UserManagementPage{
    constructor() {
        this.settingPageSelector="//button[@title='Settings']"
        this.userManagementSelector="//a[@href='/settings/users']"
        this.newButtonSelector="//button[@class='button']"
        this.usernameSelector="//input[@id='username']"
        this.passwordSelector="//input[@type='password']"
        this.scopeSelector="//input[@id='scope']"
        this.saveButtonSelector="//input[@value='Save']"

    }
    async goToSettings(){
        await page.click(this.settingPageSelector)
    }

    async manageUser(dataTable){
        const userDetails = []
        for (const userData of dataTable.raw()) {
            userDetails.push(userData[1])
        }
        // await page.click(this.userManagementSelector)
        // await page.click(this.newButtonSelector)
        // await page.fill(this.usernameSelector)
        // await page.fill(this.passwordSelector)
        // await page.fill(this.scopeSelector)
        // await page.click(this.saveButtonSelector)

    }
}
    
module.exports=UserManagementPage;


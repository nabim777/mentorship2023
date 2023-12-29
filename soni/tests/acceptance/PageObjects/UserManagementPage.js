class UserManagementPage{
    constructor() {
        this.settingPageSelector="//button[@title='Settings']"
        this.userManagementSelector="//a[@href='/settings/users']"
        this.newButtonSelector="//button[@class='button']"
        this.usernameSelector="//input[@id='username']"
        this.passwordSelector="//input[@type='password']"
        this.scopeSelector="//input[@id='scope']"
        this.saveButtonSelector="//input[@value='Save']"
        this.userTabUrl = "http://localhost:8080/settings/users"
        this.tableRowSelector = "//tr[last()]/td"
    }

    async goToSettings(){
        await page.click(this.settingPageSelector)
    }

    async manageUser(dataTable){
        const userDetails = []
        for (const userData of dataTable.raw()) {
            userDetails.push(userData[1])
        }
        await page.click(this.userManagementSelector)
        await page.click(this.newButtonSelector)
        await page.fill(this.usernameSelector,userDetails[0])
        await page.fill(this.passwordSelector,userDetails[1])
        await page.click(this.saveButtonSelector)
    }
}
    
module.exports=UserManagementPage;


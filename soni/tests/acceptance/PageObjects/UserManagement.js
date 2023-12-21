class UserManagement{
    constructor() {
        this.settingPageSelectorettingPageSelector="//button[@title='Settings']"
        this.userManagementSelector="//a[@href='/settings/users']"
        this.newButtonSelector="//button[@class='button']"
        this.usernameSelector="//input[@id='username']"


        
    }
    async goToSettings(){
        await page.click(this.settingPageSelectorettingPageSelector)
    }

    async manageUser(username, password){
        
        await page.click(this.userManagementSelector)
        await page.click(this.newButtonSelector)
        await page.click(this.usernameSelector,)


    }
}
    



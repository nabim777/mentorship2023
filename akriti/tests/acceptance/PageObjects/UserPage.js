
class UserPage{
    constructor(){

 this.settingSelector = "//button[@title='Settings']"
 this.userManagent= "//li[@class='active']"
 this.newButtonSelector= "//button[@class='button']"
 this.usernameSelector= "//input[@id='username']"
 this.passwordSelector= "//input[@id='password']"
 this.scopeSelector = "//input[@id='scope']"
this.submitSelector =  "//input[@type='submit']"
 
    }
    async gotoSetting(){
        await page.click(this.settingSelector)
        await page.click(this.userManagent)
        await page.click(this.newButtonSelector)
        await page.fill(this.usernameSelector, this.passwordSelector, this.scopeSelector)
        await page.click(this.submitSelector)
    }
}
module.exports = UserPage
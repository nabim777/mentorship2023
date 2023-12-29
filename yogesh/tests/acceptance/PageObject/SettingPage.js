const util = require('util')
const { HomePage } = require('./HomePage')

const Tabs={
    "Profile Settings": "profile",
    "Share Management": "shares",
    "Global Settings" : "global",
    "User Management" : "users"
}
const homepage = new HomePage()

class SettingPage{
    constructor(){
        this.popupSelector = 'div[@class="noty_body"]'
        this.tabSelector = '//a[@href="/settings/%s"]'
        this.inputSelector = '//input[@id="%s"]'
        this.passwordSelector = '//input[@type="password" and @id="password"]'
        this.submitButtonSelector = '//input[@type="submit"]'
        this.newBtnSelector = '//a[@href="/settings/users/new"]'
        this.checkboxSelector ='//input[@type="checkbox"]'
        this.commandSelector = '//div/input[@type="text"]'
    }
    async navigateToSettingsPage() {
        await page.click(util.format(homepage.buttonSelector,'Settings'))
    }

    async changeTab(){
       await page.click(util.format(this.tabSelector,Tabs['User Management']))
    }

    async createUser(details){
        await page.click(this.newBtnSelector)
        await page.fill(util.format(this.inputSelector,'username'),details.username)
        await page.fill(this.passwordSelector,details.password)
        await page.fill(util.format(this.inputSelector,'scope'),details.scope)
        
        // Prevent the user from changing the password
        const checkboxes = await page.locator(this.checkboxSelector).all()
        if(details.enableChangingPassword=='YES'){
           await checkboxes[0].check()
        }
        const permissions = details.permissions.split(',')
        
        //removing first element of the array (it modifies the original array and returns the removed element)
        checkboxes.shift()
        // const permissionsCheckboxes =[...checkboxes] 

        for (let i=1;i<checkboxes.length;i++){
            // if administrative permission is to be marked checked we don't need other permissions to mark checked thus exiting the marking permission check loop
            if(permissions[0]=="1"){
              await  checkboxes[1].check();
                break;
            }
            // checking permission if 1 we check else uncheck(note: loop starts from 1 index thus skipping administrative permission it)
            if(permissions[i]=="1"){
              await  checkboxes[i].check();
            }else{
                await checkboxes[i].uncheck();
            }
        }
        await page.fill(this.commandSelector,details.commands)
        await page.click(this.submitButtonSelector)
        await page.click(util.format(this.tabSelector,Tabs['User Management']))
    }
}

exports.setting = new SettingPage()
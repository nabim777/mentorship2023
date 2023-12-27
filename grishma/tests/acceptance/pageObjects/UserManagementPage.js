class UserManagementPage {
    constructor() {
        this.settingsPageSelector = '//button[@aria-label="Settings"]'
        // this.userManagementPageSelector=`//li[contains(text()," User Management ")]`
        // this.userManagementPageSelector = `//div[@id="nav"]//a[4]`
        this.userManagementPageUrl = 'http://localhost:8080/settings/users'
        this.userManagementPageSelector = `//a[@href="/settings/users"]`
        this.newUserButtonSelector = '//a[@href="/settings/users/new"]'
        this.userNameSelector = `//input[@id="username"]`
        this.userPasswordSelector = `//input[@id="password"]`
        this.languageSelector = `//option[@value="en"]`
        this.checkBoxSelector = `//input[@type="checkbox"]`
        this.userSaveButtonSelector =`//div[@class="card-action"]/input[@value="Save"]`
        this.permissionSelector = '//p[contains(text()," Prevent the user from changing the password ")]/input'
        this.authoritySelector = '//p[contains(text()," Administrator ")]/input'
        this.userSaveButtonSelector =`//div[@class="card-action"]/input[@value="Save"]`
        // this.userSelector = '//div[@class="card-content full"]/table/tr[3]//td[1]'
        this.userSelector = '//td[contains(text(),"user")]'
    }

    async goToSettingsPage() {
        await page.click(this.settingsPageSelector)
    }

    async goToUserManagementPage() {
        // await page.getByRole('link', { name: 'User Management' }).click();
        await page.click(this.userManagementPageSelector)
    }

    async userRegistration(dataTable) {
        //await page.getByLabel('Language').selectOption('it');
        const userDetails = []
        for (const userData of dataTable.raw()) {
            userDetails.push(userData[1])
        }
        await page.click(this.newUserButtonSelector)
        await page.fill(this.userNameSelector, userDetails[0])
        await page.fill(this.userPasswordSelector, userDetails[1])
        await page.getByLabel('Language').selectOption('en');
        await page.locator(this.permissionSelector).uncheck()
        await page.locator(this.authoritySelector).uncheck()
        // await page.getByRole('button', { name: 'Save' }).click()
        await page.click(this.userSaveButtonSelector)
    }
}
module.exports = UserManagementPage
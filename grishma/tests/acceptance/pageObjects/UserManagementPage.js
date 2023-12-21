class UserManagementPage {
    constructor() {
        this.settingsPageSelector = '//button[@aria-label="Settings"]'
        // this.userManagementPageSelector=`//li[contains(text()," User Management ")]`
        //    this.userManagementPageSelector=`//a[@href="/settings/users"]`
    }

    async goToSettingsPage() {
        await page.click(this.settingsPageSelector)
    }

    async goToUserManagementPage() {
        // const whatisthis = await page.locator(this.userManagementPageSelector)
        // console.log(whatisthis)
        // await page.getByRole('link', { name: 'User Management' }).click();
    }

}
module.exports = UserManagementPage
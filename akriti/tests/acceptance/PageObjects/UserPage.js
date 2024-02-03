class UserPage {
  constructor() {
    this.settingSelector = "//button[@title='Settings']";
    this.userManagement = '//a[@href="/settings/users"]';
    this.newButtonSelector = "//button[@class='button']";
    this.usernameSelector = "//input[@id='username']";
    this.passwordSelector = "//input[@id='password']";
    this.scopeSelector = "//input[@id='scope']";
    this.languageSelector = "//input[@id='language']";
    this.adminPermissionSelector = "//input[@id='adminpermission']";
    this.submitSelector = "//input[@type='submit']";
    this.tableUserSelector ='//td[contains(text(),"%s")]'
    this.userManagementPageUrl = 'http://localhost:8080/settings/users'
  }

  async userManagementSetting() {
    await page.click(this.settingSelector);
    await page.click(this.userManagement);
  }

  async userRegistration(dataTable) {
    const userDetails = [];
    for (const userData of dataTable.raw()) {
      userDetails.push(userData[1]);
    }
    await page.click(this.newButtonSelector);
    await page.fill(this.usernameSelector, userDetails[0]);
    await page.fill(this.passwordSelector, userDetails[1]);

    await page.click(this.submitSelector);
    await page.click(this.userManagement);
  }
}

module.exports = UserPage;

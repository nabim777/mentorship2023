const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const util = require('util');

const UserManagementPage = require("../pageObjects/UserManagementPage.js")
const userManagementPage = new UserManagementPage

Given('the admin has been redirected to the settings page', async function () {
    await userManagementPage.goToSettingsPage()
});

Given('the admin has been redirected to the user management page', async function () {
    await userManagementPage.goToUserManagementPage()
});

When('admin creates a new user with following attributes', async function (dataTable) {
    await userManagementPage.userRegistration(dataTable)
});

Then('admin should be able to see {string} in username column', async function (string) {
    await page.goto(userManagementPage.userManagementPageUrl)
    const userLocator = page.locator(util.format(userManagementPage.userSelector));
    await expect(userLocator).toBeVisible()
});
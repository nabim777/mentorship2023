const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

const UserManagement = require("../pageObjects/UserManagementPage.js")
const userManagement = new UserManagement

Given('the admin has been redirected to the settings page', async function () {
await userManagement.goToSettingsPage()
await userManagement.goToUserManagementPage()
});

Given('the admin has been redirected to the user management page', function () {

});

When('admin creates a new user with following attributes', function (dataTable) {

});

Then('admin should be able to see {string} in username column', function (string) {

});
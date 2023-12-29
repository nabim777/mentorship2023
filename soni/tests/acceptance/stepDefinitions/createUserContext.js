const { Given, When, Then } = require('@cucumber/cucumber')
const UserManagementPage = require("../PageObjects/UserManagementPage.js")
const userManagementPage = new UserManagementPage;
const assert = require('assert')

When('admin browsed to the settings', async function () {
  await userManagementPage.goToSettings();
});

When('creates user with following details', async function (dataTable) {
  await userManagementPage.manageUser(dataTable);

});

Then('admin should see {string} in Users table.', async function (username) {
  await page.goto(userManagementPage.userTabUrl)
  const lastAddedUsername = await page.locator(userManagementPage.tableRowSelector).first().textContent()
  assert(lastAddedUsername, username, "Error matching username")
});



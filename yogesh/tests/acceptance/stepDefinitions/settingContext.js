const { setting } = require("../PageObject/SettingPage");
const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert');

Given('admin has browsed to settings page', async function () {
  await setting.navigateToSettingsPage()
});

Given('admin has navigated to {string} tab', async function (tabName) {
  await setting.changeTab(tabName)
});

When('admin creates a new user following details:', async function (dataTable) {
  const details = dataTable.rowsHash();
  await setting.createUser(details)

});

Then('a user should be able to see {string} user in users table', async function (username) {
  const lastAddedUserName =await page.locator('//tr[last()]/td').first().textContent();
  assert(lastAddedUserName, username, `Didn't found user with username ${username}`)
});
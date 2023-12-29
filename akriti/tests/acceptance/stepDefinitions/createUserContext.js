const { Given, When, Then } = require("@cucumber/cucumber");
const UserPage = require("../PageObjects/UserPage.js")
const assert = require('assert')

const userPage = new UserPage;

Given('the user has navigated to the Settings and selected the User Management page', async function () {
  await userPage.userManagementSetting();
});

When('user enters on the following data:', async function (dataTable) {
  await userPage.userRegistration(dataTable)
});

Then('user should be able to see a new user with username {string}', async function (username) {
  const lastAddedUser = await page.locator(userPage.tableUserSelector).first().texContent()
  assert(lastAddedUser,username,`milena hai dost`)
});
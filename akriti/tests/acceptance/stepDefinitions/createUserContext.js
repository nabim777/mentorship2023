const { Given, When, Then } = require("@cucumber/cucumber");
const UserPage = require("../PageObjects/UserPage.js")
const { expect } = require("@playwright/test");

const util = require ('util')
const userPage = new UserPage;
Given('the user has navigated to the Settings and selected the User Management page', async function () {
  await userPage.userManagementSetting();
});

When('user enters on the following data:', async function (dataTable) {
  await userPage.userRegistration(dataTable)
});

Then('user should be able to see a new user with username {string}', async function (username) {
  await page.goto(userPage.userManagementPageUrl)
  const userLocator = page.locator(util.format(userPage.tableUserSelector, username));
  await expect(userLocator).toBeVisible()
});
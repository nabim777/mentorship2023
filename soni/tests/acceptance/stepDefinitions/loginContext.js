const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const assert = require("assert")
const LoginPage = require("../PageObjects/LoginPage.js")
const loginPage = new LoginPage;

Given('the admin has browsed to the login page', async function () {
  await loginPage.gotoLoginPage();
  await expect(page).toHaveURL(loginPage.loginUrl)
});

Given('the admin has logged in with username {string} and password {string}', async function (username, password) {
  await loginPage.logintoHomePage(username, password)
  await expect(page).toHaveURL(loginPage.homePageUrl)
});

When('user logins with username {string} and password {string}', async function (username, password) {
  await loginPage.logintoHomePage(username, password)
});

Then('user should be redirected to the homepage', async function () {
  await expect(page).toHaveURL(loginPage.homePageUrl)
});

Then('user should see {string} message', async function (expectedMessage) {
  const actualMessage = await page.locator(loginPage.messageSelector).textContent()
  assert.equal(
    expectedMessage,
    actualMessage,
    `Expected message is ${expectedMessage} and actual message is ${actualMessage}.`
    )
});


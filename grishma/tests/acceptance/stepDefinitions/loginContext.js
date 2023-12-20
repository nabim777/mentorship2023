const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const assert = require("assert")

const LoginPage = require("../pageObjects/LoginPage.js")
const loginPage = new LoginPage

Given('the user has browsed to the login page', async function () {
  await loginPage.gotoLoginPage()
  await expect(page).toHaveURL(loginPage.loginUrl)
});

Given('the user has logged in with username {string} and password {string} using webUI', async function (username, password) {
  await loginPage.login(username,password)
});

When('user logs in with username {string} and password {string} using webUI', async function (username, password) {
  await loginPage.login(username,password)
});

Then('user should be redirected to the webUI homepage', async function () {
  await expect(page).toHaveURL(loginPage.homePageUrl)
});

Then('user should see {string} message', async function (expectedMessage) {
  const actualMessage = await page.locator(loginPage.messageSelector).textContent()
    assert.equal(
      actualMessage,
      expectedMessage,
      `Expected message "${expectedMessage}" but received "${actualMessage}"`
    )
});
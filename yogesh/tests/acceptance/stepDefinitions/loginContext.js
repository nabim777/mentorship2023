const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const assert = require('assert');

const { LoginPage } = require('../PageObject/LoginPage');

const login = new LoginPage()

Given('admin has browsed to the login page', async () => {
  await login.navigateToLoginPage()
  await expect(page).toHaveURL(login.baseURL + 'login')
});

When('admin logs in with username as {string} and password as {string}', async (username, password) => {
  await login.loginWithUsernameAndPassword(username,password)
});

Then('admin should be navigated to homescreen', async function () {
  await expect(page).toHaveURL(login.baseURL + "files/");
});

Then('admin should see {string} message', async function (expectedMessage) {
  const errorMessage = await page.innerHTML(login.wrongCredentialsDivSelector)
  assert.equal(errorMessage, expectedMessage, `Expected message string "${expectedMessage}" but received message "${errorMessage}" from UI`)
});
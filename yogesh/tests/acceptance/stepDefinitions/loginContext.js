const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const assert = require('assert');

const { login } = require('../PageObject/loginPage');

Given('user has browsed to the login page', async () => {
  await login.navigateToLoginPage()
  await expect(page).toHaveURL(login.baseURL + 'login')
});

When('user logs in with username as {string} and password as {string}', async (username, password) => {
  await login.loginWithUsernameAndPassword(username,password)
});

Then('user should be navigated to homescreen', async function () {
  await expect(page).toHaveURL(login.baseURL + "files/");
});

Then('user should see {string} message', async function (expectedMessage) {
  const errorMessage = await page.innerHTML(login.wrongCredentialsDivSelector)
  assert.equal(errorMessage, expectedMessage, `Expected message string "${expectedMessage}" but received message "${errorMessage}" from UI`)
});
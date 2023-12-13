const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, test, _android } = require('@playwright/test');
const assert = require("assert")


// importing the file: LoginPage.js
const LoginPage = require('../PageObject/LoginPage.js');
const loginPage = new LoginPage;



Given('the user has browsed to the login page', async function () {
  await loginPage.gotoLoginPage();
  await expect(page).toHaveURL(loginPage.url);
});

When('user logs in with username {string} and password {string}',async function (username, password) {
  await loginPage.loginHomePage(username,password);
});

Then('user should redirect to the homepage', async function () {
  await expect(page).toHaveURL(loginPage.homePageUrl);
});


Then('user should be able to see the {string} message', async function  (expectMessage) {
const actualMessage = await page.locator(loginPage.wrongMessageSelector).textContent()
assert.equal(
  actualMessage, 
  expectMessage, 
  `Expected message to be "${expectMessage}" but receive "${actualMessage}"`
)
});


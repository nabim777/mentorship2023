const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const assert = require("assert")
const LoginPage = require("../PageObjects/LoginPage.js")

const loginPage = new LoginPage;

Given('the user has browsed to the login page', async function () {
  await loginPage.gotoLoginPage();
  await expect(page).toHaveURL(loginPage.loginUrl)
});

Given('the user has logged in with username {string} and password {string} using webUI', async function (username, password) {
  await loginPage.logintoHomePage(username, password)
});

When('the user creates a  in with username {string} and password {string}', async function (username, password) {
  await loginPage.logintoHomePage(username, password)
});

Then('user should redirect to the homepage', async function () {
  await expect(page).toHaveURL(loginPage.fileUrl)
});

Then('user should be able to see the {string} message', async function (expectedMessage) {
  const actualMessage = await page.locator(loginPage.messageSelector).textContent()
  //grab the message from browser
  //compare it to our message
  //equal , successful
  assert.equal(expectedMessage,actualMessage,`Expected message is ${expectedMessage} and actual message is ${actualMessage}.`)
});



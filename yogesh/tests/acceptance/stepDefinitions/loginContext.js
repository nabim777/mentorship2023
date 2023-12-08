const { Given, When, Then } = require('@cucumber/cucumber')

const { test, expect } = require('@playwright/test');
const assert = require('assert');


//defining selectors
const usernameSelector = '//input[@type="text"]'
const passwordSelector = '//input[@type="password"]'

const loginButton = '//input[@type="submit"]'

const settingsButton = '//button[@title="Settings"]'
const logoutButton = '//button[@title="Logout"]'
const wrongCredentialsDivSelector = '//div[@class="wrong"]'

// launch url
const baseURL = "http://localhost:8080/"

Given('the user has browsed to the login page', async function () {
  await page.goto(baseURL + 'login')
  await expect(page).toHaveURL(baseURL + 'login')
});

When('user logs in with username as {string} and password as {string}', async function (username, password) {
  await page.fill(usernameSelector, username);
  await page.fill(passwordSelector, password);
  await page.click(loginButton);
});

Then('user should be navigated to homescreen', async function () {
  await expect(page).toHaveURL(baseURL + "files/");
});


Then('user should see {string} message', async function (message) {
  const content =  await page.innerHTML(wrongCredentialsDivSelector)
  assert.equal(content,message)
});
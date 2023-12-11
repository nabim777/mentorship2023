const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

const usernameSelector = '//input[@placeholder="Username"]'
const passwordSelector = '//input[@placeholder="Password"]'
const loginButtonSelector = '//input[@type="submit"]'
const wrong = '//div[@class="wrong"]'; // Replace this with the appropriate selector for the error message element

const url ='http://localhost:8080/login'
const url1 ='http://localhost:8080/files'

Given('the user has browsed to the login page', async function () {
  await page.goto(url)
});

When('user logs in with username {string} and password {string}', async function (username, password) {
  await page.fill(usernameSelector, username)
  await page.fill(passwordSelector, password)
  await page.click(loginButtonSelector)
});

Then('user should redirect to the homepage', async function () {
  const homepage = 'http://localhost:8080/files/'
  await expect(page).toHaveURL(homepage)
});

Then('user should be able to see the {string}', async function (expectedErrorMessage) {
  const value = await page.innerText(selector);

})


const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

const usernameSelector = '//input[@placeholder="Username"]'
const passwordSelector = '//input[@placeholder="Password"]'
const loginButtonSelector = '//input[@type="submit"]'

const url ='http://localhost:8080/login'

Given('the user has browsed to the login page', async function () {
  await page.goto(url)
  await expect(page).toHaveURL(url)
});


When('user logins with username {string} and password {string}', async function (username, password) {
  await page.fill(usernameSelector, username)
  await page.fill(passwordSelector, password)
  await page.click(loginButtonSelector)
});


Then('user should redirect to the homepage', async function () {
  const homepageUrl = 'http://localhost:8080/files/'
  await expect(page).toHaveURL(homepageUrl)
});

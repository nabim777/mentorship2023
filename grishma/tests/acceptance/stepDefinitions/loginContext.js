const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
var assert = require('assert')

const LoginPage = require("../pageObjects/LoginPage.js")
const loginPage = new LoginPage


Given('the user has browsed to the login page', async function () {
  await loginPage.gotoLoginPage()
  await expect(page).toHaveURL(loginPage.url)
});


When('user logins with username {string} and password {string}', async function (username, password) {
  await loginPage.logintoHomePage(username,password)
});


Then('user should redirect to the homepage', async function () {
  await expect(page).toHaveURL(loginPage.homePageUrl)
});
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, test } = require('@playwright/test');

const LoginPage = require('../PageObject/LoginPage.js');
const loginPage = new LoginPage;

const usernameSelector = '//input[@placeholder="Username"]';
const passwordSelector = '//input[@placeholder="Password"]';
const loginButtonSelector = '//input[@type="submit"]';
// const wrong = '//div[@class="wrong"]';

const url = 'http://localhost:8080/login';
const homePageUrl = 'http://localhost:8080/files/';

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
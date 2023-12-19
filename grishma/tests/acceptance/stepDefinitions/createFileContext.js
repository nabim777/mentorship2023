const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("playwright/test")
const util = require('util');

const HomePage = require("../pageObjects/HomePage.js")
const homePage = new HomePage

Given('the user has created a new file {string} with content {string}', async function (fileName, content) {
  await homePage.createFile(fileName, content)
});

When('the user creates a new file {string} with content {string}', async function (fileName, content) {
  await homePage.createFile(fileName, content)
});

Then('the user should be able to see {string} file', async function (fileName) {
  const fileLocator = page.locator(util.format(homePage.fileNameSelector, fileName));
  await expect(fileLocator).toBeVisible()
});
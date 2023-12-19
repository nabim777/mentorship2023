const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("playwright/test")
const util = require('util');

const HomePage = require("../pageObjects/HomePage.js")
const homePage = new HomePage

When('the user renames a file {string} to {string}', async function (oldName, newName) {
  await homePage.renameFile(oldName, newName)
});
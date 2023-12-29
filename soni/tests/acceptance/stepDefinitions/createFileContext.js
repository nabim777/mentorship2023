const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const util = require('util');
const assert = require ('assert');
const HomePage = require("../PageObjects/HomePage.js")
const homePage = new HomePage

When('admin creates a file {string} with content {string}', async function (fileName, fileContent) {
  await homePage.createFile(fileName, fileContent)
});

Then('admin should see the {string} file', async function (fileName) {
  const actualFile = await homePage.getFileFolderName(fileName);
  const expectedFile = fileName;
  assert.equal(
    actualFile,
    expectedFile,
    `Expected File to be "${expectedFile}" but receive File "${actualFile}"`
  )
});


const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const util = require('util');
const HomePage = require("../PageObjects/HomePage.js")
const homePage = new HomePage

When('user creates a file {string} with content {string}', async function (fileName, fileContent) {
  await homePage.createFile(fileName,fileContent)
});
  
Then('user should see the {string} file', async function (fileName) {
    const filelist = util.format(homePage.fileSelector, fileName);
    expect(await page.locator(filelist)).toBeVisible() 
  });
  

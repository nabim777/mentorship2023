const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

//import 
const EntityPage = require('../PageObjects/EntityPage.js')
const entityPage = new EntityPage


  When('the user creates a new file {string} with content {string}', async function (fileName, content) {
    await entityPage.createFile(fileName, content)
  });


  Then('the user should be able to see {string} file',async function (fileName) {
await entityPage.shouldSeeFileInWebUI(fileName)
  });
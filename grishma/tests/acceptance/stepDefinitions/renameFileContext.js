const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("playwright/test")
const util = require('util');

//import 
const EntityPage = require("../pageObjects/EntityPage.js")
const entityPage = new EntityPage

When('the user renames a file {string} to {string}', async function (oldName, newName) {
  await entityPage.renameFile(oldName, newName)
});
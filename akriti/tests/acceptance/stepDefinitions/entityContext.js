const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const assert = require("assert")
const EntityPage =require("../PageObject/EntityPage.js")
const entityPage = new EntityPage;





When('user creates a file {string} with content {string}', async function (string, string2) {
  await entityPage.createFile(string)
  });


  Then('user should see the {string} file', function (string) {
    
    return 'pending';
  });





const { Given, When, Then } = require('@cucumber/cucumber')
const UserManagementPage = require("../PageObjects/UserManagementPage.js")
const userManagementPage = new UserManagementPage;

When('admin browsed to the settings', async function () {
 await userManagementPage.goToSettings();
 
});

When('creates user with following details', async function (dataTable) {
  await userManagementPage.manageUser(dataTable);
  
});


 Then('admin should see {string} in Users table.',async function () {
      

 });



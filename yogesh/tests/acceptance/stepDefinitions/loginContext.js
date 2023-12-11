const { Given, When, Then } = require('@cucumber/cucumber')

const { login } = require('../PageObject/loginPage');

Given('the user has browsed to the login page', async () => {
  await login.navigateToLoginPage()
  await login.verifyIfInLoginPage()
});

When('user logs in with username as {string} and password as {string}', async (username, password) => {
  await login.fillUsernameAndPassword(username, password)
  await login.clickLoginButton()
});

Then('user should be navigated to homescreen', async () => await login.verifyIfInFilesPage());

Then('user should see {string} message', async (expectedMessage) => await login.validateErrorMessage(expectedMessage));
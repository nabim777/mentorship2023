const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

//define selector

Given('the user has browsed to the login page', async function () {
  await page.goto(url);
  await expect(page).toHaveURL(url)
});


When('user logins with username {string} and password {string}', async function (username, password) {
  await page.fill(usernameSelector,username)
  await page.fill(passwordSelector,password)
  await page.click(loginButtonSelector)
});


Then('user should redirect to the homepage', async function () {
 
 await expect(page).toHaveURL(homepageUrl)

});

  

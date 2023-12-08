const { Given, When, Then } = require("@cucumber/cucumber");
const usernameselector = '//input[@type= "text"]';
const passnameselector = '//input[@type = "password"]';

const loginButton = '//input[@type ="submit"]';


//launch url
const url ="http:localhost:8080/login"

Given("the user has browsed to the login page", async function () {
  await page.goto(url)
});

When(
  "user logs in with username {string} and password {string}",
  async function (username, password) {
    
{
  await page.fill( usernameselector, username)
  await page.fill( passnameselector, password)
  await page.click( loginButton)


}
    // Write code here that turns the phrase above into concrete actions
  }
);

Then("user should redirect to the homepage", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});


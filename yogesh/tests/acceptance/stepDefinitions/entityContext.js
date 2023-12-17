const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert');
const {expect} = require('@playwright/test')

const { entity } = require("../PageObject/entityPage");
const { login } = require("../PageObject/loginPage");

Given('I am logged in as {string}', async function (role) {
    await login.loginBasedOnRole(role)
});

Given('I am on the home page', async function () {
    await login.verifyIfInFilesPage()
});

When('I create a new folder named {string}', async function (folderName) {
    await entity.createNewFolder(folderName)
});

Then('I should see a folder named {string}', async function (folderName) {
    const userCreatedFolderName = await page.innerHTML(entity.lastNavaigatedFolderSelector)
    assert.equal(userCreatedFolderName, folderName, `Expected "${folderName}" but recieved message "${userCreatedFolderName}" from UI`)
});

When('I create a new file named {string} with content {string}', async function (filename, content) {
    await entity.createFileWithContent(filename, content)
});

Then('I should see a file named {string} with content {string}', async function (filename, content) {
    await expect(page.locator(entity.getFileSelector(filename))).toBeVisible()
    await page.dblclick(entity.getFileSelector(filename));
    const fileContent = await page.innerHTML(entity.editorContent)
    assert.equal(fileContent, content, `Expected content as "${content}" but recieved "${fileContent}"`)
});
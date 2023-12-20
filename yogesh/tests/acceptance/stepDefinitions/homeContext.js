const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert');
const util = require('util')
const {expect} = require('@playwright/test')

const { entity } = require("../PageObject/HomePage");
const { login } = require('../PageObject/LoginPage');

Given('user logs in as {string}', async function (role) {
    await login.loginBasedOnRole(role)
});

Given('user has navigated to the homepage', async function () {
    await expect(page).toHaveURL(login.baseURL + 'files/')
});

When('user creates a new folder named {string}', async function (folderName) {
    await entity.createNewFolder(folderName)
});

Then('user should be able to see a folder named {string}', async function (folderName) {
    const userCreatedFolderName = await page.innerHTML(entity.lastNavaigatedFolderSelector)
    assert.equal(userCreatedFolderName, folderName, `Expected "${folderName}" but recieved message "${userCreatedFolderName}" from UI`)
});

Given('user has created a file named {string} with content {string}',async function (filename,content){
    await entity.createFileWithContent(filename, content)
})

When('user creates a new file named {string} with content {string}', async function (filename, content) {
    await entity.createFileWithContent(filename, content)
});

Then('user should be able to see a file named {string} with content {string}', async function (filename, content) {
    await expect(page.locator(util.format(entity.fileSelector,filename))).toBeVisible()
    await page.dblclick(util.format(entity.fileSelector,filename));
    const fileContent = await page.innerHTML(entity.editorContent)
    assert.equal(fileContent, content, `Expected content as "${content}" but recieved "${fileContent}"`)
});

When('user renames a file {string} to {string}',async function(oldfileName,newfileName){
    await entity.renameFile(oldfileName,newfileName)
})

Then('user should be able to see file with {string} name',async function(newfileName){
    await expect(page.locator(util.format(entity.fileSelector,newfileName))).toBeVisible()
})

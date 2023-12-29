const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert');
const util = require('util')
const {expect} = require('@playwright/test')

const { HomePage } = require("../PageObject/HomePage");
const { LoginPage } = require('../PageObject/LoginPage');
const { createFile } = require('../../../../testHelper/helper');

const login = new LoginPage()
const homepage = new HomePage()

Given('{string} has logged in', async function (role) {
    await login.loginBasedOnRole(role)
});

Given('admin has navigated to the homepage', async function () {
    await expect(page).toHaveURL(login.baseURL + 'files/')
});

When('admin creates a new folder named {string}', async function (folderName) {
    await homepage.createNewFolder(folderName)
});

Then('admin should be able to see a folder named {string}', async function (folderName) {
    const userCreatedFolderName = await page.innerHTML(homepage.lastNavaigatedFolderSelector)
    assert.equal(userCreatedFolderName, folderName, `Expected "${folderName}" but recieved message "${userCreatedFolderName}" from UI`)
});

Given('admin has created a file named {string} with content {string}',async function (filename,content){
    await homepage.createFileWithContent(filename, content)
    await expect(page.locator(util.format(homepage.fileSelector,filename))).toBeVisible()
})

When('admin creates a new file named {string} with content {string}', async function (filename, content) {
    await homepage.createFileWithContent(filename, content)
});

Given('admin creates a new file named {string} using API', async function (filename) {
    await createFile(filename)
    await page.reload()
    await expect(page.locator(util.format(homepage.fileSelector,filename))).toBeVisible()
});


Then('admin should be able to see a file named {string} with content {string}', async function (filename, content) {
    await expect(page.locator(util.format(homepage.fileSelector,filename))).toBeVisible()
    await page.dblclick(util.format(homepage.fileSelector,filename));
    const fileContent = await page.innerHTML(homepage.editorContent)
    assert.equal(fileContent, content, `Expected content as "${content}" but recieved "${fileContent}"`)
});

When('admin renames a file {string} to {string}',async function(oldfileName,newfileName){
    await homepage.renameFile(oldfileName,newfileName)
})

Then('admin should be able to see file with {string} name',async function(newfileName){
    await expect(page.locator(util.format(homepage.fileSelector,newfileName))).toBeVisible()
})

When('admin deletes a file named {string}',async function(filename){
    await homepage.deleteFile(filename)
})

Then('admin shouln\'t see {string} in the UI',async function(filename){
    await expect(page.locator(util.format(homepage.fileSelector,filename))).toBeHidden()
})
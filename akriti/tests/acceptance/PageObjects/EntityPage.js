const { expect } = require("playwright/test")
const util = require('util');

class EntityPage {
    constructor() {

        //define selectors
        // this.newFolderSelector = '//button[@title="New folder"]'
        this.newFileSelector = '//button[@title="New file"]'
        this.textButtonSelector = '//input[@class="input input--block"]'
        this.createButtonSelector='//button[@title="Create"]'
        this.textFieldSelector='//textarea[@class="ace_text-input"]'
        // this.textFieldSelector= '//div[@class="ace_content"]'
        this.saveIconSelector='//button[@title="Save"]'
        this.closeIconSelector='//button[@title="Close"]'
        this.checkMadeFileSelector='//div[@aria-label="string"]'
        this.fileNameSelector='//div[@aria-label="%s"]'
    }
    
    async createFile(fileName, content) {
        await page.click(this.newFileSelector)
        await page.fill(this.textButtonSelector, fileName)
        await page.click(this.createButtonSelector)
        // await page.locator(this.textFieldSelector)
        await page.fill(this.textFieldSelector, content)
        await page.click(this.saveIconSelector)
        await page.click(this.closeIconSelector)
    }

    async shouldSeeFileInWebUI(fileName){
        const locator = page.locator(util.format(this.fileNameSelector, fileName));
        await expect(locator).toBeVisible()
    }

}

module.exports = EntityPage
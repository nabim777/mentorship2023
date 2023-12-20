const { expect } = require("playwright/test")
class EntityPage {
    constructor() {
        //define selectors
        this.newFileSelector = '//button[@title="New file"]'
        this.textButtonSelector = '//input[@class="input input--block"]'
        this.createButtonSelector='//button[@title="Create"]'
        this.textFieldSelector='//textarea[@class="ace_text-input"]'
        this.saveIconSelector='//button[@title="Save"]'
        this.closeIconSelector='//button[@title="Close"]'
        this.checkMadeFileSelector='//div[@aria-label="string"]'
        this.fileNameSelector='//div[@aria-label="%s"]'
    }
    async createFile(fileName, content) {
        await page.click(this.newFileSelector)
        await page.fill(this.textButtonSelector, fileName)
        await page.click(this.createButtonSelector)
        await page.fill(this.textFieldSelector, content)
        await page.click(this.saveIconSelector)
        await page.click(this.closeIconSelector)
    }
}
module.exports = EntityPage
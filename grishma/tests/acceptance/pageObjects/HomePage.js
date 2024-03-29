const util = require('util');
const { filesToDelete, swapFileOnRename } = require('../../../../testHelper/helper.js')

class HomePage {
    constructor() {
        this.newFileSelector = '//button[@title="New file"]'
        this.textButtonSelector = '//input[@class="input input--block"]'
        this.createButtonSelector='//button[@title="Create"]'
        this.textFieldSelector='//textarea[@class="ace_text-input"]'
        this.saveIconSelector='//button[@title="Save"]'
        this.closeIconSelector='//button[@title="Close"]'
        this.fileNameSelector='//div[@aria-label="%s"]'
        this.renameIconSelector='//button[@title="Rename"]'
        this.renameButtonSelector='//button[@type="submit"]'
    }

    async createFile(fileName, content) {
        await page.click(this.newFileSelector)
        await page.fill(this.textButtonSelector, fileName)
        await page.click(this.createButtonSelector)
        await page.fill(this.textFieldSelector, content)
        await page.click(this.saveIconSelector)
        await page.click(this.closeIconSelector)
        filesToDelete.push(fileName)
    }

    async renameFile(oldFileName, newFileName){
        await page.click(util.format(this.fileNameSelector, oldFileName))
        await page.click(this.renameIconSelector)
        await page.fill(this.textButtonSelector, newFileName)
        await page.click(this.renameButtonSelector)
        swapFileOnRename(oldFileName, newFileName);
}

}
module.exports = HomePage
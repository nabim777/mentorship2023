const { filesToDelete } = require('./../../../../testHelper/helper');
const { format } = require ("util")
class HomePage {
    constructor() {
        this.newFileSelector = "//button[@title='New file']"
        this.textFieldSelector = "//input[@class='input input--block']"
        this.createButtonSelector = "//button[@title='Create']"
        this.contentFieldSelector = "//div[@class='ace_content']"
        this.inputSelector =  ".ace_text-input"
        this.saveButtonSelector = "//button[@aria-label='Save']"
        this.closeButtonSelector = "//button[@aria-label='Close']"
        this.fileFolderSelector = `//p[contains(text(), "%s")]`;
    }
    
    async createFile(filename,fileContent){
        await page.click(this.newFileSelector)
        await page.fill(this.textFieldSelector, filename)
        await page.click(this.createButtonSelector)
        await page.fill(this.inputSelector,fileContent)
        await page.click(this.saveButtonSelector)
        await page.click(this.closeButtonSelector)
        filesToDelete.push(filename)
    }

    async getFileFolderName(fileName){
        return page.innerText(format(this.fileFolderSelector,fileName));
    }
}
module.exports = HomePage
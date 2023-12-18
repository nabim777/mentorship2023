const util = require('util');

class EntityPage{
    constructor(){
        this.dialogInputSelector = '//div[@class="card-content"]/input[@type="text"]';
        this.lastNavaigatedFolderSelector = '//div[@class="breadcrumbs"]/span[last()]/a'
        this.contentEditorSelector = '//form[@id="editor"]/textarea[@class="ace_text-input"]'
        this.editorContent = '//div[@class="ace_content" ]/div[@class="ace_layer ace_text-layer"]/div[@class="ace_line_group"]/div[@class="ace_line"]'
        this.buttonSelector =`//button[@title="%s"]`
        this.fileSelector =  `//div[@role="button" and  @aria-label="%s"]`
    }

    async createNewFolder(folderName){
        const newFolderButtonSelector = util.format(this.buttonSelector,'New folder')
        await page.click(newFolderButtonSelector)
        await page.fill(this.dialogInputSelector, folderName)
        await page.click(util.format(this.buttonSelector,'Create'))
    }

    async createFileWithContent(filename, content){
        const newFolderButtonSelector = util.format(this.buttonSelector,'New file')
        await page.click(newFolderButtonSelector)
        await page.fill(this.dialogInputSelector, filename)
        await page.click(util.format(this.buttonSelector,'Create'))
        await page.fill(this.contentEditorSelector, content)
        const saveButtonSelector = util.format(this.buttonSelector,'Save')
        await page.click(saveButtonSelector)
        const closeButtonSelector = util.format(this.buttonSelector,'Close')
        await page.click(closeButtonSelector)
    }
}

exports.entity = new EntityPage()
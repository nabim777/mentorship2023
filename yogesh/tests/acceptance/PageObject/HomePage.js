const util = require('util');
const { filesToDelete, swapFileOnRename } = require('../../../../testHelper/helper.js');

class HomePage{
    
    constructor(){
        this.dialogInputSelector = '//div[@class="card-content"]/input[@type="text"]';
        this.lastNavaigatedFolderSelector = '//div[@class="breadcrumbs"]/span[last()]/a'
        this.contentEditorSelector = '//textarea[@class="ace_text-input"]'
        this.editorContent = '//div[@class="ace_line"]'
        this.buttonSelector =`//button[@title="%s"]`
        this.fileSelector =  `//div[@role="button" and  @aria-label="%s"]`
        this.cardActionSelector = '//div[@class="card-action"]/button[@title="%s"]'
    }

    async createNewFolder(folderName){
        await page.click( util.format(this.buttonSelector,'New folder'))
        await page.fill(this.dialogInputSelector, folderName)
        await page.click(util.format(this.cardActionSelector,'Create'))
    }

    async createFileWithContent(filename, content){
        await page.click(util.format(this.buttonSelector,'New file'))
        await page.fill(this.dialogInputSelector, filename)
        await page.click(util.format(this.cardActionSelector,'Create'))
        await page.fill(this.contentEditorSelector, content)
        await page.click( util.format(this.buttonSelector,'Save'))
        await page.click(util.format(this.buttonSelector,'Close'))
        
        //saving the file info into global array to delete later
        filesToDelete.push(filename)
    }

    async renameFile(oldfileName,newfileName){
        swapFileOnRename(oldfileName,newfileName);
        await page.click(util.format(this.fileSelector,oldfileName))
        await page.click(util.format(this.buttonSelector,'Rename'))
        await page.fill(this.dialogInputSelector, newfileName)
        await page.click(util.format(this.cardActionSelector,'Rename'))
    }
}

exports.homepage = new HomePage()
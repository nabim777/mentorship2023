class Entity{
    constructor(){
        this.dialogInputSelector = '//div[@class="card-content"]/input[@type="text"]';
        this.lastNavaigatedFolderSelector = '//div[@class="breadcrumbs"]/span[last()]/a'
        this.contentEditorSelector = '//form[@id="editor"]/textarea[@class="ace_text-input"]'
        this.editorContent = '//div[@class="ace_content" ]/div[@class="ace_layer ace_text-layer"]/div[@class="ace_line_group"]/div[@class="ace_line"]'
        this.createButtonSelector =this.getHomePageButtonSelector('Create')
    }
    getHomePageButtonSelector(title){
        return `//button[@title="${title}"]`
    }

    getFileSelector(filename){
        return `//div[@role="button" and  @aria-label="${filename}"]`
    }   

    async createNewFolder(folderName){
        const newFolderButtonSelector = this.getHomePageButtonSelector('New folder')
        await page.click(newFolderButtonSelector)
        await page.fill(this.dialogInputSelector, folderName)
        await page.click(this.createButtonSelector)
    }

    async createFileWithContent(filename, content){
        const newFolderButtonSelector = this.getHomePageButtonSelector('New file')
        await page.click(newFolderButtonSelector)
        await page.fill(this.dialogInputSelector, filename)
        await page.click(this.createButtonSelector)
        await page.fill(this.contentEditorSelector, content)
        const saveButtonSelector = this.getHomePageButtonSelector('Save')
        await page.click(saveButtonSelector)
        const closeButtonSelector = this.getHomePageButtonSelector('Close')
        await page.click(closeButtonSelector)
    }
}

exports.entity = new Entity()
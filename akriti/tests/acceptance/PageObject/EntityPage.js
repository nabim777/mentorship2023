class EntityPage{
  constructor() {
  this.newFileSelector = "//button[@title='New file']"    
  this.textSelector = "//input[@type= 'text']"
  this.createButtonSelector= "//button[@aria-label= 'Create']"
  this.contentFieldSelector = "//div[@class= 'ace_content']"
  this.inputSelector= "//textarea[@class='ace_text-input']"


}  
//Defining selectors

async createFile(string){
  await page.click(this.newFileSelector)
  await page.fill(this.textSelector, string)
  await page.check(this.createButtonSelector)
  await page.fill(this.inputSelector, "hello world")
 

}

}
module.exports = EntityPage;
  
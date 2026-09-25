export class BasePage{
    constructor(page){
        this.page = page;
    }
    async clickElement(locator){
        await locator.waitFor({state:'visible',timeout:5000});
        await locator.click();
    }
    async fillText(locator,Input){
        await locator.waitFor({state:'visible',timeout:5000});
        await locator.fill(Input);
    }
}
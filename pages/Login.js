import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.page = page;
        // this.basePage = new BasePage(page);
        this.userName = this.page.locator('#user-name');
        this.password = this.page.locator('#password');
        this.button = this.page.locator('#login-button');
    }
    async UserInput(UserName,Password){
        await this.fillText(this.userName,UserName);
        await this.fillText(this.password,Password);
    }
    async login(UserName,Password) {
        await this.page.goto('./')
        await this.UserInput(UserName,Password);
        await this.clickElement(this.button);
    }
}
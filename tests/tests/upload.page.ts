import { Locator, Page } from "@playwright/test";

export class UploadPage{

    readonly searchBox: Locator;
    readonly passwordText: Locator;
    readonly userNameText: Locator;
    readonly signInbtn: Locator;
    readonly uploadBtn: Locator;
    
    constructor( public page: Page ){

        this.page = page;
        this.searchBox = page.locator('//input[@class="form-control form-control-navbar"]');
        this.passwordText = page.locator('(//input[@class="form-control"])[1]')
        this.userNameText = page.locator('(//input[@class="form-control"])[2]')
        this.signInbtn = page.locator('//button[contains(@class,"btn btn-success")]')
        this.uploadBtn = page.locator('//*[@id="id_btn_upload"]')

    }

    async enterUserName(userNameText : string){
        await this.userNameText.type(userNameText)
    }

    async enterPassword(enterPassword: string){
        await this.passwordText.type(enterPassword)
    }

    async enterSearchText(enterSearchText: string){
        await this.searchBox.type(enterSearchText)
    }

    async clickSignInbtn(){
        await this.signInbtn.click()
    }

    async clickUploadbtn(){
        await this.uploadBtn.click()
    }

}

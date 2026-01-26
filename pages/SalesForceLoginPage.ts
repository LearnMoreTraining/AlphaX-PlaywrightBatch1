import { th } from "@faker-js/faker"
import {Page,Locator} from "@playwright/test"

export class LoginPage{

    private readonly page:Page  //Global variable 
    private usernameTextBox:Locator
    private passwordTextBox:string
    private loginButton:Locator
    private errorTextMessage:Locator

    constructor(page:Page){
       this.page = page //local variable   
       this.usernameTextBox = this.page.locator("#username")
       this.passwordTextBox = "#password"
       this.loginButton=  this.page.locator("#Login")
       this.errorTextMessage = this.page.locator("#error")
    }

    //action methods 
   public async enteruserName(userName:string){
        await this.usernameTextBox.fill(userName)
    }

   public async enterPassword(password:string){
        await this.page.locator(this.passwordTextBox).fill(password)
    }

    public async clickLogin(){
           await this.loginButton.click()
    }

    public async getErrorMessage(){
         return  await this.errorTextMessage.innerHTML()
    }

   

}
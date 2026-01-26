import {Page,Locator} from "@playwright/test"

export class HomePage{

   private readonly page:Page  //Global variable 
   private searchIcon:Locator
   private productname:string

    constructor(page:Page){
       this.page = page //local variable   
       this.searchIcon = this.page.locator('#nav-search-submit-button') 
       this.productname = "#twotabsearchtextbox"
    }

    //action methods 
   public async enterProductName(product:string){
        console.log('product is'+product)
        await this.page.locator(this.productname).fill(product)
    }

   public async clickSearchIcon(){
        await this.searchIcon.click()
    }

   public async clickBabyWishList(){
         await this.page.locator("span[id='nav-link-accountList-nav-line-1']").hover()
        await this.page.getByRole('link',{name : 'Baby Wishlist'}).click()
    }

}
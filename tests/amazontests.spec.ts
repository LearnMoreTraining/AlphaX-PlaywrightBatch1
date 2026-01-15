import {test} from "@playwright/test"
import {HomePage} from "../pages/homepage"
import fs from fs

const jsonpath = "data/logindata.json"


for(const [username,password] of loginTestData){

    test(`login  validation ${username} and ${password} `, async ({page})=>{

    await page.goto("https://login.salesforce.com/")
   
   await page.locator("#username").fill(username)
    await page.locator("#password").fill(password)  
     console.log(username)
     console.log(password)

 }) 
}

// const productList: string[]= ["mouse","laptop","iphone"]

// for(const product of productList){

//     test(`search result validation ${product}`, async ({page})=>{

//     await page.goto("https://login.salesforce.com/")
//      const homepage = new HomePage(page)
//      await homepage.enterProductName(product)
//      console.log(product)

   
// })
// }
//---------------------------------------
// const loginTestData : string[] [] = [
//     ["xyz@gamil.com","123"],
//     ["abc@gamil.com","678"],
//     ["null@gamil.com","abc"]
// ]

// for(const [username,password] of loginTestData){

//     test(`login  validation ${username} and ${password} `, async ({page})=>{

//     await page.goto("https://login.salesforce.com/")
   
//    await page.locator("#username").fill(username)
//     await page.locator("#password").fill(password)  
//      console.log(username)
//      console.log(password)

//  }) 
// }

 

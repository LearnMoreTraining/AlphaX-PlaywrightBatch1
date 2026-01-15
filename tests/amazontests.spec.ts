import {test} from "@playwright/test"
import {HomePage} from "../pages/homepage"

const productList: string[]= ["mouse","laptop","iphone"]

for(const product of productList){

    test(`search result validation ${product}`, async ({page})=>{

    await page.goto("https://www.amazon.in/")
     const homepage = new HomePage(page)
     await homepage.enterProductName(product)
     console.log(product)

})
}


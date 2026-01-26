import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/SalesForceLoginPage'
import {RandomDataGenerator} from '../utils/randomDataGenerator'
import {TestConfig} from '../test.config'
import { HomePage } from '../pages/homepage'
import {DataProvider} from '../utils/dataprovider'

let url : any
let login:LoginPage
let amazonHomePage:HomePage

test.beforeEach('Inti PageObject', async({page})=>{
        url=  new TestConfig()
        await page.goto(url.appUrl)
        login =new LoginPage(page)
       amazonHomePage = new HomePage(page)
})

test('error message validation @regression @test1',async ()=>{   
        await  login.enteruserName(RandomDataGenerator.getFirstName())
        console.log(RandomDataGenerator.getFirstName())
        await  login.enterPassword(RandomDataGenerator.getPassword(8))
        console.log(RandomDataGenerator.getPassword(8))
        await  login.clickLogin()
        expect(login.getErrorMessage()).toEqual("Error: Please check your username and password. If you still can't log in, contact your Salesforce administrator.")      
})


test('search result',{tag:'@test2'},async ()=>{
     //   const filePath = "data/searchproduct.json"
     //  const productLists:any = DataProvider.getTestDatafromJson(filePath)
         const filePath = "data/searchproduct.csv"
      const productLists:any= DataProvider.getTestDataFromCsv(filePath)
       for(const product of productLists){
                console.log(product)
                console.log(product.productName)
               await amazonHomePage.enterProductName(product.productName)
               await amazonHomePage.clickSearchIcon()
       }      
})
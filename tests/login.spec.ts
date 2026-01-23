import {test} from '@playwright/test'
import {LoginPage} from '../pages/SalesForceLoginPage'
import {RandomDataGenerator} from '../utils/randomDataGenerator'

test('error message validation',async ({page})=>{

        await page.goto("https://login.salesforce.com/")
        const login =new LoginPage(page)
        await  login.enteruserName(RandomDataGenerator.getFirstName())
        console.log(RandomDataGenerator.getFirstName())
        await  login.enterPassword(RandomDataGenerator.getPassword(8))
        console.log(RandomDataGenerator.getPassword(8))
        await  login.clickLogin()

})
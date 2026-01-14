import {test} from "@playwright/test"

test('search result validation', async ({page})=>{

    await page.goto("https://www.amazon.in/")

})
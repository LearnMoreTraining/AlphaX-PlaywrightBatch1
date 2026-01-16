import {test} from "@playwright/test"
import {HomePage} from "../pages/homepage"
import fs from 'fs'
import {parse} from 'csv-parse/sync'

const csvpath = "data/logindata.csv"
const logininfo =fs.readFileSync(csvpath,'utf8')

type LoginDate ={
    email: string,
    password: string
};

const record = parse(logininfo,
    {
    columns:true,
    skip_empty_lines:true
    }
) as LoginDate[];

for(const data of record){

    test(`login  validation ${data.email} and ${data.password} `, async ({page})=>{

    await page.goto("https://login.salesforce.com/")
   
   await page.locator("#username").fill(data.email)
    await page.locator("#password").fill(data.password)  
     console.log(data.email)
     console.log(data.password)

 }) 
}
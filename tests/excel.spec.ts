import {test} from "@playwright/test"
import {HomePage} from "../pages/homepage"
import fs from 'fs'
import {parse} from 'csv-parse/sync'
import * as XLSX from 'xlsx'

const excelpath = "data/datsheet.xlsx"

// workbook - sheet - value 

 const workbook =  XLSX.read(excelpath)
  const sheetNames =  workbook.SheetNames[0]
 const worksheet = workbook.Sheets[sheetNames]

   const loginData:any = XLSX.utils.sheet_to_json(worksheet)

   test.describe('sample',async()=>{

    for(const {email, password} of loginData){

    test(`login validation "${email}" and "${password}"`, async ({page})=>{

    await page.goto("https://login.salesforce.com/")
   
   await page.locator("#username").fill(email)
    await page.locator("#password").fill(password)  
     console.log(email)
     console.log(password)

 }) 
}
 })
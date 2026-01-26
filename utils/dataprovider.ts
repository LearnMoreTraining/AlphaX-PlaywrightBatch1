
import fs from 'fs'
import {parse} from 'csv-parse/sync'
import XLSX from 'xlsx'

export class DataProvider{

    public static getTestDatafromJson(filepath:string){

      let data =  JSON.parse(fs.readFileSync(filepath,'utf-8'))
      return data;
    }

    public static getTestDataFromExcel(filepath:string){

        const fileBuffer = fs.readFileSync(filepath)
        const workbook = XLSX.read(fileBuffer)
        const sheetNames =  workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetNames]
        
           const loginData:any = XLSX.utils.sheet_to_json(worksheet)
           return loginData;
    }

    public static  getTestDataFromCsv(filepath:string){
        
        let file = fs.readFileSync(filepath)
        let val =  parse(file,{columns:true,skip_empty_lines:true})
        return val;

    }

}
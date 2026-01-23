
import {faker} from '@faker-js/faker'

export class RandomDataGenerator{

        public static getFirstName(){

           return faker.person.firstName()
        }


          public static getSecondName(){

           return faker.person.firstName()
        }

         public static getPassword(length:number){

           return faker.internet.password({length})
        }

       getSample(){

        faker.string.alphanumeric()
        faker.string.numeric()
        faker.phone.number()
        faker.location.city()
       }



}
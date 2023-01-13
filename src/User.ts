import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class User implements Mappable {
   private name: string;
   public location: {
     lat: number,
     lng: number
   }

   constructor(){
      this.name = faker.name.firstName();
      this.location = {
         lat: parseFloat(faker.address.latitude()),
         lng: parseFloat(faker.address.longitude())
      }
   }
   markerContent() {
    return `My Name is ${this.name}`
   }
}
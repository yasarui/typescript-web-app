import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable{
  private name: string;
  public location: {
    lat: number,
    lng: number
  }
  constructor(){
    this.name = faker.company.companySuffix();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent():string{
    return `The company name is ${this.name}`;
  }
}
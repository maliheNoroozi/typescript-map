import faker from 'faker'
import { Mappable } from './Map'

export class Company implements Mappable {
  name: string
  catchPhrase: string
  location: {
    latitude: number
    longitude: number
  }

  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <h1>Company name is ${this.name}</h1>
    <p>Its catch phrase id ${this.catchPhrase}</p>
    `
  }
}
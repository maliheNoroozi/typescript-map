import faker from 'faker'
import { Mappable } from './Map'

export class User implements Mappable {
  name: string
  location: {
    latitude: number
    longitude: number
  }

  constructor() {
    this.name = faker.name.findName()
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `<h1>User name is ${this.name}</h1>`
  }
}
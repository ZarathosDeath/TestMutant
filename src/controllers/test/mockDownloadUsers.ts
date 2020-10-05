import { DownloadUsers } from "@/models/protocols"
import { User } from "@/models/User"
import * as faker from 'faker'

export const mockUsersModel = () => {
  return {
    id: 1,
    name: faker.name.findName(),
    username: faker.random.word(),
    phone: faker.phone.phoneNumber(),
    website: faker.internet.url()
  }
}

export class DownloadUsersSpy implements DownloadUsers {
  usersModel: User[]

  async download (): Promise<User[]> {
    return this.usersModel
  }
}

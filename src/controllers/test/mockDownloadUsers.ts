import { DownloadUsers } from "@/models/protocols"
import { User } from "@/models/User"

export default class DownloadUsersSpy implements DownloadUsers {
  usersModel: []

  async download (): Promise<User[]> {
    return this.usersModel
  }
}
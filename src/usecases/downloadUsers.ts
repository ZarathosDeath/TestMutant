import { DownloadUsers } from '../models/protocols'
import { UsersRepository } from '../repositories/UsersRepository'
import { User } from '../models/User'
import Axios from 'axios'

export class DbDownloadUsers implements DownloadUsers {
  constructor () {}

  async download (): Promise<User[]> {
    const users: User[] = await Axios.get('https://jsonplaceholder.typicode.com/users')
    return users
  }
}
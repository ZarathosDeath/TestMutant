import { DownloadUsers } from '../models/protocols'
import { User } from '../models/User'
import Axios from 'axios'

export class DbDownloadUsers implements DownloadUsers {
  constructor () {}

  async download (): Promise<User[]> {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/users')
    const users: User[] = res.data    
    return users
  }
}
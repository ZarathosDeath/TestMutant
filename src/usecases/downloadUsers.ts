import { DownloadUsers } from '../models/protocols'
import Axios from 'axios'
import { RegularUser } from '@/models/RegularUser'

export class DbDownloadUsers implements DownloadUsers {
  constructor () {}

  async download (): Promise<RegularUser[]> {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/users')
    const users: RegularUser[] = res.data    
    return users
  }
}
import { Controller, HttpRequest, HttpResponse } from './protocols'
import { DownloadUsers } from '@/models/protocols'

export class DownloadUsersController implements Controller {
  constructor (private readonly downloadUsers: DownloadUsers) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const users = await this.downloadUsers.download()
    return {
      body: users,
      statusCode: 200
    }
  }
}
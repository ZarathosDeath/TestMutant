import { Controller, HttpRequest, HttpResponse } from './protocols'
import { DownloadUsers } from '@/models/protocols'
import logger4js from '../utils/logger'

const logger = logger4js.getLogger('logger')

export class DownloadUsersController implements Controller {
  constructor (private readonly downloadUsers: DownloadUsers) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const users = await this.downloadUsers.download()
      logger.trace('DownloadUsers succeeded')
      return {
        body: users,
        statusCode: 200
      }
    } catch (error) {
      logger.trace('DownloadUsers failed', error)
      return {
        body: error.stack,
        statusCode: 500
      }
    }
  }
}
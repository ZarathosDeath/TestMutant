import { Controller, HttpRequest, HttpResponse } from "./protocols";
import { SaveUsers } from "@/models/protocols";
import logger4js from '../utils/logger'

const logger = logger4js.getLogger('logger')

export class SaveUsersController implements Controller {
  constructor(private readonly saveUsers: SaveUsers) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.saveUsers.save()
      logger.trace('SaveUsers succeeded')
      return {
        statusCode: 204,
        body: {}
      }
    } catch (error) {
      logger.trace('SaveUsers failed', error)
      return {
        body: error.stack,
        statusCode: 500
      }
    }
  } 
}
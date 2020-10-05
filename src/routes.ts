import { Router } from 'express'
import { DownloadUsersController } from './controllers/downloadUsersController'
import { DbDownloadUsers } from './usecases/downloadUsers'
import { adaptRoute } from './adaptRoute'
const downloadUsersController = new DownloadUsersController(new DbDownloadUsers())

const router = Router()

router
  .route('/downloadUsers')
  .get(adaptRoute(downloadUsersController))

export default router
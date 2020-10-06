import { Router } from 'express'
import { DownloadUsersController } from './controllers/downloadUsersController'
import { DbDownloadUsers } from './usecases/downloadUsers'
import { adaptRoute } from './adaptRoute'
const dbDownloadUsers = new DbDownloadUsers()
const downloadUsersController = new DownloadUsersController(dbDownloadUsers)
import { DbSaveUsers } from './usecases/saveUsers'
import { SaveUsersController } from './controllers/saveUsersController'
const dbSaveUsers = new DbSaveUsers(dbDownloadUsers)
const saveUsersController = new SaveUsersController(dbSaveUsers)

const router = Router()

router
  .route('/downloadUsers')
  .get(adaptRoute(downloadUsersController))

router
  .route('/saveUsers')
  .get(adaptRoute(saveUsersController))

export default router
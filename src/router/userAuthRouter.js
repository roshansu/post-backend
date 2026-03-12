import e from 'express'
import { userLogin } from '../controller/userAuth.js'
import { middleware } from '../middleware/middleware.js'

const UserAuthRouter = e.Router()

UserAuthRouter.post('/login', middleware, userLogin)

export default UserAuthRouter
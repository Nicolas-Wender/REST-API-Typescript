import { Router } from 'express'
import { createUsersController } from '../controllers/login-controller/create-user'
import { loginUserController } from '../controllers/login-controller/login-user'

const router = Router()

router
  .post('/auth/register', (req, res) => {
    createUsersController.handle(req, res)
  })
  .post('/auth/login', (req, res) => {
    loginUserController.handle(req, res)
  })

export { router }

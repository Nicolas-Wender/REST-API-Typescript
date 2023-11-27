import { Router } from 'express'
import { getUsersController } from '../controllers/get-user'
import { createUsersController } from '../controllers/create-user'

const router = Router()

router
  .get('/users', (req, res) => {
    getUsersController.handle(req, res)
  })
  .post('/users', (req, res) => {
    createUsersController.handle(req, res)
  })

export { router }

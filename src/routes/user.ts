import { Router } from 'express'
import { getUsersController } from '../controllers/user-controller/get-users'
import { updateUsersController } from '../controllers/user-controller/update-users'
import { deleteUsersController } from '../controllers/user-controller/delete-user'
import { getUserController } from '../controllers/user-controller/get-user'

const router = Router()

router
  .get('/users', (req, res) => {
    getUsersController.handle(req, res)
  })
  .get('/users/:id', (req, res) => {
    getUserController.handle(req, res)
  })
  .put('/users/:id', (req, res) => {
    updateUsersController.handle(req, res)
  })
  .delete('/users/:id', (req, res) => {
    deleteUsersController.handle(req, res)
  })

export { router }

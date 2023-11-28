import { Router } from 'express'
import { getUsersController } from '../controllers/get-user'
import { createUsersController } from '../controllers/create-user'
import { updateUsersController } from '../controllers/update-users'
import { deleteUsersController } from '../controllers/delete-user'

const router = Router()

router
  .get('/users', (req, res) => {
    getUsersController.handle(req, res)
  })
  .post('/users', (req, res) => {
    createUsersController.handle(req, res)
  })
  .put('/users/:id', (req, res) => {
    updateUsersController.handle(req, res)
  })
  .delete('/users/:id', (req, res) => {
    deleteUsersController.handle(req, res)
  })

export { router }

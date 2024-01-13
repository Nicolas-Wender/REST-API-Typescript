import { GetUsersController } from './get-users'
import { MongoGetUsersRepository } from '../../../repositories/user-repository/get-users/mongo-get-users'

const mongoGetUsersRepository = new MongoGetUsersRepository()

export const getUsersController = new GetUsersController(
  mongoGetUsersRepository
)

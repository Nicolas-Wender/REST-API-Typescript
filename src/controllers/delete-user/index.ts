import { MongoDeleteUsersRepository } from '../../repositories/delete-user/mongo-delete-user'
import { DeleteUsersController } from './delete-user'

const mongoDeleteUserRepository = new MongoDeleteUsersRepository()

export const deleteUsersController = new DeleteUsersController(
  mongoDeleteUserRepository
)

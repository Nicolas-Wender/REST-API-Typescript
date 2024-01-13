import { MongoDeleteUsersRepository } from '../../../repositories/user-repository/delete-user/mongo-delete-user'
import { DeleteUsersController } from './delete-user'

const mongoDeleteUserRepository = new MongoDeleteUsersRepository()

export const deleteUsersController = new DeleteUsersController(
  mongoDeleteUserRepository
)

import { MongoGetUserEmailRepository } from '../../../repositories/login-repository/get-user-email/mongo-get-user-email'
import { MongoCreateUsersRepository } from '../../../repositories/user-repository/create-user/mongo-create-user'
import { CreateUsersController } from './create-user'

const mongoCreateUsersRepository = new MongoCreateUsersRepository()
const mongoGetUserEmailRepository = new MongoGetUserEmailRepository()

export const createUsersController = new CreateUsersController(
  mongoCreateUsersRepository,
  mongoGetUserEmailRepository
)

import { MongoGetUserEmailRepository } from '../../../repositories/login-repository/get-user-email/mongo-get-user-email'
import { LoginUserController } from './login-user'

const mongoGetUserEmailRepository = new MongoGetUserEmailRepository()

export const loginUserController = new LoginUserController(
  mongoGetUserEmailRepository
)

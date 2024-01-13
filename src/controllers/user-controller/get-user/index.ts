import { GetUserController } from './get-user'
import { MongoGetUserRepository } from '../../../repositories/user-repository/get-user/mongo-get-user'

const mongoGetUserRepository = new MongoGetUserRepository()

export const getUserController = new GetUserController(mongoGetUserRepository)

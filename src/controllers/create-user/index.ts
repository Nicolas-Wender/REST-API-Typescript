import { MongoCreateUsersRepository } from '../../repositories/create-user/mongo-create-user'
import { CreateUsersController } from './create-user'


const mongoCreateUsersRepository = new MongoCreateUsersRepository()

export const createUsersController = new CreateUsersController(mongoCreateUsersRepository)

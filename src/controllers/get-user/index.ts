import { GetUsersController } from './get-user'
import {MongoGetUsersRepository} from '../../repositories/get-users/mongo-get-users'

const mongoGetUsersRepository = new MongoGetUsersRepository()

export const getUsersController = new GetUsersController(mongoGetUsersRepository)

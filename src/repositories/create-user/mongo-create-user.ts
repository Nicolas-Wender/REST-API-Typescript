import { MongoClient } from '../../database/mongo'
import { User } from '../../models/user'
import { CreateUserParams, ICreateUserRepository } from './protocols'

export class MongoCreateUsersRepository implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db
      .collection('user')
      .insertOne(params)

    const user = await MongoClient.db
      .collection<Omit<User, 'id'>>('user')
      .findOne({ _id: insertedId })

    if (!user) {
      throw new Error('Erro ao criar o usuário')
    }

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}

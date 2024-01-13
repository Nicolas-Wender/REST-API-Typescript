import { ObjectId } from 'mongodb'
import { IGetUserRepository } from './protocols'
import { MongoClient } from '../../../database/mongo'
import { User } from '../../../models/user'

export class MongoGetUserRepository implements IGetUserRepository {
  async getUser(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<Omit<User, 'id'>>('usuarios')
      .findOne({ _id: new ObjectId(id) })

    if (!user) {
      throw new Error(`O usuário com o id: ${id} não foi encontrado`)
    }

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}

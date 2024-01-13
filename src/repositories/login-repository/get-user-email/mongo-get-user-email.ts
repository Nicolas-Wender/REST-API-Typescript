import { IGetUserEmailRepository } from './protocols'
import { MongoClient } from '../../../database/mongo'
import { User } from '../../../models/user'

export class MongoGetUserEmailRepository implements IGetUserEmailRepository {
  async getUserEmail(email: string): Promise<User | false> {
    const user = await MongoClient.db
      .collection<Omit<User, 'id'>>('usuarios')
      .findOne({ email: email })

    if (user) {
      const { _id, ...rest } = user
      return { id: _id.toHexString(), ...rest }
    } else {
      return false
    }
  }
}

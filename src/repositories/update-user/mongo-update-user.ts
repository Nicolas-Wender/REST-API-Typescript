import { ObjectId } from 'mongodb'
import { MongoClient } from '../../database/mongo'
import { IUpdateUserRepository, UpdateUserParams } from './protocols'
import { User } from '../../models/user'
import { MongoUser } from '../mongo-protocols'

export class MongoUpdateUsersRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: UpdateUserParams): Promise<User> {
    await MongoClient.db.collection('usuarios').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params
        }
      }
    )

    const user = await MongoClient.db
      .collection<MongoUser>('usuarios')
      .findOne({ _id: new ObjectId(id) })

    if (!user) {
      throw Error('Usuário não atualizado')
    }

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}

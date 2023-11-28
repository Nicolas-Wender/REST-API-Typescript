import { ObjectId } from 'mongodb'
import { MongoClient } from '../../database/mongo'
import { User } from '../../models/user'
import { IDeleteUserRepository } from './protocols'

export class MongoDeleteUsersRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<Omit<User, 'id'>>('usuarios')
      .findOne({ _id: new ObjectId(id) })

    if (!user) {
      throw new Error(`O usuário com o id: ${id} não foi encontrado`)
    }

    const { deletedCount } = await MongoClient.db
      .collection('usuarios')
      .deleteOne({ _id: new ObjectId(id) })

    if (!deletedCount) {
      throw new Error(`Erro ao deletar o usuário como o id: ${id}`)
    }

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}

import { IGetUsersRepository } from '../../controllers/get-user/protocols'
import { User } from '../../models/user'

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        nome: 'nicolas',
        sobrenome: 'wender',
        email: 'nicolas@gmail.com',
        senha: '123'
      }
    ]
  }
}

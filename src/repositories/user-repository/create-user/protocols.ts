import { User } from '../../../models/user'

export interface CreateUserParams {
  nome: string
  email: string
  senha: string
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>
}

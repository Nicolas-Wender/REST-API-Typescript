import { User } from '../../models/user'

export interface UpdateUserParams {
  nome?: string
  sobrenome?: string
  senha?: string
}

export interface IUpdateUserRepository {
  createUser(id: string, params: UpdateUserParams): Promise<User>
}

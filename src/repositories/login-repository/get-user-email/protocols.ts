import { User } from '../../../models/user'

export interface IGetUserEmailRepository {
  getUserEmail(email: string): Promise<User | false>
}

import { IGetUsersRepository } from '../../../repositories/user-repository/get-users/protocols'
import { IController } from '../protocols'
import { Request, Response } from 'express'

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const user = await this.getUsersRepository.getUsers()

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

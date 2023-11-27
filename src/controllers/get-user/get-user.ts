import { IGetUsersRepository } from '../../repositories/get-users/protocols'
import { IController } from '../protocols'
import { Request, Response } from 'express'

export class GetUsersController implements IController {
  constructor(private readonly getUserRepository: IGetUsersRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const user = await this.getUserRepository.getUsers()

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

import { IGetUsersRepository } from './protocols'
import { IController } from '../protocols'
import { Request, Response } from 'express'

export class GetUsersController implements IController {
  constructor(private readonly getUserRepository: IGetUsersRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const user = await this.getUserRepository.getUsers()

      return res.status(200).json(user)
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}

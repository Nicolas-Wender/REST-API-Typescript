import { IGetUserRepository } from '../../../repositories/user-repository/get-user/protocols'
import { IController } from '../protocols'
import { Request, Response } from 'express'

export class GetUserController implements IController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const id = req.params.id

      if (!id) {
        return res.status(401).json({ error: 'O id do usuário é necessário' })
      }

      const user = await this.getUserRepository.getUser(id)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

import { IDeleteUserRepository } from '../../repositories/delete-user/protocols'
import { IController } from '../protocols'
import { Request, Response } from 'express'

export class DeleteUsersController implements IController {
  constructor(private readonly deleteUsersRepository: IDeleteUserRepository) {}
  async handle(req: Request, res: Response) {
    try {
      const id = req.params.id

      if (!id) {
        return res.status(401).json({ error: 'O id do usuário é necessário' })
      }

      const user = await this.deleteUsersRepository.deleteUser(id)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

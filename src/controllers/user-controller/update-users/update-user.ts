import { IUpdateUserRepository } from '../../../repositories/user-repository/update-user/protocols'
import { IController } from '../protocols'
import { Request, Response } from 'express'

export class UpdateUsersController implements IController {
  constructor(private readonly updateUsersRepository: IUpdateUserRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const id = req.params.id
      const body = req.body

      if (!id || !body) {
        return res
          .status(400)
          .json('Você esqueceu o id ou de enviar os dados da atualização')
      }

      const campoPermitidos = ['nome', 'senha']

      const camposNaoPermitidosRequisicao = Object.keys(body).some(
        key => !campoPermitidos.includes(key)
      )

      if (camposNaoPermitidosRequisicao) {
        return res
          .status(402)
          .send({ error: 'Alguns campos não são permitidos' })
      }

      const user = await this.updateUsersRepository.updateUser(id, body)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

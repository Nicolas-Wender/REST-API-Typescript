import {
  CreateUserParams,
  ICreateUserRepository
} from '../../../repositories/user-repository/create-user/protocols'
import { IController } from '../../user-controller/protocols'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { IGetUserEmailRepository } from '../../../repositories/login-repository/get-user-email/protocols'

export class CreateUsersController implements IController {
  constructor(
    private readonly createUserRepository: ICreateUserRepository,
    private readonly getUserEmailRepository: IGetUserEmailRepository
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const requiredFields = ['nome', 'email', 'senha', 'confirmarSenha']

      for (const field of requiredFields) {
        if (!req.body?.[field as keyof CreateUserParams]?.length) {
          return res.status(402).json(`O campo ${field} é necessário`)
        }
      }

      const { nome, email, senha, confirmarSenha } = req.body

      if (senha !== confirmarSenha) {
        return res.status(402).json('As senhas devem ser iguais')
      }

      const userEmail = await this.getUserEmailRepository.getUserEmail(email)

      if (userEmail) {
        return res.status(400).json('Email ja cadastrado')
      }

      const senhaHash = bcrypt.hashSync(senha, 8)

      const user = await this.createUserRepository.createUser({
        nome,
        email,
        senha: senhaHash
      })

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

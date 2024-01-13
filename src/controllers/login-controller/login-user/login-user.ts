import { CreateUserParams } from '../../../repositories/user-repository/create-user/protocols'
import { IController } from '../../user-controller/protocols'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { IGetUserEmailRepository } from '../../../repositories/login-repository/get-user-email/protocols'

export class LoginUserController implements IController {
  constructor(
    private readonly getUserEmailRepository: IGetUserEmailRepository
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const requiredFields = ['email', 'senha']

      for (const field of requiredFields) {
        if (!req.body?.[field as keyof CreateUserParams]?.length) {
          return res.status(402).json(`O campo ${field} é necessário`)
        }
      }

      const { email, senha } = req.body

      const user = await this.getUserEmailRepository.getUserEmail(email)

      if (!user) {
        return res.status(404).json('Email Incorreto')
      }

      const conferirSenha = bcrypt.compareSync(senha, user.senha)

      if (!conferirSenha) {
        return res.status(404).json('Senha Incorreta')
      }

      const secret = process.env.JWT_SECRET

      const token = jwt.sign(
        {
          id: user.id
        },
        secret!
      )

      return res
        .status(200)
        .json({ msg: 'autenticação realizada com sucesso', token })
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

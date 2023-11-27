
import { CreateUserParams, ICreateUserRepository } from '../../repositories/create-user/protocols'
import { IController } from '../protocols'
import { Request, Response } from 'express'

export class CreateUsersController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const requiredFields = ["nome", "sobrenome", "email", "senha"]  	
    
      for (const field of requiredFields) {
        if(!req.body?.[field as keyof CreateUserParams]?.length){
          return  res.status(400).json(`O campo ${field} é necessário`)
        }
      }
      
      const user = await this.createUserRepository.createUser(req.body)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}
export interface User {
  id: string
  nome: string
  sobrenome: string
  email: string
  senha: string
}

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export function tokenValido(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Token invalido' })
  }

  try {
    const secret = process.env.JWT_SECRET

    jwt.verify(token, secret!)

    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: 'Token invalido' })
  }
}

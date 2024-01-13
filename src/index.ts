import express from 'express'
import { config } from 'dotenv'
import { router as routerUser } from './routes/user'
import { router as routerLogin } from './routes/login'
import { MongoClient } from './database/mongo'
import { tokenValido } from './middlewares/token-validor'

config({ path: './.env', encoding: 'latin1', debug: true })

const main = async () => {
  const app = express()
  const port = process.env.PORT || 8000

  await MongoClient.connect()

  app.use(express.json())
  app.use(routerLogin)
  app.use('*', tokenValido)
  app.use(routerUser)

  app.listen(port, () =>
    console.log(`escutando na porta http://localhost:${port}`)
  )
}

main()

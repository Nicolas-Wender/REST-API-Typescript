import express from 'express'
import { config } from 'dotenv'
import { getUsersController } from './controllers/get-user'

config({ path: './.env', encoding: 'latin1', debug: true })

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())

app.listen(port, () =>
  console.log(`escutando na porta http://localhost:${port}`)
)

app.get('/users', (req, res) => {
  getUsersController.handle(req, res)
})

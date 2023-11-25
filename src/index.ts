import express from 'express'
import { config } from 'dotenv'
import { router } from './routes' 

config({ path: './.env', encoding: 'latin1', debug: true })

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())
app.use(router)

app.listen(port, () =>
  console.log(`escutando na porta http://localhost:${port}`)
)



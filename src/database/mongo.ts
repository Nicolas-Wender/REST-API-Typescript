import { MongoClient as Mongo, Db } from 'mongodb'

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    try {
      const url = process.env.MONGODB_URL || 'localhost:27017'
      const username = process.env.MONGODB_USERNAME
      const password = process.env.MONGODB_PASSWORD

      const client = new Mongo(url, { auth: { username, password } })
      const db = client.db('Usuarios')

      this.client = client
      this.db = db

      console.log('mongodb conectado!')
    } catch (error) {
      console.log(`Erro ao conectar como mongodb: ${ error.message}`)
    }
  }
}

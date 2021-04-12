import dotenv from 'dotenv'
import { Dialect, Options } from 'sequelize'

dotenv.config()

export const config = {
   port: process.env.PORT || 8081,
   db: {
      database: process.env.DB_NAME || '',
      username: process.env.DB_USERNAME || '',
      pass: process.env.DB_PASS || '',
      options: {
         host: process.env.DB_HOST || '',
         dialect: 'postgres' as Dialect,
         port: 5432,
         logging: (sqlData, sequelizeObj) => { console.log(sqlData) }
      } as Options
   }
}
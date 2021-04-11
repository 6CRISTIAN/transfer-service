import express, { Application } from 'express'
import { config } from './config/config'
import { dbSequelize } from './database/db.database'

const app: Application = express()

function startServer(): void {
   app.listen(config.port, () => {
      console.log(`Server running in http://localhost:${config.port}/`)
   })
}


dbSequelize.authenticate()
   .then(startServer)
   .catch(err => console.error('Server failed to start due to error:', err))
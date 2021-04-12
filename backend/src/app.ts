import express, { Application } from 'express'
import { config } from './config/config'
import { db } from './database/db.database'
import { UserRouter } from './routes/user.routes'

const app: Application = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/recipient', UserRouter)

function startServer(): void {
   app.listen(config.port, () => {
      console.log(`Server running in http://localhost:${config.port}/`)
   })
}

db.sequelize.sync({ force: true })
   .then(startServer)
   .catch(err => console.error('Server failed to start due to error:', err))
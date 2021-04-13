import express, { Application } from 'express'
import cors from 'cors'
import { config } from './config/config'
import { db } from './database/db.database'
import { BankAccountTypeRouter } from './routes/bank-account-type.routes'
import { UserRouter } from './routes/user.routes'
import { TransferRouter } from './routes/transfer.routes'

const app: Application = express()

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

/** URI routes */
app.use('/api/recipient', UserRouter)
app.use('/api/bank-account-type', BankAccountTypeRouter)
app.use('/api/transfer', TransferRouter)

function startServer(): void {
   app.listen(config.port, () => {
      console.log(`Server running in http://localhost:${config.port}/`)
   })
}

db.sequelize.sync({ force: false })
   .then(startServer)
   .catch(err => console.error('Server failed to start due to error:', err))
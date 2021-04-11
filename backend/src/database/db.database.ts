import { Sequelize } from 'sequelize'
import { config } from '../config/config'

export const dbSequelize = new Sequelize(
   config.db.database,
   config.db.username,
   config.db.pass,
   config.db.options
)
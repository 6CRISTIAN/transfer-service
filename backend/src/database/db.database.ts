import { Sequelize } from 'sequelize'
import { config } from '../config/config'
import { BankAccountType } from '../models/bank-account-type.model'
import { BankAccount } from '../models/bank-account.model'
import { Transfer } from '../models/transfer.model'
import { User } from '../models/user.model'

export const sequelize = new Sequelize(
   config.db.database,
   config.db.username,
   config.db.pass,
   config.db.options
)

export const db = {
   sequelize,
   Transfer: Transfer.initialize(sequelize),
   BankAccountType: BankAccountType.initialize(sequelize),
   BankAccount: BankAccount.initialize(sequelize),
   User: User.initialize(sequelize)
};

Object.values(db).forEach((model: any) => {
   if (model.associate)
      model.associate(db)
})
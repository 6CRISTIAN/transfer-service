import { BankAccountType } from "../models/bank-account-type.model"
import { BankAccount } from "../models/bank-account.model"
import { Transfer, TypeTransfer } from "../models/transfer.model"
import { User } from "../models/user.model"

export const createTransfer = (transferType: TypeTransfer): Promise<Transfer> => {
   return Transfer.create(transferType)
}

export const getTransferList = (): Promise<Transfer[]> => {
   return Transfer.findAll({
      attributes: ['id', 'amount'],
      include: [{
         model: BankAccount,
         as: 'bankAccount',
         attributes: ['id', 'bank', 'accountNumber'],
         include: [
            {
               model: User,
               as: 'user',
               attributes: ['names', 'surnames', 'rut']
            },
            {
               model: BankAccountType,
               as: 'bankAccountType',
               attributes: ['id', 'name']
            }
         ]
      }]
   })
}
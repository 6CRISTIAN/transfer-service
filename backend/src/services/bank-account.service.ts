import { BankAccount } from '../models/bank-account.model'

export const createBankAccount = async (bankAccount: any): Promise<BankAccount> => {
   return BankAccount.create(bankAccount)
}
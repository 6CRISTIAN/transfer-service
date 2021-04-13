import { BasicModel } from './basic-model.interface'

export interface BankAccount {
   id: number | string
   accountNumber: number | string
   bankAccountType: BasicModel
   bank: BasicModel
}
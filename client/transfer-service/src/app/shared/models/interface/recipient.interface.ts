import { BankAccount } from './bank-account.interface'

export interface Recipient {
   id: string
   rut: string
   names: string
   surnames: string
   email: string
   phoneNumber: string
   bankAccountList: BankAccount[]
}

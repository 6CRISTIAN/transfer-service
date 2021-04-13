import { BankAccountType } from '../models/bank-account-type.model'

export const getBankAccountTypeList = (): Promise<BankAccountType[]> => BankAccountType.findAll()
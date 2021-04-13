import { BankAccountType } from '../models/bank-account-type.model';
import { BankAccount } from '../models/bank-account.model';
import { TypeUser, User } from '../models/user.model';
import { createBankAccount } from './bank-account.service';

export const createUser = async (user: TypeUser): Promise<TypeUser> => {
   const _user = await findUserByEmail(user?.email) || await findUserByRut(user?.rut)
   const userRecord = _user ? _user : { isNewRecord: true, ...((await User.create(user)) as any)?.dataValues }

   _createBankAccount(user, userRecord.id)
   return userRecord
}

const _createBankAccount = (user: any, userId: string) => {
   const { accountNumber, bank, bankAccountType } = user
   if (accountNumber && bank && bankAccountType && userId)
      createBankAccount({ accountNumber, bank, user_id: userId, bank_account_type_id: bankAccountType.id })
}

export const retrieveUserList = async (): Promise<User[]> => User.findAll({
   include: [{
      model: BankAccount,
      as: 'bankAccountList',
      attributes: ['id', 'accountNumber'],
      include: [{
         model: BankAccountType,
         as: 'bankAccountType',
         attributes: ['id', 'name']
      }]
   }]
})

export const findUserByEmail = async (email: string): Promise<User | any> => {
   return User.findOne({ where: { email } })
}

export const findUserByRut = async (rut: number): Promise<User | any> => {
   return User.findOne({ where: { rut } })
}
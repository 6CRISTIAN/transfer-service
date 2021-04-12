import { DataTypes, Model, ModelAttributes } from "sequelize";
import { basicModelColumns } from "../utils/constants";
import { BankAccountType } from "./bank-account-type.model";
import { Transfer } from "./transfer.model";

const BankAccountAtt: ModelAttributes = {
   ...basicModelColumns,
   accountNumber: {
      field: 'account_number',
      type: DataTypes.INTEGER,
      allowNull: false
   },
   bank: {
      type: DataTypes.JSONB,
      allowNull: false
   }
}

export class BankAccount extends Model {
   static initialize = (sequelize: any): any => BankAccount.init(BankAccountAtt, {
      sequelize, modelName: 'bank_accounts',
      schema: 'transfer-service'
   })

   static associate(): void {
      BankAccount.belongsTo(BankAccountType, {
         foreignKey: 'bank_account_type_id',
         as: 'bankAccountType'
      })

      BankAccountType.hasMany(BankAccount, {
         foreignKey: 'bank_account_type_id',
         as: 'bankAccountTypeId'
      })

      BankAccount.hasMany(Transfer, {
         foreignKey: 'bank_account_id',
         as: 'bankAccountId'
      })

      Transfer.belongsTo(BankAccount, {
         foreignKey: 'bank_account_id',
         as: 'transfer'
      })
   }
}

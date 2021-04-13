import { DataTypes, Model, ModelAttributes } from "sequelize";
import { BasicEntity, basicModelColumns } from "../utils/constants";
import { BankAccountType } from "./bank-account-type.model";
import { Transfer } from "./transfer.model";

export interface TypeBankAccount extends BasicEntity {
   bank: { id: string, name: string }
   accountNumber: number
}

const BankAccountAtt: ModelAttributes = {
   ...basicModelColumns,
   accountNumber: {
      field: 'account_number',
      type: DataTypes.BIGINT,
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
         as: 'bankAccountList'
      })

      BankAccount.hasMany(Transfer, {
         foreignKey: 'bank_account_id',
         as: 'transferList'
      })

      Transfer.belongsTo(BankAccount, {
         foreignKey: 'bank_account_id',
         as: 'bankAccountId'
      })
   }
}

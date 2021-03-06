import { DataTypes, Model, ModelAttributes } from "sequelize";
import { BasicEntity, basicModelColumns } from "../utils/constants";

export interface TypeBankAccountType extends BasicEntity {
   name: string
}

const BankAccountTypeAtt: ModelAttributes = {
   ...basicModelColumns,
   name: {
      type: DataTypes.STRING(69),
      allowNull: false,
      unique: true
   }
}

export class BankAccountType extends Model {
   static initialize = (sequelize: any): any => BankAccountType.init(BankAccountTypeAtt, {
      sequelize, modelName: 'bank_account_type',
      schema: 'transfer-service'
   })
}
import { DataTypes, Model, ModelAttributes } from "sequelize";
import { basicModelColumns } from "../utils/constants";

const BankAccountTypeAtt: ModelAttributes = {
   ...basicModelColumns,
   name: {
      type: DataTypes.STRING(69),
      allowNull: false
   },
   displayName: {
      field: 'display_name',
      type: DataTypes.STRING(69),
      allowNull: false
   },
}

export class BankAccountType extends Model {
   static initialize = (sequelize: any): any => BankAccountType.init(BankAccountTypeAtt, {
      sequelize, modelName: 'bank_account_type',
      schema: 'transfer-service'
   })
}
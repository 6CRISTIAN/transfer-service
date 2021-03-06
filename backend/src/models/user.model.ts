import { DataTypes, Model, ModelAttributes } from "sequelize";
import { BasicEntity, basicModelColumns } from "../utils/constants";
import { BankAccount } from "./bank-account.model";

export interface TypeUser extends BasicEntity {
   isNewRecord?: boolean
   rut: number
   names: string
   surnames: string
   email: string
   phoneNumber: string
}

const UserAtt: ModelAttributes = {
   ...basicModelColumns,
   rut: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
   },
   names: {
      type: DataTypes.STRING(69),
      allowNull: false
   },
   surnames: {
      type: DataTypes.STRING(69),
      allowNull: false
   },
   email: {
      type: DataTypes.STRING(54),
      allowNull: false,
      unique: true
   },
   phoneNumber: {
      field: 'phone_number',
      type: DataTypes.STRING(54),
      allowNull: false
   }
}

export class User extends Model {
   static initialize = (sequelize: any): any => User.init(UserAtt, {
      sequelize,
      modelName: 'users',
      schema: 'transfer-service'
   })

   static associate(): void {
      User.hasMany(BankAccount, {
         foreignKey: 'user_id',
         as: 'bankAccountList',
      })

      BankAccount.belongsTo(User, {
         foreignKey: 'user_id',
         as: 'user',
      })
   }
}


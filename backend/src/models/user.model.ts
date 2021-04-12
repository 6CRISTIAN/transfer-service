import { DataTypes, Model, ModelAttributes } from "sequelize";
import { any } from "sequelize/types/lib/operators";
import { BasicEntity, basicModelColumns } from "../utils/constants";
import { BankAccount } from "./bank-account.model";

export interface TypeUser extends BasicEntity {
   alreadyExisted?: boolean
   rut: number
   names: string
   surnames: string
   email: string
   phoneNumber: string
}

const UserAtt: ModelAttributes = {
   ...basicModelColumns,
   rut: {
      type: DataTypes.INTEGER,
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
         as: 'userId',
      })

      BankAccount.belongsTo(BankAccount, {
         foreignKey: 'user_id',
         as: 'bankAccount',
      })
   }
}


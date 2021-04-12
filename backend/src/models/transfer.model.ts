import { DataTypes, Model, ModelAttributes } from "sequelize";
import { BasicEntity, basicModelColumns } from "../utils/constants";

export interface TypeTransfer extends BasicEntity {
   amount: number
}

const TransferAtt: ModelAttributes = {
   ...basicModelColumns,
   amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
   }
}

export class Transfer extends Model {
   static initialize = (sequelize: any): any => Transfer.init(TransferAtt, {
      sequelize, modelName: 'transfers',
      schema: 'transfer-service'
   })
}
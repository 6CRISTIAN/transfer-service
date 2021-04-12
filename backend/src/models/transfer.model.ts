import { DataTypes, Model, ModelAttributes } from "sequelize";
import { basicModelColumns } from "../utils/constants";

const TransferAtt: ModelAttributes = {
   ...basicModelColumns,
   amount: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
}

export class Transfer extends Model {
   static initialize = (sequelize: any): any => Transfer.init(TransferAtt, {
      sequelize, modelName: 'transfers',
      schema: 'transfer-service'
   })
}
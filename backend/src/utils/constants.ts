import { DataTypes, Sequelize } from "sequelize";

export const messages = {
   internalErr: 'Hemos tenido un error, intente de nuevo más tarde o comuníquese con el área encargada.'
}

export interface BasicEntity {
   id?: number
   isActive?: boolean
   createdAt?: any
   updatedAt?: any
   deletedAt?: any
}

export const basicModelColumns = {
   id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
   },
   isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_active',
   },
   createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
      field: 'created_at'
   },
   updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
      field: 'updated_at'
   },
   deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
   }
}
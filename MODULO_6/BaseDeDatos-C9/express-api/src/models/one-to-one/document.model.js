import { DataTypes } from "sequelize";
import { connection } from "../../db/sequelize.js";

export const Document = connection.define("document", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
},{
    timestamps: false,
}
);
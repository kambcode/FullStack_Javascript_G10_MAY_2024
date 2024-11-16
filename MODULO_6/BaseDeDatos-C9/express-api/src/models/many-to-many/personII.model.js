import { DataTypes } from "sequelize";
import { connection } from "../../db/sequelize.js";

export const PersonII = connection.define("personII", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoUrl: {
    type: DataTypes.STRING,
  },
},{
    timestamps: false,
}
);



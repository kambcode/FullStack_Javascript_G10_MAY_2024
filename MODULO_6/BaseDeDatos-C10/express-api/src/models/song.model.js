import { DataTypes } from "sequelize";
import { connection } from "../db/sequelize.js";

export const Song = connection.define("song", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coverUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps: false,
}
);

import { DataTypes } from "sequelize";
import { connection } from "../db/sequelize.js";

export const Movie = connection.define("movie", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

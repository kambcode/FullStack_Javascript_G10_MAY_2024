import { DataTypes } from "sequelize";
import { connection } from "../../db/sequelize.js";
import { Document } from "./document.model.js";

export const Person = connection.define("person", {
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

Person.hasOne(Document, {
    foreignKey: 'personId',
    sourceKey: 'id',
});

Document.belongsTo(Person, {
    foreignKey: 'personId',
    targetKey: 'id',
});
import { DataTypes } from "sequelize";
import { connection } from "../db/sequelize.js";

export const Director = connection.define('director', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    birthDate: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false,
});
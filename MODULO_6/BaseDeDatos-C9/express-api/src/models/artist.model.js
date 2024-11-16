import { DataTypes } from "sequelize";
import { connection } from "../db/sequelize.js";
import { Song } from "./song.model.js";

export const Artist = connection.define("artist", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps: false,
}
);


Artist.hasMany(Song, {
  foreignKey: 'artistId',
  sourceKey: 'id',
});

Song.belongsTo(Artist, {
  foreignKey: 'artistId',
  targetKey:  'id',
})
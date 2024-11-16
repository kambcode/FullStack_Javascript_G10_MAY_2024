import { Sequelize } from'sequelize';
import { env } from '../config/config.js';

console.log(env.database);

export const connection = new Sequelize(env.database, env.usernameDB, env.passwordDB, {
  host: env.hostDB,
  dialect: env.dialect,
});


const { Sequelize } = require('sequelize');
const env = require('../config/config.js');

console.log(env);

const connection = new Sequelize(env.database, env.usernameDB, env.passwordDB, {
  host: env.hostDB,
  dialect: env.dialect,
  logging: true,
});

connection.query(`
    CREATE TABLE IF NOT EXISTS Movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(50),
    releaseYear INT
  );

`).then(() => console.log('Customers table created'))
  .catch(err => console.error('Error creating Customers table:', err.message));


connection.query(`
  CREATE TABLE IF NOT EXISTS Directors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    nationality VARCHAR(50)
  );

`).then(() => console.log('orders table created'))
.catch(err => console.error('Error creating orders table:', err.message));

module.exports = connection;
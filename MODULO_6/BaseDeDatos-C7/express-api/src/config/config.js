require('dotenv').config();

const env = {
    usernameDB : process.env.DB_USERNAME,
    passwordDB : process.env.DB_PASSWORD,
    hostDB : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    portDB : Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    port: process.env.PORT || 3000,
}

module.exports = env;
import 'dotenv/config';

export const env = {
    usernameDB : process.env.DB_USERNAME,
    passwordDB : process.env.DB_PASSWORD,
    hostDB : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    portDB : Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    port: process.env.PORT || 3000,
    salt: Number(process.env.SALT) || 10,
    jwtSecret: process.env.JWT_SECRET_TOKEN,
};

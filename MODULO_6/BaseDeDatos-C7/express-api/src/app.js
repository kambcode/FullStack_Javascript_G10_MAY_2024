
const express = require('express');
const router = require('./routes/movies.routes.js');

const connection = require('./db/sequelize.js');
const env = require('./config/config.js');


async function main(){
  const app = express()
  app.use(express.json());

  app.use(router);

  const port = env.port;


  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }


  app.listen(port, () => {
    console.log('listening on port', port);
  });
}



main();
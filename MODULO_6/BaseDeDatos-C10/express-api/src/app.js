
import routes from './routes/index.js'
import { connection } from './db/sequelize.js';
import { Server } from "./server.js";
import { env } from './config/config.js';

import "./models/index.js";

async function main(){
  
  const port = env.port;
  const server = new Server({port, routes});

  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
    await connection.sync({ force: false });
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }

  await server.start();

}



main();
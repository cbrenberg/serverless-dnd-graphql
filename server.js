'use strict';
const app = require('./src/app');

//enable environment variables
require('dotenv').config();

//declare port for listening
const port = process.env.PORT || 3000;

// start the server
app.listen(
  port,
  () => {
    console.log('GraphQL Server Running at http://localhost:' + port);
    console.log(`Base URL is ${process.env.BASE_URL ? 'set' : 'not set'}`);
  }
);
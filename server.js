'use strict';
const app = require('./src/app');

//declare port for listening
const port = process.env.PORT || 3000;

// start the server
app.listen(
  port,
  () => {
    console.log('GraphQL Server Running at http://localhost:' + port);
  }
);
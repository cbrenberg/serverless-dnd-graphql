'use strict';
const app = require('./src/app');
// start the server
app.listen(
  process.env.PORT,
  () => {
    console.log('GraphQL Server Running at http://127.0.0.1:' + process.env.PORT);
  }
);
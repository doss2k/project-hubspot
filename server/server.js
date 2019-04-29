const express = require('express');
const app = express();
var mysql = require('mysql');

var pool;

// For user, password, and database you will the enter information for your local db copy.

module.exports = {
  getPool: function () {
    if (pool) return pool;
    pool = mysql.createPool({
      host     : 'localhost',
      user     : 'kbrand', // MySQL username
      password : 'mysql123!', // MySQL password
      database : 'projechubspot' // MySQL database name 
    });
    return pool;
  }
};

const mainRoutes = require('./routes/main')

app.use(mainRoutes);

app.listen(8000, () => {
  console.log('Server is listening on port ' + 8000)
});
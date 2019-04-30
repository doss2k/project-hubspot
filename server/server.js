const express = require('express');
const app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors');

var pool;

// For user, password, and database you will the enter information for your local db copy.

module.exports = {
  getPool: function () {
    if (pool) return pool;
    pool = mysql.createPool({
      host: 'localhost',
      user: process.env.user, // MySQL username
      password: process.env.password, // MySQL password
      database: 'projecthubspot' // MySQL database name 
    });
    return pool;
  }
};

const mainRoutes = require('./routes/main')

app.use(cors())
app.use(bodyParser.json())
app.use(mainRoutes);

app.listen(8000, () => {
  console.log('Server is listening on port ' + 8000)
});
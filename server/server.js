const express = require('express');
const app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors');

var pool;

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// For user, password, and database you will the enter information for your local db copy.

module.exports = {
  getPool: function () {
    if (pool) return pool;
    pool = mysql.createPool({
      host: 'localhost',
      user: 'doss2k', // MySQL username
      password: 'password', // MySQL password
      database: 'projecthubspot' // MySQL database name 
    });
    return pool;
  }
};

const mainRoutes = require('./routes/main')

app.use(cors())
app.use(bodyParser.json())
app.use(mainRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is listening on port ' + 8000)
});
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8000;
const path = require("path");

var pool;

// For user, password, and database you will the enter information for your local db copy.

module.exports = {
  getPool: function() {
    if (pool) return pool;
    pool = mysql.createPool({
      host: "localhost",
      user: process.env.user, // MySQL username
      password: process.env.password, // MySQL password
      database: "projecthubspot" // MySQL database name
    });
    return pool;
  }
};

const mainRoutes = require("./routes/main");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mainRoutes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log("Server is listening on port " + 8000);
});

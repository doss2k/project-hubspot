const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8000;

var pool;

// For user, password, and database you will the enter information for your local db copy.

module.exports = {
  getPool: function () {
    if (pool) return pool;
    if (process.env.NODE_ENV === 'production') {
      pool = mysql.createPool({
        host: "us-cdbr-iron-east-02.cleardb.net",
        user: "b3a680a1274e8c",
        password: "926ce534",
        database: "heroku_4d0bb8f5ad72994",
        connectionLimit: 10
      });
    } else {
      pool = mysql.createPool({
        host: "localhost",
        user: process.env.user, // MySQL username
        password: process.env.password, // MySQL password
        database: "projecthubspot" // MySQL database name
      });
    }
    return pool;
  }
};

const companiesRoutes = require("./routes/companiesRoutes");
const dealsRoutes = require("./routes/dealsRoutes");
const dealsBoardRoutes = require("./routes/dealsBoardRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(companiesRoutes);
app.use(dealsRoutes);
app.use(dealsBoardRoutes);
app.use(dashboardRoutes);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is listening on port " + 8000);
});
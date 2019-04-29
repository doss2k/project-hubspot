const router = require("express").Router();
const server = require('../server');
const pool = server.getPool();

// Placeholder test GET request to verify pooling and routes working
router.get('/test', (req, res) => {
  pool.query('SELECT * FROM `test`', function (error, results, fields) {
      // error will be an Error if one occurred during the query
      if (error) throw error;

      // results will contain the results of the query
      res.json(results);
      // fields will contain information about the returned results fields (if any)
  });
});

module.exports = router;
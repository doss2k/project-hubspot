const router = require("express").Router();
const server = require("../server");
const pool = server.getPool();

router.get("/api/companies", (req, res) => {
  pool.query("SELECT * FROM companies", function(error, results, fields) {
    if (error) {throw error}
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).send("No companies found.");
    }
  });
});

router.get("/api/companies/:id", (req, res) => {
  const companyId = req.params.id;
  const sql = "SELECT * FROM companies WHERE companyId = ?";
  pool.query(sql, companyId, function(error, results, fields) {
    if (error) throw error;
    // Check for no results.
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).send("CompanyId not found.");
    }
  });
});

router.get("/api/deals", (req, res) => {
  pool.query("SELECT * FROM deals", function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/api/deals/:id", (req, res) => {
  const dealId = req.params.id;
  const sql = "SELECT * FROM deals WHERE companyId = ?";
  pool.query(sql, dealId, function(error, results, fields) {
    if (error) throw error;
    // Check for no results.
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).send("DealId not found.");
    }
  });
});


module.exports = router;

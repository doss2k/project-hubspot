const router = require("express").Router();
const server = require("../server");
const pool = server.getPool();

/* GET This endpoint gets all of the users associated deals.  If there are 
   no deals in the database it will return a 404 error. */

router.get("/api/deals", (req, res) => {
  pool.query("SELECT * FROM deals", function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

/* GET This endpoint gets a specific deal based on a supplied deal ID.  If there are 
    no deals matching the ID in the database it will return a 404 error. */

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

/* POST This endpoint inserts a new deal into the database.  The deal info
   must be supplied in the body of the request in JSON format.  It returns the body of the
   request upon success.  If the deal is not added to the database returns a 404 error */

router.post("/api/deals", (req, res) => {
  if(!(req.body.dealName && req.body.stage && req.body.amount && req.body.createdDate && req.body.closeDate && req.body.companyId)) {
    res.status(400).send("Required parameter was not sent, please check your request");
    return;
  }
  let sqlGetStageLength;
  const sql1 = `select max(stageOrder) as maxstage from deals where stage ='${req.body.stage}'`
  const sql2 = `INSERT into deals VALUES
    (NULL,
    "${req.body.dealName}",
    "${req.body.stage}",
    "${req.body.amount}",
    "${req.body.createdDate}",
    "${req.body.closeDate}",
    "${req.body.companyId}",
     ?)` // push new dealId onto end of 
  pool.query(sql1, function(error, results, fields){
    if (error) throw error;
    sqlGetStageLength = results[0].maxstage + 1;
    pool.query(sql2, sqlGetStageLength, function(error, results, fields) {
      if (error) throw error;
        if (results) {
          res.json(req.body);
        } else {
          res.status(404).send("Deal was not added");
        }
      })
    })
});

/* PUT This endpoint allows you to edit the deal with the supplied dealId. If the supplied
  dealId is not in the database it will return a 404 error */

router.put("/api/deals/:id", (req, res) => {
  if(!(req.body.dealName && req.body.stage && req.body.amount && req.body.closeDate && req.body.companyId)) {
    res.status(400).send("Required parameter was not sent, please check your request");
    return;
  }
  const dealId = parseInt(req.params.id);
  const sql = `UPDATE deals SET
    dealName = '${req.body.dealName}',
    stage = '${req.body.stage}',
    amount = '${req.body.amount}',
    closeDate = '${req.body.closeDate}',
    companyId = '${req.body.companyId}'
    WHERE dealId = ?`
  pool.query(sql, dealId, function(error, results, fields){
    if (error) throw error;
    if (results.affectedRows !== 0) {
      res.json(results);
    } else {
      res.status(404).send("That dealId is not in the database");
    }
  });
});

/* DELETE This endpoint deletes a specific deal based on a supplied deal ID.  If there are 
    no deals matching the ID in the database it will return a 404 error. */

router.delete("/api/deals/:id", (req, res) => {
  const dealId = req.params.id;
  const sql = "DELETE FROM deals WHERE dealId = ?";
  pool.query(sql, dealId, function(error, results, fields) {
    if (error) throw error;
    // Check for no results.
    if (results.affectedRows !== 0) {
      res.json(results);
    } else {
      res.status(404).send("That dealId is not in the database");
    }
  });
});

module.exports = router;
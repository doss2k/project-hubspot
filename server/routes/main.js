const router = require("express").Router();
const server = require("../server");
const pool = server.getPool();

/* GET This endpoint gets all of the users associated companies.  If there are 
   no companies in the database it will return a 404 error. */

   router.get("/api/companies", (req, res) => {
    const { field, sort } = req.query;
    const sql = `SELECT * FROM companies ORDER BY ${field} ${sort}`;
    if (field && sort) {
      pool.query(sql, function(error, results, fields) {
        if (error) {throw error}
        if (results.length > 0) {
          res.json(results);
        } else {
          res.status(404).send("No companies found.");
        }
      });
    } else { // If Query params not passed
    pool.query("SELECT * FROM companies", function(error, results, fields) {
      if (error) {throw error}
      if (results.length > 0) {
        res.json(results);
      } else {
        res.status(404).send("No companies found.");
      }
    });
  }
  });

/* POST This endpoint inserts a new company into the database.  The company info
   must be supplied in the body of the request in JSON format.  It returns the body of the
   request upon success.  If the company is not added to the database returns a 404 error */

router.post("/api/companies", (req, res) => {
  const sql = `INSERT into companies VALUES 
    (NULL, 
    "${req.body.companyName}", 
    "${req.body.logoUrl}", 
    "${req.body.city}", 
    "${req.body.state}", 
    UNIX_TIMESTAMP(), 
    UNIX_TIMESTAMP())`
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
    if (results) {
      res.json(req.body);
    } else {
      res.status(404).send("Company was not added");
    }
  });
});

/* GET This endpoint gets a specific company based on a supplied company ID.  If there are 
   no companies matching the ID in the database it will return a 404 error. */

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

/* DELETE This endpoint deletes a specific company based on a supplied company ID.  If there are 
   no companies matching the ID in the database it will return a 404 error. */

router.delete("/api/companies/:id", (req, res) => {
  const companyId = req.params.id;
  const sql = "DELETE FROM companies WHERE companyId = ?";
  pool.query(sql, companyId, function(error, results, fields) {
    if (error) throw error;
    // Check for no results.
    if (results.affectedRows !== 0) {
      res.json(results);
    } else {
      res.status(404).send("That companyId is not in the database");
    }
  });
});

/* GET This endpoint gets all of the users associated deals.  If there are 
   no deals in the database it will return a 404 error. */

router.get("/api/deals", (req, res) => {
  pool.query("SELECT *, dealId as id FROM deals", function(error, results, fields) {  //, dealId as id
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

/* PUT This endpoint allows you to edit the company with the supplied companyId. If the supplied
  companyId is not in the database it will return a 404 error */

router.put("/api/companies/:id", (req, res) => {
  const companyId = parseInt(req.params.id);
  const sql = `UPDATE companies SET 
    companyName = '${req.body.companyName}',
    logoUrl = '${req.body.logoUrl}',
    city = '${req.body.city}',
    state = '${req.body.state}',
    updatedDate = UNIX_TIMESTAMP()
    WHERE companyId = ?`
  pool.query(sql, companyId, function(error, results, fields){
    if (error) throw error;
    if (results.affectedRows !== 0) {
      res.json(results);
    } else {
      res.status(404).send("That companyId is not in the database");
    }
  });
});

/* PUT This endpoint allows you to edit the deal with the supplied dealId. If the supplied
  dealId is not in the database it will return a 404 error */

router.put("/api/deals/:id", (req, res) => {
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

/* POST This endpoint inserts a new deal into the database.  The deal info
   must be supplied in the body of the request in JSON format.  It returns the body of the
   request upon success.  If the deal is not added to the database returns a 404 error */

router.post("/api/deals", (req, res) => {
  const sql = `INSERT into deals VALUES
    (NULL,
    "${req.body.dealName}",
    "${req.body.stage}",
    "${req.body.amount}",
    "${req.body.createdDate}",
    "${req.body.closeDate}",
    "${req.body.companyId}")`
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
    if (results) {
      res.json(req.body);
    } else {
      res.status(404).send("Deal was not added");
    }
  });
});


// Data nerds calcs 

router.get("/api/calc/successrate", (req, res) => {
  const sql = "CALL success_rate()";
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
      res.json(results[0]);
  });
});

router.get("/api/calc/dealsinprogress", (req, res) => {
  const sql = "SELECT SUM(amount) AS 'Deals In Progress' FROM deals WHERE stage NOT IN ('Closed Lost','Closed Won')";
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
      res.json(results);
  });
});

router.get("/api/calc/avgrevperdeal", (req, res) => {
  const sql = "CALL avg_rev_per_deal()";
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
      res.json(results[0]);
  });
});

router.get("/api/calc/totalrevytd", (req, res) => {
  const sql = `SELECT SUM(amount) AS 'Total Revenue YTD' from deals 
  WHERE stage = 'Closed Won' AND closeDate > 1546300800`;
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
      res.json(results);
  });
});

router.get("/api/calc/avgtimetoclose", (req, res) => {
  const sql = "CALL avg_time_to_close()";
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
      res.json(results[0]);
  });
});

router.get("/api/calc/topthreeclients", (req, res) => {
  const sql = `select sum(deals.amount) AS Total, deals.dealId, companies.logoUrl, companies.companyName
  from deals
  INNER JOIN companies ON companies.companyId = deals.companyId
  GROUP BY dealId
  ORDER BY Total DESC
  LIMIT 3`;
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
      res.json(results);
  });
});

//rich endpoint

router.get("/api/dealsposition/", (req, res) => {
  const sql = `select dealId, stage, stageOrder from deals
  ORDER BY stage, stageOrder;`;
  const objectTemplate = {
    id: "",
    title: "",
    deadlId: []
  };
  const resultArray = [];
  let returnObject = false;
  pool.query(sql, function(error, results, fields) {
    if (error) throw error;
    //to-do: refactor this mess.
    let oldStage = false;
    results.forEach((result,index) => {
      if (result.stage != oldStage && returnObject) {
        resultArray.push(returnObject);
        returnObject = false;
      }
      if (result.stage == oldStage) {
        returnObject.deadlId = returnObject.deadlId.concat(result.dealId)
      } else if (!returnObject) {
          returnObject = Object.assign({},objectTemplate)
          returnObject.id = result.stage;
          returnObject.title = result.stage;
        if (result.stage != oldStage) {
          returnObject.deadlId = returnObject.deadlId.concat(result.dealId)
        }
        oldStage = result.stage;
      }
    });
    if (returnObject) {resultArray.push(returnObject)}
      res.json(resultArray);
  });
});

module.exports = router;
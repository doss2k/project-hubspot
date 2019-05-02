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
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.status(404).send("No companies found.");
      }
    });
  } else { // If Query params not passed
  pool.query("SELECT * FROM companies", function(error, results, fields) {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).send("No companies found.");
    }
  });
  }
});

/* GET This endpoint gets a specific company based on a supplied company ID.  If there are 
   no companies matching the ID in the database it will return a 404 error. */

router.get("/api/companies/:id", (req, res) => {
  const companyId = req.params.id;
  const sql1 = "SELECT * FROM companies WHERE companyId = ?";
  const sql2 = `select deals.*
                from companies
                inner join deals on companies.companyId = deals.companyId
                where companies.companyId = ?;`
  const queries = [sql1, sql2]
  const finalResponse = [];
  queries.forEach(call => {
    pool.query(call, companyId, function(error, results, fields) {
      if (error) throw error;
      finalResponse.push(results);
      // Check for no results.
      if (results.length > 0 || finalResponse) {
        if (finalResponse.length == 2) {
          res.json(finalResponse);
        }
      } else {
        res.status(404).send("CompanyId not found.");
      }
    });
  });
});

/* POST This endpoint inserts a new company into the database.  The company info
   must be supplied in the body of the request in JSON format.  It returns the body of the
   request upon success.  If the company is not added to the database returns a 404 error */

router.post("/api/companies", (req, res) => {
  if(!(req.body.companyName && req.body.logoUrl && req.body.city && req.body.state)) {
    res.status(400).send("Required parameter was not sent, please check your request");
    return;
  }
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
      const returnInfo = `SELECT * from companies where companyId = ${results.insertId}`
      pool.query(returnInfo, function(error, results, fields) {
        if (error) throw error;
        if(results){
        res.json(results);
      }
    })
    } else {
      res.status(404).send("Company was not added");
    }
  });
});

/* PUT This endpoint allows you to edit the company with the supplied companyId. If the supplied
  companyId is not in the database it will return a 404 error */

router.put("/api/companies/:id", (req, res) => {
  if(!(req.body.companyName && req.body.logoUrl && req.body.city && req.body.state)) {
    res.status(400).send("Required parameter was not sent, please check your request");
    return;
  }
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
      const returnInfo = `SELECT * from companies where companyId = ${companyId}`
      pool.query(returnInfo, function(error, results, fields) {
        if (error) throw error;
        if(results){
        res.json(results);
      }
    })
    } else {
      res.status(404).send("That companyId is not in the database");
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
      const deleteRelatedDeals = `DELETE FROM deals WHERE companyId = ${companyId}`
      pool.query(deleteRelatedDeals, function(error, results, fields) {
        if (error) throw error;
        if(results.affectedRows !== 0){
        res.json(`Company with ID of ${companyId} and all associated deals have been deleted`);
      } else {
        res.json(`Company with ID of ${companyId} has been deleted`);
      }
    })
    } else {
      res.status(404).send("That companyId is not in the database");
    }
  });
});

module.exports = router;
const router = require("express").Router();
const server = require("../server");
const pool = server.getPool();

//rich endpoint

router.get("/api/dealsposition/", (req, res) => {
  const sql = `select dealId, stage, stageOrder from deals
  ORDER BY stage, stageOrder;`;
  const objectTemplate = {
    id: "",
    title: "",
    dealId: []
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
        returnObject.dealId = returnObject.dealId.concat(result.dealId)
      } else if (!returnObject) {
          returnObject = Object.assign({},objectTemplate)
          returnObject.id = result.stage;
          returnObject.title = result.stage;
        if (result.stage != oldStage) {
          returnObject.dealId = returnObject.dealId.concat(result.dealId)
        }
        oldStage = result.stage;
      }
    });
    if (returnObject) {resultArray.push(returnObject)}
      res.json(resultArray);
  });
});


router.put("/api/dealsposition/", (req, res) => {
  let sql = "";
  let updatedJson = []
  req.body.forEach(item => {
    for (let i=0; i<item.dealId.length; i++) {
      sql = `update deals set stageOrder=${i+1}, stage='${item.id}' where dealId=${item.dealId[i]};`
      updatedJson.push({dealId: item.dealId[i],
                        stageOrder: i+1, 
                        stage: item.id
                      })
      pool.query(sql, function(error, results, fields) {
        if (error) throw error;
      })
  }
  });
  res.json(updatedJson);
});

module.exports = router;
var express = require("express");
var router = express.Router();

var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.body);
  var responseObj = {};
  getDBConnection(req.query)
    .then((response) => {
      responseObj.msg = "Delete Item from cart";
      responseObj.status = "Success";
      res.send(JSON.stringify(responseObj));
    })
    .catch((err) => {
      console.log(err);
      responseObj.msg = "Error while deleting";
      responseObj.status = "Error";
      res.send(JSON.stringify(responseObj));
    });
});

async function getDBConnection(pid) {
  console.log(pid);
  await mongoClient.connect();
  var db = mongoClient.db("shoppingWebApp");
  var collection = db.collection("userCartDetails");

  return collection.deleteOne(pid).toArray();
}

module.exports = router;

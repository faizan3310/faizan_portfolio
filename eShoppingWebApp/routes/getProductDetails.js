var express = require('express');
var router = express.Router();
var mongoClient = require("./common").dbConDetails.mongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("req.session.isValidUser")
    console.log(req.session.isValidUser);
    console.log(req.session);
    var productDetails  = []
    getDBConnection(req.query).then((response) => {
        res.send(JSON.stringify({details: response}));
    })
  
});

async function getDBConnection(userData) {
    console.log(userData);
    var reqQuery = {};
    if (userData.productId) {
        reqQuery.productId =  userData.productId;
    }
    await mongoClient.connect();
    var db = mongoClient.db("shoppingWebApp");
    var collection = db.collection("productDetails");
    return collection.find(reqQuery).toArray();
    
}

module.exports = router;

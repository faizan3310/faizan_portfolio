var express = require('express');
const session = require('express-session');
var router = express.Router();
var mongoClient = require("./common").dbConDetails.mongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
    var productIdList = req.session.userCartDetails.map((item) => {
        return item.productId;
    })  
   
    
    getDBConnection(productIdList).then((response) => {
        res.send(JSON.stringify(response));
    })
  
});

async function getDBConnection(productIdList) {
  
    await mongoClient.connect();
    var db = mongoClient.db("shoppingWebApp");
    var collection = db.collection("productDetails");
    var reqQuery = {productId: {$in: productIdList}};
    return collection.find(reqQuery).toArray();

    
}

module.exports = router;

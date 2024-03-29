var express = require('express');
var router = express.Router();
var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;
var isDuplicateAccountId = false;
/* GET home page. */
router.get('/', function(req, res, next) {
    var resobj = {};
    getDBConnection(req.query).then((response) => {
        resobj.msg = 'Succesfly inserted';
        res.send(JSON.stringify(resobj));
    })
}); 


async function getDBConnection(productData) {
    await mongoClient.connect();
    var db = mongoClient.db("shoppingWebApp");
    var collection = db.collection("productDetails");
    return collection.insertOne(productData);
    
};
    
    

module.exports = router;

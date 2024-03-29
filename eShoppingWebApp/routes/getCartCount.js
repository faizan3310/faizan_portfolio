var express = require('express');

var router = express.Router();
var mongoClient = require("./common").dbConDetails.mongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
    var resObj = {};
    getDBConnection(req.query).then((response) => {
        console.log("db dresponse");
        if (response.length) {
            console.log(response[0][req.query.accountId].length);
            resObj.count = response[0][req.query.accountId].length;
            req.session.userCartDetails = response[0][req.query.accountId];
        } else {
            resObj.count = 0;
        }
        res.send(JSON.stringify(resObj));
    })
  
});

async function getDBConnection(userData) {

    var reqQuery = {};
    await mongoClient.connect();
    var db = mongoClient.db("shoppingWebApp");
    var collection = db.collection("userCartDetails");
    var reqQuery =  {};
    reqQuery[userData.accountId] = {$exists:true};
    return collection.find(reqQuery).toArray();
    
}

module.exports = router;

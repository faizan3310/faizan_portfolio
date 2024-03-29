var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;
var isDuplicateAccountId = false;
/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    var responseObj = {};
    getDBConnection(req.body).then((response) => {
        responseObj.msg = 'Added item to cart';
        responseObj.status = 'Success';
        res.send(JSON.stringify(responseObj));
    }).catch((err) => {
        console.log(err);
        responseObj.msg = 'Error while inserting data';
        responseObj.status = 'Error';
        res.send(JSON.stringify(responseObj));
    });

});


async function getDBConnection(userData) {
    await mongoClient.connect();
    var db = mongoClient.db("shoppingWebApp");
    var collection = db.collection("userCartDetails");
    var reqQuery = {};
    reqQuery[userData.userAccountId] = { $exists: true };

    // sample reqQuery obj will be like - {"user_prasad": {$exists:true}}
    collection.find(reqQuery).toArray().then((response) => {
        if (response.length) { //user entry already existis
            var existingCartDetails = response[0][userData.userAccountId];
            existingCartDetails.push(userData.cartData);
            var newDetails = {};
            newDetails[userData.userAccountId] = existingCartDetails;
            return collection.updateOne(
                { _id: response[0]._id },
                {
                    $set: newDetails
                }
            )
        } else { // new entry
            var newDetails = {};
            newDetails[userData.userAccountId] = [userData.cartData];
            return collection.insertOne(newDetails);
        }
    });


}

module.exports = router;

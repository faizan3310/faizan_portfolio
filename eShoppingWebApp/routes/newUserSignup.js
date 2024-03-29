var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;
var isDuplicateAccountId = false;
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("Process Id for new use signup " + process.pid)

    var responseObj = {};
    bcrypt.hash(req.body.password, 5, function(err, hash) {
        // Store hash in your password DB.
        req.body.password = hash;
        getDBConnection(req.body).then((response) => {
            if (isDuplicateAccountId) {
                responseObj.msg = 'User with same account already exists';
                responseObj.status = 'Error';
            } else {
                responseObj.msg = 'Got signed up successfuly';
                responseObj.status = 'Success';
            }
            res.send(JSON.stringify(responseObj));
        }).catch((err) => {
            responseObj.msg = 'Error while inserting data';
            responseObj.status = 'Error';
            res.send(JSON.stringify(responseObj));
        })
    });
});


async function getDBConnection(userData) {
    isDuplicateAccountId = false;
    await mongoClient.connect();
    var db = mongoClient.db("shoppingWebApp");
    var collection = db.collection("userAccountDetails");
    await collection.find({accountId: userData.accountId}).toArray().then((response) => {
        console.log("response from db")
        console.log(response)
        if (response.length == 1) { // uSER WITH Same account id already exists 
            isDuplicateAccountId = true;

        } else {
            return collection.insertOne(userData);
        }
    });
    
}

module.exports = router;

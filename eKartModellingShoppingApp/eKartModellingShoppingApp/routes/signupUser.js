var express = require('express');
var router = express.Router();
var dbDetails = require("./common/dbUtil");
const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("process ID")
    console.log(process.pid)
    var userAccountDetails = req.body;
    console.log("userAccountDetails")
    console.log(userAccountDetails)
    bcrypt.hash(userAccountDetails.password, 5, function(err, hash) {
        // Store hash in your password DB.
        console.log("the encrypted msg ")
        userAccountDetails.password = hash;

        var responseObj = {};
    
        dbDetails.getDataBaseConnection(userAccountDetails, "userAccountDetails", 'signup').then(() => {
            responseObj.msg = 'Success';
            res.send(JSON.stringify(responseObj));
        }).catch((error) => {
            console.log(error)
            responseObj.msg = 'Error';
            res.send(JSON.stringify(responseObj));
        }).finally(() => {
            dbDetails.closeDbConnection();
        })
    });
    
});

module.exports = router;

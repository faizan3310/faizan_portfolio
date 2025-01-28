var express = require('express');
var router = express.Router();
var dbDetails = require("./common/dbUtil");
var bcrypt = require("bcrypt");

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.session);
    console.log(req.sessionID);
    console.log("process ID")
    console.log(process.pid)
    
    var data = {
        msg: 'Valid'
    };

    var userData = req.body; // POST communication
    dbDetails.getDataBaseConnection(userData, "userAccountDetails", 'validateCred').then((result) => {
        if (result.length) {
            var encryptedPwd = result[0].password;
            var actualPwd = userData.accountPassword;
            bcrypt.compare(actualPwd, encryptedPwd, function(err, response) {
                if (response) {
                    data.msg = 'Valid';
                    req.session.isLoggedInUser = true;
                    req.session.currentUserId = userData.accountId;
                } else {
                    data.msg = 'Invalid';
                    req.session.isLoggedInUser = false;
                }
                res.send(JSON.stringify(data));
            });
        } else {
            data.msg = 'Invalid';
            res.send(JSON.stringify(data));
        }
        
    }).catch((error) => {

    }).finally(() => {
        dbDetails.closeDbConnection();
    });
});

module.exports = router;

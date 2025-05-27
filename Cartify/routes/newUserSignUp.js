var express = require('express');
var router = express.Router();
var  dbUtils = require("./common/dbUtility");
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    console.log(req.body);
    var resObj = {};

    var userAccountDetails = req.body;

    dbUtils.doDbCommunication({accountId: userAccountDetails.accountId}, "findUser", "userAccountDetails").then((result) => {
        console.log('DB response - from userAccountDetails collection');
        console.log(result);
        // console.log(result.length);
        if(result.length == 1) { // account already exist
            // console.log("account exist frm server");
            resObj.msg = "account exist";
            // console.log(resObj);
            res.send(JSON.stringify(resObj));
            return
        } else {
                bcrypt.hash(userAccountDetails.password, 5, function(err, hash) {   
                userAccountDetails.password = hash;
                console.log(userAccountDetails);
                dbUtils.doDbCommunication(userAccountDetails, "createUser", "userAccountDetails").then((result) => {    
                        console.log('DB response - from userAccountDetails collection for signUp');
                        console.log(result);
                        
                        if(result){
                            resObj.msg = "success"
                        }else {
                            resObj.msg = "failed"
                        }
                        res.send(JSON.stringify(resObj));
                    });
                });
            }
    });
    

    


});

module.exports = router;


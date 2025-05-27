var express = require('express');
var router = express.Router();
var  dbUtils = require("./common/dbUtility");
const bcrypt = require('bcrypt');

router.post('/', (request, response) => {
    console.log(request.session);
    console.log(request.body);
    var responseObj = {};  

    dbUtils.doDbCommunication({accountId: request.body.accountId}, "findUser", "userAccountDetails").then((result) => {
        console.log('DB response - from userAccountDetails collection');
        console.log(result);
        console.log(result.length);
        if(result.length == 1) {
             bcrypt.compare(request.body.password, result[0].password, function(err, present) {
                console.log(present);
                if(present == true){
                    responseObj.status = 'Valid credentials'
                    request.session.isUserLoggedIn = true
                } else {
                    responseObj.status = 'Invalid credentials'
                    request.session.isUserLoggedIn = false
                }
                // console.log(responseObj);
                response.send(JSON.stringify(responseObj));
            });
        } else {
                responseObj.status = 'Not Found;'
                // console.log(responseObj);
                response.send(JSON.stringify(responseObj));
        }
    });

}); 

module.exports = router;
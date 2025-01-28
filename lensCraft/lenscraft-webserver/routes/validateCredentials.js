var express = require('express');
var router = express.Router();
var mongoDbRef = require("../routes/common");

// console.log(mongoDbRef);

router.post('/', function(req, res, next) {
    var userInput = req.body;
    console.log(userInput);
    var obj = {msg: 'success'}; 
    var collectionName = userInput.isAdmin[0] === true ? "adminUserDetails" : "endUserDetails"
  
    mongoDbRef.getMongoDbRef(userInput, "find", collectionName).then((response) => {
        console.log("DB response");
        console.log(response);
        if(response.length) {
            res.send(JSON.stringify(obj));
        }else {
            res.send(JSON.stringify({msg: 'Invalid'}));
        }
    }) 
});

module.exports = router;

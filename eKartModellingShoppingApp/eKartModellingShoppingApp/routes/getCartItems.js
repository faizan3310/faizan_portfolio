var express = require('express');
var router = express.Router();
var dbDetails = require("./common/dbUtil");

/* GET home page. */
router.get('/', function(req, res, next) {
    var resObj = [];

    dbDetails.getDataBaseConnection({accountId: req.session.currentUserId}, 'userCartDetails', 'getAddedProducts').then((result) => { 
        console.log("result");
        console.log(result);
        resObj = result;
        res.send(JSON.stringify(resObj));
    });

    
});

module.exports = router;

var express = require('express');
var router = express.Router();
var dbDetails = require('./common/dbUtil')
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("process ID")
    console.log(process.pid)
    
    var userAction = '';
    var productData = [];
    var userQuery = req.query;
    var query = {};
    if (userQuery.category == 'random') {
        userAction = 'getDetailsRandom';
    } else {
        userAction = 'getDetails';
        query = {category: {$in: userQuery.filters.category}}
    }
    dbDetails.getDataBaseConnection(query, "productDetails", userAction).then((result) => {
        productData = result;
        res.send(JSON.stringify(productData));

    }).catch((error) => {
        productData.msg = 'Error while fetching data';
        res.send(JSON.stringify(productData));
    })
    
});

module.exports = router;

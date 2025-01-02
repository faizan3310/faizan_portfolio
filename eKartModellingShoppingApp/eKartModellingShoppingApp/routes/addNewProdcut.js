var express = require('express');
var router = express.Router();
var dbDetails = require("./common/dbUtil");

/* GET home page. */
router.post('/', function(req, res, next) {
    var userData = req.body;
    dbDetails.getDataBaseConnection(userData, 'productDetails', 'addNewProduct').then((result) => {
        var resObj = {msg: 'success'};
        res.send(JSON.stringify(resObj));
    }).catch((error) => {
        // Error while inserting data to db
    })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var sendMail = require("./common/mailCommunication");

/* GET home page. */
router.get('/', function(req, res, next) {
    var resObj = {};
    var userData = req.query;
    sendMail(userData.mailId, "OTP from Support team", {accountid: userData.accountid})
    res.send(JSON.stringify(resObj));
});

module.exports = router;

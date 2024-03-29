var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var resObj = {
        isLoggedin: req.session.isValidUser,
        accountId: req.session.accountId
    };
    res.send(JSON.stringify(resObj));
});

module.exports = router;

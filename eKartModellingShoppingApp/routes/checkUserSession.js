var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("process ID")
    console.log(process.pid)
    var sessionInfo = {
        isLoggedIn: false
    };
    if (req.session && req.session.isLoggedInUser) {
        sessionInfo.isLoggedIn = true;
        sessionInfo.sessionId = req.sessionID;
    }
    res.send(JSON.stringify(sessionInfo));
});

module.exports = router;

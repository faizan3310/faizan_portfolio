var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session);
    res.send(JSON.stringify({isLoggedIn: req.session.isUserLoggedIn}))
});

module.exports = router;

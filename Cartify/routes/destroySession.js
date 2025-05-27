var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy();
    res.send(JSON.stringify({msg: "session destroyed"}));
});

module.exports = router;

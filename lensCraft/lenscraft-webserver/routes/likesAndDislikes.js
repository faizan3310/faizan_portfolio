var express = require('express');
var router = express.Router();
var mongoDbRef = require("../routes/common");

router.get('/', function(req, res, next) {
    // console.log("req obj");
    // console.log(req.query);

    mongoDbRef.getMongoDbRef(req.query, "likesAndDislikes", "photoMetaInfo").then((response) => {
        res.send(JSON.stringify({msg: 'success'}));
    }) 
});

module.exports = router;

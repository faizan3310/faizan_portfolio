var express = require('express');
var router = express.Router();
var mongoDbRef = require("../routes/common");

router.get('/', function(req, res, next) {
    console.log("*** received query from params at frontend");
    console.log(req.query);
    var resObj = {msg: 'success'};

    mongoDbRef.getMongoDbRef(req.query, "findPhoto", "photoMetaInfo").then((response)=>{
        resObj.photoDetails = response;
        res.send(JSON.stringify(resObj));
    })  
});

module.exports = router;

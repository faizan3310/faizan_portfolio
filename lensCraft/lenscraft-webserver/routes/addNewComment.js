var express = require('express');
var router = express.Router();
var mongoDbRef = require("../routes/common");

router.post('/', function(req, res, next) {
    console.log("Frm Server side add comment");
    console.log(req.body);
    var resObj = {};

    mongoDbRef.getMongoDbRef(req.body, "addComments", "photoComments").then((response)=>{
        resObj.msg = 'Success';
        resObj.photoDetails = response;
        res.send(JSON.stringify(resObj));
    }).catch((error) => {
        resObj.msg = 'Error';
        resObj.msg = error;
    })
});

module.exports = router;

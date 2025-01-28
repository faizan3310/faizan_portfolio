var express = require('express');
var router = express.Router();
var mongoDbRef = require("../routes/common");

router.get('/', function(req, res, next) {
    var comments = [];
    // console.log("Received data from frontend");
    // console.log(req.query);

    var userQuery = {photoID: req.query.photoId};
    // console.log("userQuery");
    // console.log(userQuery);
    if(userQuery.photoID){
        mongoDbRef.getMongoDbRef(userQuery, "findPhotoComments", "photoComments").then((response) => {
            // console.log("DB response from getPhoto Comments");
            // console.log(response);
            if(response.length) {
                res.send(JSON.stringify(response));
            }else {
                res.send(JSON.stringify(comments));
            }
        }) 

    }
});

module.exports = router;

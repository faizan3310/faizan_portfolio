var express = require('express');
var router = express.Router();
var dbDetails = require("./common/dbUtil");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
    var productDetails = req.query.productDetails;
    

    dbDetails.getDataBaseConnection({accountId: req.session.currentUserId}, 'userCartDetails', 'checkIsUserAddedItemsToCart').then((result) => {
      if (result.length) { // user already added item to cart
        var dataTobeUpdated = result[0][req.session.currentUserId];
        
        dataTobeUpdated.push(productDetails);
        
        dbDetails.getDataBaseConnection({_id: result[0]._id, dataTobeUpdated: dataTobeUpdated, accountId: req.session.currentUserId}, "userCartDetails", 'updateCart').then((result) => {}).catch(() => {

          res.send(JSON.stringify({msg: 'success'}));
        })
      } else { // first time user adding items to cart
        console.log("result is empty")
        var dataTobeInserted = { };
        dataTobeInserted[req.session.currentUserId] = [productDetails];
        dbDetails.getDataBaseConnection(dataTobeInserted, "userCartDetails", 'addItemTocart').then((result) => {}).catch(() => {
          res.send(JSON.stringify({msg: 'success'}));
        })
      }
    }).catch(() => {
      
    })
   
   
    
});



module.exports = router;

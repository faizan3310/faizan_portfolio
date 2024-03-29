var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var empDetailsList = [
    {
        name: 'Raj',
        age: 20,
        gender: 'Male'
    }
  ];

    var empDetails = {
        name: 'Raj',
        age: 20,
        gender: 'Male'
    };
    // res.send(JSON.stringify(empDetails));
    res.render('empDetails', empDetails);
});

module.exports = router;

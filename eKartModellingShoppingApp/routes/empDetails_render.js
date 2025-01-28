var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var username = "RAJ"
    var empDetails = [
        {
            name: 'Raj',
            age: 20,
            gender: 'Male',
            location: 'Hyderabad',
            image: '/empImages/Images/emp1.png'
        },
        {
            name: 'Teena',
            age: 25,
            gender: 'Female',
            location: 'Hyderabad',
            image: '/empImages/Images/emp2.png'
        },
        {
            name: 'Krishna',
            age: 24,
            gender: 'Male',
            location: 'Mumbai',
            image: '/empImages/Images/emp3.png'
        }
    ];
    //res.send(JSON.stringify(empDetails));

    res.render('empDetails', { details: empDetails });
});

module.exports = router;

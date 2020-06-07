var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {



  fs.readFile('users.json',(err,data) => {

    if (err) throw err;
    var users = JSON.parse(data);

    newUsers = {
        "id": 3,
        "userName" : "asd",
        "userEmail" : "asd@gmail.com"
    }

    users.push(newUsers);

    var saveNewUser = JSON.stringify(users);

    fs.writeFile('users.json', saveNewUser, (err, data =>{

        if (err) throw err;
    }))

    res.send("användare sparad!");

  })


});

module.exports = router;





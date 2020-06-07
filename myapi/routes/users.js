var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {

  fs.readFile('users.json',(err,data) => {

    if (err) throw err;
    var users = JSON.parse(data);

    res.send(users);

  })
});


//lägger till i min user json de som användaren skriver in
router.post('/', function (req, res) {
  console.log(req.body);
  var user = req.body;
  console.log(user);
  fs.readFile('users.json', (err, data) => {
      if (err) throw err;

      var json = JSON.parse(data);
      json.push(user);

      fs.writeFile('users.json', JSON.stringify(json), (err) => {
          if (err) throw err;
      });
  });
  res.sendStatus(200);
});


//logga in function
router.post('/', function(req, res) {
  var loginSuccess = false;
  var user = req.body.user.loginUserName;
  var pass = req.body.user.loginUserPassword;

  fs.readFile('./users.json', (err,data) => {
    if(err) throw err;
    var users = JSON.parse(data);
    users.forEach((userInFile) => {
      if(user === userInFile.userName && pass === userInFile.userPassword) {
        console.log("asd");
          loginSuccess = true;
          if (loginSuccess === true) {
            userLoggedIn = {
              loggedin: true,
              username: userInFile.userName,
              email: userInFile.userEmail,
              newsletter: userInFile.newsletter,
              
            };
            console.log("User logged in successfully!");
      }
      else
      console.log("We couldn't find that user...");
      
   
        
        
        res.send(userLoggedIn);
      }
    })
  })
});








module.exports = router;





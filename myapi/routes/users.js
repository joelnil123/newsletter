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
router.post('/login', function(req, res) {
  console.log("harebrhej");
  var loginSuccess = false;
  var newUsername = req.body.loginUserName;
  var newPassword = req.body.loginUserPassword;
  
  fs.readFile('users.json', (err,data) => {
    
    var users = JSON.parse(data);
    if(err) throw err;

    const [ foundUser ] = users.filter(user => {
      return user.userName === newUsername && user.userPassword === newPassword;
    });
    
    if (foundUser) {
      res.send({
        ...foundUser,
        loggedin: true,
      });
    } else {
      res.status(400).send({
        loggedin: false,
        userName: null,
        userEmail: null,
      });
    }
    // users.forEach((userInFile) => {
    //   if(newUsername === userInFile.userName && newPassword === userInFile.userPassword) {
    //       loginSuccess = true;
    //       console.log("bra");
    //   }
    //       if (loginSuccess === true) {
    //         userLoggedIn = {
    //           loggedin: true,
    //           userName: userInFile.userName,
    //           userEmail: userInFile.userEmail,
    //         };
    //         console.log("yay");
    //         res.send(userLoggedIn);
    //         return
    //       }
    //       else {
    //         console.log("We couldn't find that user...");
    //       }
        // })
  })
});








module.exports = router;





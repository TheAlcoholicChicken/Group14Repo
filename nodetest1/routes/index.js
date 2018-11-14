var express = require('express');
var router = express.Router();
var userID = null;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET Game page. */
router.get('/game', function(req, res) {
  res.render('game', {title: 'Landing Page'});
});

/* GET Userlist Page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('Player');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    })
  })
})

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', {title: 'Add New User' });
});

/* POST to login service */
/* TODO: fix the query */
router.post('/checkuser', function(req, res) {
  var db = req.db;
  var userEmail = req.body.loginemail;
  var userPassword = req.body.loginpw;
  // db.collection("Player").find({$and: [{data: {email: userEmail}}, {data: {password : userPassword}}]}, function(e, docs) {
  db.collection("Player").find({}, {}, function(e, docs) {  
    docs.forEach(element => {
      if(element.data.email == userEmail && element.data.password == userPassword) {
        console.log("yes");
        userID = element.user_id;
      } 
    });
    console.log(userID);
    console.log("==========");
    if(userID != null) {
      console.log("You are now logged in");
      res.redirect("game");
    } else {
      console.log("Login failed");
      res.redirect("index");
    }
  });
});

/* POST to Add User Service*/
router.post('/adduser', function(req, res) {

  //Set our interna; db variable
  var db = req.db

  // Get our form values. 
  var userName = req.body.username;
  var userEmail = req.body.useremail;
  var userPw = req.body.userpw;

  // Set collection
  var userTable = db.get('Player');

  // Generate random user ID
  userID = generateID();
  //Submit to db
  userTable.insert({
    "user_id" : userID,
    "core_app_id" : null,
    "data": {
      "username" : userName,
      "email" : userEmail,
      "password" : userPw,
      "highscore" : 0,
      "best_ranking": 0
    }

  }, function (err, doc) {
    if(err) {
      res.send("There was a problem adding the information to the database");
    }
    else {
      res.redirect("game");
    }
  });
});

function generateID() {
  var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return(S4()+S4()+S4());
};

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
  collection.find()
})

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', {title: 'Add New User' });
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

  //Submit to db
  userTable.insert({
    "user_id" : generateID(),
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
      res.redirect("");
    }
  });
});

function generateID() {

}

module.exports = router;

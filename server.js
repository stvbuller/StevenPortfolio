//setup express
var express = require('express');
var app = express();
//setup body parser
var bodyParser = require('body-parser');
//setup body-parser
var session = require('express-session');
//setup middleware
var middleware = require('./public/jscripts/middleware.js');
//setup logger
var logger = require('morgan');
//setup mongoose
var mongoose = require('mongoose');

//mongoose connestion
var db = 'mongodb://localhost/contacts_db';
mongoose.connect(db);

var PORT = process.env.PORT || 8090;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'abc',
  cookie: {
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: false
}));

var Contact = require("./models/contact");

//serves the image, jscript, and css resoure files
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/jscripts'));
app.use(express.static(__dirname + '/public/css_sheets'));
app.use(express.static(__dirname + '/public/cssClickGame'));

//routes
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/projects', function(req, res) {
  res.sendFile(process.cwd() + "/views/projects.html");
});

app.get('/repos', function(req, res) {
  res.sendFile(process.cwd() + "/views/repos.html");
});

app.get('/blog', function(req, res) {
  res.sendFile(process.cwd() + "/views/blog.html");
});

app.get('/formContactMe', function(req, res) {
  res.sendFile(process.cwd() + "/views/formContactMe.html");
});

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});

app.get('/logout', function(req, res) {
  req.session.isAuthenticated = false;
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/account', middleware.isAuthenticated, function(req, res) {
  res.sendFile(process.cwd() + "/views/account.html");
});

app.get('/account/:userName', function(req, res) {
  res.redirect('/login');
});

app.get('/clickGame', function(req, res) {
  res.sendFile(process.cwd() + "/views/clickGame.html");
});

app.post("/login", function(req, res) {
  if (req.body.email1 === "b@b.com" && req.body.password1 === "b") {
    req.session.isAuthenticated = true;
    var loggedInTime = parseInt(req.body.loginTime);
    if (loggedInTime > 0) {
      req.session.maxAge = loggedInTime * 1000;
    }
    res.redirect('/account');
  } else {
    req.session.isAuthenticated = false;
    res.redirect('/login');
  }
});

app.post('/contactMe', function(req, res) {
  console.log(req.body);
  var contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    organization: req.body.organization,
    email: req.body.email
  });

  contact.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      Contact.find({}).then(function(dbContact) {
        //console.log(" contact me" + dbContact);
        res.json(dbContact);
      });
    }
  });
});

app.listen(PORT, function() {
  console.log("App is listening on port %s", PORT);
});

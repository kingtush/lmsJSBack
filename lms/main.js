var bodyParser = require('body-parser')
var express = require('express');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/json
app.use(bodyParser.json());

app.use(require('./controllers/authorController.js'));

app.use(require('./controllers/publisherController.js'));
app.use(require('./controllers/bookController.js'));

app.listen(3000);
console.log('Server running in port: 3000 ...')
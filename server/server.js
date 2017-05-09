//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//out module from index.js
var index = require('./modules/index');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use( bodyParser.json( ) );

//routes
app.use('/', index);

//globals
var port = process.env.PORT || 3456;

var updateJournal = [];

//spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});

app.get('/journal', function(req,res){
  console.log('inside get journl server');
  res.send(updateJournal);
});


$http({
  method: 'POST',
  url: '/journal'
}).then(function successCallback(response) {
  }, function errorCallback(response) {
  });




//fdsafdsa

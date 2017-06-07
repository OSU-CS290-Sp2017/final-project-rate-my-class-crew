var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var reviewData = require('./reviews');
var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(request, response, next){
  var templateArgs = {
    reviews = reviewData
  };
  response.render('main', templateArgs);
});
app.use(express.static(path.join(__dirname, 'final-project-rate-my-class-crew')));
app.listen(port, function(){
  console.log("listening on port: ", port);
});

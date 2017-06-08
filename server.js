var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var reviewData = require('./reviews');
var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({defaultLayout: 'start'}));
app.set('view engine', 'handlebars');

app.get('/', function(request, response, next){
  response.render('home');
});

app.get('/trending', function(request, response, next){
  console.log(reviewData);
  var templateArgs = {
    class: reviewData
  };
  response.render('main', templateArgs);
});

app.get('/:classID', function(request, response, next){
    var classID = request.params.classID;
    var classData = reviewData[classID];
    console.log(classData);
    if(classData){
      var templateArgs = {
        classID: classID,
        reviews: [classData]
      }
      response.render('individualClass', templateArgs);
    }
    else{
      next();
    }
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function(){
  console.log("listening on port: ", port);
});

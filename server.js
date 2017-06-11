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

app.get('/bacc-core/:category', function (req, res, next) {
  var category = req.params.category;
  var categoryData = reviewData[category];
  if (categoryData) {
    var templateArgs = {
      className: categoryData.className,
      teacher: categoryData.teacher,
	  grade: categoryData.grade,
      rating: categoryData.rating,
      comments: categoryData.comments
    }
    res.render('main', templateArgs);
  } else {
    next();
  }
});



app.get('/:classID', function(request, response, next){
    var classID = request.params.classID;
    var classData = reviewData[classID];
    if(classData){
      var templateArgs = {
        classID: classID,
        reviews: classData.reviews
      }
      response.render('individualClass', templateArgs);
    }
    else{
      next();
    }
});

app.use(express.static(path.join(__dirname, 'public')));

 app.get('/*', function(req, res){
	res.status(404).render('404Page');
});
app.listen(port, function(){
  console.log("listening on port: ", port);
});

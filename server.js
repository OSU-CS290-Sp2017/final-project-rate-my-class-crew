var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');


var reviewData = require('./reviews');
var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({defaultLayout: 'start'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function(request, response, next){
  response.render('home');
});

app.get('/all-reviews', function(request, response, next){
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
    if(classID == "DPD"){
      var classT = "Difference, Power, Discrimination";
    }
    else if(classID == "BS"){
      var classT = "Biological Science";
    }
    else if(classID == "CD"){
      var classT = "Cultural Diversity";
    }
    else if(classID == "LA"){
      var classT = "Literature and the Arts";
    }
    else if(classID == "PS"){
      var classT = "Physical Science";
    }
    else if(classID == "SPI"){
      var classT = "Social Processes and Institutions";
    }
    else if(classID == "WC"){
      var classT = "Western Culture";
    }
    else if(classID == "STS"){
      var classT = "Science, Technology, and Society";
    }
    else if(classID == "CGI"){
      var classT = "Contemporary Global Issues";
    }
    if(classData){

      var templateArgs = {
        classID: classT,
        reviews: classData.reviews
      }
      response.render('individualClass', templateArgs);
    }
    else{
      next();
    }
});

//store new post info
app.post('/:classType/createReview', function (req, res, next) {

  var review = reviewData[req.params.classType];
  if (review) {
    if (req.body) {
      // var photo = {
      //   url: req.body.url,
      //   caption: req.body.caption
      // };
      var temp = {
        className: req.body.className,
        teacher: req.body.teacher,
        grade:req.body.grade,
        rating:req.body.rating,
        comments:req.body.comments,
        tags: req.body.tags
      }

      review.reviews = review.reviews || [];

      review.reviews.push(temp);
      fs.writeFile('reviews.json', JSON.stringify(reviewData), function (err) {
        if (err) {
          res.status(500).send("Unable to save post to \"database\".");
        } else {
          res.status(200).send();
        }
      });

    }
    else {
      res.status(400).send("You're missing a field.");
    }

  } else {
    console.log('review variable didnt work next middle ware')
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

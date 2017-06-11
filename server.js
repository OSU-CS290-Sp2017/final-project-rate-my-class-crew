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

//store new post info
app.post('/:classType/createReview', function (req, res, next) {
  console.log("sever post function");
  var review = reviewData[req.params.classType];
  console.log("made variable");
  if (review) {
    console.log("in first conditional");
    if (req.body) {
      console.log("in second conditional");
      // var photo = {
      //   url: req.body.url,
      //   caption: req.body.caption
      // };
      var temp = {
        className: req.body.className,
        teacher: req.body.teacher,
        grade:req.body.grade,
        rating:req.body.rating,
        comments:req.body.comments
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

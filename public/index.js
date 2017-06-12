
//buttons
var newReviewButton = document.getElementById('create-review-button');
var exitButton = document.getElementsByClassName('modal-close-button');
var cancelButton = document.getElementsByClassName('modal-cancel-button');
var acceptButton  = document.getElementsByClassName('modal-accept-button');
//modal stuff
var modal = document.getElementById('create-review-modal');
var modalBackdrop = document.getElementById('modal-backdrop');
//modal entry fields
var classCode =document.getElementById('class-code-input');
var teacher = document.getElementById('teacher-input');
var grade = document.getElementById('grade-received-input');
var starRating;//no clue how to do starRating yet
var otherText = document.getElementById('review-text-input');

//star ratings
 var oneStar=document.getElementById("ratings-1");
 var twoStars=document.getElementById("ratings-2");
 var threeStars=document.getElementById("ratings-3");
 var fourStars=document.getElementById("ratings-4");
 var fiveStars=document.getElementById("ratings-5");
 var stars;

function openModal(){
  modal.classList.remove("hidden");
  modalBackdrop.classList.remove("hidden");
}

function closeModal(){
  clearModalFields();
  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
}

function generateNewReviewElem(classTitle, prof, grade, comment, rating, tags){
  var reviewTemplate = Handlebars.templates.review;
  var reviewData = {
    className: classTitle,
    teacher: prof,
	  rating: rating,
    grade: grade,
    comments: comment,
    tags: tags
  }
  return reviewTemplate(reviewData);
}
/*well thid doesn't work...*/
function getCoreIdFromLocation(){
  var pathComponents = window.location.pathname.split('/');
  if (pathComponents[0] !== '') {
    return null;
  }
  return pathComponents[1];
}

function getTagList(list){

  var retList=[];
  for(var i=0; i< list.length; i++){
    if (list[i].classList.contains('grader')){
      retList[i]="Tough Grader";
    }
    if (list[i].classList.contains('homework')){
      retList[i]="Lots of Homework";
    }
    if (list[i].classList.contains('participation')){
      retList[i]="Participation Matters";
    }
    if (list[i].classList.contains('lecture')){
      retList[i]="Lecture Heavy";
    }
    if (list[i].classList.contains('papers')){
      retList[i]="Lots of Papers";
    }
    if (list[i].classList.contains('projects')){
      retList[i]="Group Projects";
    }
    if (list[i].classList.contains('reading')){
      retList[i]="Lots of Reading";
    }
  }

  return (retList);
}

function addReview(){
    //holdText.textContent = newText.value;
    //holdAtt.text = userAtt.value;
    var coreID = getCoreIdFromLocation();
    if (classCode.value && teacher.value && grade.value && stars){
      var temp = [];
      for (var i=0; i<stars; i++){
        temp[i]=i;
      }

      var tempList=document.getElementsByClassName('tag-clicked');
      var tempTags= getTagList(tempList);

      storeClassReview(coreID, classCode.value, teacher.value, temp, grade.value, otherText.value, tempTags, function (err){

          var newReviewElem = generateNewReviewElem(classCode.value, teacher.value, grade.value, otherText.value, temp, tempTags);
          var reviewContainer = document.querySelector('.review-container');
          reviewContainer.insertAdjacentHTML('beforeend', newReviewElem);
          closeModal();
        });
    }
    else{
      alert("You left something blank ya ding dong");
    }

}
function storeClassReview(classID, className, teacher, rating, grade, comments, tags, callback) {

  var postURL = "/" + classID + "/createReview";
  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postURL);
  postRequest.setRequestHeader('Content-Type', 'application/json');

  postRequest.addEventListener('load', function (event) {
    var error;
    if (event.target.status !== 200) {
      error = event.target.response;
    }
    callback(error);
  });

  var postBody = {
    className: className,
    teacher: teacher,
    rating: rating,
    grade: grade,
    comments: comments,
    tags: tags
  };
  postRequest.send(JSON.stringify(postBody));

}
function clearModalFields(){
  classCode.value = '';
   teacher.value = '';
   grade.value = '';
  clearSelectedRating();
  otherText.value = '';
  clearSelectedTags();

}
function clearSelectedRating(){
  var clickedList = document.getElementsByClassName('star-clicked');
  for(var i=clickedList.length; i>0; i--){
    clickedList[i-1].classList.remove('star-clicked');
  }
}
function clearSelectedTags(){
  var clickedList= document.getElementsByClassName('tag-clicked');
  for(var i=clickedList.length; i>0; i--){
    clickedList[i-1].classList.remove('tag-clicked');
  }
}
/**************event listeners*****************/

newReviewButton.addEventListener('click', openModal);
//both exitBut and cancelBut have same length
for (var i = 0; i < exitButton.length; i++) {
  exitButton[i].addEventListener('click', closeModal);
  cancelButton[i].addEventListener('click', closeModal);
}
acceptButton[0].addEventListener('click', addReview);




//-----------Search Bar-------------------//
var searchQuery = document.getElementById('navbar-search-input');
var checkReview = document.getElementsByClassName('review-content');
var searchButton = document.getElementById('navbar-search-button');
var searchInput= document.getElementById('navbar-search-input');

function searchReviews(){
  for(var i =0; i<checkReview.length; i++){
       if(checkReview[i].parentNode.classList.contains('hidden')){
         if(checkReview[i].textContent.toLowerCase().includes(searchQuery.value.toLowerCase())){
           checkReview[i].parentNode.classList.remove("hidden");
         }
       }
       if(!checkReview[i].textContent.toLowerCase().includes(searchQuery.value.toLowerCase())){
              checkReview[i].parentNode.classList.add('hidden');
        }
  }
}

searchButton.addEventListener('click', searchReviews);
searchInput.addEventListener('input', searchReviews);


//---------modal stars-------------------------
 oneStar.addEventListener('click', function(){
 	stars=1;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
 });

 twoStars.addEventListener('click', function(){
 	stars=2;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
 });

 threeStars.addEventListener('click', function(){
 	stars=3;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
  threeStars.classList.add('star-clicked');
 });

 fourStars.addEventListener('click', function(){
 	stars=4;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
  threeStars.classList.add('star-clicked');
  fourStars.classList.add('star-clicked');
 });

 fiveStars.addEventListener('click', function(){
 	stars=5;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
  threeStars.classList.add('star-clicked');
  fourStars.classList.add('star-clicked');
  fiveStars.classList.add('star-clicked');
 });




//hides add review button on all reviews page
var pathname = location.pathname;

if(pathname=="/trending"){
  newReviewButton.classList.add('hidden');
}

//modal tags

var tags = document.getElementsByClassName('tags');

for(var i=0; i< tags.length; i++){
  tagListener(tags[i]);
}

function tagListener(curr){
  curr.addEventListener('click', function(){
    if (curr.classList.contains('tag-clicked')){
      curr.classList.remove('tag-clicked');
    }
    else{
      curr.classList.add('tag-clicked');
    }
  });
}


// tags[0].addEventListener('click', function(){
//   if(tags[0].classList.contains('tag-clicked')){
//     tags[0].classList.remove('tag-clicked')
//   }
//   else{
//     tags[0].classList.add('tag-clicked');
//   }
// });
// tags[1].addEventListener('click', function(){
//   if(tags[1].classList.contains('tag-clicked')){
//     tags[1].classList.remove('tag-clicked')
//   }
//   else{
//     tags[1].classList.add('tag-clicked');
//   }
// });
// tags[2].addEventListener('click', function(){
//   if(tags[2].classList.contains('tag-clicked')){
//     tags[2].classList.remove('tag-clicked')
//   }
//   else{
//     tags[2].classList.add('tag-clicked');
//   }
// });
// tags[3].addEventListener('click', function(){
//   if(tags[3].classList.contains('tag-clicked')){
//     tags[3].classList.remove('tag-clicked')
//   }
//   else{
//     tags[3].classList.add('tag-clicked');
//   }
// });
// tags[4].addEventListener('click', function(){
//   if(tags[4].classList.contains('tag-clicked')){
//     tags[4].classList.remove('tag-clicked')
//   }
//   else{
//     tags[4].classList.add('tag-clicked');
//   }
// });
// tags[5].addEventListener('click', function(){
//   if(tags[5].classList.contains('tag-clicked')){
//     tags[5].classList.remove('tag-clicked')
//   }
//   else{
//     tags[5].classList.add('tag-clicked');
//   }
// });
// tags[6].addEventListener('click', function(){
//   if(tags[6].classList.contains('tag-clicked')){
//     tags[6].classList.remove('tag-clicked')
//   }
//   else{
//     tags[6].classList.add('tag-clicked');
//   }
// });

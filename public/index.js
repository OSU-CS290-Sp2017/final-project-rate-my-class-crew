
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
  console.log('opening modal');
  modal.classList.remove("hidden");
  modalBackdrop.classList.remove("hidden");
}

function closeModal(){
  console.log('closing modal');
  clearModalFields();
  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
}

function generateNewReviewElem(classTitle, prof, grade, comment, rating){
  var reviewTemplate = Handlebars.templates.review;
  var reviewData = {
    className: classTitle,
    teacher: prof,
	  rating: rating,
    grade: grade,
    comments: comment
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


function addReview(){
    //holdText.textContent = newText.value;
    //holdAtt.text = userAtt.value;
    var coreID = getCoreIdFromLocation();
    if (classCode.value && teacher.value && grade.value && stars){
      var temp = [];
      for (var i=0; i<stars; i++){
        temp[i]=i;
      }
      storeClassReview(coreID, classCode.value, teacher.value, temp, grade.value, otherText.value, function (err){



          var newReviewElem = generateNewReviewElem(classCode.value, teacher.value, grade.value, otherText.value, temp);
          var reviewContainer = document.querySelector('.review-container');
          reviewContainer.insertAdjacentHTML('beforeend', newReviewElem);
          closeModal();
        });
      }
    else{
      alert("You left something blank ya ding dong");
    }

}




function storeClassReview(classID, className, teacher, rating, grade, comments, callback) {
  console.log("storeClassReview function");
  var postURL = "/" + classID + "/createReview";

  console.log("url ", postURL);

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
    comments: comments
  };
  postRequest.send(JSON.stringify(postBody));

}



function clearModalFields(){
  classCode.value = '';
   teacher.value = '';
   grade.value = '';
  clearSelectedRating();
  otherText.value = '';

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

function clearSelectedRating(){
  var clickedList = document.getElementsByClassName('star-clicked');
  for(var i=clickedList.length; i>0; i--){
    console.log("removing class");
    clickedList[i-1].classList.remove('star-clicked');
  }
}


 oneStar.addEventListener('click', function(){
 	stars=1;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
 	console.log("Number of stars selected ", stars);
 });

 twoStars.addEventListener('click', function(){
 	stars=2;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
  console.log("Number of stars selected ", stars);
 });

 threeStars.addEventListener('click', function(){
 	stars=3;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
  threeStars.classList.add('star-clicked');
 	console.log("Number of stars selected ", stars);
 });

 fourStars.addEventListener('click', function(){
 	stars=4;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
  threeStars.classList.add('star-clicked');
  fourStars.classList.add('star-clicked');
	console.log("Number of stars selected ", stars);
 });

 fiveStars.addEventListener('click', function(){
 	stars=5;
  clearSelectedRating();
  oneStar.classList.add('star-clicked');
  twoStars.classList.add('star-clicked');
  threeStars.classList.add('star-clicked');
  fourStars.classList.add('star-clicked');
  fiveStars.classList.add('star-clicked');
 	console.log("Number of stars selected ", stars);
 });

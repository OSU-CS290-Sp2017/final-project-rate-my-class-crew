
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
function addReview(){
    //holdText.textContent = newText.value;
    //holdAtt.text = userAtt.value;
    if (classCode.value && teacher.value && grade.value && stars){
      var temp = [];
      for (var i=0; i<stars; i++){
        temp[i]=i;
      }
      var newReviewElem = generateNewReviewElem(classCode.value, teacher.value, grade.value, otherText.value, temp);
      var reviewContainer = document.querySelector('.review-container');
      reviewContainer.insertAdjacentHTML('beforeend', newReviewElem);
      closeModal();
    }
    else{
      alert("You left something blank ya ding dong");
    }

}

function clearModalFields(){
  classCode.value = '';
   teacher.value = '';
   grade.value = '';
  //var starRating;//no clue how to do starRating yet
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




 oneStar.addEventListener('click', function(){
 	stars=1;
 	console.log("Number of stars selected ", stars);
 });

 twoStars.addEventListener('click', function(){
 	stars=2;
 	console.log("Number of stars selected ", stars);
 });

 threeStars.addEventListener('click', function(){
 	stars=3;
 	console.log("Number of stars selected ", stars);
 });

 fourStars.addEventListener('click', function(){
 	stars=4;
	console.log("Number of stars selected ", stars);
 });

 fiveStars.addEventListener('click', function(){
 	stars=5;
 	console.log("Number of stars selected ", stars);
 });

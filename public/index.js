
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
// var oneStar=document.getElementById("ratings-1");
// var twoStars=document.getElementById("ratings-2");
// var threeStars=document.getElementById("ratings-3");
// var fourStars=document.getElementById("ratings-4");
// var fiveStars=document.getElementById("ratings-5");
// var stars;
//
// oneStar.addEventListener('click', function(){
// 	stars=1;
// 	console.log("Number of stars selected ", stars);
// });
//
// twoStars.addEventListener('click', function(){
// 	stars=2;
// 	console.log("Number of stars selected ", stars);
// });
//
// threeStars.addEventListener('click', function(){
// 	stars=3;
// 	console.log("Number of stars selected ", stars);
// });
//
// fourStars.addEventListener('click', function(){
// 	stars=4;
// 	console.log("Number of stars selected ", stars);
// });
//
// fiveStars.addEventListener('click', function(){
// 	stars=5;
// 	console.log("Number of stars selected ", stars);
// });


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

function generateNewReviewElem(classTitle, prof, grade, comment){
  var reviewTemplate = Handlebars.templates.review;
  var reviewData = {
    className: classTitle,
    teacher: prof,
    grade: grade,
    comments: comment
  }
  return reviewTemplate(reviewData);
}
/*well thid doesn't work...*/
function addReview(){
    //holdText.textContent = newText.value;
    //holdAtt.text = userAtt.value;
    if (classCode.value && teacher.value && grade.value){
      var newReviewElem = generateNewReviewElem(classCode.value, teacher.value, grade.value, otherText.value);
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
// var checkReview = document.getElementsByClassName("review-content");
// var searchText = document.getElementById('navbar-search-input');
// var typing = document.getElementById('navbar-search-input');
// //var searchBut = document.getElementById('navbar-search-button');
//
// //searchBut.addEventListener('click', fucntion(){
// typing.addEventListener('input', function(){
//   for(var i =0; i<checkReview.length; i++){
//     if(checkReview[i].parentNode.classList.contains('hidden')){
//       if(checkReview[i].textContent.toLowerCase().includes(searchText.value.toLowerCase())){
//         checkReview[i].parentNode.classList.remove("hidden");
//       }
//     }
//     if(!checkReview[i].textContent.toLowerCase().includes(searchText.value.toLowerCase())){
//       checkReview[i].parentNode.classList.add('hidden');
//     }
//   }
// });


/*
// hess's stuff from assignment 5

// /*
//  * Perform a search over over all the reviews based on the search query the user
//  * entered in the navbar.  Only display reviews that match the search query.
//  * Display all reviews if the search query is empty.
//  */
// function doreviewSearch() {
//
//   // Grab the search query, make sure it's not null, and do some preproessing.
//   var searchQuery = document.getElementById('navbar-search-input').value;
//   searchQuery = searchQuery ? searchQuery.trim().toLowerCase() : '';
//
//   // Remove all reviews from the review container temporarily.
//   var reviewContainer = document.querySelector('.review-container');
//   while (reviewContainer.lastChild) {
//     reviewContainer.removeChild(reviewContainer.lastChild);
//   }
//
//   /*
//    * Loop through the collection of all reviews and add reviews back into the DOM
//    * if they contain the search term or if the search term is empty.
//    */
//   allreviewElems.forEach(function (reviewElem) {
//     if (!searchQuery || reviewElem.textContent.toLowerCase().indexOf(searchQuery) !== -1) {
//       reviewContainer.appendChild(reviewElem);
//     }
//   });
//
// }
//
//
// /*
//  * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
//  */
// window.addEventListener('DOMContentLoaded', function () {
//
//   // Remember all of the existing reviews in an array that we can use for search.
//   var reviewElemsCollection = document.getElementsByClassName('review');
//   for (var i = 0; i < reviewElemsCollection.length; i++) {
//     allreviewElems.push(reviewElemsCollection[i]);
//   }
//
//   var createreviewButton = document.getElementById('create-review-button');
//   createreviewButton.addEventListener('click', showCreatereviewModal);
//
//   var modalCloseButton = document.querySelector('#create-review-modal .modal-close-button');
//   modalCloseButton.addEventListener('click', closeCreatereviewModal);
//
//   var modalCancalButton = document.querySelector('#create-review-modal .modal-cancel-button');
//   modalCancalButton.addEventListener('click', closeCreatereviewModal);
//
//   var modalAcceptButton = document.querySelector('#create-review-modal .modal-accept-button');
//   modalAcceptButton.addEventListener('click', insertNewreview);
//
//   var searchButton = document.getElementById('navbar-search-button');
//   searchButton.addEventListener('click', doreviewSearch);
//
//   var searchInput = document.getElementById('navbar-search-input');
//   searchInput.addEventListener('input', doreviewSearch);
//
// });








// //erin's server stuff
// //buttons
// var newReviewButton = document.getElementsById('create-review-button');
// //modal variables
// var modalBackdrop = document.getElementsById('modal-backdrop');
// var createReviewModal = document.getElementsById('create-review-modal');
// //fields within modal
// var classCode = document.getElementsById('class-code-input');
// var teacher = document.getElementsById('teacher-input');
// var grade = document.getElementsById('grade-recieved-input');
// var
//
// //function "unhides" modal and modal backdrop
// newReviewButton.addEventListener('click', function(){
//   modalBackdrop.classList.remove('hidden');
//   createReviewModal.classList.remove('hidden');
// });
//
// function hideModal(){
//   modalBackdrop.classList.add('hidden');
//   createReviewModal.classList.add('hidden');
//
//   //call to clear all stuff in modal on close
//   clearModalFields();
// }
//
// function clearModalFields(){
//   var clearArray = document.getElementsByClassName('review-input-element');
//   for(var i=0, i<clearArray.length, i++){
//     if(clearArray[i].querySelector('input, text')){
//       var input = clearArray[i].querySelector('input, text');
//       input.value = '';
//     }
//     else if (clearArray[i].querySelector('input, textarea')) {
//       var input = clearArray[i].querySelector('input, textarea')
//       input.value = '';
//     }
//     else{
//
//     }
//   }
// }

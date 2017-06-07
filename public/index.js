//--------------adding new twit to DOM--------------//

var newPostButton = document.getElementById('create-twit-button');
var modal = document.getElementById('create-twit-modal');
var exitButton = document.getElementsByClassName('modal-close-button');
var cancelButton = document.getElementsByClassName('modal-cancel-button');
var acceptButtton  = document.getElementsByClassName('modal-accept-button');
var modalBackdrop = document.getElementById('modal-backdrop');
var container = document.getElementsByClassName('twit-container');
var newText = document.getElementById('twit-text-input');
var userText = document.getElementById('twit-input-element');
var userAtt = document.getElementById('twit-attribution-input');
var holdText = document.getElementById('twit-text-input');
var holdAtt = document.getElementById('twit-attribution-input');
//var array = [];


function openModal(){
  modal.classList.remove("hidden");
  modalBackdrop.classList.remove("hidden");
}

function closeModal(){
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
}

// function generateNewPostElem(classTitle, prof, grade, comment, attribute){
//   var reviewTemplate = Handlebars.templates.review;
//   var reviewData = {
//     className: classTitle,
//     teacher: prof,
//     grade: grade,
//     comments: comment,
//     name: attribute
//   }
//   return reviewTemplate(reviewData);
// }
//
// function addReview(){
//     //holdText.textContent = newText.value;
//     //holdAtt.text = userAtt.value;
//     var classCode =document.getElementById('class-code-input').value;
//     var teacher = document.getElementById('teacher-input').value;
//     var grade = document.getElementById('grade-recieved-input').value;
// //no clue how to do this part yet
// //  var starRating =
//     var otherText = document.getElementById('twit-text-input').value;
//     var attribute = document.getElementsByClassName('twit-attribution').text;
//
//     if (classCode && teacher && grade && otherText && attribute){
//       var newPostElem = generateNewPostElem(classCode, teacher, grade, otherText, attribute);
//       var reviewContainer = document.querySelector('.review-container');
//       reviewContainer.appendChild(newPostElem);
//       closeModal();
//     }
//     else{
//       alert("You left something blank ya ding dong");
//     }
//
// }

//**************event listeners*****************

newPostButton.addEventListener('click',
//both exitBut and cancelBut have same length
for (var i = 0; i < exitBut.length; i++) {
  exitButton[i].addEventListener('click', exit);
  cancelButton[i].addEventListener('click', exit);
}
acceptButton[0].addEventListener('click', addReview);

function addToDom(){

  var newTwit = document.createElement("article");
  var newDivIcon = document.createElement("div");
  var newI = document.createElement("i");
  var newDivText = document.createElement("div");
  var newPText = document.createElement("p");
  var newPAtt = document.createElement("p");
  var newALink = document.createElement("a");

  newTwit.classList.add("twit");
  newDivIcon.classList.add("twit-icon");
  newI.classList.add("fa");
  newI.classList.add("fa-bullhorn");
  newDivText.classList.add("twit-content");
  newPText.classList.add("twit-text");
  newPAtt.classList.add("twit-attribution");
  newALink.href = '#';

  container[0].appendChild(newTwit);
  newTwit.appendChild(newDivIcon);
  newDivIcon.appendChild(newI);
  newTwit.appendChild(newDivText);
  newDivText.appendChild(newPText);
  newDivText.appendChild(newPAtt);
  newPAtt.appendChild(newALink);

  newPText.textContent = holdText.value;
  newALink.text = holdAtt.value;
  console.log(holdAtt.value);
  console.log(holdText.value);
  newText.value = "";
  userAtt.value = "";
}

//-----------Search Bar-------------------//

var checkTwit = document.getElementsByClassName("twit-content");
var searchText = document.getElementById('navbar-search-input');
var typing = document.getElementById('navbar-search-input');
//var searchBut = document.getElementById('navbar-search-button');

//searchBut.addEventListener('click', fucntion(){
typing.addEventListener('input', function(){
  for(var i =0; i<checkTwit.length; i++){
    if(checkTwit[i].parentNode.classList.contains('hidden')){
      if(checkTwit[i].textContent.toLowerCase().includes(searchText.value.toLowerCase())){
        checkTwit[i].parentNode.classList.remove("hidden");
      }
      else {
        //stay hidden
      }
    }
    if(!checkTwit[i].textContent.toLowerCase().includes(searchText.value.toLowerCase())){
      checkTwit[i].parentNode.classList.add('hidden');
    }
  }
});


/*
// hess's stuff from assignment 5
//
// var allTwitElems = [];
//
// /*
//  * This function shows the modal to create a twit when the "create twit"
//  * button is clicked.
//  */
// function showCreateTwitModal() {
//
//   var modalBackdrop = document.getElementById('modal-backdrop');
//   var createTwitModal = document.getElementById('create-twit-modal');
//
//   // Show the modal and its backdrop.
//   modalBackdrop.classList.remove('hidden');
//   createTwitModal.classList.remove('hidden');
//
// }
//
// /*
//  * This function hides the modal to create a twit and clears any existing
//  * values from the input fields whenever any of the modal close actions are
//  * taken.
//  */
// function closeCreateTwitModal() {
//
//   var modalBackdrop = document.getElementById('modal-backdrop');
//   var createTwitModal = document.getElementById('create-twit-modal');
//
//   // Hide the modal and its backdrop.
//   modalBackdrop.classList.add('hidden');
//   createTwitModal.classList.add('hidden');
//
//   clearTwitInputValues();
//
// }
//
// /*
//  * This function clears any value present in any of the twit input elements.
//  */
// function clearTwitInputValues() {
//
//   var twitInputElems = document.getElementsByClassName('twit-input-element');
//   for (var i = 0; i < twitInputElems.length; i++) {
//     var input = twitInputElems[i].querySelector('input, textarea');
//     input.value = '';
//   }
//
// }
//
// /*
//  * Create and return a new HTML element representing a single twit, given the
//  * twit text and twit attribution as arguments.  The twit element has the
//  * following structure:
//  *
//  * <article class="twit">
//  *   <div class="twit-icon">
//  *     <i class="fa fa-bullhorn"></i>
//  *   </div>
//  *   <div class="twit-content">
//  *     <p class="twit-text">
//  *       {{twitText}}
//  *     </p>
//  *     <p class="twit-attribution">
//  *       <a href="#">{{twitAttribution}}</a>
//  *     </p>
//  *   </div>
//  * </article>
//  */
// function generateNewTwitElem(twitText, twitAuthor) {
//
//   var twitTemplate = Handlebars.templates.twit;
//   var twitData = {
//     text: twitText,
//     author: twitAuthor
//   };
//
//   return twitTemplate(twitData);
//
// }
//
// /*
//  * This function takes user input values from the "create twit" modal,
//  * generates a new twit using them, and inserts that twit into the document.
//  */
// function insertNewTwit() {
//
//   var twitText = document.getElementById('twit-text-input').value;
//   var twitAttribution = document.getElementById('twit-attribution-input').value;
//
//   /*
//    * Only generate the new twit if the user supplied values for both the twit
//    * text and the twit attribution.  Give them an alert if they didn't.
//    */
//   if (twitText && twitAttribution) {
//
//       var newTwitElem = generateNewTwitElem(twitText, twitAttribution);
//       var twitContainer = document.querySelector('.twit-container');
//       twitContainer.appendChild(newTwitElem);
//       allTwitElems.push(newTwitElem);
//
//       closeCreateTwitModal();
//
//   } else {
//
//     alert('You must specify both the text and the author of the twit!');
//
//   }
// }
//
// /*
//  * Perform a search over over all the twits based on the search query the user
//  * entered in the navbar.  Only display twits that match the search query.
//  * Display all twits if the search query is empty.
//  */
// function doTwitSearch() {
//
//   // Grab the search query, make sure it's not null, and do some preproessing.
//   var searchQuery = document.getElementById('navbar-search-input').value;
//   searchQuery = searchQuery ? searchQuery.trim().toLowerCase() : '';
//
//   // Remove all twits from the twit container temporarily.
//   var twitContainer = document.querySelector('.twit-container');
//   while (twitContainer.lastChild) {
//     twitContainer.removeChild(twitContainer.lastChild);
//   }
//
//   /*
//    * Loop through the collection of all twits and add twits back into the DOM
//    * if they contain the search term or if the search term is empty.
//    */
//   allTwitElems.forEach(function (twitElem) {
//     if (!searchQuery || twitElem.textContent.toLowerCase().indexOf(searchQuery) !== -1) {
//       twitContainer.appendChild(twitElem);
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
//   // Remember all of the existing twits in an array that we can use for search.
//   var twitElemsCollection = document.getElementsByClassName('twit');
//   for (var i = 0; i < twitElemsCollection.length; i++) {
//     allTwitElems.push(twitElemsCollection[i]);
//   }
//
//   var createTwitButton = document.getElementById('create-twit-button');
//   createTwitButton.addEventListener('click', showCreateTwitModal);
//
//   var modalCloseButton = document.querySelector('#create-twit-modal .modal-close-button');
//   modalCloseButton.addEventListener('click', closeCreateTwitModal);
//
//   var modalCancalButton = document.querySelector('#create-twit-modal .modal-cancel-button');
//   modalCancalButton.addEventListener('click', closeCreateTwitModal);
//
//   var modalAcceptButton = document.querySelector('#create-twit-modal .modal-accept-button');
//   modalAcceptButton.addEventListener('click', insertNewTwit);
//
//   var searchButton = document.getElementById('navbar-search-button');
//   searchButton.addEventListener('click', doTwitSearch);
//
//   var searchInput = document.getElementById('navbar-search-input');
//   searchInput.addEventListener('input', doTwitSearch);
//
// });








// //erin's server stuff
// //buttons
// var newReviewButton = document.getElementsById('create-twit-button');
// //modal variables
// var modalBackdrop = document.getElementsById('modal-backdrop');
// var createReviewModal = document.getElementsById('create-twit-modal');
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
//   var clearArray = document.getElementsByClassName('twit-input-element');
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

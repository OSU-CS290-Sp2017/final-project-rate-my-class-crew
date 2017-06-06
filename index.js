//--------------adding new twit to DOM--------------//

var newTwitButton = document.getElementById('create-twit-button');
var modal = document.getElementById('create-twit-modal');
var exitBut = document.getElementsByClassName('modal-close-button');
var cancelBut = document.getElementsByClassName('modal-cancel-button');
var addBut  = document.getElementsByClassName('modal-accept-button');
var backdrop = document.getElementById('modal-backdrop');
var container = document.getElementsByClassName('twit-container');
var newText = document.getElementById('twit-text-input');
var userText = document.getElementById('twit-input-element');
var userAtt = document.getElementById('twit-attribution-input');
var holdText = document.getElementById('twit-text-input');
var holdAtt = document.getElementById('twit-attribution-input');
var array = [];
var blank;

newTwitButton.addEventListener('click', function(){
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
});

function exit(){
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
}
//both exitBut and cancelBut have same length
for (var i = 0; i < exitBut.length; i++) {
  exitBut[i].addEventListener('click', exit);
  cancelBut[i].addEventListener('click', exit);
}


addBut[0].addEventListener('click', function(){
    holdText.textContent = newText.value;
    holdAtt.text = userAtt.value;

    if(holdText.value == "" || holdAtt.value == ""){
      alert("You left something blank ya ding dong");
    }
    else {
      exit();
      addToDom();
    }
});

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

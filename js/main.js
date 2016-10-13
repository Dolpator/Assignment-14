// GO!

// TASK 1 -- Show/Hide Nav

var buttonEl = document.querySelector('.menu-button');
//buttonEl.classList.add('.menu-button')

var removeNavBar = function(){
var navMenu = document.querySelector('.nav-menu');
//console.log([navMenu])

   if(buttonEl.innerHTML === "Push Me"){
      navMenu.style.opacity =  "0";
      buttonEl.innHTML = "GoodBye";
   }else{
      navMenu.style.opacity = "1";
      buttonEl.innerHTML = "Push ME";
   }
}
   //if(document.querySelector(".nav-menu").styles = "opacity: 1"){
   //   document.querySelector(".nav-menu").styles = "opacity: 0";
buttonEl.addEventListener('click', removeNavBar)

// TASK 2 -- Select an Icon
var selectIcon = document.querySelectorAll('.wish-list div');
//console.log("hello")
var toggleIcon = function(evt){
//console.log(evt.currentTarget)
   var eventTarget = evt.currentTarget;
//console.log(eventTarget)
     if (eventTarget.classList.contains("selected")){
         eventTarget.classList.remove("selected");
     }else{
         eventTarget.classList.add("selected");
   }
}
   for (var i = 0; i < selectIcon.length; i++){
//console.log(selectIcon[i])
      selectIcon[i].addEventListener('click', toggleIcon)
   }


// TASK 3 -- Move Item From List to List

var goodStanding = document.querySelector('.good-standing-list')
//console.log(goodStanding)
var onProbation = document.querySelector('.probation-list')
//console.log(onProbation)
var listTogether = document.querySelectorAll('.list-together li')
//console.log(listTogether)
var goodBadList = function(evt){
   var eventTarget = evt.currentTarget
   //console.log(evt.currentTarget)
   //console.log(eventTarget.parentNode)
   var GoodStandingList = eventTarget.parentNode.classList.contains('good-standing-list')
         // if parentNode's class === 'good-standing-list
         if (GoodStandingList === true){
            onProbation.appendChild(eventTarget)
         }else{
            goodStanding.appendChild(eventTarget)
         }
      }
for(var i = 0 ; i < listTogether.length; i++){
  //console.log(listTogether[i])
  var singleLiEl = listTogether[i]
  singleLiEl.addEventListener('click', goodBadList)
}


// TASK 4 -- Add Guest to List
var inputValue = document.querySelector('.input-value')
//console.log(inputValue)

var keyPress = function(evt){
      //console.log(evt)
   if(evt.keyCode === 13){
      //console.log('Key was Pressed!')
      var guestEl = document.querySelector('.guest-list').innerHTML += "<li class = 'guest' >"+ evt.target.value + "</li>";

   }
}
inputValue.addEventListener('keydown', keyPress)


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var inputValueEl = document.querySelector('.input-value-box')
console.log([inputValue])
var itemsList = document.querySelector('.items-list')
var keyPressEl = function(evt){
      console.log(evt)
   if(evt.keyCode === 13){
      console.log('Key was Pressed!')
       itemsList.innerHTML += "<li class = 'guest' >" + evt.target.value + "<button class = 'remove' >" + "</li>";
   }
}

inputValueEl.addEventListener('keydown', keyPressEl)




var removeTheEvent = function(evt){
   var removeButton = document.querySelector('.guest')
      removeButton.remove(itemsList)
      console.log(removeButton)
      removeButton.removeEventListener('click', removeTheEvent)



}
 itemsList.addEventListener('click', removeTheEvent)

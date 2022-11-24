// Added date and time based on the current day.
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));
 
// Created the "saveBtn" variable and pairing it with the class from the index.html.
var saveBtn = $ (".saveBtn") ;

// Saving the entered text within the "description" to the local storage for later use.
saveBtn.on ("click", function () {

  var time = $ (this) .siblings (".hour") .text () ;
  var description = $ (this) .siblings (".description") .val () ;
  localStorage.setItem (time, description) ;

}) ;

// Saving the entered text within the "description" even when the page is refreshed.
function usePlanner () {
    $ (".hour") .each (function () {
      var collumn = $ (this) .text ();
      var desc = localStorage.getItem (collumn) ;
  
      if (desc !== null) {
        $ (this).siblings (".description") .val (desc) ;
      }
    }) ;
  }
// Fuction used to keep text when the page is refreshed.
usePlanner();
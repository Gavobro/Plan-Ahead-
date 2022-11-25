// Added date and time based on the current day.
$ ("#currentDay") .text (moment () .format ("dddd MMMM Do YYYY") );
 
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
            $ (this) .siblings (".description") .val (desc) ;
        }
    }) ;
  }

// Making cullumn colours based off of the current time using the "future", "present", and "past" ids.
function timeBlockColor () {
    var hour = moment () .hours () ;

    $ (".time-block") .each (function () {
        var collumn = parseInt ($ (this) .attr ("id") ) ;

// If the collumn number is more than the current time, then the "future" colour scheme is selected.
        if (collumn > hour) {
            $ (this) .addClass ("future") ;
        } 

// If the collumn number is equal to the current time, then the "present" colour scheme is selected.      
        else if (collumn === hour) {
            $ (this) .addClass ("present") ;
        } 
        else {

// If the collumn number is less than the current time, then the "past" colour scheme is selected.      
            $ (this) .addClass ("past") ;
        }
    })
} ;

// Fuction used to keep text when the page is refreshed.
usePlanner () ;

// Funtion used for cullumn colour change in relation to time.
timeBlockColor () ;
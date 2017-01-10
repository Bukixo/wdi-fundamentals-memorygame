console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if ( cardOne === cardTwo) || (cardFour === cardThree) {

	alert('You found a match!');
}
 else if (cardOne === cardThree) || (cardOne === cardFour) {
 	alert("Sorry, try again.");
 }

 else ( cardTwo === cardThree) || (cardTwo === cardFour) {
 	alert("Sorry, try again.");
 }

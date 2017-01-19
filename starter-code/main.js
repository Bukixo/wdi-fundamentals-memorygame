console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


/*if ( cardOne === cardTwo) || (cardFour === cardThree) {

	alert('You found a match!');
}
 else if (cardOne === cardThree) || (cardOne === cardFour) {
 	alert("Sorry, try again.");
 }

 else ( cardTwo === cardThree) || (cardTwo === cardFour) {
 	alert("Sorry, try again.");
 }*/

 var boardGame = document.getElementById('game-board');

 function createBoard() {
  
  for (var i=0; i<cards.length; i++) {
    
    var cardElement = document.createElement('div');
    
    cardElement.className = 'card';

    board.appendChild(cardElement);
  }

}
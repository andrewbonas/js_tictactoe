//game board
//an array of 9 spots that are empty
// display is via DOM
//reset function returning to 0

(function () {
  var gameBoard = {
 gameBoard = ["","","","","","","","",""],
 init function() {
   this.cacheDom();
 },
 cacheDom: function() {
   this.board = document.getElementsByClassName('board')
   this.field = document.getElementsByClassName('field')
   this.button = 
  }
  };
  gameBoard.init();
}());



// players
//player1 = x
//player2 = 0



//game
//loop starts at 0 and ends at 9
//start with x if player is not divisible by 2 player = X
//onclick player1/2 takes spot requested if empty.
//tokens can not take the same spot
//if array matches any of the winning combo array game over
//if no 3 in a row tie

var currentGame = new Game('hard'); // = new Game only instantiated after user clicks game;
var user = currentGame.player; // = currentGame.player only instantiated after user clicks game;
var computer = currentGame.computer; // = currentGame.computer only instantiated after user clicks game;
var fighters = currentGame.getCleanBoard(); // = currentGame.getCleanBoard();

var userSection = document.getElementById('userSection');
var userWins = document.getElementById('userWins');
var computerSection = document.getElementById('computerSection');
var computerWins = document.getElementById('computerWins');
var changeGameBtn = document.getElementById('changeGameButton');
var classicSection = document.getElementById('classicSection');
var hardSection = document.getElementById('hardSection');
var classicFightersSection = document.getElementById('classicFighters');
var hardFightersSection = document.getElementById('hardFighters');















/*
 - Should I chunk the two front page sections together to apply one listener and return the H4 of that listener?
 - Should I do the same^^^ for the two fighters sections?


 - Clicking one of the game options (classic or hard) generates a new instance of Game and sets the type equal to the type that was clicked.
 - Based on Game.type, appropriate list of fighters is displayed on DOM (3 or 5)
 - On clicking one of the fighters, Game method is called to 
*/
const Game = require('.game');
const Player = require('.player');

var currentGame = new Game //only instantiated after user clicks game;
var user = currentGame.player // only instantiated after user clicks game;
var computer = currentGame.computer // only instantiated after user clicks game;
var fighters = currentGame.getCleanBoard();



/*
 - Clicking one of the game options (classic or hard) generates a new instance of Game and sets the type equal to the type that was clicked.
 - Based on Game.type, appropriate list of fighters is displayed on DOM (3 or 5)
 - On clicking one of the fighters, Game method is called to 
*/
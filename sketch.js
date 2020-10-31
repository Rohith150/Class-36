var hypnoticBall, database;
var position;
var form, player, game, allPlayers;

var gameState = 0;
var playerCount = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(1000,600);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

if(playerCount === 4){
  gameState = 1;
}

if(gameState === 1){
  game.play();
}

}
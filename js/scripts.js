function Game(Board) {
  this.currentPlayer = 1;
  this.players = [];
  this.board = Board;
  this.turn = 0;
}

Game.prototype.addPlayer = function(Player) {
  this.players.push(Player);
}

function Player(name, position) {
  this.name = name;
  this.position = position;
  this.score = 0;
}

function checkForWinner(board) {

}

$(document).ready(function() {
  $("button#startGame").click(function(event) {
    event.preventDefault();
    $("#startScreen").hide();
    $("#nameScreen").show();
  })
  $("form#form").submit(function(event) {
    var board = [[1,1,1], [1,1,1], [1,1,1]];
    var newGame = new Game(board);
    var p1Name = $("#name1").val();
    var p2Name = $("#name2").val();
    var p1 = new Player(p1Name, 1);
    var p2 = new Player(p2Name, 2);
    newGame.addPlayer(p1);
    newGame.addPlayer(p2);
  })
})
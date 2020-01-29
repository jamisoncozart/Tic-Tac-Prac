function Game(Board) {
  this.currentPlayer = 2;
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

function addPlayerIcon(currentPlayer, index, board) {
  if(currentPlayer === 1) {
    board[index] = "X";
    console.log(board)
  } else if(currentPlayer === 2) {
    board[index] = "O";
    console.log(board);
  } else {
    console.log("Error: Something went wrong in addPlayerIcon()");
  }
}

function changeGameState(Game) {
  if(Game.currentPlayer === 1) {
    Game.currentPlayer = 2;
  } else if(Game.currentPlayer === 2) {
    Game.currentPlayer = 1;
  } else {
    console.log("Error: Something went wrong in changeGameState()");
  }
}

//Front-End Logic
function displayBoard(board) {
  for(let i = 0; i < 9; i++) {
    $("div#" + i).html(board[i]);
  }
}

$(document).ready(function() {
  $("button#startGame").click(function(event) {
    event.preventDefault();
    $("#startScreen").hide();
    $("#nameScreen").show();
  })
  $("form#form").submit(function(event) {
    event.preventDefault();
    var board = ["","","","","","","","",""];
    var newGame = new Game(board);
    var p1Name = $("#name1").val();
    var p2Name = $("#name2").val();
    var p1 = new Player(p1Name, 1);
    var p2 = new Player(p2Name, 2);
    newGame.addPlayer(p1);
    newGame.addPlayer(p2);
    for(let i = 0; i < 9; i++) {
      $("div#" + i).click(function(event) {
        event.preventDefault();
        addPlayerIcon(newGame.currentPlayer, i, board);
        changeGameState(newGame);
        displayBoard(board);
      })
    }
    console.log(board);
  })
})
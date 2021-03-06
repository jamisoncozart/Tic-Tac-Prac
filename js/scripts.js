function Game(Board) {
  this.currentPlayer = 1;
  this.players = [];
  this.board = Board;
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

function checkForWinner(board) {
  if(board[0] === board[1] && board[1] === board[2]) {
    determineWinner(board[0]);
    return true;
  } else if(board[0] === board[3] && board[3] === board[6]) {
    determineWinner(board[0]);
    return true;
  } else if(board[1] === board[4] && board[4] === board[7]) {
    determineWinner(board[1]);
    return true;
  } else if(board[2] === board[5] && board[5] === board[8]) {
    determineWinner(board[2]);
    return true;
  } else if(board[3] === board[4] && board[4] === board[5]) {
    determineWinner(board[3]);
    return true;
  } else if(board[6] === board[7] && board[7] === board[8]) {
    determineWinner(board[6]);
    return true;
  } else if(board[0] === board[4] && board[4] === board[8]) {
    determineWinner(board[0]);
    return true;
  } else if(board[2] === board[4] && board[4] === board[6]) {
    determineWinner(board[2]);
    return true;
  } else {
    console.log("No Winner");
    return false;
  }
}

//Front-End Logic
function displayBoard(board) {
  for(let i = 0; i < 9; i++) {
    $("div#" + i).html(board[i]);
  }
}

function changeGameState(Game) {
  var titlePlayer = $("#currentPlayer");
if(Game.currentPlayer === 1) {
  Game.currentPlayer = 2;
  titlePlayer.html("P2 (O) Turn")
} else if(Game.currentPlayer === 2) {
  Game.currentPlayer = 1;
  titlePlayer.html("P1 (X) Turn")
} else {
  console.log("Error: Something went wrong in changeGameState()");
  }
}

function determineWinner(icon) {
  if(icon === "X") {
    $("#winner").html("Player 1 Wins!");
  } else if(icon === "O") {
    $("#winner").html("Player 2 Wins!");
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
    $("#mainScreen").show();
    $("#winnerScreen").show();
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
        checkForWinner(board);
      })
    }
    $("#resetButton").click(function(event) {
      board = ["","","","","","","","",""];
      displayBoard(board);
      $("#winner").html("");
    })
  })
})
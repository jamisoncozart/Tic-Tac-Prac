* User clicks `startButton`, display form field for names.
  * Input: *click* `startButton`
  * Output: show `nameForm`
* User inputs 1 name for each name field and clicks `submit`, display `currentPlayer` (player 1 first) & their icon.
  * Input: "Joe" + "Natalie"
  * Output: "Joe (X) goes first!"
* User clicks submit on nameForm, display `gameBoard` and currentPlayer + icon.
  * Input: *click* `submitButton`
  * Output: show `gameBoard` + "[player1 name] (X) goes first!"
* User clicks a grid box, display current player's icon in clicked grid box. 
  * Input: *click* `gridBox`
  * Output: show player icon in `gridBox`
* If user gets 3 in a row, display winner.
  * Input: *click final `gridBox` to win*
  * Output: "[winningPlayer name] wins!"
* If user clicks `resetBoard` button, reset entire board and game. 
  * Input: *click* `resetBoardButton`
  * Output: show empty board and clear all previous inputs.
* If user clicks `restartGame` button, refresh page (start over)
  * Input: *click* `restartGame`
  * Output: *refresh page*
* If user wins, add 1 to player score and reset board.
  * Input: *player wins*
  * Output: "Player 1: 0 + Player 2: 1" *resetBoard*
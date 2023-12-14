const gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let turn = 0;

const winningCriteria = [
  [0, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playerMove = () => {
  let move;
  do {
    move = prompt("Please enter your move:");
    if (move < 0 || move > 9 || isNaN(move)) {
      move = prompt("Invalid move, please enter a valid move from 1 to 9");
    }
  } while (move < 0 || move > 9 || isNaN(move));
  return parseInt(move) - 1;
};

const checkWin = () => {
  for (const criteria of winningCriteria) {
    const [a, b, c] = criteria;
    if (
      gameBoard[a] !== "" &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true; // Player has won
    }
  }
  return false; // No winner yet
};

while (turn < 9) {
  const move = playerMove();

  gameBoard[move] = currentPlayer;
  console.log(gameBoard);

  if (checkWin()) {
    console.log(`Player ${currentPlayer} wins!`);
    break;
  }

  currentPlayer = currentPlayer === "X" ? "Y" : "X";
  turn++;
}

if (turn === 9) {
  console.log("It's a tie!");
}

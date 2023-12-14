const gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let turn = 0;

const winningCriteria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameBoard[index] === "" && turn < 9) {
      gameBoard[index] = currentPlayer;
      cell.textContent = currentPlayer;
      turn++;

      if (checkWin()) {
        console.log(`Player ${currentPlayer} wins!`);
      } else if (turn === 9) {
        console.log("It's a tie!");
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

const checkWin = () => {
  for (const criteria of winningCriteria) {
    const [a, b, c] = criteria;
    if (
      gameBoard[a] !== "" &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }
  return false;
};

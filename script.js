const Tic_Tac_Toe = (() => {
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
  const winResults = document.getElementById("win-results");

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      if (gameBoard[index] === "" && turn < 9) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        turn++;

        if (checkWin()) {
          winResults.textContent = `Player ${currentPlayer} wins!`;
          turn = 9;
        } else if (turn === 9) {
          winResults.textContent = `It's a tie!`;
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

  const restartGame = () => {
    gameBoard.fill("");
    cells.forEach((cell) => (cell.textContent = ""));
    winResults.textContent = "";
    currentPlayer = "X";
    turn = 0;
  };
  return {
    restartGame,
  };
})();

const display = (() => {
  const restartElement = document.querySelector("button");
  restartElement.addEventListener("click", () => {
    Tic_Tac_Toe.restartGame();
  });
})();

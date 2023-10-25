function App() {
  const [board, setBoard] = React.useState(Array(9).fill(""));
  const [gameOver, setGameOver] = React.useState(false);
  const [turn, setTurn] = React.useState('X');
  const [winner, setWinner] = React.useState(null); // Add this line

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Add this function to check for a winner
  function checkWinner(board) {
    for (let combo of winningCombos) {
      if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
        return board[combo[0]];
      }
    }
    return null;
  }

  function handleTurn(event) {
    let idx = event.target.id;
    if (!gameOver && !board[idx]) {
      let newBoard = [...board];
      newBoard[idx] = turn;
      setBoard(newBoard);
      let nextTurn = turn === 'X' ? 'O' : 'X';
      setTurn(nextTurn);
      let winner = checkWinner(newBoard);
      if (winner) {
        setGameOver(true);
        setWinner(winner);
      }
    }
  }

  // Add this function to reset the game
  function resetGame() {
    setBoard(Array(9).fill(""));
    setGameOver(false);
    setTurn('X');
    setWinner(null);
  }

return (
<div>
<h1>Tic-React-Toe</h1>
<h2>{gameOver ? `Game Over! ${winner} is the winner!` : `It's ${turn}'s turn!`}</h2>
<div className="flex-container flex-column">
<div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
{board.map((value, idx) => {
return (
<div className="square" key={idx} id={idx}>
{value}
</div>
)
})}
</div>
<button id="reset-button" onClick={resetGame}>reset</button> {/* Modify this line */}
</div>
</div>
);
}

ReactDOM.render(<App/>, document.getElementById('root'));
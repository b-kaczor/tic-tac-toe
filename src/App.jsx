import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

const EMPTY_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const WIN_CONDITIONS = [
  [{ row: 0, col: 0}, { row: 0, col: 1 }, { row: 0, col: 2 }],
  [{ row: 1, col: 0}, { row: 1, col: 1 }, { row: 1, col: 2 }],
  [{ row: 2, col: 0}, { row: 2, col: 1 }, { row: 2, col: 2 }],

  [{ row: 0, col: 0}, { row: 1, col: 0 }, { row: 2, col: 0 }],
  [{ row: 0, col: 1}, { row: 1, col: 1 }, { row: 2, col: 1 }],
  [{ row: 0, col: 2}, { row: 1, col: 2 }, { row: 2, col: 2 }],

  [{ row: 0, col: 0}, { row: 1, col: 1 }, { row: 2, col: 2 }],
  [{ row: 0, col: 2}, { row: 1, col: 1 }, { row: 2, col: 0 }]
]

function deriveActivePlayer(gameTurns) {
  let currentSymbol = "X"
  if (gameTurns.length > 0 && gameTurns[0].symbol === "X") {
    currentSymbol = "O"
  }

  return currentSymbol
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  let winner
  let gameBoard = EMPTY_BOARD

  for(const turn of gameTurns) {
    const { square, symbol } = turn
    gameBoard[square.row][square.col] = symbol
  }

  let activeSymbol = deriveActivePlayer(gameTurns)

  for (const winCondition of WIN_CONDITIONS) {
    const firstSquareSymbol = gameBoard[winCondition[0].row][winCondition[0].col]
    const secondSquareSymbol = gameBoard[winCondition[1].row][winCondition[1].col]
    const thirdSquareSymbol = gameBoard[winCondition[2].row][winCondition[2].col]
    
    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, symbol: activeSymbol },
        ...prevTurns
      ]

      return updatedTurns
    })
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player active={activeSymbol === "X"} initialName="Player 1" symbol="X" />
        <Player active={activeSymbol === "O"} initialName="Player 2" symbol="O" />
      </ol>
      {winner && <p>{activeSymbol} won!</p>}
      <GameBoard
        onSelectSquare={handleSelectSquare}
        board={gameBoard} />
    </div>
    <Log gameTurns={gameTurns}/>
  </main>
}

export default App

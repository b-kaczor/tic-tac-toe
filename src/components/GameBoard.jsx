import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard() {
  const [board, setBoard] = useState(initialGameBoard)

  function handleSymbolChange(row, col, value) {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard.map(row => [...row])]
      newBoard[row][col] = value
      return newBoard
    })
  }

  return(
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSymbolChange(rowIndex, colIndex, "X")}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

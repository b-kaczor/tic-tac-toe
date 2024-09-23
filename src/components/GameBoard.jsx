import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onSelectSquare, activeSymbol }) {
  const [board, setBoard] = useState(initialGameBoard)

  function handleSymbolChange(row, col, value) {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard.map(row => [...row])]
      newBoard[row][col] = value
      return newBoard
    })

    onSelectSquare()
  }

  return(
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSymbolChange(rowIndex, colIndex, activeSymbol)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

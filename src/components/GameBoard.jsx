import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard

  for(const turn of turns) {
    const { square, symbol } = turn
    gameBoard[square.row][square.col] = symbol
  }

  return(
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

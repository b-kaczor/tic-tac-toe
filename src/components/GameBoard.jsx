export default function GameBoard({ onSelectSquare, board }) {
  return(
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (              
              <li key={colIndex}>
                <button disabled={symbol && symbol !== null} onClick={() => onSelectSquare(rowIndex, colIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

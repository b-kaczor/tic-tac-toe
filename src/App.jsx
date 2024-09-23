import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activeSymbol, setactiveSymbol] = useState("X")

  function handleSelectSquare(rowIndex, colIndex) {
    setactiveSymbol(activeSymbol === "X" ? "O" : "X")

    setGameTurns(prevTurns => {
      let currentSymbol = activeSymbol

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentSymbol = "O"
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, symbol: currentSymbol },
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
      <GameBoard
        onSelectSquare={handleSelectSquare}
        turns={gameTurns} />
    </div>
    <Log />
  </main>
}

export default App

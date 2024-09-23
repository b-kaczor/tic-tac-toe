import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activeSymbol, setactiveSymbol] = useState("X")

  function handleSelectSquare() {
    setactiveSymbol(activeSymbol === "X" ? "O" : "X")
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player active={activeSymbol === "X"} initialName="Player 1" symbol="X" />
        <Player active={activeSymbol === "O"} initialName="Player 2" symbol="O" />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activeSymbol={activeSymbol} />
    </div>
    LOG
  </main>
}

export default App

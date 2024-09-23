import Player from "./components/Player"

function App() {
  return <main>
    <div id="game-container">
      <ol id="players">
        <li><Player initialName="Player 1" symbol="X" /></li>
        <li><Player initialName="Player 2" symbol="O" /></li>
      </ol>
      GAME BOARD
    </div>
    LOG
  </main>
}

export default App

export default function Log({gameTurns}) {
  return <ol id="log">
    {gameTurns.map((turn, turnId) => (
      <li key={turnId}>
        {turn.symbol} selected {turn.square.row},{turn.square.col}
      </li>
    ))}
  </ol>
}

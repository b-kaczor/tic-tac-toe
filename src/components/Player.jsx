import { useState } from "react"

export default function Player({ initialName, symbol, active, onPlayerChange }) {
  const [name, setName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  let playerName = <span className="player-name">{name}</span>
  if (isEditing) {
    playerName = <input type="text" value={name} required onChange={handleNameChange} />
  }

  function handleEditingButton() {
    // setIsEditing(!isEditing)
    setIsEditing(wasEditing => !wasEditing)

    onPlayerChange(symbol, name)
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  return <li className={active ? "active" : null}>
    <span className="player">
      {playerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditingButton}>{isEditing ? "Save" : "Edit"}</button>
  </li>
}

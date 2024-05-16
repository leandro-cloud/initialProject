import React, { useState } from 'react'

export default function Component() {

  const [text, setText] = useState()
  const [update, setUpdate] = useState()

  const textOncChange = (event) => {
    setText(event.target.value)
  }

  const buttonOnClick = () => {
    setUpdate(text)
  }
  
  return (
    <div>
      <input type="text" value={text} onChange={textOncChange}/>
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto Input: {text}</p>
      <p>Texto Actualizado: {update}</p>
    </div>
  )
}

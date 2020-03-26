import React, { useState, useContext } from 'react'
import { Context } from '../Context'


function InputBar ({id, placeholderText}) {
  const [textState, setTextState] = useState(placeholderText)
  const {updateVideo} = useContext(Context)

  function handleChange(e) {
    setTextState(e.target.value)
  }

  function onSubmit(e) {
    updateVideo(textState, id)
  }

  return(
    <div>
      <input type='text' placeholder={textState} onChange={handleChange} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )

}

export default InputBar

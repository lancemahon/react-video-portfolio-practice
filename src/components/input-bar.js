import React, { useState, useContext } from 'react'
import { Context } from '../Context'


function InputBar (props) {
  const [textState, setTextState] = useState(props.placeholderText)
  const {updateVideo} = useContext(Context)

  function handleChange(e) {
    setTextState(e.target.value)
  }

  function onSubmit(e) {
    updateVideo(textState)
  }

  return(
    <div>
      <input type='text' placeholder={textState} onChange={handleChange} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )

}

export default InputBar

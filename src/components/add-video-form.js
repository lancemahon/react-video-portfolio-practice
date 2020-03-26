import React, { useState, useContext } from 'react'
import {Context} from '../Context'

function AddVideoForm() {
  const {addVideo} = useContext(Context)
  const [textState, setTextState] = useState('')

  function handleChange(e) {
    setTextState(e.target.value)
  }

  return (
    <form onSubmit={() => addVideo(textState)}>
      <input type='text' placeholder='Video url' onChange={handleChange} />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddVideoForm

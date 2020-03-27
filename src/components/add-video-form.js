import React, { useState, useContext } from 'react'
import {Context} from '../Context'
import { isWebUri } from 'valid-url'
import styled from 'styled-components'


function AddVideoForm() {
  const {addVideo} = useContext(Context)
  const [textState, setTextState] = useState('')
  const [isWrongUrl, setIsWrongUrl] = useState(false)

  function handleChange(e) {
    setTextState(e.target.value)
  }

  const StyledP = styled.p`
    display: ${prop => prop.active ? 'initial' : 'none'};
  `

  function handleSubmit(e) {
    e.preventDefault()
    if (!isWebUri(textState)) {
          setIsWrongUrl(true)
        }
    else addVideo(textState)
  }

  return (
    <div>
      <StyledP active={isWrongUrl}>Please enter a valid url</StyledP>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Video url' onChange={handleChange} />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default AddVideoForm

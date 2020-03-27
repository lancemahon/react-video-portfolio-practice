import React, { useState, useContext } from 'react'
import {Context} from '../Context'
// import styled from 'styled-components'
import ReactPlayer from 'react-player'
import StyledP from './styled-p-tag'


function AddVideoForm() {
  const {addVideo} = useContext(Context)
  const [textState, setTextState] = useState('')
  const [isWrongUrl, setIsWrongUrl] = useState(false)

  function handleChange(e) {
    setTextState(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (ReactPlayer.canPlay(textState)) {
      addVideo(textState)
    }
    else {
      setIsWrongUrl(true)
    }
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

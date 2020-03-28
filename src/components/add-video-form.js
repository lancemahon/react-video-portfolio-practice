import React, { useState, useContext } from 'react'
import {Context} from '../Context'
// import styled from 'styled-components'
import ReactPlayer from 'react-player'
import StyledP from './styled-p-tag'

import styled from 'styled-components'

const FormWrapper = styled.section`
  background: #383c44;
  min-height: 10vh;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
`
const FormInnards = styled.section`
  border-radius: 10px;
  grid-column: 2;
  align-self: center;
`

function AddVideoForm() {
  const {state, wantsToAdd, addVideo} = useContext(Context)
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
      <FormWrapper>
        <FormInnards>
          {state.wantsToAdd ?  
          <div>
            <StyledP active={isWrongUrl}>Please enter a valid url</StyledP>
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Video url' onChange={handleChange} />
              <input type='submit' value='Submit' />
            </form>
          </div> :
          <button onClick={() => wantsToAdd()}>Add a video</button>}
        </FormInnards>
      </FormWrapper>
    </div>
  )
}

export default AddVideoForm

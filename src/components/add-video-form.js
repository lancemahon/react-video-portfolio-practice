import React, { useState, useContext } from 'react'
import {Context} from '../Context'
// import styled from 'styled-components'
import ReactPlayer from 'react-player'
import StyledP from './styled-p-tag'
import Button from 'react-bootstrap/Button'
import { Grid, Row, Col } from 'react-bootstrap'

import styled from 'styled-components'
import { Form } from 'react-bootstrap'

const FormWrapper = styled.section`
  background: #383c44;
  min-height: 10vh;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 150px 1fr 150px;
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
              <Form.Group controlId='formAddVideo'>
                <Form.Row>
                  <Col sm={10}>
                    <Form.Control type='input' placeholder='Video url' onChange={handleChange} />
                  </Col>
                    {/*<input type='text' placeholder='Video url' onChange={handleChange} />*/}
                    <Col sm={1}>
                      <Button variant='primary' type='submit'>
                        Submit
                      </Button>
                    </Col>
                  </Form.Row>
                  {/*<input type='submit' value='Submit' />*/}
              </Form.Group>
            </form>
          </div> :
          <Button variant='primary' onClick={() => wantsToAdd()}>Add a video</Button>}
        </FormInnards>
      </FormWrapper>
    </div>
  )
}

export default AddVideoForm

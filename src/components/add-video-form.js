import React, { useState, useContext, useEffect, useRef } from 'react'
import {Context} from '../Context'
// import styled from 'styled-components'
import ReactPlayer from 'react-player'
import StyledP from './styled-p-tag'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'

import { Form } from 'react-bootstrap'

function AddVideoForm() {
  const {addVideo} = useContext(Context)
  const [textState, setTextState] = useState('')
  const [isWrongUrl, setIsWrongUrl] = useState(false)

  const urlInput = useRef(null)

  useEffect(() => {
    urlInput.current.focus()
  }, [])

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
        <Form.Group controlId='formAddVideo'>
          <Form.Row>
            <Col sm={10}>
              <Form.Control type='input' placeholder='Video url' ref={urlInput} onChange={handleChange} />
            </Col>
              <Col sm={1}>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Col>
            </Form.Row>
        </Form.Group>
      </form>
    </div>
  )
}

export default AddVideoForm

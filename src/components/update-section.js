import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import DeleteButton from './delete-button'


function UpdateSection ({id}) {
  const [textState, setTextState] = useState('Video url')
  const [updating, setUpdating] = useState(false)
  const {updateVideo} = useContext(Context)

  function handleChange(e) {
    setTextState(e.target.value)
  }

  function handleSubmit(e) {
    setUpdating(false)
    updateVideo(textState, id)
  }

  function ButtonOrInput () {
    if (updating) {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <Form.Group controlId='formUpdateVideoSource'>
              <Form.Control type='input' placeholder='Video url' onChange={handleChange} />
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form.Group>
          </form>
        </div>
      )
    }
    else if (!updating) {
      return (
        <Button variant='primary' onClick={() => setUpdating(true)}>Update</Button>
      )
    }
  }


  return(
    <div>
      {ButtonOrInput()}
      <DeleteButton
        id={id}
      />
    </div>
  )

}

export default UpdateSection

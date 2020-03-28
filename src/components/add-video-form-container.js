import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

import {Context} from '../Context'
import AddVideoForm from './add-video-form'

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

function AddVideoFormContainer() {
  const {state, wantsToAdd} = useContext(Context)

  function handleAddClick () {
    wantsToAdd()
  }

  return (
    <div>
      <FormWrapper>
        <FormInnards>
          {state.wantsToAdd ?  <AddVideoForm /> :
          <Button variant='primary' onClick={handleAddClick}>Add a video</Button>}
        </FormInnards>
      </FormWrapper>
    </div>
  )
}

export default AddVideoFormContainer

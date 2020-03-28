import React, {useContext} from 'react'
import {Context} from '../Context'
import Button from 'react-bootstrap/Button'

function DeleteButton ({id}) {
  const {deleteVideo} = useContext(Context)

  return (
    <Button variant='danger' onClick={() => {
      deleteVideo(id)}}>Delete</Button>
  )
}

export default DeleteButton

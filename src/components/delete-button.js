import React, {useContext} from 'react'
import {Context} from '../Context'
import Button from 'react-bootstrap/Button'

function DeleteButton ({id}) {
  const {deleteVideo} = useContext(Context)

  return (
    <Button variant='danger' onClick={() => {
      console.log('Clicked delete button, id is: ' + id)
      deleteVideo(id)}}>Delete</Button>
  )
}

export default DeleteButton

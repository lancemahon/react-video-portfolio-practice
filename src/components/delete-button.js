import React, {useContext} from 'react'
import {Context} from '../Context'

function DeleteButton ({id}) {
  const {deleteVideo} = useContext(Context)

  return (
    <button onClick={() => {
      console.log('Clicked delete button, id is: ' + id)
      deleteVideo(id)}}>Delete this video</button>
  )
}

export default DeleteButton

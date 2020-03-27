import React from 'react'

import Video from './video'
import InputBar from './input-bar'
import DeleteButton from './delete-button'

function VideoBox({url, id}) {
  return(
    <div>
      <InputBar
        placeholderText='Enter video url to update'
        id={id}
      />
      <Video
        url={url}
      />
      <DeleteButton
      id={id}
      />
    </div>
  )
}

export default VideoBox

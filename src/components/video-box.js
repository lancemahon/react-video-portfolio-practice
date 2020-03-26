import React from 'react'

import Video from './video'
import InputBar from './input-bar'

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
    </div>
  )
}

export default VideoBox

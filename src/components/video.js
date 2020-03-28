import React from 'react'
import ReactPlayer from 'react-player'

function Video ({url}) {
  return(
    <ReactPlayer 
    url={url} 
    controls={true}
    />
  )
}

export default Video

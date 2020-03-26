import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import { Context } from '../Context'

function Video ({url}) {
  // const {video} = useContext(Context)

  return(
    <ReactPlayer url={url} controls={true}
    />
  )
}

export default Video

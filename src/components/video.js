import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import { Context } from '../Context'

function Video () {
  const {video} = useContext(Context)

  return(
    <ReactPlayer url={video} controls={true}
    />
  )
}

export default Video

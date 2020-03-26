import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import VideoBox from './video-box'
import AddVideoForm from './add-video-form'

function VideoSection () {
  const {wantsToAdd, state, addVideo} = useContext(Context)

  // function wantToAdd () {
  //   return (
  //     state.wantsToAdd ?
  //     <addVideoForm />
  //     : <button onClick={() => wantsToAdd()}>Add a video</button>
  //   )
  // }

  const videoBoxes = state.videos.map(v =>
    <VideoBox
      url={v.url}
      id={v.id}
    />
    )

  return (
    <div>
      {state.wantsToAdd ?
      <AddVideoForm />
      : <button onClick={() => wantsToAdd()}>Add a video</button>}
      {videoBoxes}
    </div>
  )
}

export default VideoSection

import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import VideoBox from './video-box'
import AddVideoForm from './add-video-form'

function VideoSection () {
  const {wantsToAdd, state, addVideo} = useContext(Context)

  const videoBoxes = state.videos.map(v =>
    <VideoBox
      url={v.url}
      id={v.id}
    />
    )

  return (
    <div>
      <button onClick={() => console.log('state videos ' + state.videos)}>Click to show state</button>
      {state.wantsToAdd ?
      <AddVideoForm />
      : <button onClick={() => wantsToAdd()}>Add a video</button>}
      {videoBoxes}
    </div>
  )
}

export default VideoSection

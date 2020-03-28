import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import VideoBox from './video-box'
import AddVideoForm from './add-video-form'
import styled from 'styled-components'

const Wrapper = styled.section`
border: 2px solid;
border-radius: 30px;
border-color: #34baeb;
padding: 40px;
`

function VideoSection () {
  const {state, addVideo} = useContext(Context)

  const videoBoxes = state.videos.map(v =>
    <VideoBox
      url={v.url}
      id={v.id}
    />
    )

  return (
    <Wrapper>
      <AddVideoForm />
      {videoBoxes}
    </Wrapper>
  )
}

export default VideoSection

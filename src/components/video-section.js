import React, {useContext} from 'react'
import {Context} from '../Context'
import VideoBox from './video-box'
import AddVideoFormContainer from './add-video-form-container'
import styled from 'styled-components'

const Wrapper = styled.section`
border: 2px solid;
border-radius: 30px;
border-color: #34baeb;
padding: 40px;
`

function VideoSection () {
  const {state} = useContext(Context)

  // this will be used to position individual video boxes using CSS grid
  function chooseSide (index) {
    if (index % 2 === 0) {
      return 'left'
    }
    else {
      return 'right'
    }
  }

  const videoBoxes = state.videos.map((v, i) =>
    <VideoBox
      key={v.id}
      side={chooseSide(i)}
      url={v.url}
      id={v.id}
    />
    )

  return (
    <Wrapper>
      <AddVideoFormContainer />
      {videoBoxes}
    </Wrapper>
  )
}

export default VideoSection

import React from 'react'

import Video from './video'
import InputBar from './input-bar'
import DeleteButton from './delete-button'
import styled from 'styled-components'

const Box = styled.section`
  margin-top: 25px;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const VideoPositioner = styled.section`
  grid-column: ${prop => prop.side == 'left' ? '1' : '2'}
`

const InputBarPositioner = styled.section`
  grid-column: ${prop => prop.side == 'left' ? '2' : '1'}
`

function VideoBox({side, url, id}) {
  console.log('Side for video box ' + id + ' is ' + side)
  return(
    <div>
      <Box>
        <InputBarPositioner side={side}>
          <InputBar
            placeholderText='Enter video url to update'
            id={id}
          />
          <DeleteButton
          id={id}
          />
        </InputBarPositioner>
        <VideoPositioner side={side}>
          <Video
            url={url}
          />
        </VideoPositioner>
      </Box>
    </div>
  )
}

export default VideoBox

import React, { useState } from 'react'

import Video from './video'
import UpdateSection from './update-section'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const Box = styled.section`
  margin-top: 25px;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: ${prop => prop.side == 'left' ? '1fr 200px' : '200px 1fr'};
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
`

const VideoPositioner = styled.section`
  grid-column: ${prop => prop.side == 'left' ? '1' : '2'};
`

const UpdatePositioner = styled.section`
  grid-column: ${prop => prop.side == 'left' ? '2' : '1'};
  grid-row: 1;
  align-self: center;
  justify-self: center;
`

function VideoBox({side, url, id}) {
  return(
    <div>
      <Box side={side}>
        <UpdatePositioner side={side}>
          <UpdateSection 
            id={id}
          />
        </UpdatePositioner>
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

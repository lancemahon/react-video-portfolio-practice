import React from 'react'

import Video from './video'
import InputBar from './input-bar'
import DeleteButton from './delete-button'
import styled from 'styled-components'

const Box = styled.section`
  margin-top: 25px;
  margin-bottom: 25px;
`

function VideoBox({url, id}) {
  return(
    <div>
      <Box>
        <InputBar
          placeholderText='Enter video url to update'
          id={id}
        />
        <Video
          url={url}
        />
        <DeleteButton
        id={id}
        />
      </Box>
    </div>
  )
}

export default VideoBox

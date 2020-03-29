import React from 'react'
import styled from 'styled-components'
import VideoGrid from './video-grid'

const OuterWrapper = styled.div`
padding-top: 6em;
display: flex;
flex-direction: column;
align-items: center;
max-width: 1440px;
padding-right: 20px;
padding-bottom: 75px;
padding-left: 20px;
margin-left: auto;
margin-right: auto;
width: 100%;
height: 100%;
z-index: 100;
`

const InnerWrapper = styled.div`
font-family: 'Raleway';
line-height: 1.6;
font-size: 16px;
font-weight: 400;
box-sizing: inherit;
width: 100%;
height: 100%;
`

function VideoGridContainer () {
    return (
        <OuterWrapper className='grid-outer-wrapper'>
            <InnerWrapper className='grid-inner-wrapper'>
                <VideoGrid />
            </InnerWrapper>
        </OuterWrapper>
    )
}

export default VideoGridContainer
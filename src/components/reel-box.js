import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const StyledVideo = styled.video`
    minWidth: 30%%;
    minHeight: 30%;
    width: 45%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    display: inline-block;
    objectFit: contain;
    opacity: ${prop => prop.opacity}
`

const StyledContainer = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    zIndex: 1;
`
const StyledBanner = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0.48),rgba(0,0,0,0.48));
    height: 80vh;
    width: 100vw;
    borderT-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    position: relative;
    text-align: center;
`

function ReelBox ({url}) {
    const [ scrollHeight, setScrollHeight ] = useState(window.scrollY)

    useEffect(() => {
        const handleScroll = () => { 
            // console.log('scroll height: ' + scrollHeight)
            const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
            if (scrollHeight !== newScrollHeight){
                setScrollHeight(newScrollHeight)
                console.log('scroll height: ' + scrollHeight)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollHeight])

    const opacity = Math.min(100 / scrollHeight  , 1)

    return (
        <StyledBanner>
            <StyledContainer>
                <StyledVideo opacity={opacity}  playsInline autoPlay muted loop src={url}></StyledVideo>
            </StyledContainer>
        </StyledBanner>
    )
}

export default ReelBox
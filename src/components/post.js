import React, { useState } from 'react'
import styled from 'styled-components'

const PostImage = styled.div`
    position: relative;
    margin: 0;
    height: 0;
    padding-bottom: 42%;
    background-position: 50% 50%;
    background-size: cover;
`
const PostText = styled.div`
    padding: 4em 1.5em 1.5em 1.5em;
    text-align: left;
    color: #fff;
    clear: both;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.8));
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: ${prop => prop.hover ? '1' : '0'};
    transform: translateY(${prop => prop.hover ? '0' : '25%'});
    transition: all .5s ease;
    text-align: center;
`
// const PostWrapper = styled.a`
//     & ${PostImage}:hover + ${PostText} {
//         opacity: 1;
//         transform: translateY(0)
//     }
// `

function Post ({video}) {
    const [isHovering, setIsHovering] = useState(false)

    function toggleHover() {
        setIsHovering(prev => !prev)
    }

    return (
        <a href={video.url} 
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
            <PostImage
                style={{ backgroundImage: 'url(' + require('../videoImageStandIn.jpg') + ')' }}>
            </PostImage>
            <PostText hover={isHovering}>
                <h3>Hello</h3>
            </PostText>
        </a>
    )
}

export default Post
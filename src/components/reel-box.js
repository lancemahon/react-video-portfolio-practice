import React from 'react'
import ReactPlayer from 'react-player'

import classes from './reel.module.css'

function ReelBox ({url}) {
    return (
        <video playsInline autoPlay muted loop src={url}></video>
        // <ReactPlayer 
        // url={url} 
        // controls={true}
        // playsinline={true}
        // playing={true}
        // />
    )
}

export default ReelBox
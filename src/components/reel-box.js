import React from 'react'
import styled from 'styled-components'

import classes from './reel.module.css'

function ReelBox ({side, url}) {
    return (
        <div side={side} className={classes.Container}>
            <video autoPlay='autoplay' loop='loop' muted className={classes.Reel} >
                <source src={url} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ReelBox
import React, { useContext } from 'react'
import styled from 'styled-components'

import {Context} from '../Context'
import Post from './post'

const Grid = styled.div`
    font-family: 'Raleway';
    line-height: 1.6;
    font-size: 16px;
    font-weight: 400;
    box-sizing: inherit;
    height: 100%;
    display: block;
`
const GridItem = styled.div`
    margin: .25em;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    width: 32%;
    break-inside: avoid;
    position: relative;
`


function VideoGrid () {
    const {state} = useContext(Context)

    function handleHover (e) {

    }

    const grid = state.videos.map(v => {
        return (
            <GridItem>
                <Post
                    key={v.id}
                    video={v}
                />
            </GridItem>
        )
    })

    return (
        <Grid className='posts-grid'>
            {grid}
        </Grid>
    )
}

export default VideoGrid
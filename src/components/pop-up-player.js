import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import ReactPlayer from 'react-player'


import { Context } from '../Context'

function PopUpPlayer() {
    const {state} = useContext(Context)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (state.watching.isWatching) {
            handleShow()
        }
        else if (!state.watching.isWatching) {
            handleClose()
        }
    }, [state])

    return (
        <>
            {state.watching.isWatching &&
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <ReactPlayer url={state.watching.videoBeingWatched} playing/>
                </Modal.Body>
            </Modal>
            }
        </>
    )
}

export default PopUpPlayer
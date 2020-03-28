import React, { useReducer } from "react"
import reducer from './reducer'

const Context = React.createContext()

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer,
    {
      videos: [{
      url: 'https://www.youtube.com/watch?v=zTitoHKsyJg',
      id: 1,

    }],
    wantsToAdd: false
  }
)

  function wantsToAdd () {
    dispatch({type: 'wants-to-add'})
  }

  function updateVideo(newUrl, newId) {
    dispatch({type: 'update-video', url: newUrl, id: newId})
  }

  function maxReducer (prev, current) {
     return (prev.id > current.id) ? prev : current
  }

  function addVideo(newUrl) {
    // need to decide what id to assign it
    // Could find the max value of all current id's + 1
    // That way we get unique id's every time
    let max_id = state.videos.reduce(maxReducer, 0).id
    const newId = max_id + 1
    dispatch({ type: 'add-video', url: newUrl, id: newId})
  }

  function deleteVideo(targetId) {
    dispatch({type: 'delete-video', id: targetId})
  }

  return(
    <Context.Provider value={{
      wantsToAdd,
      updateVideo,
      addVideo,
      deleteVideo,
      state
    }}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}

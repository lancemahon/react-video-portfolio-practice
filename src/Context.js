import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const [video, setVideo] = useState('https://www.youtube.com/watch?v=zTitoHKsyJg')

  function updateVideo(url) {
    setVideo(url)
  }

  return(
    <Context.Provider value={{
      updateVideo,
      video
    }}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}

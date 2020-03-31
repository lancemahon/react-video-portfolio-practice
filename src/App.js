import React from 'react';
// import VideoSection from './components/video-section'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import {ContextProvider} from './Context'
import videoFile from './videoplayback.mp4'
import ReelBox from './components/reel-box'
import VideoGridContainer from './components/video-grid-container'
import ContactMeForm from './components/contact-me-form'

// Have a video component for displaying videos, will send the url in as a prop
// Have an input_bar component for writing text into and submitting.
  // Need to send info from input_bar to video component when submitting

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">
          <ReelBox  
              url={videoFile}
            />
          <VideoGridContainer />
          <ContactMeForm />
        </header>
      </div>
    </ContextProvider>
  );
}

export default App;

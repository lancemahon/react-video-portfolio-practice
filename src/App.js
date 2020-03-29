import React from 'react';
import './App.css';
import VideoSection from './components/video-section'
import {ContextProvider} from './Context'
import 'bootstrap/dist/css/bootstrap.min.css'
import videoFile from './videoplayback.mp4'

import ReelBox from './components/reel-box'

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
          <VideoSection />
        </header>
      </div>
    </ContextProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import VideoSection from './components/video-section'
import {ContextProvider} from './Context'

// Have a video component for displaying videos, will send the url in as a prop
// Have an input_bar component for writing text into and submitting.
  // Need to send info from input_bar to video component when submitting

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">
          <VideoSection />
        </header>
      </div>
    </ContextProvider>
  );
}

export default App;

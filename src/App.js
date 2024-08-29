// src/App.js
import React from 'react';
import Map from './map';
import Sidebar from './sidebar';
import SpeechRecognitionComponent from './speech';


const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Map />
      </div>
      <div>
      <h1>Speech Recognition with OpenAI</h1>
      <SpeechRecognitionComponent />
    </div>
    </div>
  );
};

export default App;

import React from 'react';
import AudioPlayer from './components/music/AudioPlayer';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Mood-Based Background Music</h1>
      <AudioPlayer />
      {/* Add other components as needed */}
    </div>
  );
};

export default App;
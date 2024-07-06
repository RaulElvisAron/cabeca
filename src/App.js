import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Tutorial from './components/Tutorial';

function App() {
  const [showTutorial, setShowTutorial] = useState(true);

  return (
    <div className="App">
      {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}
      <Map />
    </div>
  );
}

export default App;

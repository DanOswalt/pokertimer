import React from 'react';
import Timer from './Timer.js';
import CurrentBlinds from './CurrentBlinds.js';
import NextBlinds from './NextBlinds.js';

import './App.css';

const blinds = { small: 10, big: 20 };
const nextBlinds = { small: 10, big: 20 };

const App = () => {
  return (
    <div className="App">
      <div className="blindsBox">
        <CurrentBlinds blinds={blinds} />
        <NextBlinds blinds={nextBlinds} />
      </div>
      <Timer initialTotalSeconds={20 * 60} />
    </div>
  );
}

export default App;

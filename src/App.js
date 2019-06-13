import React, { useState } from 'react';
import Timer from './Timer.js';
import CurrentBlinds from './CurrentBlinds.js';
import NextBlinds from './NextBlinds.js';
import './App.css';

const App = () => {
  const [ blindIndex, setBlindIndex ] = useState(0);

  const blinds = [
    { small: '10', big: '20' },
    { small: '15', big: '30' },
    { small: '25', big: '50' },
    { small: '40', big: '80' },
    { small: '60', big: '120' },
    { small: '100', big: '200' },
    { small: '150', big: '300' },
    { small: '250', big: '500' },
    { small: '400', big: '800' },
    { small: '600', big: '1200' },
    { small: '1000', big: '2000' },
    { small: '1500', big: '3000' },
    { small: '2500', big: '5000' },
    { small: '4k', big: '8k' },
    { small: '6k', big: '12k' },
    { small: '15k', big: '30k' },
    { small: '25k', big: '50k' },
    { small: '40k', big: '80k' },
    { small: '60k', big: '120k' },
  ]

  const currentBlinds = blinds[blindIndex];
  const nextBlinds = blinds[blindIndex + 1];
  const seconds = 5;
  
  const levelUp = () => {
    setBlindIndex( blindIndex + 1 );
  }

 return (
    <div className="App">
      <div className="blindsBox">
        <CurrentBlinds blinds={currentBlinds} />
        <NextBlinds blinds={nextBlinds} />
      </div>
      <Timer initialTotalSeconds={seconds} levelUp={levelUp}/>
    </div>
  );
}

export default App;

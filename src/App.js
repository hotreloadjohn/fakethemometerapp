import React, {useState} from 'react';
import switchoff from './assets/images/switchoff.png';
import bleep from './assets/audio/Bleep.mp3';

import './App.css';

function App() {
  const [mode, setMode] = useState(false);


  const toggleMode = () => {
    const audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
    mode ? setMode(false) : setMode(true)
  }

  const rndImg = () => {
    const audio = document.getElementById("audio");
    audio.play();
    const val = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    return (
      <img src={require(`./assets/images/${val}.png`)}  className="imgdisplay"/>
    )
  }

  return (
    <div className="App">
    
      <div className="App-header">
      { mode ? rndImg() : <img src={switchoff}  className="imgdisplay"/>}
      <div><button className={ mode ? "takebtnOn" : "takebtnOff"} onClick={toggleMode}></button></div>
      
      <audio id="audio">
        <source src={bleep} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      </div>
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Intro from './components/Intro'
import MenuHeader from './components/MenuHeader'

function App() {
  return (
    <div id="app">
      <div className="app-container" id="intro">
        <Intro />
      </div>

      <div className="app-container" id="site">
        <div id="site-gradient">
          <MenuHeader />
        </div>
        <div id="site-container">
          <p id="welcome">Bienvenido. <br /></p>
        </div>
      </div>
    </div>
  );
}

export default App;

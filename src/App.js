import React from 'react';
import Header from './containers/Header'
import Portfolio from './containers/Portfolio'
import About, {welcome} from './containers/About'

import './App.css';

class App extends React.Component {
  componentDidMount() {
    let last_scroll_position = 0
    let welcomeActive = false
    window.addEventListener('scroll', function(e) {
      last_scroll_position = window.scrollY;
      if(last_scroll_position >=100 && !welcomeActive){
        welcome()
        welcomeActive = true
      }
    })
  }
  render() {
    return (
      <div id="app">
        <div className="app-container" id="intro">
          <Header />  
        </div>
          <About />
          <Portfolio />
      </div>
    )
  }
}

export default App;

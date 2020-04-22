import React from 'react';
import './App.css';
import Intro from './components/Intro'
import About, {welcome} from './components/About'
import Portfolio from './components/Portfolio'



class App extends React.Component {
  componentDidMount() {
    console.log('here')
    //const myElement = document.querySelector("#site").getBoundingClientRect()
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
          <Intro />  
        </div>
          <About />
          <Portfolio />
      </div>
    )
  }
}

export default App;

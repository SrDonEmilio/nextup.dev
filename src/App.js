import React from 'react';
import './App.css';
import Intro, {welcome} from './components/Intro'
import MenuHeader from './components/MenuHeader'


class App extends React.Component {
  componentDidMount() {
    console.log('here')
    const myElement = document.querySelector("#site").getBoundingClientRect()
    console.log(myElement.top)
    let last_scroll_position = 0
    let welcomeActive = false
    window.addEventListener('scroll', function(e) {
      last_scroll_position = window.scrollY;
      if(last_scroll_position >=100 && !welcomeActive){
        welcome()
        console.log(last_scroll_position)
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

      <div className="app-container" id="site">
        <div id="site-gradient">
          <MenuHeader />
        </div>
        <div id="site-container">
          <p id="welcome">Bienvenido. <br /></p>
        </div>
      </div>
    </div>
    )
  }
}

export default App;

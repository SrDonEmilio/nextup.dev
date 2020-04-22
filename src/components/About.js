import React from 'react'
import MenuHeader from './MenuHeader'

let i = 0
let welcomeText = "Hi, I'm @SrDonEmilio "
let speed =50

function typeWriter() {
    if (i < welcomeText.length) {
        if(i === 0){
            setTimeout(typeWriter, 1000);
            i++;
        } else {
          document.querySelector("#welcome").innerHTML += welcomeText.charAt(i-1);
          i++;
          setTimeout(typeWriter, speed);
        }
    }
  }
  
export function welcome(){
typeWriter()
document.getElementById("menu-header").style.opacity = "1"
}

const About = () => (
    <div id="about">
        <div className="app-container" id="site">
            <div id="site-gradient">
                <MenuHeader />
            </div>
            <div id="site-container">
                <div id="info-site" style={{display:"none"}}><h1>NextUp.dev</h1><h2>Software Development</h2></div>
                <p id="welcome"> <br /></p>
            </div>
        </div>
    </div>
)

export default About
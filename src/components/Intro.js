import React, { useState, useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min'
import ArrowDown from './ArrowDown'
import "../css/Intro.css"

var i = 0;
var txt = 'Hola, mi nombre es Emilio Martínez.';
var speed =50;

function typeWriter() {
  if (i < txt.length) {
      if(i === 0){
          setTimeout(typeWriter, 1000);
          i++;
      } else {
        document.querySelector("#welcome").innerHTML += txt.charAt(i-1);
        i++;
        setTimeout(typeWriter, speed);
      }
  }
}

export function welcome(){
  typeWriter()
  document.getElementById("menu-header").style.opacity = "1"
}


const Intro = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        color: 0x3c76ca,
        backgroundColor: 0x171220,
        points: 8.00,
        maxDistance: 25.00,
        spacing: 13.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div id="intro-container" ref={myRef}>
      <div id="intro-content">
        <h1>NextUp.dev</h1>
        <h2>Software Development</h2>
        <ArrowDown extraClass="animation bounce " type="scroll" to="site-container" myFunction={welcome}/>
      </div> 
    </div>
  )
}

export default Intro
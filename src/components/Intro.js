import React, { useState, useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min'
import ArrowDown from './ArrowDown'
import {welcome} from './About'
import logo from '../img/logo.png'
import "../css/Intro.css"

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
        <img id="intro-logo" src={logo} alt="logo"/>
        <ArrowDown extraClass="animation bounce " type="scroll" to="site-container" myFunction={welcome}/>
      </div> 
    </div>
  )
}

export default Intro
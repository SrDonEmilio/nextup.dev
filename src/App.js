import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import NET from 'vanta/dist/vanta.net.min'

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        //el: myRef.current,
        el: "#header",
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
  return <div ref={myRef}>
    <div id="header-content">
      <h1>NextUp.dev</h1>
      <h2>Software Development</h2>
      <div className="button" id="contact"><a href="mailto:contacto@nextup.dev">Contacto</a></div>
    </div>
    
    
  </div>
}

function App() {
  return (
    <div id="hola">
      <Vanta />
    </div>
  );
}

export default App;

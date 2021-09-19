import React from "react";

import "../css/About.css";

import imgProfile from "../img/profile.png";
import iconGitHub from "../img/icons/icon-github.svg";
import iconTwitter from "../img/icons/icon-twitter.svg";
import iconMail from "../img/icons/icon-mail.svg";
import iconLinkeIn from "../img/icons/icon-linkedin.svg";

let i = 0;
let welcomeText = "Hi, I'm @SrDonEmilio ";
let speed = 50;

function typeWriter() {
  if (i < welcomeText.length) {
    if (i === 0) {
      setTimeout(typeWriter, 1000);
      i++;
    } else {
      document.querySelector("#welcome").innerHTML += welcomeText.charAt(i - 1);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

export function welcome() {
  typeWriter();
  document.getElementById("menu-header").style.opacity = "1";
}

const About = () => (
  <div id="about">
    <div id="info-site" style={{ display: "none" }}>
      <h1>NextUp.dev</h1>
      <h2>Software Development</h2>
    </div>
    <p id="welcome">
      {" "}
      <br />
    </p>
    <div id="profile">
      <div id="profile-header">
        <div>
          <img src={imgProfile} alt="profile-img" id="profile-img" />
        </div>
        <div id="name-container">
          <div
            style={{ fontFamily: "Montserrat", color: "white", fontSize: 46 }}
          >
            Emilio Martínez Juárez
          </div>
          <div style={{ fontFamily: "Ubuntu", color: "#666766", fontSize: 38 }}>
            Web Developer
          </div>
          <div style={{ fontFamily: "Ubuntu", color: "#999999", fontSize: 20 }}>
            Technology enthusiast, interested in AI, Big Data, Quantum
            Computing, Neuroscience and Computer Law
          </div>
        </div>
      </div>
      <div id="profile-contact">
        <a href="mailto:emilio@nextup.dev">
          <img className="img-icon" src={iconMail} alt="icon-mail"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/emiliomtzjua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-icon" src={iconLinkeIn} alt="icon-linkedin"></img>
        </a>
        <a
          href="https://github.com/SrDonEmilio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-icon" src={iconGitHub} alt="icon-github"></img>
        </a>
        <a
          href="https://twitter.com/SrDonEmilio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-icon" src={iconTwitter} alt="icon-twitter"></img>
        </a>
      </div>
    </div>
  </div>
);

export default About;

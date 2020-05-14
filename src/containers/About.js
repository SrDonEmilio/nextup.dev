import React from "react";

import "../css/About.css";

import imgProfile from "../img/profile.png";
import imgProfileMobile from "../img/profile-mobile.png";
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
    <img src={imgProfile} alt="profile-img" id="profile-img" />
    <img
      src={imgProfileMobile}
      alt="profile-img-mobile"
      id="profile-img-mobile"
    />
  </div>
  <div id="profile-contact">
    <a href="mailto:emilio@nextup.dev">
      <img className="img-icon" src={iconMail} alt="icon-mail"></img>
    </a>
    <a href="https://www.linkedin.com/in/emiliomtzjua/">
      <img
        className="img-icon"
        src={iconLinkeIn}
        alt="icon-linkedin"
      ></img>
    </a>
    <a href="https://github.com/SrDonEmilio">
      <img
        className="img-icon"
        src={iconGitHub}
        alt="icon-github"
      ></img>
    </a>
    <a href="https://twitter.com/SrDonEmilio">
      <img
        className="img-icon"
        src={iconTwitter}
        alt="icon-twitter"
      ></img>
    </a>
  </div>
</div>
</div>
);

export default About;
import React, { useState, useRef, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";
import ArrowDown from "../components/ArrowDown";
import { welcome } from "../containers/About";
import logo from "../img/logo.png";
import "../css/Intro.css";

const Header = (props) => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el: myRef.current,
					color: 0x3c76ca,
					backgroundColor: 0x171220,
					points: 8.0,
					maxDistance: 25.0,
					spacing: 13.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
	return (
		<div id="intro-container" ref={myRef}>
			<div id="intro-content">
				<img id="intro-logo" src={logo} alt="logo" />
				<ArrowDown
					extraClass="animation bounce "
					type="scroll"
					to="site-container"
					myFunction={welcome}
				/>
			</div>
		</div>
	);
};

export default Header;

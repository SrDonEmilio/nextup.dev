import React from "react";
import "../css/MenuHeader.css";
import { Link as Scroll } from "react-scroll";

const MenuHeader = (props) => (
	<div id="menu-header">
		<div className="menu-item">
			<Scroll
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				About Me
			</Scroll>
		</div>
		<div className="menu-item">
			<Scroll
				activeClass="active"
				to="portfolio"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Portfolio
			</Scroll>
		</div>
	</div>
);

export default MenuHeader;

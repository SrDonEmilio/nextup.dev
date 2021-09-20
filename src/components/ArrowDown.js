import React from "react";
import { Link } from "react-scroll";
import arrowdown from "../img/icons/down-arrow.svg";
import "../css/animations.css";

const ArrowDown = ({ extraClass, type, to, myFunction }) => {
	if (type === "scroll") {
		return (
			<div className={extraClass} id="arrow-down">
				<Link
					onClick={() => myFunction()}
					activeClass="active"
					to={to}
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<img alt="down" width="60px" src={arrowdown} />
				</Link>
			</div>
		);
	}
	return (
		<div className={extraClass} id="arrow-down">
			<a href={to}>
				<img alt="down" width="60px" src={arrowdown} />
			</a>
		</div>
	);
};

export default ArrowDown;

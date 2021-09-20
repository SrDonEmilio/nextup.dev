import React from "react";
import Project from "../components/Project";

import "../css/Portfolio.css";

import myFavorites_preview from "../img/projects-preview/myfavorite_preview.jpg";
import supercomputers_preview from "../img/projects-preview/supercomputers.jpg";
import lewis_preview from "../img/projects-preview/lewis.png";

const Portfolio = () => (
	<div id="portfolio">
		<h3>Projects</h3>
		<Project
			name="nextmyfavorites"
			title="MyFavorites"
			description="Simple application to show my favorite movies and TV shows, getting the information from TheMovieDB API"
			preview={myFavorites_preview}
			link="https://myfavorites.nextup.dev"
		/>
		<Project
			name="supercomputers"
			title="Supercomputers"
			description="Ranking of the most powerful supercomputers in the World"
			preview={supercomputers_preview}
			link="http://supercomputers.nextup.dev"
		/>
		<Project
			name="lewis"
			title="Lewis"
			description="Application of information about geometric structures"
			preview={lewis_preview}
			link="https://lewis.nextup.dev"
		/>
	</div>
);

export default Portfolio;

import React from "react";

const Project = ({ name, title, description, preview, link }) => {
	return (
		<div className="project" id={name}>
			<a href={link}>
				<img className="project-preview" src={preview} alt="name" />
				<h4>{title}</h4>
				<p>{description}</p>
			</a>
		</div>
	);
};

export default Project;

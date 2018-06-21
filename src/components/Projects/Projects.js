import React from "react";
import "./Projects.css";
import projectData from "../../data/projects.json";

const Projects = () => (
	<div>
		{projectData.projects.map( data => (
			<div key={data.name}>
				<img src={data.image} alt={data.name} />
			</div>
		))}	
	</div>
);

export default Projects;

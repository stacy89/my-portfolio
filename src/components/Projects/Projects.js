import React from "react";
import "./Projects.css";
import projectData from "../../data/projects.json";

const Projects = () => (
	<div className="project-container">
		{projectData.projects.map( data => (
			<div key={data.name}>
				<img className="project-img" src={data.image} alt={data.name} />
				<div className="project-content">
					<p className="project-name">{data.name}</p>
					<p>{data.description}</p>
					{data.tempLogin && <p>{data.tempLogin}</p>}
					<p>{data.tech}</p>
				</div>
			</div>
		))}	
	</div>
);

export default Projects;

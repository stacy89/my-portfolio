import React from "react";
import "./Projects.css";
import projectData from "../../data/projects.json";

const Projects = () => (
	<div className="projects-container">
		{projectData.projects.map( data => (
			<div key={data.name} className="project-container">

				<img className="project-img" src={data.image} alt={data.name} />
				<p className="project-name">{data.name}</p>

				<div className="project-content-container">
					<p className="project-content">{data.description}</p>
					{data.tempLogin && <p className="project-content">{data.tempLogin}</p>}
					<p className="project-content">{data.tech}</p>
					
					
				</div>
			</div>
		))}	
	</div>
);

export default Projects;

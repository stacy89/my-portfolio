import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
	<div>
		<ul>
			<li><Link to="/projects">Projects</Link></li>
			<li><Link to="/photography">Photography</Link></li>
			<li><Link to="/aboutme">About Me</Link></li>
		</ul>
	</div>
);

export default NavBar;

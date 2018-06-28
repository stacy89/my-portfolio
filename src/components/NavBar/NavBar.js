import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
	<div>
		<ul>
			<li className="navbar-link"><Link to="/projects">Projects</Link></li>
			<li className="navbar-link"><Link to="/photography">Photography</Link></li>
			<li className="navbar-link"><Link to="/aboutme">About Me</Link></li>
		</ul>
	</div>
);

export default NavBar;

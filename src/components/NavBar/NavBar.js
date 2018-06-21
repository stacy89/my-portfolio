import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
	<div>
		<ul>
			<li><Link className="nav-link" to="/">Projects</Link></li>
			<li><Link className="nav-link" to="/photography">Photography</Link></li>
			<li><Link className="nav-link" to="/aboutme">About Me</Link></li>
		</ul>
	</div>
);

export default NavBar;

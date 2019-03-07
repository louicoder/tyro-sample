import React from 'react';
import classes from './NavBar.css';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div>
			<div className={classes.LandingNav}>
				<ul>
					<li>
						<Link to="/faces">Home</Link>
					</li>
					<li>
						<Link to="/faces">About</Link>
					</li>
					<li>
						<Link to="/faces">Projects</Link>
					</li>
					<li>
						<Link to="/faces">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
